# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

精选的 AI 程序编码代理技能、工具和功能列表。

---

## 目录

- [什么是 Agent Skills？](#什么是-agent-skills)
- [兼容的代理](#兼容的代理)
- [技能列表](#技能列表)
- [官方教程和指南](#官方教程和指南)
- [使用技能](#使用技能)
- [创建技能](#创建技能)
- [社区资源](#社区资源)
- [常见问题](#常见问题)
- [贡献](#贡献)
- [许可](#许可)
- [参考资料](#参考资料)

---

## 什么是 Agent Skills？

将 **Agent Skills** 想象成 AI 助理的「使用指南」。AI 不需要预先知道所有事情，技能让它可以随时学习新能力，就像给人一张食谱卡，而不是让他们背诵整本食谱书。

技能是简单的文本文件（称为 `SKILL.md`），教导 AI 如何执行特定任务。当你请求 AI 做某件事时，它会找到正确的技能，阅读指令，然后开始工作。

### 运作方式

技能分三个阶段加载：

1. **浏览** - AI 看到可用技能列表（只有名称和简短描述）
2. **加载** - 当需要技能时，AI 会阅读完整指令
3. **使用** - AI 遵循指令并访问任何辅助文件

### 为什么这很重要

- **更快更轻量** - AI 只在需要时加载所需内容
- **跨平台使用** - 创建一次技能，在任何兼容的 AI 工具中使用
- **易于分享** - 技能只是可以复制、下载或在 GitHub 分享的文件

技能是**指令**，不是代码。AI 像人阅读指南一样阅读它们，然后遵循步骤。

---

## 兼容的代理

以下平台有记录的 Agent Skills 支持：

| 代理 | 文档 |
|------|------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |

---

## 技能列表

### 官方 Claude 技能（文档处理）

Claude 提供常用文档类型的内置技能：

| 技能 | 描述 | 来源 |
|------|------|------|
| docx | 创建、编辑、分析带有跟踪更改的 Word 文档 | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | 电子表格操作：公式、图表、数据转换 | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | 读取、生成和调整幻灯片、布局、模板 | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | 从 PDF 提取文本、表格、元数据 | [anthropics/skills](https://github.com/anthropics/skills) |

### 官方 OpenAI Codex 技能

Codex 支持不同范围的技能：

| 技能范围 | 位置 | 建议用途 |
|----------|------|----------|
| REPO | `$CWD/.codex/skills` | 与工作文件夹相关的技能（例如微服务或模块）|
| REPO | `$CWD/../.codex/skills` | 父文件夹中共享区域的技能 |
| REPO | `$REPO_ROOT/.codex/skills` | 仓库中所有人使用的根技能 |
| USER | `$CODEX_HOME/skills`（默认：`~/.codex/skills`）| 适用于任何仓库的个人技能 |
| ADMIN | `/etc/codex/skills` | SDK 脚本、自动化和默认管理技能 |
| SYSTEM | 与 Codex 捆绑 | 内置技能如 skill-creator 和 plan |

### 官方 HuggingFace 技能

| 技能 | 描述 | 来源 |
|------|------|------|
| hf_dataset_creator | 创建结构化训练数据集的提示、模板和脚本 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | 协调评估作业、生成报告和映射指标的指令和工具 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | 包含指导、辅助脚本、成本估算器的完整训练技能 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | 在 Hugging Face Hub 上发布和管理研究论文的工具 | [huggingface/skills](https://github.com/huggingface/skills) |

### 社区技能

社区维护的技能和集合（使用前请验证）：

#### 技能集合

| 仓库 | 描述 |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | 官方 Anthropic 集合（文档编辑、数据分析）|
| [openai/skills](https://github.com/openai/skills) | 官方 OpenAI Codex 技能目录 |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace 技能（兼容 Claude、Codex、Gemini）|
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai 集合，附 CLI 安装程序 |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ 经过验证的 Claude Code 和 Claude.ai 技能 |

#### 文档处理

| 技能 | 描述 |
|------|------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | 将 markdown 文档转换为专业 EPUB 电子书 |

#### 开发和代码工具

| 技能 | 描述 |
|------|------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS 开发与 CDK 最佳实践 |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 图表和交互式数据可视化 |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | 测试网页应用的浏览器自动化 |

#### 数据和分析

| 技能 | 描述 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | 分析 CSV 文件并生成可视化洞察 |

#### 集成和自动化

| 技能 | 描述 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | 代理的网页浏览器功能 |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI 自动化 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | 为代理工作流发送消息通知 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API 集成 |

#### 安全和系统

| 技能 | 描述 |
|------|------|
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | 使用 Sigma 检测规则进行威胁狩猎 |

---

## 官方教程和指南

### Claude 和 Anthropic
- [在 Claude 中使用技能](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - 官方快速入门指南
- [如何创建自定义技能](https://support.claude.com/en/articles/12512198-creating-custom-skills) - 逐步编写指南
- [Claude Code 技能文档](https://code.claude.com/docs/en/skills) - 官方参考

### GitHub Copilot
- [关于 Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHub 文档
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code 集成

### Model Context Protocol (MCP)
- [MCP 官方文档](https://modelcontextprotocol.io/) - 开放标准
- [创建你的第一个 MCP 服务器](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScript 指南
- [MCP 服务器示例](https://github.com/modelcontextprotocol/servers) - 官方服务器实现

---

## 使用技能

### 在 Claude.ai 中使用技能
1. 点击聊天界面中的技能图标
2. 从市场添加技能或上传自定义技能
3. Claude 会根据你的任务自动激活相关技能

### 在 Claude Code 中使用技能
将技能放在配置目录中：

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

技能会自动加载并在相关时激活。

### 在 VS Code 中使用技能

技能存储在包含 `SKILL.md` 文件的目录中。VS Code 支持两个位置：

- `.github/skills/` - 所有新技能的推荐位置
- `.claude/skills/` - 传统位置，也支持

**创建技能：**

1. 在工作区创建 `.github/skills` 目录
2. 为你的技能创建子目录（例如 `.github/skills/webapp-testing`）
3. 创建包含以下结构的 `SKILL.md` 文件：

```markdown
---
name: skill-name
description: 技能的功能描述和使用时机
---

# 技能指令

你的详细指令、指南和示例...
```

---

## 创建技能

技能是告诉代理如何执行特定任务的指令包。默认情况下它们不是可执行代码。

### 技能结构

```
skill-name/
├── SKILL.md          # 必需：指令和元数据
├── scripts/          # 可选：辅助脚本
├── templates/        # 可选：文档模板
└── resources/        # 可选：参考文件
```

### 基本 SKILL.md 模板

```markdown
---
name: my-skill-name
description: 清楚描述此技能的功能。
---

# 我的技能名称

技能目的的详细描述。

## 何时使用此技能

- 使用案例 1
- 使用案例 2

## 指令

[代理执行此技能的详细指令]

## 示例

[实际示例]
```

---

## 常见问题

### 什么是 Agent Skills？

Agent Skills 是教导 AI 助理如何执行特定任务的指令文件。将它们视为 AI 阅读和遵循的「使用指南」。它们只在需要时加载，所以 AI 保持快速和专注。

### Agent Skills 与微调有何不同？

微调永久改变 AI 的思考方式（昂贵且难以更新）。Agent Skills 只是指令文件，你可以随时更新、替换或分享，而无需触及 AI 本身。

### Agent Skills 和 MCP 有何区别？

它们做不同的事情，配合使用效果很好：
- **Agent Skills** = 教导 AI *如何*做某事（工作流程、最佳实践）
- **MCP** = 帮助 AI *访问*事物（API、数据库、外部工具）

### 哪些 AI 工具支持 Agent Skills？

目前支持：**Claude**（Claude.ai 和 Claude Code）、**GitHub Copilot**、**VS Code** 等。随着更多工具采用此标准，列表正在增长。

### Agent Skills 会执行代码吗？

不会。技能只是文本指令，AI 像阅读食谱一样阅读和遵循。如果需要执行实际代码，你可以搭配技能使用 MCP 服务器。

---

## 贡献

此仓库遵循 Agent Skills 开放开发模式。欢迎来自更广泛生态系统的贡献。贡献时请：

- 遵循技能模板结构
- 提供清晰、可操作的指令
- 在适当时包含有效示例
- 记录权衡和潜在问题
- 将 SKILL.md 保持在 500 行以下以获得最佳性能

---

## 许可

MIT 许可 - 详见 LICENSE 文件。

---

## 参考资料

- [Anthropic: 在 Claude 中使用技能](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: 创建自定义技能](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code 技能文档](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: 关于 Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocol 文档](https://modelcontextprotocol.io/)
