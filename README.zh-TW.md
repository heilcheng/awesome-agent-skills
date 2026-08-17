# Agent Skill Index

[English](README.md) | [繁體中文](README.zh-TW.md) | [簡體中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 在 **[agent-skill.co](https://agent-skill.co)** 瀏覽即時目錄

維護者：[Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

從未聽說過「agent skills」？你來對地方了。這是一份由社群精選的清單，收錄了簡單的文字檔案，能教 AI 助理（如 Claude、Copilot 或 Codex）按需學習新能力，無需重新訓練。與大量生成的技能庫不同，本集合專注於由實際工程團隊建立並使用的真實世界 Agent 技能。相容於 Claude Code、Codex、Antigravity、Gemini CLI、Cursor、GitHub Copilot、Windsurf 等。

---

## 快速開始（30 秒）

**步驟 1：從下方目錄中選擇一個技能**（或瀏覽 [agent-skill.co](https://agent-skill.co)）

**步驟 2：將其載入您的 AI 代理：**
- Claude Code：`/skills add <github-url>`
- Claude.ai：在新對話中貼上 SKILL.md 的原始 URL
- Codex / Copilot：遵循 [使用技能](#使用技能) 中連結的平台文件

**步驟 3：要求您的 AI 使用它。** 只需用簡單的中文或英文描述您的需求。

就這樣。無需安裝。無需配置。無需編程。

---

## 目錄

- [什麼是 Agent Skills？](#什麼是-agent-skills)
- [如何找到技能（推薦）](#如何找到技能推薦)
- [相容的代理](#相容的代理)
- [官方技能目錄](#官方技能目錄)
  - [AI 平台與模型](#ai-平台與模型)
  - [雲端與基礎設施](#雲端與基礎設施)
  - [開發者工具與框架](#開發者工具與框架)
  - [Google 生態系統](#google-生態系統)
  - [商業、生產力與行銷](#商業生產力與行銷)
  - [安全與網絡情報](#安全與網絡情報)
- [社群技能](#社群技能)
- [技能品質標準](#技能品質標準)
- [使用技能](#使用技能)
- [建立技能](#建立技能)
- [官方教學與指南](#官方教學與指南)
- [趨勢與能力 (2026)](#趨勢與能力-2026)
- [常見問題](#常見問題)
- [貢獻](#貢獻)
- [聯絡方式](#聯絡方式)
- [授權](#授權)

---

## 什麼是 Agent Skills？

將 **Agent Skills** 想像成 AI 助理的「操作指南」。AI 不需要預先知道所有事情，技能讓它可以隨時學習新能力，就像給人一張食譜卡，而不是讓他們背誦整本食譜書。

技能是簡單的文字檔案（稱為 `SKILL.md`），教導 AI 如何執行特定任務。當您要求 AI 做某件事時，它會找到正確的技能，閱讀指令，然後開始工作。

### 運作方式

技能分三個階段載入：

1. **瀏覽**：AI 看到可用技能列表（只有名稱和簡短描述）
2. **載入**：當需要技能時，AI 會閱讀完整指令
3. **使用**：AI 遵循指令並存取任何輔助檔案

### 為什麼這很重要

- **更快更輕量**：AI 只在需要時載入所需內容
- **隨處可用**：建立一次技能，即可在任何相容的 AI 工具中使用
- **易於分享**：技能只是您可以複製、下載或在 GitHub 分享的檔案

技能是**指令**，不是程式碼。AI 像人類閱讀指南一樣閱讀它們，然後遵循步驟。

---

## 如何找到技能（推薦）

### SkillsMP 市場

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

推薦使用 **[SkillsMP 市場](https://skillsmp.com)**，它會自動索引 GitHub 上的所有 Skill 專案，並按類別、更新時間、星數和其他標籤進行組織——這是發現和評估技能最簡單的方法。

### skills.sh 排行榜 (由 Vercel 提供)

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

您也可以使用 **[skills.sh](https://skills.sh)** —— Vercel 的排行榜 —— 直觀地查看最受歡迎的 Skills 倉庫和單個技能的使用統計數據。

### npx skills CLI 工具

對於特定技能，使用 `npx skills` 命令行工具快速發現、添加和管理技能。詳細參數請參閱 [vercel-labs/skills](https://github.com/vercel-labs/skills)。

```bash
npx skills find [query]            # 搜尋相關技能
npx skills add <owner/repo>        # 安裝技能（支援 GitHub 簡寫、完整 URL、本地路徑）
npx skills list                    # 列出已安裝技能
npx skills check                   # 檢查可用更新
npx skills update                  # 升級所有技能
npx skills remove [skill-name]     # 卸載技能
```

---

## 相容的代理

| 代理 | 文件 |
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

## 官方技能目錄

### AI 平台與模型

#### Anthropic 技能
官方內建技能，用於常見文件類型和創意工作流程。
- [anthropics/docx](https://agent-skill.co/anthropics/skills/docx) - 建立、編輯和分析 Word 文件
- [anthropics/doc-coauthoring](https://agent-skill.co/anthropics/skills/doc-coauthoring) - 協作式文件編輯與共同創作
- [anthropics/pptx](https://agent-skill.co/anthropics/skills/pptx) - 建立、編輯和分析 PowerPoint 簡報
- [anthropics/xlsx](https://agent-skill.co/anthropics/skills/xlsx) - 建立、編輯和分析 Excel 試算表
- [anthropics/pdf](https://agent-skill.co/anthropics/skills/pdf) - 提取文字、建立 PDF 並處理表單
- [anthropics/algorithmic-art](https://agent-skill.co/anthropics/skills/algorithmic-art) - 使用 p5.js 建立生成藝術
- [anthropics/canvas-design](https://agent-skill.co/anthropics/skills/canvas-design) - 設計 PNG 和 PDF 格式的視覺藝術
- [anthropics/frontend-design](https://agent-skill.co/anthropics/skills/frontend-design) - 前端設計與 UI/UX 開發工具
- [anthropics/webapp-testing](https://agent-skill.co/anthropics/skills/webapp-testing) - 使用 Playwright 測試本地網頁應用

#### OpenAI 技能 (Codex)
來自 OpenAI 目錄的官方精選技能。
- [openai/cloudflare-deploy](https://agent-skill.co/openai/skills/cloudflare-deploy) - 使用 Workers 和 Pages 部署到 Cloudflare
- [openai/imagegen](https://agent-skill.co/openai/skills/imagegen) - 使用 OpenAI Image API 生成圖像
- [openai/jupyter-notebook](https://agent-skill.co/openai/skills/jupyter-notebook) - 建立乾淨、可重現的 Jupyter 筆記本
- [openai/figma-implement-design](https://agent-skill.co/openai/skills/figma-implement-design) - 將 Figma 設計轉化為生產就緒的程式碼

#### Google Gemini 技能
透過 [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) 安裝。
- [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) - 開發 Gemini 驅動應用的最佳實務
- [google-gemini/vertex-ai-api-dev](https://agent-skill.co/google-gemini/skills/vertex-ai-api-dev) - 在 Google Cloud Vertex AI 上開發 Gemini 應用

---

## 趨勢與能力 (2026)

AI Agent 生態系統已發生巨大轉變，從反應式聊天界面演進為執行端到端多步驟工作流程的 **自主、目標驅動系統** —— 這一時期通常被稱為「Agent 大飛躍」。

### 1. 自主執行
現代 Agent 已超越簡單的「提示-回應」模型。它們會將宏大目標分解為多步驟戰略計畫，權衡利弊並獨立執行序列。

### 2. 多代理編排
複雜任務由專業代理團隊（文件、測試、編碼）管理，並由負責合成交付物和解決衝突的「經理」代理進行協調。

### 3. Agentic IDE
Cursor、Windsurf、Claude Code 和 GitHub Copilot 等環境已演演進為完整的「Agentic IDE」，代理可在其中原生執行終端命令、監控遙測並通過 MCP 直接存取文件系統。

---

## 常見問題

### 什麼是 Agent Skills？
Agent Skills 是教導 AI 助理如何執行特定任務的指令檔案。它們僅在需要時載入，因此 AI 保持快速且專注。

### Agent Skills 與微調 (Fine-tuning) 有何不同？
微調會永久改變 AI 的思考方式（成本高且難以更新）。Agent Skills 只是指令檔案——您可以隨時更新、更換或分享它們，而無需觸動 AI 本身。

---

## 相關 Awesome 清單

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - 為 Claude Code 精選的技能與工具清單。
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - DESIGN.md 協議的標準與工具。
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - OpenClaw 的開源 Agent 技能。
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - 模型上下文協議 (MCP) 伺服器集合。

---

## 聯絡方式

有關此專案的問題、合作洽詢或意見回饋：

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## 授權
MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案。
