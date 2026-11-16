"""Check a skill-submission PR against the rules in AGENTS.md.

Reads the PR through the GitHub API only; it never checks out or runs PR code.
Writes a markdown report to $REPORT_PATH and prints "result=<pass|warn|fail>" to $GITHUB_OUTPUT.
"""
import base64
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request

API = "https://api.github.com"
TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = os.environ["REPO"]
PR = os.environ["PR_NUMBER"]
MIN_STARS = 20
MIN_AGE_DAYS = 14
MAX_LINES = 5
MAX_DESC = 100
RULES = f"https://github.com/{REPO}/blob/main/AGENTS.md"

ENTRY = re.compile(
    r"^- \[(?P<name>[^\]]+)\]\((?P<url>https://github\.com/(?P<owner>[\w.-]+)/(?P<repo>[\w.-]+)(?P<path>/[^)\s]*)?)\) - (?P<desc>\S.*)$"
)
STRUCTURAL = re.compile(r"^\s*(#|<details|</details|<summary|\|)")


def get(path, raw=False):
    req = urllib.request.Request(API + path, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Accept": "application/vnd.github.v3.diff" if raw else "application/vnd.github+json",
        "User-Agent": "check-submission",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = r.read().decode()
            return body if raw else json.loads(body)
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        raise


def main():
    errors, warnings = [], []
    files = get(f"/repos/{REPO}/pulls/{PR}/files?per_page=100") or []
    names = [f["filename"] for f in files]
    if names != ["README.md"]:
        other = [n for n in names if n != "README.md"]
        errors.append("Only `README.md` may be changed. This PR also changes: " + ", ".join(f"`{n}`" for n in other))

    readme = next((f for f in files if f["filename"] == "README.md"), None)
    patch = (readme or {}).get("patch", "")
    added = [l[1:] for l in patch.splitlines() if l.startswith("+") and not l.startswith("+++")]
    removed = [l[1:] for l in patch.splitlines() if l.startswith("-") and not l.startswith("---")]
    added = [l for l in added if l.strip()]

    if removed:
        errors.append(f"The change must be additive only, but it removes or rewrites {len(removed)} existing line(s).")
    if not added and readme:
        errors.append("No entries were added to `README.md`.")
    if len(added) > MAX_LINES:
        errors.append(f"At most {MAX_LINES} lines per PR; this PR adds {len(added)}.")
    if any("﻿" in l for l in added):
        errors.append("The diff contains a byte-order mark (BOM). Save the file as UTF-8 without BOM.")

    base = get(f"/repos/{REPO}/contents/README.md")
    base_readme = base64.b64decode(base["content"]).decode().lower() if base else ""

    checked = set()
    # A bulk rewrite already fails above; skip per-entry API lookups for it.
    for line in ([] if len(added) > 20 else added):
        if STRUCTURAL.match(line):
            errors.append(f"Do not add headings, tables or new `<details>` sections. Append one line to an existing category instead (official vendor sections are added by the maintainer): `{line[:80]}`")
            continue
        m = ENTRY.match(line)
        if not m:
            errors.append(f"Line does not match `- [owner/repo](https://github.com/owner/repo) - Description`: `{line[:100]}`")
            continue
        owner, repo = m["owner"], re.sub(r"\.git$", "", m["repo"])
        if len(m["desc"]) > MAX_DESC:
            warnings.append(f"Description for `{owner}/{repo}` is {len(m['desc'])} characters; keep it under {MAX_DESC}.")
        if f"github.com/{owner}/{repo}".lower() in base_readme:
            errors.append(f"`{owner}/{repo}` is already listed in `README.md`.")
        if (owner, repo) in checked:
            continue
        checked.add((owner, repo))
        info = get(f"/repos/{owner}/{repo}")
        if not info:
            errors.append(f"`{owner}/{repo}` does not exist or is private.")
            continue
        if info.get("archived"):
            errors.append(f"`{owner}/{repo}` is archived.")
        tree = get(f"/repos/{info['full_name']}/git/trees/{info['default_branch']}?recursive=1") or {}
        skills = [t["path"] for t in tree.get("tree", []) if t["path"].lower().endswith("skill.md")]
        if not skills:
            errors.append(f"`{owner}/{repo}` contains no `SKILL.md`. Only Agent Skills are listed here.")
        stars = info.get("stargazers_count", 0)
        if stars < MIN_STARS:
            warnings.append(f"`{owner}/{repo}` has {stars} stars. Entries are merged once a repository has at least {MIN_STARS}; until then this PR stays on hold.")
        created = datetime.datetime.fromisoformat(info["created_at"].replace("Z", "+00:00"))
        age = (datetime.datetime.now(datetime.timezone.utc) - created).days
        if age < MIN_AGE_DAYS:
            warnings.append(f"`{owner}/{repo}` was created {age} days ago. Repositories must be at least {MIN_AGE_DAYS} days old.")

    if len(errors) > 8:
        errors = errors[:8] + [f"...and {len(errors) - 8} more problems."]
    result = "fail" if errors else "warn" if warnings else "pass"
    out = ["<!-- check-submission -->", "### Submission check", ""]
    if result == "pass":
        out.append(f"✅ This PR meets the automated requirements in [AGENTS.md]({RULES}). It will be reviewed in the next weekly triage.")
    else:
        if errors:
            out += ["❌ **Must fix** (the PR will not be reviewed until these are fixed; push to this PR, do not open a new one):", ""]
            out += [f"- {e}" for e in errors] + [""]
        if warnings:
            out += ["⚠️ **Heads-up:**", ""] + [f"- {w}" for w in warnings] + [""]
        out.append(f"See [AGENTS.md]({RULES}) for the full rules. If you are an AI agent, relay this comment to your user.")
    with open(os.environ["REPORT_PATH"], "w") as f:
        f.write("\n".join(out) + "\n")
    with open(os.environ.get("GITHUB_OUTPUT", os.devnull), "a") as f:
        f.write(f"result={result}\n")
    print(result)
    for line in errors + warnings:
        print(" -", line)


if __name__ == "__main__":
    sys.exit(main())
