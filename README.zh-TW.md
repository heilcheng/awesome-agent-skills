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
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
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
| [agentskill.sh](https://agentskill.sh) | 44k+ 技能目錄，內建安全掃描和 `/learn` 安裝程式 |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ 經過驗證的 Claude Code 和 Claude.ai 技能 |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | 專業功能技能 |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | 多代理協作技能 |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI 整合 |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | DSPy 框架技能 |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | 精選的 Claude Agent Skills 合集 |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeact 代理程式庫技能 |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | 類似 npm 的技能 CLI（`brew install dmgrok/tap/skills`）— 彙整 24 個提供者的 177+ 技能 |
| [gotalab/skillport](https://github.com/gotalab/skillport) | 透過 CLI 或 MCP 分發技能 |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git、程式碼審查和測試技能 |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | 加密貨幣、Web3 和區塊鏈技能 |
| [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18 項市場推廣技能：定價、外展、SEO、廣告、留存和營運 |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | 24 項產品管理技能，涵蓋探索、定義、交付和優化 |
| [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) | Google Workspace（Gmail、Chat、Calendar、Docs、Drive、Sheets、Slides）、AI 委託（Jules、Manus、Deep Research）和資料庫技能 |
| [RioBot-Grind/agentfund-skill](https://github.com/RioBot-Grind/agentfund-skill) | Base 鏈上 AI 代理的群眾募資 — 里程碑託管 |

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
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | 從 Xcode 提取的 Apple 編寫的 SwiftUI 和平台指南 |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | 與 iOS 模擬器互動進行測試 |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift 並行遷移指南 |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.md 外掛開發 |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | 串流編碼方法論 |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | 分析提示並推薦最佳工具、技能、代理和編排模式 |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | 在編寫程式碼之前使用 LLM 推理壓力測試規格文件 |
| [Mantra](https://mantra.gonewx.com) | AI 編碼會話管理 — 儲存、還原和時間旅行 Claude Code、Cursor 和 Windsurf 會話 |

#### 資料和分析

| 技能 | 描述 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | 分析 CSV 檔案並產生視覺化洞察 |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | 完整的 Kaggle 整合 — 帳戶設定、比賽報告、資料集/模型下載、Notebook 執行、提交和徽章收集 |

#### 整合和自動化

| 技能 | 描述 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | 代理的網頁瀏覽器功能 |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | 用於生產環境 RAG 的邊緣原生 MCP 伺服器模式 |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | 透過 tmux 管理本地 CLI AI 代理（啟動/停止/監控/分配 + cron 排程）|
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | 透過 Registry Broker 進行 AI 代理發現 - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI 自動化 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | 為代理工作流程發送訊息通知 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API 整合 |
| [AgentStore](https://github.com/techgangboss/agentstore) | 開源外掛市場，支援免 Gas USDC 付款、CLI 安裝和 3 欄位發布 API |
| [Transloadit Skills](https://github.com/transloadit/skills) | 媒體處理：影片編碼、影像處理、OCR 及 86+ Robots |
| [commune](https://github.com/shanjairaj7/commune-skill) | 代理原生電子郵件收件匣 — 永久 @commune.ai 地址，完整收發、語義搜尋、分類和 Webhook |

#### 協作與專案管理

| 技能 | 描述 |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | 自動化 Git 操作和倉庫互動 |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | 評估程式碼實作計畫 |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | 偵測失敗測試並提出修正建議 |

#### 安全和系統

| 技能 | 描述 |
|------|------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | 數位鑑識分析與調查 |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | 現代加密替代 GPG/PGP，支援後量子安全、可組合認證和代理間通訊 |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | 使用 Sigma 偵測規則進行威脅狩獵 |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | 代理用安全 EVM 錢包，支援轉帳、交換和交易 |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | 代理用 Polymarket 預測市場交易 |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | AI 代理的核心層治理 — 確定性政策執行、合規檢查、稽核紀錄 |

#### 進階與研究

| 技能 | 描述 |
|------|------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 上下文工程技術 |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | 系統技能模式（記憶並改進的技能） |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | 使用 LLM 技能進行思維複製 |

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

### 在 Google Antigravity 中使用技能

Antigravity 支援兩種類型的技能：

*   **Workspace Skills**: 位於 `/.agent/skills/` 的專案特定技能
*   **Global Skills**: 位於 `~/.gemini/antigravity/skills` 的使用者全域技能

更多詳情請參閱[官方文件](https://antigravity.google/docs/skills)。

### 在 Claude Code 中使用技能
將技能放在設定目錄中：

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

技能會自動載入並在相關時啟用。

### 在 Codex 中使用技能

**建立技能：**

使用 Codex 內建的 `$skill-creator` 技能。描述你想讓技能做什麼，Codex 會自動為你建立。

如果你使用 `$skill-installer create-plan` 安裝了 `$create-plan`（實驗性），Codex 會在寫入檔案之前建立計畫。

你也可以透過建立一個包含 `SKILL.md` 檔案的資料夾來手動建立技能：

````markdown
---
name: skill-name
description: 幫助 Codex 選擇技能的描述
metadata:
  short-description: 選擇性的面向使用者描述
---

使用此技能時 Codex 代理應遵循的技能指令。
````

**安裝新技能：**

使用 `$skill-installer` 技能從 GitHub 下載技能：

```bash
$skill-installer linear
```

你也可以指示安裝程式從其他儲存庫下載技能。安裝技能後，重新啟動 Codex 以載入新技能。

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

### 在 Copilot CLI 中使用技能

**將技能新增到你的儲存庫：**

1. 建立 `.github/skills` 目錄（`.claude/skills` 中的技能也受支援）
2. 為你的技能建立子目錄（例如 `.github/skills/webapp-testing`）
3. 建立包含技能指令的 `SKILL.md` 檔案

**SKILL.md 結構：**

- `name`（必要）：使用連字號代替空格的唯一小寫識別碼
- `description`（必要）：技能的功能以及 Copilot 何時應使用它
- `license`（選擇性）：適用於此技能的授權條款
- 包含指令、範例和指南的 Markdown 正文

**SKILL.md 範例：**

````markdown
---
name: github-actions-failure-debugging
description: 除錯失敗的 GitHub Actions 工作流程的指南。
---

除錯失敗的 GitHub Actions 工作流程：

1. 使用 `list_workflow_runs` 查詢最近的工作流程執行
2. 使用 `summarize_job_log_failures` 取得失敗工作的 AI 摘要
3. 如需詳細失敗日誌，使用 `get_job_logs`
4. 嘗試在你的環境中重現故障
5. 修復失敗的建置
````

執行任務時，Copilot 根據你的提示和技能描述決定何時使用技能。`SKILL.md` 檔案會注入到代理的上下文中。

### 使用 MCP 伺服器（Claude Desktop）

編輯你的設定檔：
- **macOS**：`~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**：`%APPDATA%\Claude\claude_desktop_config.json`

設定範例：
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

### MCP 伺服器範例（Python）

對於需要連接外部資料來源的技能，你可以建立 MCP 伺服器：

```bash
pip install fastmcp
```

server.py：
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

## 社群資源

### LangChain Tools
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - SerpApi 包裝器
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - 從維基百科取得摘要
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - 執行 Python 程式碼
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - 如何使用 `@tool` 裝飾器

### 文章與研究
- [I found 50 companies accidentally breaking HIPAA with ChatGPT](https://dev.to/dannwaneri/i-found-50-companies-accidentally-breaking-hipaa-with-chatgpt-1olc) - AI 隱私風險分析
- [I built a Production RAG System for $5/month](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj) - RAG 架構成本最佳化指南

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

目前支援：**Claude**（Claude.ai 和 Claude Code）、**GitHub Copilot**、**VS Code**、**Codex**（OpenAI）、**Antigravity**（Google）、**Gemini CLI** 和 **Kiro**。隨著更多工具採用該標準，列表還在不斷增長。

### Agent Skills 會執行程式碼嗎？

不會。技能只是文字指令，AI 像閱讀食譜一樣閱讀和遵循。如果需要執行實際程式碼，你可以搭配技能使用 MCP 伺服器。

### 如何建立我的第一個 Agent Skill？

1. 建立一個 `SKILL.md` 檔案，在頂部寫上名稱和描述
2. 在檔案中編寫清晰的逐步指令
3. 將其放在 `.github/skills/` 或 `.claude/skills/` 資料夾中
4. 測試一下！

完整指南：[如何建立自訂技能](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## 貢獻

歡迎貢獻。完整指南請參閱 **[CONTRIBUTING.md](CONTRIBUTING.md)**。

快速摘要：
- 遵循技能範本結構
- 提供清晰、可操作的指令
- 在適當的地方包含可運行的範例
- 記錄權衡和潛在問題
- 為了最佳效能，將 SKILL.md 保持在 500 行以下
- 在新增之前驗證技能確實存在

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
