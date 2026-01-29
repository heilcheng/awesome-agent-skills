# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

精選的 AI 程式編碼代理技能、工具和功能列表。

---

## 目錄

- [什麼是 Agent Skills？](#什麼是-agent-skills)
- [相容的代理](#相容的代理)
- [技能列表](#技能列表)
- [官方教學和指南](#官方教學和指南)
- [使用技能](#使用技能)
- [建立技能](#建立技能)
- [社群資源](#社群資源)
- [常見問題](#常見問題)
- [貢獻](#貢獻)
- [授權](#授權)
- [參考資料](#參考資料)

---

## 什麼是 Agent Skills？

將 **Agent Skills** 想像成 AI 助理的「使用指南」。AI 不需要預先知道所有事情，技能讓它可以隨時學習新能力，就像給人一張食譜卡，而不是讓他們背誦整本食譜書。

技能是簡單的文字檔案（稱為 `SKILL.md`），教導 AI 如何執行特定任務。當你請求 AI 做某件事時，它會找到正確的技能，閱讀指令，然後開始工作。

### 運作方式

技能分三個階段載入：

1. **瀏覽** - AI 看到可用技能列表（只有名稱和簡短描述）
2. **載入** - 當需要技能時，AI 會閱讀完整指令
3. **使用** - AI 遵循指令並存取任何輔助檔案

### 為什麼這很重要

- **更快更輕量** - AI 只在需要時載入所需內容
- **跨平台使用** - 建立一次技能，在任何相容的 AI 工具中使用
- **易於分享** - 技能只是可以複製、下載或在 GitHub 分享的檔案

技能是**指令**，不是程式碼。AI 像人閱讀指南一樣閱讀它們，然後遵循步驟。

---

## 相容的代理

以下平台有記錄的 Agent Skills 支援：

| 代理 | 文件 |
|------|------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |

---

## 技能列表

### 官方 Claude 技能（文件處理）

Claude 提供常用文件類型的內建技能：

| 技能 | 描述 | 來源 |
|------|------|------|
| docx | 建立、編輯、分析帶有追蹤變更的 Word 文件 | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | 試算表操作：公式、圖表、資料轉換 | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | 讀取、產生和調整投影片、版面配置、範本 | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | 從 PDF 提取文字、表格、元資料 | [anthropics/skills](https://github.com/anthropics/skills) |

### 官方 OpenAI Codex 技能

Codex 支援不同範圍的技能：

| 技能範圍 | 位置 | 建議用途 |
|----------|------|----------|
| REPO | `$CWD/.codex/skills` | 與工作資料夾相關的技能（例如微服務或模組）|
| REPO | `$CWD/../.codex/skills` | 父資料夾中共享區域的技能 |
| REPO | `$REPO_ROOT/.codex/skills` | 倉庫中所有人使用的根技能 |
| USER | `$CODEX_HOME/skills`（預設：`~/.codex/skills`）| 適用於任何倉庫的個人技能 |
| ADMIN | `/etc/codex/skills` | SDK 腳本、自動化和預設管理技能 |
| SYSTEM | 與 Codex 捆綁 | 內建技能如 skill-creator 和 plan |

### 官方 HuggingFace 技能

| 技能 | 描述 | 來源 |
|------|------|------|
| hf_dataset_creator | 建立結構化訓練資料集的提示、範本和腳本 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | 協調評估作業、產生報告和映射指標的指令和工具 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | 包含指導、輔助腳本、成本估算器的完整訓練技能 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | 在 Hugging Face Hub 上發布和管理研究論文的工具 | [huggingface/skills](https://github.com/huggingface/skills) |

### 社群技能

社群維護的技能和集合（使用前請驗證）：

#### 技能集合

| 倉庫 | 描述 |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | 官方 Anthropic 集合（文件編輯、資料分析）|
| [openai/skills](https://github.com/openai/skills) | 官方 OpenAI Codex 技能目錄 |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace 技能（相容 Claude、Codex、Gemini）|
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai 集合，附 CLI 安裝程式 |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ 經過驗證的 Claude Code 和 Claude.ai 技能 |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | 專門能力的技能 |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | 多代理協作技能 |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI 整合 |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | DSPy 框架技能 |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | 精選 Claude 代理技能集合 |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeact 代理庫技能 |
| [gotalab/skillport](https://github.com/gotalab/skillport) | 透過 CLI 或 MCP 分發技能 |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git、程式碼審查和測試技能 |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | 加密貨幣、web3 和區塊鏈技能。 |

#### 文件處理

| 技能 | 描述 |
|------|------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | 將 markdown 文件轉換為專業 EPUB 電子書 |

#### 開發和程式碼工具

| 技能 | 描述 |
|------|------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS 開發與 CDK 最佳實務 |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 圖表和互動式資料視覺化 |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | 測試網頁應用的瀏覽器自動化 |
| [Specrate](https://github.com/rickygao/specrate) | 以結構化工作流程管理規格（spec）與變更 |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | 與 iOS 模擬器互動以進行測試 |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift 並發遷移指南 |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.md 外掛程式開發 |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | 流式編碼方法論 |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | 從 Xcode 提取的 Apple 編寫的 SwiftUI 和平台指南 |

#### 資料和分析

| 技能 | 描述 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | 分析 CSV 檔案並產生視覺化洞察 |

#### 整合和自動化

| 技能 | 描述 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | 代理的網頁瀏覽器功能 |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | 用於生產 RAG 的邊緣原生 MCP 伺服器模式 |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | 透過 tmux 管理本地 CLI AI 代理（啟動/停止/監控/分配 + cron 排程） |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | 透過 Registry Broker 發現 AI 代理 - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI 自動化 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | 為代理工作流程發送訊息通知 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API 整合 |

#### 協作與專案管理

| 技能 | 描述 |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | 自動化 git 操作和倉庫互動 |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | 評估程式碼實施計畫 |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | 檢測失敗的測試並提出修復建議 |

#### 安全和系統

| 技能 | 描述 |
|------|------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | 數位鑑識分析和調查 |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | 使用 Sigma 偵測規則進行威脅狩獵 |

#### 進階與研究

| 技能 | 描述 |
|------|------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 上下文工程技術 |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | 系統技能模式（記憶和改進的技能） |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | 透過 LLM 技能進行思維複製 |

---

## 官方教學和指南

### Claude 和 Anthropic
- [在 Claude 中使用技能](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - 官方快速入門指南
- [如何建立自訂技能](https://support.claude.com/en/articles/12512198-creating-custom-skills) - 逐步編寫指南
- [Claude Code 技能文件](https://code.claude.com/docs/en/skills) - 官方參考

### GitHub Copilot
- [關於 Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHub 文件
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code 整合

### Model Context Protocol (MCP)
- [MCP 官方文件](https://modelcontextprotocol.io/) - 開放標準
- [建立你的第一個 MCP 伺服器](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScript 指南
- [MCP 伺服器範例](https://github.com/modelcontextprotocol/servers) - 官方伺服器實作

---

## 使用技能

### 在 Claude.ai 中使用技能
1. 點擊聊天介面中的技能圖示
2. 從市場添加技能或上傳自訂技能
3. Claude 會根據你的任務自動啟用相關技能

### 在 Claude Code 中使用技能
將技能放在設定目錄中：

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

技能會自動載入並在相關時啟用。

### 在 VS Code 中使用技能

技能儲存在包含 `SKILL.md` 檔案的目錄中。VS Code 支援兩個位置：

- `.github/skills/` - 所有新技能的建議位置
- `.claude/skills/` - 傳統位置，也支援

**建立技能：**

1. 在工作區建立 `.github/skills` 目錄
2. 為你的技能建立子目錄（例如 `.github/skills/webapp-testing`）
3. 建立包含以下結構的 `SKILL.md` 檔案：

```markdown
---
name: skill-name
description: 技能的功能描述和使用時機
---

# 技能指令

你的詳細指令、指南和範例...
```

---

## 建立技能

技能是告訴代理如何執行特定任務的指令包。預設情況下它們不是可執行程式碼。

### 技能結構

```
skill-name/
├── SKILL.md          # 必需：指令和元資料
├── scripts/          # 可選：輔助腳本
├── templates/        # 可選：文件範本
└── resources/        # 可選：參考檔案
```

### 基本 SKILL.md 範本

```markdown
---
name: my-skill-name
description: 清楚描述此技能的功能。
---

# 我的技能名稱

技能目的的詳細描述。

## 何時使用此技能

- 使用案例 1
- 使用案例 2

## 指令

[代理執行此技能的詳細指令]

## 範例

[實際範例]
```

---

## 常見問題

### 什麼是 Agent Skills？

Agent Skills 是教導 AI 助理如何執行特定任務的指令檔案。將它們視為 AI 閱讀和遵循的「使用指南」。它們只在需要時載入，所以 AI 保持快速和專注。

### Agent Skills 與微調有何不同？

微調永久改變 AI 的思考方式（昂貴且難以更新）。Agent Skills 只是指令檔案，你可以隨時更新、替換或分享，而無需觸及 AI 本身。

### Agent Skills 和 MCP 有何區別？

它們做不同的事情，配合使用效果很好：
- **Agent Skills** = 教導 AI *如何*做某事（工作流程、最佳實務）
- **MCP** = 幫助 AI *存取*事物（API、資料庫、外部工具）

### 哪些 AI 工具支援 Agent Skills？

目前支援：**Claude**（Claude.ai 和 Claude Code）、**GitHub Copilot**、**VS Code** 等。隨著更多工具採用此標準，列表正在增長。

### Agent Skills 會執行程式碼嗎？

不會。技能只是文字指令，AI 像閱讀食譜一樣閱讀和遵循。如果需要執行實際程式碼，你可以搭配技能使用 MCP 伺服器。

---

## 貢獻

此倉庫遵循 Agent Skills 開放開發模式。歡迎來自更廣泛生態系統的貢獻。貢獻時請：

- 遵循技能範本結構
- 提供清晰、可操作的指令
- 在適當時包含有效範例
- 記錄權衡和潛在問題
- 將 SKILL.md 保持在 500 行以下以獲得最佳效能

---

## 授權

MIT 授權 - 詳見 LICENSE 檔案。

---

## 參考資料

- [Anthropic: 在 Claude 中使用技能](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: 建立自訂技能](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code 技能文件](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: 關於 Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocol 文件](https://modelcontextprotocol.io/)
