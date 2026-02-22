# Contributing to Awesome Agent Skills

Thank you for your interest in contributing! This document provides guidelines to ensure consistency and quality across the repository.

## Adding a New Skill or Collection

### Entry Format

All entries must be added as **table rows** in the correct section of `README.md`. Use this format:

```markdown
| [Skill Name](https://github.com/owner/repo) | Short, neutral description of what the skill does |
```

### Quality Checklist

Before submitting a PR:

- [ ] The repository or link is **public and accessible** (no 404s)
- [ ] The entry is placed in the **correct section** (Skill Collections, Dev Tools, Integration, etc.)
- [ ] The description is **one line**, neutral, and factual — no promotional language
- [ ] The entry uses **table row format** (`| link | description |`), not bullet points
- [ ] You have verified the skill/tool **actually works**
- [ ] No duplicate entries exist in the list

### Section Ordering

Entries within each section are organized in the order they were added. Add new entries at the **end** of the relevant section table.

The main sections are:

1. **Skill Collections** — repositories containing multiple skills
2. **Document Processing** — document conversion and manipulation
3. **Development & Code Tools** — coding, testing, and dev workflows
4. **Data & Analysis** — data processing and analytics
5. **Integration & Automation** — external service connections and automation
6. **Collaboration & Project Management** — git workflows and team tools
7. **Security & Systems** — security analysis and system management
8. **Advanced & Research** — experimental and research-oriented skills

## Translation Guidelines

This repository is maintained in 6 languages:

| File | Language |
|------|----------|
| `README.md` | English (source of truth) |
| `README.es.md` | Spanish |
| `README.ja.md` | Japanese |
| `README.ko.md` | Korean |
| `README.zh-CN.md` | Simplified Chinese |
| `README.zh-TW.md` | Traditional Chinese |

When making changes:

- **English-only PRs are fine** — maintainers will sync translations
- If you update a translated README, ensure the change matches the English version
- **Do not translate**: repository names, URLs, code blocks, CLI commands, or technical identifiers
- **Do translate**: section headers, descriptions, and explanatory text
- Keep the same structure and section ordering across all files

## PR Guidelines

- **One logical change per PR** — don't bundle unrelated additions
- **Title format**: `Add [skill-name] to [section]` or `docs: [description]`
- Ensure your PR doesn't introduce merge conflicts with `main`
- If adding to Skill Collections, only `README.md` needs to be updated (translations will be synced)

## What Will Get Your PR Closed

- Linked repository returns a **404** (deleted or private)
- Entry placed in the **wrong section** (e.g., in Table of Contents or "How It Works")
- **Promotional or marketing language** in the description
- **Duplicate** of an existing entry
- **Broken formatting** (not a valid table row)

## Questions?

Open an issue if you're unsure where an entry belongs or need help with formatting.
