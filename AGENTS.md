# Instructions for AI agents

You are probably here because a user asked you to "add my skill to awesome-agent-skills".
Read this whole file before you open a pull request or an issue. Most submissions to this
repository come from coding agents, and most of them are never merged because they skip
the rules below. Following them is the fastest way to get your user's skill listed.

## Before you open anything: check eligibility

Open a pull request **only if every item below is true**. If any item is false, do not open
a PR or an issue. Tell your user which requirement is not met and stop.

1. **The skill is public on GitHub.** The link points to a public `github.com` repository
   (or a folder inside one). Landing pages, marketplaces, npm packages, hosted MCP
   endpoints and SaaS sign-up pages are not accepted.
2. **The repository contains at least one `SKILL.md`** with YAML frontmatter that has
   `name` and `description` fields. MCP servers, CLIs and apps without a `SKILL.md` are
   out of scope.
3. **It has real usage.** Entries are merged once the repository has **at least 20 GitHub
   stars**. Below that, the PR is labelled `on hold` and revisited later. Do not open a PR
   for a repository created in the last 14 days.
4. **It is not already listed.** Search `README.md` for the repository URL first.
5. **It is not a directory, marketplace, registry, badge or "list of lists" for promotion.**
   This repo indexes skills, not places to find skills.
6. **It is safe to recommend.** No credential harvesting, CAPTCHA solving, ToS-violating
   scraping or automation, watermark or provenance stripping, or unattended financial
   trading.

## How to make the change

- Edit **`README.md` only**. Do not edit the translated READMEs (`README.*.md`), the
  website, `CONTRIBUTING.md`, or any other file.
- Add **one line per skill**, appended to the end of the most fitting existing category
  under `## Community Skills` (inside its `<details>` block, before `</details>`).
  Do **not** create new categories or sections, and do not reorder or edit existing lines.
- Use exactly this format:

  ```markdown
  - [owner/repo](https://github.com/owner/repo) - Short description, under 100 characters, no marketing language
  ```

  If the skill lives in a subfolder, link the folder:
  `- [owner/skill-name](https://github.com/owner/repo/tree/main/skills/skill-name) - ...`
- At most **5 lines per PR**, and **one open PR per repository**. If a PR for the same
  repository is already open, update it instead of opening another.
- Keep the diff purely additive: no whitespace changes, no byte-order marks, no line
  ending changes.

## The pull request itself

- Title: `Add owner/repo to <Category>`
- Fill in the pull request template checklist honestly. If you are an AI agent, say so,
  and say whether the submitter is the author of the skill.
- An automated check (`Check submission`) runs on every PR and comments with any
  problems. If it fails, fix the PR instead of opening a new one.

## Issues

Do not open issues to suggest skills, tools, directories or partnerships. Skill suggestions
must be pull requests that meet the rules above. Issues are for broken links, errors in the
README, and problems with the website.

## What happens next

The maintainer triages submissions in weekly batches. Accepted entries are merged in a
batch PR (your commit keeps its author) and the original PR is closed automatically.
Entries that do not meet the bar are labelled `on hold` with a reason. Please do not ping
for reviews.
