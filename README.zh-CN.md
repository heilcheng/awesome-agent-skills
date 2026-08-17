# Agent Skill Index

[English](README.md) | [繁体中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 在 **[agent-skill.co](https://agent-skill.co)** 浏览实时目录

维护者：[Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

从未听说过“agent skills”？你来对地方了。这是一份由社区精选的清单，收录了简单的文本文件，能教 AI 助理（如 Claude、Copilot 或 Codex）按需学习新能力，无需重新训练。与批量生成的技能库不同，本集合专注于由实际工程团队创建并使用的真实世界 Agent 技能。兼容 Claude Code、Codex、Antigravity、Gemini CLI、Cursor、GitHub Copilot、Windsurf 等。

---

## 快速开始（30 秒）

**步骤 1：从下方目录中选择一个技能**（或浏览 [agent-skill.co](https://agent-skill.co)）

**步骤 2：将其加载到您的 AI 代理：**
- Claude Code：`/skills add <github-url>`
- Claude.ai：在新对话中粘贴 SKILL.md 的原始 URL
- Codex / Copilot：遵循 [使用技能](#使用技能) 中链接的平台文档

**步骤 3：要求您的 AI 使用它。** 只需用简单的中文或英文描述您的需求。

就这样。无需安装。无需配置。无需编程。

---

## 目录

- [什么是 Agent Skills？](#什么是-agent-skills)
- [如何找到技能（推荐）](#如何找到技能推荐)
- [兼容的代理](#兼容的代理)
- [官方技能目录](#官方技能目录)
  - [AI 平台与模型](#ai-平台与模型)
  - [云端与基础设施](#云端与基础设施)
  - [开发者工具与框架](#开发者工具与框架)
  - [Google 生态系统](#google-生态系统)
  - [商业、生产力与营销](#商业生产力与营销)
  - [安全与网络情报](#安全与网络情报)
- [社区技能](#社区技能)
- [技能质量标准](#技能质量标准)
- [使用技能](#使用技能)
- [创建技能](#创建技能)
- [官方教程与指南](#官方教程与指南)
- [趋势与能力 (2026)](#趋势与能力-2026)
- [常见问题](#常见问题)
- [贡献](#贡献)
- [联系方式](#联系方式)
- [授权](#授权)

---

## 什么是 Agent Skills？

将 **Agent Skills** 想象成 AI 助理的“操作指南”。AI 不需要预先知道所有事情，技能让它可以随时学习新能力，就像给人一张菜谱卡，而不是让他们背诵整本食谱书。

技能是简单的文本文件（称为 `SKILL.md`），教导 AI 如何执行特定任务。当您要求 AI 做某件事时，它会找到正确的技能，阅读指令，然后开始工作。

### 运作方式

技能分三个阶段加载：

1. **浏览**：AI 看到可用技能列表（只有名称和简短描述）
2. **加载**：当需要技能时，AI 会阅读完整指令
3. **使用**：AI 遵循指令并访问任何辅助文件

### 为什么这很重要

- **更快更轻量**：AI 只在需要时加载所需内容
- **随处可用**：创建一次技能，即可在任何兼容的 AI 工具中使用
- **易于分享**：技能只是您可以复制、下载或在 GitHub 分享的文件

技能是**指令**，不是代码。AI 像人类阅读指南一样阅读它们，然后遵循步骤。

---

## 如何找到技能（推荐）

### SkillsMP 市场

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

推荐使用 **[SkillsMP 市场](https://skillsmp.com)**，它会自动索引 GitHub 上的所有 Skill 项目，并按类别、更新时间、星数和其他标签进行组织——这是发现和评估技能最简单的方法。

### skills.sh 排行榜 (由 Vercel 提供)

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

您也可以使用 **[skills.sh](https://skills.sh)** —— Vercel 的排行榜 —— 直观地查看最受欢迎的 Skills 仓库和单个技能的使用统计数据。

### npx skills CLI 工具

对于特定技能，使用 `npx skills` 命令行工具快速发现、添加和管理技能。详细参数请参阅 [vercel-labs/skills](https://github.com/vercel-labs/skills)。

```bash
npx skills find [query]            # 搜索相关技能
npx skills add <owner/repo>        # 安装技能（支持 GitHub 简写、完整 URL、本地路径）
npx skills list                    # 列出已安装技能
npx skills check                   # 检查可用更新
npx skills update                  # 升级所有技能
npx skills remove [skill-name]     # 卸载技能
```

---

## 兼容的代理

| 代理 | 文档 |
|-------|---------------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |
| Junie | [junie.jetbrains.com](https://junie.jetbrains.com/docs/agent-skills.html) |

---

## 官方技能目录

### AI 平台与模型

#### Anthropic 技能
官方内置技能，用于常见文件类型和创意工作流程。
- [anthropics/docx](https://agent-skill.co/anthropics/skills/docx) - 创建、编辑和分析 Word 文档
- [anthropics/doc-coauthoring](https://agent-skill.co/anthropics/skills/doc-coauthoring) - 协作式文档编辑与共同创作
- [anthropics/pptx](https://agent-skill.co/anthropics/skills/pptx) - 创建、编辑和分析 PowerPoint 演示
- [anthropics/xlsx](https://agent-skill.co/anthropics/skills/xlsx) - 创建、编辑和分析 Excel 表格
- [anthropics/pdf](https://agent-skill.co/anthropics/skills/pdf) - 提取文本、创建 PDF 并处理表单
- [anthropics/algorithmic-art](https://agent-skill.co/anthropics/skills/algorithmic-art) - 使用 p5.js 创建生成艺术
- [anthropics/canvas-design](https://agent-skill.co/anthropics/skills/canvas-design) - 设计 PNG 和 PDF 格式的视觉艺术
- [anthropics/frontend-design](https://agent-skill.co/anthropics/skills/frontend-design) - 前端设计与 UI/UX 开发工具
- [anthropics/webapp-testing](https://agent-skill.co/anthropics/skills/webapp-testing) - 使用 Playwright 测试本地网页应用

#### OpenAI 技能 (Codex)
来自 OpenAI 目录的官方精选技能。
- [openai/cloudflare-deploy](https://agent-skill.co/openai/skills/cloudflare-deploy) - 使用 Workers 和 Pages 部署到 Cloudflare
- [openai/imagegen](https://agent-skill.co/openai/skills/imagegen) - 使用 OpenAI Image API 生成图像
- [openai/jupyter-notebook](https://agent-skill.co/openai/skills/jupyter-notebook) - 创建干净、可重现的 Jupyter 笔记本
- [openai/figma-implement-design](https://agent-skill.co/openai/skills/figma-implement-design) - 将 Figma 设计转化为生产就绪的代码

#### Google Gemini 技能
通过 [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) 安装。
- [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) - 开发 Gemini 驱动应用的最佳实践
- [google-gemini/vertex-ai-api-dev](https://agent-skill.co/google-gemini/skills/vertex-ai-api-dev) - 在 Google Cloud Vertex AI 上开发 Gemini 应用

---

## 趋势与能力 (2026)

AI Agent 生态系统已发生巨大转变，从反应式聊天界面演进为执行端到端多步骤工作流的 **自主、目标驱动系统** —— 这一时期通常被称为“Agent 大飞跃”。

### 1. 自主执行
现代 Agent 已超越简单的“提示-响应”模型。它们会将宏大目标分解为多步骤战略计划，权衡利弊并独立执行序列。

### 2. 多代理编排
复杂任务由专业代理团队（文档、测试、编码）管理，并由负责合成交付物和解决冲突的“经理”代理进行协调。

---

## 常见问题

### 什么是 Agent Skills？
Agent Skills 是教导 AI 助理如何执行特定任务的指令文件。它们仅在需要时加载，因此 AI 保持快速且专注。

### Agent Skills 与微调 (Fine-tuning) 有何不同？
微调会永久改变 AI 的思考方式（成本高且难以更新）。Agent Skills 只是指令文件——您可以随时更新、更换或分享它们，而无需触动 AI 本身。

---

## 相关 Awesome 清单

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - 为 Claude Code 精选的技能与工具清单。
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - DESIGN.md 协议的标准与工具。
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - OpenClaw 的开源 Agent 技能。
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - 模型上下文协议 (MCP) 服务器集合。

---

## 联系方式

有关此项目的问题、合作洽谈或意见反馈：

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## 授权
MIT 授权 - 详见 [LICENSE](LICENSE) 文件。
