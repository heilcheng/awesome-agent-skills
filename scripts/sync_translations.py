"""Sync the skill directory from README.md into every translated README.

README.md (English) is the source of truth for which skills are listed.
Each README.<lang>.md has marker blocks that this script regenerates:

    <!-- sync:agents:start --> ... <!-- sync:agents:end -->        compatible agents table
    <!-- sync:directory:start --> ... <!-- sync:directory:end -->  official + community skills
    <!-- sync:related:start --> ... <!-- sync:related:end -->      related awesome lists

Everything outside the markers is hand-translated prose and is left untouched.
Headings are translated with scripts/i18n.json. Entry descriptions stay in English
unless a translated description already exists for that entry name in the target
file, in which case it is kept, so translators' work survives every sync.

Usage: python3 scripts/sync_translations.py [--check]
  --check  exit 1 if any translated README is out of date (for CI)
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
I18N = json.loads((ROOT / "scripts" / "i18n.json").read_text(encoding="utf-8"))
ENTRY = re.compile(r"^(\s*- \[(?P<name>[^\]]+)\]\((?P<url>[^)\s]+)\))(?P<sep>\s+[-–—]\s+)(?P<desc>.+)$")


def section(text, start, end):
    i = text.index(start)
    j = text.index(end, i)
    return text[i:j].rstrip() + "\n"


def block(text, name):
    m = re.search(rf"<!-- sync:{name}:start -->\n(.*?)<!-- sync:{name}:end -->", text, re.S)
    return m


def translate_heading(title, t):
    if title in t["headings"]:
        return t["headings"][title]
    for pattern, out in t["patterns"].items():
        m = re.fullmatch(pattern, title)
        if m:
            return out.format(*m.groups())
    return title


def translate_line(line, t, known):
    m = re.match(r"^(#{2,4}) (.+)$", line)
    if m:
        return f"{m[1]} {translate_heading(m[2], t)}"
    m = re.match(r"^<summary><strong>(.+)</strong></summary>$", line)
    if m:
        return f"<summary><strong>{translate_heading(m[1], t)}</strong></summary>"
    m = re.match(r"^Install (?:from|via) (\[.+\]\(.+\))\.$", line)
    if m:
        return t["install_from"].format(m[1])
    m = ENTRY.match(line)
    if m and m["name"] in known:
        return f"{m.group(1)}{m['sep']}{known[m['name']]}"
    return t["prose"].get(line, line)


def known_descriptions(text):
    """Translated descriptions already present in a translated README, keyed by entry name."""
    out = {}
    for line in text.splitlines():
        e = ENTRY.match(line)
        if e and re.search(r"[^\x00-\x7F]", e["desc"]):
            out[e["name"]] = e["desc"]
    return out


def build(lang, en, current):
    t = I18N[lang]
    known = known_descriptions(current)
    directory = section(en, "## Official Skill Directories", "## Skill Quality Standards")
    directory = directory.replace("\n## Community Skills\n", "\n## Community Skills\n\n" + t["note"] + "\n", 1)
    directory = "\n".join(translate_line(l, t, known) for l in directory.splitlines()).rstrip("\n -") + "\n"

    agents = section(en, "| Agent |", "\n---")
    rows = agents.strip().splitlines()
    rows[0] = t["agents_header"]
    agents = "\n".join(rows) + "\n"

    related = section(en, "## Related Awesome Lists", "\n---")
    related = "\n".join(translate_line(l, t, known) for l in related.splitlines() if l.startswith("- ")) + "\n"

    out = current
    for name, body in (("agents", agents), ("directory", directory), ("related", related)):
        if not block(out, name):
            raise SystemExit(f"README.{lang}.md is missing <!-- sync:{name}:start/end --> markers")
        out = re.sub(rf"(<!-- sync:{name}:start -->\n).*?(<!-- sync:{name}:end -->)",
                     lambda m: m.group(1) + body + m.group(2), out, flags=re.S)
    return out


def main():
    check = "--check" in sys.argv
    en = (ROOT / "README.md").read_text(encoding="utf-8")
    stale = []
    for lang in I18N:
        path = ROOT / f"README.{lang}.md"
        current = path.read_text(encoding="utf-8")
        new = build(lang, en, current)
        if new != current:
            stale.append(path.name)
            if not check:
                path.write_text(new, encoding="utf-8")
    if check and stale:
        print("Out of date:", ", ".join(stale), "- run python3 scripts/sync_translations.py")
        sys.exit(1)
    print("updated:" if stale and not check else "up to date", ", ".join(stale))


if __name__ == "__main__":
    main()
