# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

A curated list of skills, tools, and capabilities for AI coding agents.

---

## Table of Contents

- [What Are Agent Skills?](#what-are-agent-skills)
- [Compatible Agents](#compatible-agents)
- [Skill List](#skill-list)
- [Official Tutorials and Guides](#official-tutorials-and-guides)
- [Using Skills](#using-skills)
- [Creating Skills](#creating-skills)
- [Community Resources](#community-resources)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)

---

## What Are Agent Skills?

Think of **Agent Skills** as "how-to guides" for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly, like giving someone a recipe card instead of making them memorize an entire cookbook.

Skills are simple text files (called `SKILL.md`) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.

### How It Works

Skills load in three stages:

1. **Browse** - The AI sees a list of available skills (just names and short descriptions)
2. **Load** - When a skill is needed, the AI reads the full instructions
3. **Use** - The AI follows the instructions and accesses any helper files

### Why This Matters

- **Faster and lighter** - The AI only loads what it needs, when it needs it
- **Works everywhere** - Create a skill once, use it with any compatible AI tool
- **Easy to share** - Skills are just files you can copy, download, or share on GitHub

Skills are **instructions**, not code. The AI reads them like a human would read a guide, then follows the steps.

---

## Compatible Agents

The following platforms have documented support for Agent Skills:

| Agent | Documentation |
|-------|---------------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |

---

## Skill List

### Official Claude Skills (Document Processing)

Claude provides built-in skills for common document types:

| Skill | Description | Source |
|-------|-------------|--------|
| docx | Create, edit, analyze Word documents with tracked changes | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | Spreadsheet manipulation: formulas, charts, data transformations | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | Read, generate, and adjust slides, layouts, templates | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | Extract text, tables, metadata from PDFs | [anthropics/skills](https://github.com/anthropics/skills) |

### Official OpenAI Codex Skills

Codex supports skills at different scopes:

| Skill Scope | Location | Suggested Use |
|-------------|----------|---------------|
| REPO | `$CWD/.codex/skills` | Skills relevant to a working folder (e.g., microservice or module) |
| REPO | `$CWD/../.codex/skills` | Skills for shared areas in parent folders |
| REPO | `$REPO_ROOT/.codex/skills` | Root skills for everyone using the repository |
| USER | `$CODEX_HOME/skills` (default: `~/.codex/skills`) | Personal skills that apply to any repository |
| ADMIN | `/etc/codex/skills` | SDK scripts, automation, and default admin skills |
| SYSTEM | Bundled with Codex | Built-in skills like skill-creator and plan |

### Official HuggingFace Skills

| Skill | Description | Source |
|-------|-------------|--------|
| hf_dataset_creator | Prompts, templates, and scripts for creating structured training datasets | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | Instructions plus utilities for orchestrating evaluation jobs, generating reports, and mapping metrics | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | Comprehensive training skill with guidance, helper scripts, cost estimators | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | Tools for publishing and managing research papers on Hugging Face Hub | [huggingface/skills](https://github.com/huggingface/skills) |

### Community Skills

Community-maintained skills and collections (verify before use):

#### Skill Collections

| Repository | Description |
|------------|-------------|
| [anthropics/skills](https://github.com/anthropics/skills) | Official Anthropic collection (document editing, data analysis) |
| [openai/skills](https://github.com/openai/skills) | Official OpenAI Codex skills catalog |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace skills (compatible with Claude, Codex, Gemini) |
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai collection with CLI installer |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ verified skills for Claude Code and Claude.ai |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | Skills for specialized capabilities |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | Multi-agent collaboration skills |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI integration |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | Skills for DSPy framework |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | Curated Claude Agent Skills collection |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeact agent library skills |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | npm-like CLI for skills (`brew install dmgrok/tap/skills`) - aggregates 177+ skills from 24 providers |
| [gotalab/skillport](https://github.com/gotalab/skillport) | Skills distribution via CLI or MCP |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git, code review, and testing skills |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) |  cryptocurrency, web3 and blockchain skills. |

#### Document Processing

| Skill | Description |
|-------|-------------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | Converts markdown documents into professional EPUB ebook files |

#### Development & Code Tools

| Skill | Description |
|-------|-------------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS development with CDK best practices |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 charts and interactive data visualizations |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | Browser automation for testing web apps |
| [Specrate](https://github.com/rickygao/specrate) | Manage specs and changes in a structured workflow |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | Interact with iOS Simulator for testing |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift Concurrency Migration guide |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.md plugin development |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | Stream Coding methodology |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Apple-authored SwiftUI and platform guidance extracted from Xcode |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | Analyzes prompts and recommends optimal tools, skills, agents, and orchestration patterns |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | Pressure-test spec documents with LLM reasoning before writing code |

#### Data & Analysis

| Skill | Description |
|-------|-------------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Analyze CSV files and generate insights with visualizations |

#### Integration & Automation

| Skill | Description |
|-------|-------------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | Web browser capability for agents |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | Edge-native MCP server patterns for production RAG |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | Manage local CLI AI agents via tmux (start/stop/monitor/assign + cron scheduling) |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | AI agent discovery via Registry Broker - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI automation |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | Send message notifications for agent workflows |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API integration |
| [AgentStore](https://github.com/techgangboss/agentstore) | Open-source plugin marketplace with gasless USDC payments, CLI install, and 3-field publishing API |
| [Transloadit Skills](https://github.com/transloadit/skills) | Media processing: video encoding, image manipulation, OCR, and 86+ Robots |

#### Collaboration & Project Management

| Skill | Description |
|-------|-------------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | Automate git operations and repository interactions |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | Evaluate code implementation plans |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | Detect failing tests and propose fixes |

#### Security & Systems

| Skill | Description |
|-------|-------------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | Digital forensics analysis and investigation |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | Modern encryption alternative to GPG/PGP with post-quantum support, composable authentication, and agent-to-agent communication |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Hunt for threats using Sigma detection rules |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | Secure EVM wallet for agent transfers, swaps, and transactions |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | Polymarket prediction market trading for agents |

#### Advanced & Research

| Skill | Description |
|-------|-------------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | Context engineering techniques |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | System Skill Pattern (skills that remember & improve) |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | Mind cloning with LLM skills |

---

## Official Tutorials and Guides

### Claude and Anthropic
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - Official quick start guide
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) - Step-by-step authoring
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) - Official reference

### GitHub Copilot
- [About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHub documentation
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code integration

### Model Context Protocol (MCP)
- [MCP Official Documentation](https://modelcontextprotocol.io/) - The open standard
- [Build your first MCP Server](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScript guide
- [MCP Server Examples](https://github.com/modelcontextprotocol/servers) - Official server implementations



---

## Using Skills

### Using Skills in Claude.ai
1. Click the skill icon in your chat interface.
2. Add skills from the marketplace or upload custom skills.
3. Claude automatically activates relevant skills based on your task.

### Using Skills in Claude Code
Place the skill in your configuration directory:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

Verify skill metadata:
```bash
head ~/.claude/skills/skill-name/SKILL.md
```

The skill loads automatically and activates when relevant.

### Using Skills in Codex

**Create a skill:**

Use the built-in `$skill-creator` skill in Codex. Describe what you want your skill to do, and Codex will bootstrap it for you.

If you install `$create-plan` (experimental) with `$skill-installer create-plan`, Codex will create a plan before writing files.

You can also create a skill manually by creating a folder with a `SKILL.md` file:

```markdown
---
name: skill-name
description: Description that helps Codex select the skill
metadata:
  short-description: Optional user-facing description
---

Skill instructions for the Codex agent to follow when using this skill.
```

**Install new skills:**

Download skills from GitHub using the `$skill-installer` skill:

```bash
$skill-installer linear
```

You can also prompt the installer to download skills from other repositories. After installing a skill, restart Codex to pick up new skills.

### Using Skills in VS Code

Skills are stored in directories with a `SKILL.md` file. VS Code supports skills in two locations:

- `.github/skills/` - Recommended location for all new skills
- `.claude/skills/` - Legacy location, also supported

**Create a skill:**

1. Create a `.github/skills` directory in your workspace
2. Create a subdirectory for your skill (e.g., `.github/skills/webapp-testing`)
3. Create a `SKILL.md` file with the following structure:

```markdown
---
name: skill-name
description: Description of what the skill does and when to use it
---

# Skill Instructions

Your detailed instructions, guidelines, and examples go here...
```

4. Optionally, add scripts, examples, or other resources to your skill's directory

### Using Skills in Copilot CLI

**Adding skills to your repository:**

1. Create a `.github/skills` directory (skills in `.claude/skills` are also supported)
2. Create a subdirectory for your skill (e.g., `.github/skills/webapp-testing`)
3. Create a `SKILL.md` file with your skill's instructions

**SKILL.md structure:**

- `name` (required): A unique lowercase identifier using hyphens for spaces
- `description` (required): What the skill does and when Copilot should use it
- `license` (optional): License that applies to this skill
- Markdown body with instructions, examples, and guidelines

**Example SKILL.md:**

```markdown
---
name: github-actions-failure-debugging
description: Guide for debugging failing GitHub Actions workflows.
---

To debug failing GitHub Actions workflows:

1. Use `list_workflow_runs` to look up recent workflow runs
2. Use `summarize_job_log_failures` to get an AI summary of failed jobs
3. Use `get_job_logs` for full detailed failure logs if needed
4. Try to reproduce the failure in your environment
5. Fix the failing build
```

When performing tasks, Copilot decides when to use skills based on your prompt and the skill's description. The `SKILL.md` file is injected into the agent's context.

### Using MCP Servers (Claude Desktop)

Edit your configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Example Configuration:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop"
      ]
    }
  }
}
```

---

## Creating Skills

Skills are instruction bundles that tell the agent how to perform specific tasks. They are not executable code by default.

### Skill Structure

```
skill-name/
├── SKILL.md          # Required: Instructions and metadata
├── scripts/          # Optional: Helper scripts
├── templates/        # Optional: Document templates
└── resources/        # Optional: Reference files
```

### Basic SKILL.md Template

```markdown
---
name: my-skill-name
description: A clear description of what this skill does.
---

# My Skill Name

Detailed description of the skill's purpose.

## When to Use This Skill

- Use case 1
- Use case 2

## Instructions

[Detailed instructions for the agent on how to execute this skill]

## Examples

[Real-world examples]
```

### MCP Server Example (Python)

For skills that need to connect to external data sources, you can create an MCP server:

```bash
pip install fastmcp
```

server.py:
```python
from fastmcp import FastMCP

mcp = FastMCP("My Server")

@mcp.tool()
def hello_world(name: str = "World") -> str:
    """A simple tool that says hello."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    mcp.run()
```

---

## Community Resources

### LangChain Tools
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - Wrapper around SerpApi
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - Fetch summaries from Wikipedia
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - Execute Python code
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - How to use the `@tool` decorator

---

## Frequently Asked Questions

### What are Agent Skills?

Agent Skills are instruction files that teach AI assistants how to do specific tasks. Think of them as "how-to guides" that the AI reads and follows. They only load when needed, so the AI stays fast and focused.

### How are Agent Skills different from fine-tuning?

Fine-tuning permanently changes how an AI thinks (expensive and hard to update). Agent Skills are just instruction files, you can update, swap, or share them anytime without touching the AI itself.

### What's the difference between Agent Skills and MCP?

They do different things and work great together:
- **Agent Skills** = teach the AI *how* to do something (workflows, best practices)
- **MCP** = help the AI *access* things (APIs, databases, external tools)

### Which AI tools support Agent Skills?

Currently supported: **Claude** (Claude.ai and Claude Code), **GitHub Copilot**, **VS Code**, and others. The list is growing as more tools adopt the standard.

### Do Agent Skills run code?

No. Skills are just text instructions, the AI reads and follows them like a recipe. If you need to run actual code, you'd use something like MCP servers alongside skills.

### How do I create my first Agent Skill?

1. Create a `SKILL.md` file with a name and description at the top
2. Write clear, step-by-step instructions in the file
3. Put it in your `.github/skills/` or `.claude/skills/` folder
4. Test it out!

Full guide: [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## Contributing

This repository follows the Agent Skills open development model. Contributions are welcome from the broader ecosystem. When contributing:

- Follow the skill template structure
- Provide clear, actionable instructions
- Include working examples where appropriate
- Document trade-offs and potential issues
- Keep SKILL.md under 500 lines for optimal performance
- Verify that skills actually exist before adding them

---

## License

MIT License - see LICENSE file for details.

---

## References

The principles in these skills are derived from research and production experience at leading AI labs and framework developers.

- [Anthropic: Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: Creating custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
