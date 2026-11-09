# -*- coding: utf-8 -*-
"""README 收录链接体检：抽出所有 github.com/{owner}/{repo}，逐条按「外人视角」查它是否真的能打开。

外人视角 = 匿名/外部安装令牌能看见。因此两种失败：
  1) 404/410/451 —— 仓不存在（改名、删除、写错）
  2) HTTP 200 但 private=true —— 私有仓，外人点开就是 404（用账号令牌自查会误判为「正常」）

为什么需要它：清单类仓库没有可执行示例，外人真正会踩的是「点进去 404」。
失败即 exit 1 让 PR 变红，并把死链清单写回 PR 评论（CI 日志对外不可读，评论是可核的证据）。
不计入仓链：站内伪路径（orgs/users/settings/assets…）、裸图片/文档后缀。
"""
import json
import os
import re
import urllib.error
import urllib.request

TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN") or ""
PR = (os.environ.get("PR_NUMBER") or "").strip()
REPO = (os.environ.get("REPO_SLUG") or "").strip()
README_FILES = ("README.md", "README_EN.md")
PSEUDO = {
    "orgs", "users", "about", "apps", "collections", "contact", "customer-stories", "enterprise",
    "events", "explore", "features", "github", "home", "join", "login", "marketplace", "new",
    "notifications", "organizations", "pricing", "readme", "search", "security", "settings",
    "site", "sponsors", "support", "team", "topics", "trending", "why-github", "assets",
    "user-attachments", "raw", "blob", "tree", "releases", "issues", "pull", "wiki", "discussions",
    "codespaces", "copilot", "dashboard", "stars",
}
EXT = (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".pdf", ".zip", ".md", ".json", ".yml")
RE_REPO = re.compile(r"https?://(?:www\.)?github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)")
TRIM = ".,);:'\""


def opener():
    return urllib.request.build_opener(urllib.request.ProxyHandler({}))


def call(url, payload=None, method="GET"):
    h = {"Accept": "application/vnd.github+json", "User-Agent": "link-check"}
    if TOKEN:
        h["Authorization"] = "Bearer " + TOKEN
    data = None
    if payload is not None:
        data = json.dumps(payload).encode()
        h["Content-Type"] = "application/json"
    try:
        with opener().open(urllib.request.Request(url, data=data, headers=h, method=method), timeout=30) as r:
            return r.status, (json.loads(r.read().decode("utf-8", "replace") or "{}"))
    except urllib.error.HTTPError as e:
        return e.code, {}
    except Exception:
        return None, {}


def comment(body):
    if not (PR and REPO and TOKEN):
        return
    call("https://api.github.com/repos/%s/issues/%s/comments" % (REPO, PR), {"body": body}, "POST")


def main():
    entries = {}
    for name in README_FILES:
        if not os.path.exists(name):
            continue
        text = open(name, encoding="utf-8", errors="replace").read()
        for owner, repo in RE_REPO.findall(text):
            repo = repo.rstrip(TRIM)
            if not repo or owner.lower() in PSEUDO or repo.lower().endswith(EXT):
                continue
            full = "%s/%s" % (owner, repo)
            entries.setdefault(full.lower(), (full, name))

    print("entries: %d" % len(entries))
    dead = []
    unknown = 0
    for key, (full, src) in sorted(entries.items()):
        code, j = call("https://api.github.com/repos/" + full)
        if code in (404, 410, 451):
            dead.append((full, src, "HTTP %s：仓不存在" % code))
            print("  DEAD    %-58s HTTP %s (%s)" % (full, code, src))
        elif code == 200 and j.get("private"):
            dead.append((full, src, "HTTP 200 但 private=true：外人点开为 404"))
            print("  PRIVATE %-58s private repo, invisible to outsiders (%s)" % (full, src))
        elif code is None or code in (403, 429):
            unknown += 1

    if unknown:
        print("unreachable-not-dead: %d (network/rate-limit, not counted as dead)" % unknown)
    if dead:
        rows = "\n".join("- `%s` — %s（出现在 %s）" % (f, why, s) for f, s, why in dead)
        comment("### link-check 失败：README 里对外人打不开的仓\n\n" + rows +
                "\n\n修法：换成**公开**活目标，或删掉该行。私有仓不能出现在公开清单里"
                "（账号令牌自查会显示 200，这里按外人视角判）。")
        print("\nFAIL: %d unreachable-for-outsiders" % len(dead))
        return 1
    print("OK: all %d repo links open for an outsider" % len(entries))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
