# Contributing to Agent Skill Index 🐍🍎

First off, thank you for considering contributing to the **Agent Skill Index**! It's people like you who make the AI ecosystem more capable, reliable, and accessible for everyone.

> [!TIP]
> This project is more than just a list of links. It is a **living standard** for how AI agents should be taught new capabilities. Your contributions help define that standard.

---

## 🛠️ How Can You Contribute?

We welcome contributions in many forms. Choose the path that fits your expertise:

### 1. Add a New Skill (Most Common)
If you've built or found a high-quality AI agent skill, please share it!

> [!IMPORTANT]
> The full submission rules are in **[AGENTS.md](AGENTS.md)**. They apply to people and AI agents alike.
> In short: a public GitHub repo with a `SKILL.md`, at least 20 stars, older than 14 days, not already listed,
> one line appended to an existing category in `README.md`, nothing else changed.
> An automated check comments on every PR; fix what it reports in the same PR.

- **How-to**:
  1. Fork the repository.
  2. Append one line per skill to the end of the best-fitting category under **Community Skills** in `README.md`:
     `- [owner/repo](https://github.com/owner/repo) - Description under 100 characters`
  3. Open a Pull Request and fill in the checklist.
- Skill suggestions opened as **issues** are not reviewed. Open a PR instead.
- Directories, marketplaces, badges, MCP servers without a `SKILL.md`, and paid-API landing pages are not listed.

### 2. Improve Tutorials & Guides
Help us make the "Agentic Way" easier to understand.
- Fix typos or technical inaccuracies.
*   Add real-world examples to existing skills.
- Translate documentation into new languages (we currently support 6!).

### 3. Core Development
Improve the **Agent Skill Index** website or CLI tool.
- **Stack**: Next.js, Tailwind CSS, Framer Motion, TypeScript.
- **Issues**: Check the [Issues](https://github.com/heilcheng/awesome-agent-skills/issues) tab for "good first issue" labels.

---

## 📋 The SKILL.md Standard

Every skill in the index should be self-contained in a `SKILL.md` file. A perfect skill includes:

| Section | Purpose |
| :--- | :--- |
| **Title** | Clear, unique name of the capability. |
| **Description** | What problem does this solve for the user? |
| **Instructions** | Step-by-step logic for the AI to follow. |
| **Context** | What files/folders should the AI look at? |
| **Examples** | 2-3 concrete "Before/After" or "Input/Output" cases. |

---

## 🚀 The PR Process

1. **Fork & Clone**: Create your feature branch.
2. **Commit**: Use descriptive commit messages (e.g., `feat: add documentation-helper skill`).
3. **Verify**: For website changes, run `npm run build` in the `website/` directory to ensure no regressions.
4. **Submit**: Open your PR with a brief description of what you've changed.
5. **Wait for triage**: Submissions are reviewed in weekly batches. Accepted entries are merged in a batch PR that keeps you as commit author; entries below the bar are labelled `on hold` with a reason.

---

## ❤️ Sponsorship & Partnerships

Want to support the project or feature your AI platform?
- **Contact**: Reach out to **Hailey Cheng (Cheng Hei Lam)** at [haileycheng@proton.me](mailto:haileycheng@proton.me).
- **LinkedIn**: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- **X / Twitter**: [@haileyhmt](https://x.com/haileyhmt)

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
