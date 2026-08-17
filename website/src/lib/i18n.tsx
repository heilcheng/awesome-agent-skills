import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "zh-TW" | "zh-CN" | "ja" | "ko" | "es";

export const LANGUAGES = [
  { code: "en" as Language, label: "English", flag: "🇺🇸" },
  { code: "zh-TW" as Language, label: "繁體中文", flag: "🇹🇼" },
  { code: "zh-CN" as Language, label: "简体中文", flag: "🇨🇳" },
  { code: "ja" as Language, label: "日本語", flag: "🇯🇵" },
  { code: "ko" as Language, label: "한국어", flag: "🇰🇷" },
  { code: "es" as Language, label: "Español", flag: "🇪🇸" },
];

export const t = {
  "en": {
    nav: { brand: "Agent Skill Index", search: "Search docs (Website Only)...", github: "View on GitHub", sponsor: "SPONSORED" },
    sidebar: {
      intro: "Introduction", directory: "Directory",
      standards: "Standards & Guides", resources: "Resources",
      whatAreSkills: "What are Skills?", howItWorks: "How It Works",
      findingSkills: "Finding Skills", compatibleAgents: "Compatible Agents",
      aiPlatforms: "AI Platforms", cloudInfra: "Cloud & Infra",
      devTools: "Dev Tools", business: "Business",
      security: "Security", qualityStandards: "Quality Standards",
      usingSkills: "Using Skills", creatingSkills: "Creating Skills",
      tutorials: "Tutorials", trends: "Trends (2026)",
      faq: "FAQ", contributing: "Contributing",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "Updated April 2026",
      subtitle: "The definitive catalog and guide for AI agent capabilities, tools, and workflows.",
      browseBtn: "Browse Directory", githubBtn: "View on GitHub",
    },
    what: {
      title: "What is an Agent Skill?",
      subtitle: "Think of an Agent Skill as an instruction manual for your AI assistant. Skills allow the AI to learn new capabilities on the fly when it needs them, like giving a person a recipe card instead of making them memorize an entire cookbook.",
      howDesc: "Skills are simple text files (called SKILL.md) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.",
      cards: [
        { title: "Faster & Lighter", desc: "The AI only loads what it needs, when it needs it. No more 10,000-line prompt bloat.", icon: "⚡" },
        { title: "Portable", desc: "Skills work across different AI models and tools. Use the same skill in Cursor, Windsurf, or your custom agent.", icon: "📦" },
        { title: "Verifiable", desc: "Every skill includes clear instructions and examples, making it easy to test and improve.", icon: "✅" },
        { title: "Magic Moments", desc: "Your agent now has that skill. No more pasting 50 lines of prompts in every new chat. It just... knows.", icon: "🪄" }
      ],
    },
    how: {
      title: "How It Works",
      subtitle: "Skills load in three stages. This keeps the AI fast: it never loads more than it needs.",
      steps: [
        { title: "Browse", desc: "The AI sees a list of available skills, just names and short descriptions. It scans this list to understand what capabilities are available.", step: "01" },
        { title: "Load", desc: "When a skill is needed, the AI reads the full instructions from the SKILL.md file. It only loads what's relevant to your current task.", step: "02" },
        { title: "Use", desc: "The AI follows the instructions and accesses any helper files: scripts, templates, or reference documents included with the skill.", step: "03" },
      ],
    },
    finding: {
      title: "How to Find Skills",
      subtitle: "There are three recommended ways to discover and install skills.",
      items: [
        { 
          title: "SkillsMP Marketplace", 
          desc: "Automatically indexes all Skill projects on GitHub and organizes them by category, update time, star count, and other tags, making it the easiest way to discover and evaluate skills.",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh Leaderboard", 
          desc: "Vercel's leaderboard for intuitively viewing the most popular Skills repositories and individual skill usage statistics.",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills CLI Tool", 
          desc: "Use the npx skills command-line tool to quickly discover, add, and manage skills directly from your terminal.",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "Compatible Agents", 
      subtitle: "Agent Skills work across the major AI coding tools and assistants. Click any row to visit the official documentation.",
      headers: { agent: "Agent", docs: "Documentation" }
    },
    directory: { 
      title: "Skill Directory", 
      subtitle: "Official and community-maintained capabilities organized by category. Click any card to visit the source.",
      searchPlaceholder: "Search skills...",
      noResults: "No skills found matching your search.",
      tabs: {
        official: "Official",
        ai: "AI Models",
        infra: "Cloud & Infra",
        devtools: "Dev Tools",
        business: "Business",
        security: "Security"
      }
    },
    quality: { 
      title: "Quality Standards", 
      subtitle: "Every skill in this directory meets a minimum bar for clarity, precision, and real-world usability.",
      items: [
        { title: "Clarity & Precision", description: "Instructions must be unambiguous. Avoid 'try to' or 'maybe'. Use direct language like 'Execute' or 'Generate'." },
        { title: "Focused Scope", description: "A good skill does one thing well. Monolithic skills slow down agents and increase token overhead." },
        { title: "Safety & Reliability", description: "Explicitly define error handling and edge cases. A skill should know when to stop and ask for confirmation." },
        { title: "Proven Examples", description: "Include at least two real-world usage examples in SKILL.md to ground the agent in concrete behavior." },
      ],
      goodHeader: "Good pattern",
      goodPattern: "\"When a PR is opened, scan the `packages/core` directory for changes. If changes exist, run `npm test` and output the results as a summary table.\"",
      goodDesc: "Clear trigger, specific target, defined output format.",
      badHeader: "Anti-pattern",
      badPattern: "\"Try to look at the code if you have time and maybe let me know if anything looks weird or if there are bugs.\"",
      badDesc: "No trigger, no target, no success criteria. Prone to hallucination."
    },
    using: { 
      title: "Using Skills", 
      subtitle: "Adding a skill takes less than a minute. No config files, no runtime changes.",
    },
    creating: { 
      title: "Creating Skills", 
      subtitle: "A good skill is precise, portable, and testable.",
      structureTitle: "Folder Structure",
      blueprintTitle: "SKILL.md Blueprint",
      structure: [
        { path: "my-skill/", desc: "Your invention." },
        { path: "SKILL.md", desc: "The brain." },
        { path: "scripts/", desc: "Helper tools." },
        { path: "examples/", desc: "Reference code." }
      ],
      blueprint: [
        { section: "# Skill Name", desc: "Clearly define the scope." },
        { section: "## Purpose", desc: "Why does it exist?" },
        { section: "## Instructions", desc: "Step-by-step logic." },
        { section: "## Tools", desc: "Specific resources needed." }
      ],
      exampleBlueprint: `---
name: awesome-new-skill
description: Tell the AI what this does in plain English.
---

# Instructions

1. Explain it like the AI is your smart intern.
2. Give it step-by-step logic (it loves lists).
3. Tell it when to STOP or when it fails.`
    },
    tutorials: {
      title: "Tutorials & Guides",
      subtitle: "Learning to build AI skills shouldn't feel like reading a dictionary. Follow the chat below to start your journey!",
      items: [
        { title: "Skill-Driven Development", desc: "Learn how to architect your workflow around modular AI abilities.", type: "Strategy" },
        { title: "MCP Deep Dive", desc: "The technical guide to the Model Context Protocol that powers skill discovery.", type: "Technical" },
        { title: "Prompt vs Skill", desc: "When to use a simple prompt and when to wrap it in a portable skill.", type: "Best Practice" }
      ],
      chat: {
        human: "Human Newcomer",
        agent: "Helpful Agent",
        msg1: "I just got here. I want my AI to know how to deploy my specific app, but I don't want to type a 500-word prompt every single time... What do I do?",
        msg2: "Beep boop! That's exactly what Agent Skills are for! You just write the instructions ONCE in a simple Markdown file (usually called SKILL.md). I will read it automatically whenever I need to deploy your app!",
        quest1: { title: "Quest 1: The Basics", link: "Read the Official Starter Guide" },
        msg3: "Wait... so a 'Skill' is literally just a Markdown file? It's that easy? No advanced coding required?",
        msg4: "Exactly! You can even add advanced things like MCP Servers if you want me to talk to external databases, but starting off is literally just writing down how you want a task done.",
        quest2: { title: "Quest 2: Power Up", link: "Copy a Template from the Directory" },
        quest3: { title: "Achievement: Arch-Mage", link: "Learn MCP Architecture" }
      }
    },
    trends: {
      title: "Trends and Capabilities (2026)",
      subtitle: "The AI agent ecosystem has shifted from chat interfaces to autonomous, goal-driven systems. Here is what defines the landscape today.",
      chartLabel: "Projected Adoption, 2026",
      items: [
        { name: "Autonomous Execution", desc: "Agents complete multi-step goals without human intervention. Expected in 40% of enterprise apps." },
        { name: "Modular Reasoning", desc: "Switching between specialized reasoning engines for different task types. Reducing latency by 60%." },
        { name: "Edge Deployment", desc: "Running complex agent logic on local devices without cloud dependency. Massive growth in privacy-first apps." },
        { name: "Standardized Protocols", desc: "Unified discovery via MCP and similar specs. Interoperability across all major agent frameworks." }
      ]
    },
    faq: {
      title: "FAQ",
      subtitle: "New to Agent Skills? Here are the most common questions.",
      items: [
        { q: "What is MCP?", a: "The Model Context Protocol (MCP) is an open standard that allows AI models to discover and use data and tools (skills) regardless of the platform." },
        { q: "How do I evaluate quality?", a: "A high-quality skill has clear success criteria, defined failure modes, and no ambiguous language. It should work reliably even in long context sessions." },
        { q: "Do skills work across all tools?", a: "Most modern AI tools support skill-like constructs. The SKILL.md format is designed to be framework-agnostic." }
      ]
    },
    contributing: { title: "Contributing", subtitle: "Help grow the most comprehensive open source collection of AI agent skills.", guideBtn: "Contributing Guide", repoBtn: "View Repository" },
    footer: {
      bio: "Curated capabilities for the next leap in agentic engineering. Standardizing the instructions that power the world's most intelligent autonomous assistants.",
      contactTitle: "Questions, partnership inquiries, or feedback about this project:",
      citation: "Citation",
      nav: {
        title: "Navigation",
        items: ["What is it", "Skill Directory", "Standards", "Guides", "Trends", "FAQ"]
      },
      resources: {
        title: "Resources",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "GitHub Repo", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "Contributing", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "Skill Template", href: "#creating-skills" },
          { label: "License", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. Open source under MIT.",
        builtWith: "Built with Next.js & Three.js",
        curatedBy: "Curated by Engineering Teams"
      }
    },
    snake: {
      title: "Agent Snake",
      gameOver: "Ouch! Try Again?",
      desc: "Navigate your agent through the directory. Eat skills to grow stronger.",
      init: "INITIALIZE",
      reboot: "REBOOT",
      controls: "WASD / ARROWS",
      mode: "CUTE MODE: ON",
      score: "Score",
      best: "Best",
    },
  },

  "zh-TW": {
    nav: { brand: "Agent Skill Index", search: "搜尋文件 (僅限網站)...", github: "在 GitHub 上查看", sponsor: "贊助" },
    sidebar: {
      intro: "介紹", directory: "目錄",
      standards: "標準與指南", resources: "資源",
      whatAreSkills: "什麼是技能？", howItWorks: "運作方式",
      findingSkills: "尋找技能", compatibleAgents: "相容 Agent",
      aiPlatforms: "AI 平台", cloudInfra: "雲端基礎設施",
      devTools: "開發工具", business: "商業",
      security: "安全", qualityStandards: "品質標準",
      usingSkills: "使用技能", creatingSkills: "創建技能",
      tutorials: "教學", trends: "趨勢 (2026)",
      faq: "常見問題", contributing: "貢獻",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026 年 4 月更新",
      subtitle: "AI Agent 能力、工具與工作流程的權威清單與教學。",
      browseBtn: "瀏覽目錄", githubBtn: "在 GitHub 上查看",
    },
    what: {
      title: "什麼是 Agent 技能？",
      subtitle: "把 Agent 技能想像成 AI 助手的操作指南。技能讓 AI 在需要時隨時學習新能力，就像給人一張食譜卡，而不需要背整本食譜書。",
      howDesc: "技能是簡單的文本文件（稱為 SKILL.md），教導 AI 如何執行特定任務。當您要求 AI 做某事時，它會找到合適的技能，閱讀指令，然後開始工作。",
      cards: [
        { title: "更快速、更輕量", desc: "AI 僅在需要時載入所需內容。不再有 10,000 行的提示膨脹。", icon: "⚡" },
        { title: "可移植", desc: "技能可跨不同的 AI 模型與工具使用。在 Cursor、Windsurf 或您自定義的 Agent 中使用相同的技能。", icon: "📦" },
        { title: "可驗証", desc: "每個技能都包含明確的指令與範例，使其易於測試與改進。", icon: "✅" },
        { title: "見證奇蹟", desc: "您的 Agent 現在具備了該技能。不再需要在每個新對話中貼上 50 行的提示。它就是... 懂了。", icon: "🪄" }
      ],
    },
    how: {
      title: "運作方式",
      subtitle: "技能分三個階段載入。這讓 AI 保持快速：它永遠不會載入超出所需的内容。",
      steps: [
        { title: "瀏覽", desc: "AI 看到可用技能列表，只有名稱和簡短描述。它掃描此列表以了解有哪些能力可用。", step: "01" },
        { title: "載入", desc: "當需要某個技能時，AI 從 SKILL.md 文件讀取完整說明。它只載入與當前任務相關的内容。", step: "02" },
        { title: "使用", desc: "AI 按照說明操作，並訪問技能附帶的任何輔助文件：腳本、模板或參考文件。", step: "03" },
      ],
    },
    finding: {
      title: "如何找到技能",
      subtitle: "有三種推薦方式可以發現和安裝技能。",
      items: [
        { 
          title: "SkillsMP 市場", 
          desc: "自動索引 GitHub 上的所有技能項目，並按類別、更新時間、星數等標籤進行組織，是發現和評估技能最簡單的方式。",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh 排行榜", 
          desc: "來自 Vercel 的排行榜，可直觀查看最受歡迎的技能倉庫和單個技能的使用統計。",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills 命令列工具", 
          desc: "使用 npx skills 命令列工具，直接從終端快速發現、添加和管理技能。",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "相容的 Agent", 
      subtitle: "Agent 技能支援主要的 AI 編碼工具與助手。點擊任何行訪問官方說明文件。",
      headers: { agent: "Agent", docs: "說明文件" }
    },
    directory: { 
      title: "技能目錄", 
      subtitle: "按類別組織的官方與社群維護能力。點擊任何卡片訪問來源。",
      searchPlaceholder: "搜尋技能...",
      noResults: "未找到符合搜尋條件的技能。",
      tabs: {
        official: "官方",
        ai: "AI 模型",
        infra: "雲端與基礎結構",
        devtools: "開發工具",
        business: "商業",
        security: "安全"
      }
    },
    quality: { 
      title: "品質標準", 
      subtitle: "本目錄中的每一項技能都符合清晰度、精確性與實際可用性的最低標準。",
      items: [
        { title: "清晰且精確", description: "指令必須明確。避免使用「嘗試」或「也許」。使用直接的語言，如「執行」或「生成」。" },
        { title: "專注的範圍", description: "一個好的技能可以很好地完成一件事。過於龐大的技能會降低 Agent 的速度並增加 token 開銷。" },
        { title: "安全與可靠", description: "明確定義錯誤處理和邊緣情況。技能應該知道何時停止並尋求確認。" },
        { title: "經證實的範例", description: "在 SKILL.md 中至少包含兩個實際的使用範例，以便將 Agent 的行為落實到具體任務中。" },
      ],
      goodHeader: "良好的模式",
      goodPattern: "\"開啟 PR 時，掃描 `packages/core` 目錄以進行更改。如果存在更改，則運行 `npm test` 並將结果輸出為摘要表。\"",
      goodDesc: "清晰的觸發器、特定的目標、定義好的輸出格式。",
      badHeader: "反模式",
      badPattern: "\"如果有時間，嘗試查看一下代碼，也許讓我知道是否有任何東西看起來很奇怪或是否有錯誤。\"",
      badDesc: "無觸發器、無目標、無成功標準。容易產生幻覺。"
    },
    using: { 
      title: "使用技能", 
      subtitle: "添加技能只需不到一分鐘。無需配置文件，無需更改運行時。",
    },
    creating: { 
      title: "創建技能", 
      subtitle: "好的技能是精確、可移植且可測試的。",
      structureTitle: "文件夾結構",
      blueprintTitle: "SKILL.md 藍圖",
      structure: [
        { path: "my-skill/", desc: "您的發明。" },
        { path: "SKILL.md", desc: "大腦。" },
        { path: "scripts/", desc: "輔助工具。" },
        { path: "examples/", desc: "參考代碼。" }
      ],
      blueprint: [
        { section: "# 技能名稱", desc: "明確定義範圍。" },
        { section: "## 目的", desc: "為什麼存在？" },
        { section: "## 指令", desc: "循序漸進的邏輯。" },
        { section: "## 工具", desc: "所需的特定資源。" }
      ]
    },
    tutorials: {
      title: "教學與指南",
      subtitle: "帶領您從零開始到生產環境使用 Agent 技能的資源。",
      items: [
        { title: "技能驅動開發", desc: "了解如何圍繞模組化 AI 能力構建您的工作流。", type: "策略" },
        { title: "MCP 深度解析", desc: "驅動技能發現的模型上下文協議 (Model Context Protocol) 技術指南。", type: "技術" },
        { title: "提示詞 vs 技能", desc: "何時使用簡單提示詞，以及何時將其封裝為可移植技能。", type: "最佳實踐" }
      ]
    },
    trends: {
      title: "趨勢與能力 (2026)",
      subtitle: "AI Agent 生態系統已從聊天界面轉變為自主的目標驅動系統。以下是定義當今格局的關鍵。",
      chartLabel: "預計採用率, 2026",
      items: [
        { name: "自主執行", desc: "Agent 在無人干預的情況下完成多步目標。預計將出現在 40% 的企業應用中。" },
        { name: "模組化推理", desc: "針對不同任務類型在專業推理引擎之間切換。延遲降低 60%。" },
        { name: "邊緣部署", desc: "在不依賴雲端的情況下在本地設備上運行複雜的 Agent 邏輯。隱私優先應用大爆發。" },
        { name: "標准化協議", desc: "通過 MCP 及類似規範實現統一發現。跨所有主流 Agent 框架的互操作性。" }
      ]
    },
    faq: {
      title: "常見問題",
      subtitle: "對 Agent 技能感到陌生？這裡有最常見的問題。",
      items: [
        { q: "什麼是 MCP？", a: "模型上下文協議 (MCP) 是一個開放標准，允許 AI 模型發現並使用來自任何平台的數據與工具（技能）。" },
        { q: "我該如何評估品質？", a: "高品質技能具備清晰的成功標準、定義明確的失敗模式，且無歧義。它應該在長上下文會話中也能穩定運作。" },
        { q: "技能是否支援所有工具？", a: "大多數現代 AI 工具都支援類技能構造。SKILL.md 格式旨在與框架無關。" }
      ]
    },
    contributing: { title: "貢獻", subtitle: "幫助壯大最全面的開源 AI Agent 技能集合。", guideBtn: "貢獻指南", repoBtn: "查看倉庫" },
    footer: {
      bio: "為下一次 Agent 工程飛躍精心挑選的能力。標准化驅動世界上最智能自主助手的指令。",
      contactTitle: "關於此專項的任何問題、合作諮詢或反饋：",
      citation: "引用",
      nav: {
        title: "導航",
        items: ["什麼是 Agent 技能", "技能清單", "標準", "指南", "趨勢", "常見問題"]
      },
      resources: {
        title: "資源",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "GitHub 倉庫", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "貢獻", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "技能模板", href: "#creating-skills" },
          { label: "授權", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. 基於 MIT 協議開源。",
        builtWith: "使用 Next.js 與 Three.js 構建",
        curatedBy: "由工程團隊維護"
      }
    },
    snake: {
      title: "Agent 貪吃蛇",
      gameOver: "哎呀！再試一次？",
      desc: "引導您的 Agent 穿梭於目錄中。吞噬技能以變得更強。",
      init: "初始化",
      reboot: "重啟",
      controls: "WASD / 方向鍵",
      mode: "可愛模式：開啟",
      score: "分數",
      best: "最高",
    },
  },

  "zh-CN": {
    nav: { brand: "Agent Skill Index", search: "搜尋文档 (仅限网站)...", github: "在 GitHub 上查看", sponsor: "赞助" },
    sidebar: {
      intro: "介绍", directory: "目录",
      standards: "标准与指南", resources: "资源",
      whatAreSkills: "什么是技能？", howItWorks: "运作方式",
      findingSkills: "寻找技能", compatibleAgents: "兼容 Agent",
      aiPlatforms: "AI 平台", cloudInfra: "云端基础设施",
      devTools: "开发工具", business: "商业",
      security: "安全", qualityStandards: "质量标准",
      usingSkills: "使用技能", creatingSkills: "创建技能",
      tutorials: "教程", trends: "趋势 (2026)",
      faq: "常见问题", contributing: "贡献",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026 年 4 月更新",
      subtitle: "AI Agent 能力、工具与工作流程的权威清单与教程。",
      browseBtn: "浏览目录", githubBtn: "在 GitHub 上查看",
    },
    what: {
      title: "什么是 Agent 技能？",
      subtitle: "把 Agent 技能想象成 AI 助手的操作指南。技能让 AI 在需要时随时学习 new 能力，就像给人一张菜谱卡，而不需要背整本食谱书。",
      howDesc: "技能是简单的文本文件（称为 SKILL.md），教导 AI 如何执行特定任务。当您要求 AI 做某事时，它会找到合适的技能，阅读指令，然后开始工作。",
      cards: [
        { title: "更快速、更轻量", desc: "AI 仅在需要时加载所需内容。不再有 10,000 行的提示膨胀。", icon: "⚡" },
        { title: "可移植", desc: "技能可跨不同的 AI 模型与工具使用。在 Cursor、Windsurf 或您自定义的 Agent 中使用相同的技能。", icon: "📦" },
        { title: "可验证", desc: "每个技能都包含明确的指令与示例，使其易于测试与改进。", icon: "✅" },
        { title: "见证奇迹", desc: "您的 Agent 现在具备了该技能. 不再需要在每个新对话中粘贴 50 行的提示. 它就是... 懂了。", icon: "🪄" }
      ],
    },
    how: {
      title: "运作方式",
      subtitle: "技能分三个阶段加载。这让 AI 保持快速：它永远不会加载超出所需的内容。",
      steps: [
        { title: "浏览", desc: "AI 看到可用技能列表，只有名称和简短描述。它扫描此列表以了解有哪些能力可用。", step: "01" },
        { title: "加载", desc: "当需要某个技能时，AI 从 SKILL.md 文件读取完整说明。它只加载与当前任务相关的内容。", step: "02" },
        { title: "使用", desc: "AI 按照说明操作，并访问技能附带的任何辅助文件：脚本、模板或参考文档。", step: "03" },
      ],
    },
    finding: {
      title: "如何找到技能",
      subtitle: "有三种推荐方式可以发现和安装技能。",
      items: [
        { 
          title: "SkillsMP 市场", 
          desc: "自动索引 GitHub 上的所有技能项目，并按类别、更新时间、星数等标签进行组织，是发现和评估技能最简单的方式。",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh 排行榜", 
          desc: "来自 Vercel 的排行榜，可直观查看最受欢迎的技能仓库和单个技能的使用统计。",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills 命令行工具", 
          desc: "使用 npx skills 命令行工具，直接从终端快速发现、添加和管理技能。",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "兼容的 Agent", 
      subtitle: "Agent 技能支持主要的 AI 编码工具与助手。点击任何行访问官方文档。",
      headers: { agent: "Agent", docs: "文档" }
    },
    directory: { 
      title: "技能目录", 
      subtitle: "按类别组织的官方与社区维护能力。点击任何卡片访问来源。",
      searchPlaceholder: "搜索技能...",
      noResults: "未找到符合搜索条件的技能。",
      tabs: {
        official: "官方",
        ai: "AI 模型",
        infra: "云端与基础设施",
        devtools: "开发工具",
        business: "商业",
        security: "安全"
      }
    },
    quality: { 
      title: "质量标准", 
      subtitle: "此目录中的每个技能都符合清晰度、精确性和实际可用性的最低标准。",
      items: [
        { title: "清晰且精确", description: "指令必须明确。避免使用「尝试」或「也许」。使用直接的语言，如「执行」或「生成」。" },
        { title: "专注的范围", description: "良好的技能可以很好地完成一件事。庞大的技能会降低 Agent 的速度并增加 token 开销。" },
        { title: "安全与可靠", description: "明确定义错误处理和边缘情况。技能应该知道何时停止并寻求确认。" },
        { title: "经证实的范例", description: "在 SKILL.md 中至少包含两个实际的使用范例，以使 Agent 的行为落实到具体任务中。" },
      ],
      goodHeader: "良好模式",
      goodPattern: "\"当 PR 打开时，扫描 `packages/core` 目录以查找更改。如果存在更改，运行 `npm test` 并将结果输出为摘要表。\"",
      goodDesc: "清晰的触发器、特定的目标、定义好的输出格式。",
      badHeader: "反模式",
      badPattern: "\"如果有时间，尝试看下代码，也许让我知道是否有任何东西看起来很奇怪或是否有错误。\"",
      badDesc: "无触发器、无目标、无成功标准。容易产生幻觉。"
    },
    using: { 
      title: "使用技能", 
      subtitle: "添加技能不到一分钟。无需配置文件，无需更改运行时。",
    },
    creating: { 
      title: "创建技能", 
      subtitle: "好的技能是精确、可移植且可测试的。",
      structureTitle: "文件夹结构",
      blueprintTitle: "SKILL.md 蓝图",
      structure: [
        { path: "my-skill/", desc: "您的发明。" },
        { path: "SKILL.md", desc: "大脑。" },
        { path: "scripts/", desc: "辅助工具。" },
        { path: "examples/", desc: "参考代码。" }
      ],
      blueprint: [
        { section: "# 技能名称", desc: "明确定义范围。" },
        { section: "## 目的", desc: "为什么存在？" },
        { section: "## 指令", desc: "循序渐进的逻辑。" },
        { section: "## 工具", desc: "所需的特定资源。" }
      ]
    },
    tutorials: {
      title: "教程与指南",
      subtitle: "帮助您从零到生产环境使用 Agent 技能的资源。",
      items: [
        { title: "技能驱动开发", desc: "了解如何围绕模块化 AI 能力构建您的工作流。", type: "策略" },
        { title: "MCP 深度解析", desc: "驱动技能发现的模型上下文协议 (Model Context Protocol) 技术指南。", type: "技术" },
        { title: "提示词 vs 技能", desc: "何时使用简单提示词，以及何时将其封装为可移植技能。", type: "最佳实践" }
      ]
    },
    trends: {
      title: "趋势与能力 (2026)",
      subtitle: "AI Agent 生态系统已从聊天界面转变为自主的目标驱动系统。以下是定义当今格局的关键。",
      chartLabel: "预计采用率, 2026",
      items: [
        { name: "自主执行", desc: "Agent 在无人干预的情况下完成多步目标。预计将出现在 40% 的企业应用中。" },
        { name: "模块化推理", desc: "针对不同任务类型在专业推理引擎之间切换。延迟降低 60%。" },
        { name: "边缘部署", desc: "在不依赖云端的情况下在本地设备上运行复杂的 Agent 逻辑。隐私优先应用大爆发。" },
        { name: "标准化协议", desc: "通过 MCP 及类似规范实现统一发现。跨所有主流 Agent 框架的互操作性。" }
      ]
    },
    faq: {
      title: "常见问题",
      subtitle: "对 Agent 技能感到陌生？这些是最常见的问题。",
      items: [
        { q: "什么是 MCP？", a: "模型上下文协议 (MCP) 是一个开放标准，允许 AI 模型发现并使用来自任何平台的数据与工具（技能）。" },
        { q: "我该如何评估质量？", a: "高质量技能具备清晰的成功标准、定义明确的失败模式，且无歧义。它应该在长上下文会话中也能稳定运行。" },
        { q: "技能是否支持所有工具？", a: "大多数现代 AI 工具都支持类技能构造。SKILL.md 格式旨在与框架无关。" }
      ]
    },
    contributing: { title: "贡献", subtitle: "帮助壮大最全面的开源 AI Agent 技能集合。", guideBtn: "贡献指南", repoBtn: "查看仓库" },
    footer: {
      bio: "为下一次 Agent 工程飞跃精心挑选的能力。标准化驱动世界上最智能自主助手的指令。",
      contactTitle: "关于此项目的任何问题、合作咨询或反馈：",
      citation: "引用",
      nav: {
        title: "导航",
        items: ["什么是 Agent 技能", "技能清单", "标准", "指南", "趋势", "常见问题"]
      },
      resources: {
        title: "资源",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "GitHub 仓库", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "贡献", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "技能模板", href: "#creating-skills" },
          { label: "授权", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. 基于 MIT 协议开源。",
        builtWith: "使用 Next.js 与 Three.js 构建",
        curatedBy: "由工程团队维护"
      }
    },
    snake: {
      title: "Agent 贪吃蛇",
      gameOver: "哎呀！再试一次？",
      desc: "引导您的 Agent 穿梭于目录中. 吞噬技能以变得更强。",
      init: "初始化",
      reboot: "重启",
      controls: "WASD / 方向键",
      mode: "可爱模式：开启",
      score: "分数",
      best: "最高",
    },
  },

  "ja": {
    nav: { brand: "Agent Skill Index", search: "ドキュメントを検索 (サイト内のみ)...", github: "GitHub で表示", sponsor: "スポンサー" },
    sidebar: {
      intro: "はじめに", directory: "ディレクトリ",
      standards: "標準とガイド", resources: "リソース",
      whatAreSkills: "スキルとは？", howItWorks: "仕組み",
      findingSkills: "スキルの探し方", compatibleAgents: "対応エージェント",
      aiPlatforms: "AI プラットフォーム", cloudInfra: "クラウド & インフラ",
      devTools: "開発ツール", business: "ビジネス",
      security: "セキュリティ", qualityStandards: "品質基準",
      usingSkills: "スキルを使う", creatingSkills: "スキルを作る",
      tutorials: "チュートリアル", trends: "トレンド (2026)",
      faq: "FAQ", contributing: "貢献する",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026年4月更新",
      subtitle: "AI エージェントの能力、ツール、ワークフローのための決定的なカタログとガイド。",
      browseBtn: "ディレクトリを閲覧", githubBtn: "GitHub で表示",
    },
    what: {
      title: "エージェントのスキルとは？",
      subtitle: "エージェントのスキルを、AIアシスタントの取扱説明書と考えてください。スキルを活用することで、AIは必要な時に新しい能力を即座に学ぶことができます。これは、料理本を丸ごと暗記させるのではなく、レシピカードを渡すようなものです。",
      howDesc: "スキルは、AIに特定のタスクの実行方法を教える単純なテキストファイル（SKILL.mdと呼ばれます）です。AIに何かを依頼すると、AIは適切なスキルを見つけ、指示を読み、作業を開始します。",
      cards: [
        { title: "より速く、より軽量に", desc: "AIは必要な分だけロードします。もう1万行のプロンプトで肥大化することはありません。", icon: "⚡" },
        { title: "ポータブル", desc: "スキルは異なるAIモデルやツール間で共有可能です。Cursor、Windsurf、または独自のカスタムエージェントで同じスキルを使用できます。", icon: "📦" },
        { title: "検証可能", desc: "すべてのスキルには明確な手順と例が含まれており、テストと改善が容易です。", icon: "✅" },
        { title: "魔法の瞬間", desc: "あなたのアージェントはそのスキルを習得しました。新しいチャットごとに50行のプロンプトを貼り付ける必要はありません。ただ... 知っています。", icon: "🪄" }
      ],
    },
    how: {
      title: "仕組み",
      subtitle: "スキルは3つの段階でロードされます。これによりAIは高速に保たれ、必要なもの以外はロードしません。",
      steps: [
        { title: "閲覧", desc: "AIは、名前と短い説明だけで構成された利用可能なスキルのリストを確認します。このリストをスキャンして、どのような能力が利用可能かを理解します。", step: "01" },
        { title: "ロード", desc: "スキルが必要になると、AIはSKILL.mdファイルから完全な指示を読み取ります。現在のタスクに関連するものだけをロードします。", step: "02" },
        { title: "使用", desc: "AIは指示に従い、スキルに含まれるスクリプト、テンプレート、参考ドキュメントなどのヘルパーファイルにアクセスします。", step: "03" },
      ],
    },
    finding: {
      title: "スキルの探し方",
      subtitle: "スキルを発見し、インストールするための推奨される3つの方法があります。",
      items: [
        { 
          title: "SkillsMP マーケットプレイス", 
          desc: "GitHub上のすべてのスキルプロジェクトを自動的にインデックス化し、カテゴリ、更新時間、スター数、その他のタグで整理します。スキルを発見して評価する最も簡単な方法です。",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh リーボード", 
          desc: "Vercelによる、最も人気のあるスキルリポジトリと個別のスキルの使用統計を直感的に表示するためのリーダーボードです。",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills CLIツール", 
          desc: "npx skillsコマンドラインツールを使用して、ターミナルから直接スキルを素早く発見、追加、管理できます。",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "対応エージェント", 
      subtitle: "エージェントスキルは主要なAIコーディングツールとアシスタントをサポートしています。公式ドキュメントを表示するには、いずれかの行をクリックしてください。",
      headers: { agent: "エージェント", docs: "ドキュメント" }
    },
    directory: { 
      title: "スキルディレクトリ", 
      subtitle: "カテゴリ別に整理された公式およびコミュニティメンテナンスの能力。ソースを表示するには、いずれかのカードをクリックしてください。",
      searchPlaceholder: "スキルを検索...",
      noResults: "検索条件に一致するスキルは見つかりませんでした。",
      tabs: {
        official: "公式",
        ai: "AIモデル",
        infra: "クラウド & インフラ",
        devtools: "開発ツール",
        business: "ビジネス",
        security: "セキュリティ"
      }
    },
    quality: { 
      title: "品質基準", 
      subtitle: "このディレクトリ内のすべてのスキルは、明確さ、正確性、および実用性の最低限の基準を満たしています。",
      items: [
        { title: "明確さと正確さ", description: "指示は曖昧であってはなりません。『～を試みる』や『たぶん』を避け、『実行する』『生成する』といった直接的な言葉を使用してください。" },
        { title: "焦点を絞った範囲", description: "優れたスキルは一つのことを完璧にこなします。巨大なスキルはエージェントを遅くし、トークンのオーバーヘッドを増やします。" },
        { title: "安全性と信頼性", description: "エラー処理とエッジケースを明示的に定義してください。スキルは、いつ停止し、確認を求めるべきかを知っている必要があります。" },
        { title: "実証済みの例", description: "エージェントが具体的な行動をとれるよう、SKILL.md に少なくとも2つの実世界の例を含めてください。" },
      ],
      goodHeader: "良いパターン",
      goodPattern: "『PRがオープンされたら、`packages/core` ディレクトリをスキャンして変更を確認します。変更がある場合は `npm test` を実行し、結果を要約テーブルとして出力します。』",
      goodDesc: "明確なトリガー、特定のターゲット、定義された出力形式。",
      badHeader: "アンチパターン",
      badPattern: "『時間があればコードを見てみて、何か変なところやバグがあれば教えてくれるとうれしいです。』",
      badDesc: "トリガーなし、ターゲットなし、成功基準なし。ハルシネーションを起こしやすい。"
    },
    using: { 
      title: "スキルを使う", 
      subtitle: "スキルの追加は1分もかかりません。設定ファイルも、ランタイムの変更も不要です。",
    },
    creating: { 
      title: "スキルを作る", 
      subtitle: "優れたスキルは、正確でポータブル、そしてテスト可能です。",
      structureTitle: "フォルダ構造",
      blueprintTitle: "SKILL.md 設計図",
      structure: [
        { path: "my-skill/", desc: "あなたの発明。" },
        { path: "SKILL.md", desc: "頭脳。" },
        { path: "scripts/", desc: "ヘルパーツール。" },
        { path: "examples/", desc: "参考コード。" }
      ],
      blueprint: [
        { section: "# スキル名", desc: "範囲を明確に定義します。" },
        { section: "## 目的", desc: "なぜ存在するのか？" },
        { section: "## 手順", desc: "ステップバイステップのロジック。" },
        { section: "## ツール", desc: "必要な特定のリソース。" }
      ]
    },
    tutorials: {
      title: "チュートリアル & ガイド",
      subtitle: "エージェントスキルをゼロから本番環境まで活用するためのリソース。",
      items: [
        { title: "スキル駆動開発", desc: "モジュール化されたAI能力を中心にワークフローを設計する方法を学びます。", type: "戦略" },
        { title: "MCP 深堀り", desc: "スキル発見を支える Model Context Protocol の技術ガイド。", type: "技術" },
        { title: "プロンプト vs スキル", desc: "単なるプロンプトで済ませる場合と、ポータブルなスキルとして構成する場合の違い。", type: "ベストプラクティス" }
      ]
    },
    trends: {
      title: "トレンドと能力 (2026)",
      subtitle: "AIエージェントのエコシステムは、チャットインターフェースから自律的な目標駆動型システムへと移行しました。今日の状況を定義する要素を以下に示します。",
      chartLabel: "予測される採用率, 2026",
      items: [
        { name: "自律的な実行", desc: "エージェントが人間の介入なしに多段階の目標を完了します。企業のアプリの40%に導入される見込みです。" },
        { name: "モジュール化された推論", desc: "タスクに応じて特殊な推論エンジンを切り替えます。レイテンシを60%削減します。" },
        { name: "エッジデプロイ", desc: "クラウドに依存せず、ローカルデバイスで複雑なエージェントロジックを実行します。プライバシー重視のアプリで大きな成長が見られます。" },
        { name: "標準化されたプロトコル", desc: "MCPなどを通じた統一された発見。すべての主要なエージェントフレームワーク間での相互運用性。" }
      ]
    },
    faq: {
      title: "よくある質問",
      subtitle: "エージェントスキルは初めてですか？よくある質問をまとめました。",
      items: [
        { q: "MCPとは何ですか？", a: "Model Context Protocol (MCP) は、AIモデルがプラットフォームに関係なくデータやツール（スキル）を発見して使用できるようにするオープンスタンダードです。" },
        { q: "品質はどのように評価しますか？", a: "高品質なスキルには、明確な成功基準、定義された失敗モード、曖昧さのない言葉があります。長いコンテキストセッションでも安定して動作する必要があります。" },
        { q: "スキルはすべてのツールで使えますか？", a: "ほとんどの最新のAIツールはスキルに似た構造をサポートしています。SKILL.md形式はフレームワークに依存しないように構築されています。" }
      ]
    },
    contributing: { title: "貢献する", subtitle: "最も包括的なオープンソースの AI エージェントスキルのコレクションの成長を支援してください。", guideBtn: "貢献ガイド", repoBtn: "リポジトリを表示" },
    footer: {
      bio: "エージェント・エンジニアリングの次なる飛躍のために厳選された能力。世界で最もインテリジェントな自律型アシスタントを支える指示を標準化します。",
      contactTitle: "このプロジェクトに関する質問、パートナーシップのお問い合わせ、またはフィードバック：",
      citation: "引用",
      nav: {
        title: "ナビゲーション",
        items: ["スキルとは", "スキルディレクトリ", "標準", "ガイド", "トレンド", "FAQ"]
      },
      resources: {
        title: "リソース",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "GitHub リポジトリ", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "貢献する", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "スキルテンプレート", href: "#creating-skills" },
          { label: "ライセンス", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. MIT ライセンスの下でオープンソース化。",
        builtWith: "Next.js と Three.js で構築",
        curatedBy: "エンジニアリングチームによってキュレーション"
      }
    },
    snake: {
      title: "Agent スネーク",
      gameOver: "あぁっ！もう一度？",
      desc: "エージェントをディレクトリ内で操作します。スキルを食べて強くなりましょう。",
      init: "初期化",
      reboot: "再起動",
      controls: "WASD / 矢印キー",
      mode: "キュートモード: ON",
      score: "スコア",
      best: "ベスト",
    },
  },

  "ko": {
    nav: { brand: "Agent Skill Index", search: "문서 검색 (웹사이트 전용)...", github: "GitHub에서 보기", sponsor: "스폰서" },
    sidebar: {
      intro: "소개", directory: "디렉토리",
      standards: "표준 및 가이드", resources: "리소스",
      whatAreSkills: "스킬이란?", howItWorks: "작동 방식",
      findingSkills: "스킬 찾기", compatibleAgents: "호환 에이전트",
      aiPlatforms: "AI 플랫폼", cloudInfra: "클라우드 및 인프라",
      devTools: "개발 도구", business: "비즈니스",
      security: "보안", qualityStandards: "품질 표준",
      usingSkills: "스킬 사용", creatingSkills: "스킬 만들기",
      tutorials: "튜토리얼", trends: "트렌드 (2026)",
      faq: "FAQ", contributing: "기여",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026년 4월 업데이트",
      subtitle: "AI 에이전트 기능, 도구 및 워크플로우를 위한 결정적인 카탈로그 및 가이드.",
      browseBtn: "디렉토리 찾아보기", githubBtn: "GitHub에서 보기",
    },
    what: {
      title: "에이전트 스킬이란 무엇인가요?",
      subtitle: "에이전트 스킬을 AI 어시스턴트를 위한 취급 설명서라고 생각하세요. 스킬을 통해 AI는 필요할 때 즉석에서 새로운 기능을 배울 수 있습니다. 마치 요리책 전체를 외우게 하는 대신 레시피 카드를 한 장 주는 것과 같습니다.",
      howDesc: "스킬은 AI에게 특정 작업을 수행하는 방법을 가르치는 단순한 텍스트 파일(SKILL.md라고 함)입니다. AI에게 무언가를 요청하면 AI는 적절한 스킬을 찾아 지침을 읽고 작업을 시작합니다.",
      cards: [
        { title: "더 빠르고 가볍게", desc: "AI는 필요한 것만 필요한 때에 로드합니다. 더 이상 10,000줄의 프롬프트 비대화가 없습니다.", icon: "⚡" },
        { title: "이식성", desc: "스킬은 다양한 AI 모델과 도구에서 작동합니다. Cursor, Windsurf 또는 커스텀 에이전트에서 동일한 스킬을 사용하세요.", icon: "📦" },
        { title: "검증 가능함", desc: "모든 스킬에는 명확한 지침과 예시가 포함되어 있어 테스트와 개선이 쉽습니다.", icon: "✅" },
        { title: "마법 같은 순간", desc: "이제 에이전트가 그 스킬을 갖게 되었습니다. 새로운 채팅마다 50줄의 프롬프트를 붙여넣을 필요가 없습니다. 그냥... 알게 됩니다.", icon: "🪄" }
      ],
    },
    how: {
      title: "작동 방식",
      subtitle: "스킬은 세 단계로 로드됩니다. 이를 통해 AI를 빠르게 유지하며, 필요한 것 이외에는 로드하지 않습니다.",
      steps: [
        { title: "검색", desc: "AI가 사용 가능한 스킬 목록을 확인합니다. 이름과 짧은 설명만 보고 어떤 기능이 있는지 파악합니다.", step: "01" },
        { title: "로드", desc: "스킬이 필요할 때 AI는 SKILL.md 파일에서 전체 지침을 읽습니다. 현재 작업과 관련된 내용만 로드합니다.", step: "02" },
        { title: "사용", desc: "AI는 지침을 따르고 스킬에 포함된 스크립트, 템플릿 또는 참조 문서와 같은 헬퍼 파일에 액세스합니다.", step: "03" },
      ],
    },
    finding: {
      title: "스킬을 찾는 방법",
      subtitle: "스킬을 발견하고 설치하는 권장되는 세 가지 방법이 있습니다.",
      items: [
        { 
          title: "SkillsMP 마켓플레이스", 
          desc: "GitHub의 모든 스킬 프로젝트를 자동으로 인덱싱하고 카테고리, 업데이트 시간, 별표 수 및 기타 태그별로 정리하여 스킬을 발견하고 평가하는 가장 쉬운 방법입니다.",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh 리더보드", 
          desc: "가장 인기 있는 스킬 저장소와 개별 스킬 사용 통계를 직관적으로 볼 수 있는 Vercel의 리더보드입니다.",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills CLI 도구", 
          desc: "npx skills 명령줄 도구를 사용하여 터미널에서 직접 스킬을 빠르게 발견하고 추가 및 관리할 수 있습니다.",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "호환되는 에이전트", 
      subtitle: "에이전트 스킬은 주요 AI 코딩 도구 및 어시스턴트를 지원합니다. 공식 문서를 보려면 아무 행이나 클릭하세요.",
      headers: { agent: "에이전트", docs: "문서" }
    },
    directory: { 
      title: "스킬 디렉토리", 
      subtitle: "카테고리별로 구성된 공식 및 커뮤니티 유지 관리 기능. 소스를 보려면 아무 카드나 클릭하세요.",
      searchPlaceholder: "스킬 검색...",
      noResults: "검색어와 일치하는 스킬을 찾을 수 없습니다.",
      tabs: {
        official: "공식",
        ai: "AI 모델",
        infra: "클라우드 및 인프라",
        devtools: "개발 도구",
        business: "비즈니스",
        security: "보안"
      }
    },
    quality: { 
      title: "품질 표준", 
      subtitle: "이 디렉토리의 모든 스킬은 명확성, 정밀성 및 실제 유용성에 대한 최소 기준을 충족합니다.",
      items: [
        { title: "명확성 및 정밀성", description: "지침은 모호하지 않아야 합니다. '시도하다' 또는 '아마도'와 같은 표현을 피하고 '실행' 또는 '생성'과 같은 직접적인 언어를 사용하세요." },
        { title: "집중된 범위", description: "좋은 스킬은 한 가지 일을 잘 수행합니다. 거대한 스킬은 에이전트를 느리게 하고 토큰 오버헤드를 증가시킵니다." },
        { title: "안전성 및 신뢰성", description: "오류 처리 및 예외 상황을 명시적으로 정의하세요. 스킬은 언제 멈추고 확인을 요청해야 하는지 알고 있어야 합니다." },
        { title: "검증된 사례", description: "에이전트에게 구체적인 행동 근거를 제공하기 위해 SKILL.md에 하나 이상의 실제 사용 사례를 포함하세요." },
      ],
      goodHeader: "좋은 패턴",
      goodPattern: "\"PR이 열리면 `packages/core` 디렉토리의 변경 사항을 스캔합니다. 변경 사항이 있으면 `npm test`를 실행하고 결과를 요약 표로 출력합니다.\"",
      goodDesc: "명확한 트리거, 구체적인 대상, 정의된 출력 형식.",
      badHeader: "안티 패턴",
      badPattern: "\"시간이 되면 코드를 살펴보고 혹시 이상한 게 보이거나 버그가 있으면 알려주세요.\"",
      badDesc: "트리거 없음, 대상 없음, 성공 기준 없음. 환각이 발생할 가능성이 높음."
    },
    using: { 
      title: "스킬 사용하기", 
      subtitle: "스킬을 추가하는 데 1분도 걸리지 않습니다. 설정 파일도, 런타임 변경도 필요 없습니다.",
    },
    creating: { 
      title: "스킬 만들기", 
      subtitle: "좋은 스킬은 정밀하고 이식 가능하며 테스트 가능해야 합니다.",
      structureTitle: "폴더 구조",
      blueprintTitle: "SKILL.md 청사진",
      structure: [
        { path: "my-skill/", desc: "당신의 발명품." },
        { path: "SKILL.md", desc: "두뇌." },
        { path: "scripts/", desc: "헬퍼 도구." },
        { path: "examples/", desc: "참조 코드." }
      ],
      blueprint: [
        { section: "# 스킬 이름", desc: "범위를 명확하게 정의합니다." },
        { section: "## 목적", desc: "왜 존재하는가?" },
        { section: "## 지침", desc: "단계별 로직." },
        { section: "## 도구", desc: "필요한 특정 리소스." }
      ]
    },
    tutorials: {
      title: "튜토리얼 및 가이드",
      subtitle: "에이전트 스킬을 기초부터 실전까지 활용하기 위한 리소스.",
      items: [
        { title: "스킬 기반 개발", desc: "모듈식 AI 기능을 중심으로 워크플로우를 아키텍처링하는 방법을 배웁니다.", type: "전략" },
        { title: "MCP 심층 분석", desc: "스킬 검색을 지원하는 Model Context Protocol에 대한 기술 가이드.", type: "기술" },
        { title: "프롬프트 vs 스킬", desc: "단순한 프롬프트를 사용할 때와 포터블 스킬로 구성할 때의 차이점.", type: "베스트 프랙티스" }
      ]
    },
    trends: {
      title: "트렌드 및 역량 (2026)",
      subtitle: "AI 에이전트 에코시스템은 채팅 인터페이스에서 자율적인 목표 지향 시스템으로 전환되었습니다. 오늘날의 지형을 정의하는 요소는 다음과 같습니다.",
      chartLabel: "예상 채택률, 2026",
      items: [
        { name: "자율 실행", desc: "에이전트가 인간의 개입 없이 다단계 목표를 완료합니다. 엔터프라이즈 앱의 40%에서 예상됩니다." },
        { name: "모듈식 추론", desc: "작업 유형에 따라 특화된 추론 엔진 간에 전환합니다. 지연 시간을 60% 줄입니다." },
        { name: "엣지 배포", desc: "클라우드 의존성 없이 로컬 장치에서 복잡한 에이전트 로직을 실행합니다. 프라이버시 우선 앱에서 큰 성장이 보입니다." },
        { name: "표준화된 프로토콜", desc: "MCP 및 유사한 사양을 통한 통합 발견. 모든 주요 에이전트 프레임워크 간의 상호 운용성." }
      ]
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "에이전트 스킬이 처음이신가요? 가장 자주 묻는 질문들입니다.",
      items: [
        { q: "What is MCP?", a: "Model Context Protocol (MCP)은 AI 모델이 플랫폼에 관계없이 데이터와 도구(스킬)를 발견하고 사용할 수 있도록 하는 오픈 표준입니다." },
        { q: "품질은 어떻게 평가하나요?", a: "고품질 스킬은 명확한 성공 기준, 정의된 실패 모드, 모호하지 않은 언어를 갖추고 있습니다. 긴 컨텍스트 세션에서도 안정적으로 작동해야 합니다." },
        { q: "스킬은 모든 도구에서 작동하나요?", a: "대부분의 최신 AI 도구는 스킬과 유사한 구조를 지원합니다. SKILL.md 형식은 프레임워크에 구애받지 않도록 설계되었습니다." }
      ]
    },
    contributing: { title: "기여하기", subtitle: "가장 포괄적인 오픈 소스 AI 에이전트 스킬 컬렉션의 성장을 도와주세요.", guideBtn: "기여 가이드", repoBtn: "저장소 보기" },
    footer: {
      bio: "에이전트 엔지니어링의 다음 도약을 위해 엄선된 역량입니다. 세계에서 가장 지능적인 자율 어시스턴트를 구동하는 지침을 표준화합니다.",
      contactTitle: "이 프로젝트에 대한 질문, 파트너십 문의 또는 피드백:",
      citation: "인용",
      nav: {
        title: "내비게이션",
        items: ["스킬이란", "스킬 디렉토리", "표준", "가이드", "트렌드", "FAQ"]
      },
      resources: {
        title: "리소스",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "GitHub 저장소", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "기여하기", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "스킬 템플릿", href: "#creating-skills" },
          { label: "라이선스", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. MIT 라이선스 하에 오픈 소스.",
        builtWith: "Next.js 및 Three.js로 구축",
        curatedBy: "엔지니어링 팀에서 큐레이션함"
      }
    },
    snake: {
      title: "Agent 스네이크",
      gameOver: "앗! 다시 시도하시겠습니까?",
      desc: "디렉토리에서 에이전트를 조작하세요. 스킬을 먹어 더 강해지세요.",
      init: "초기화",
      reboot: "재부팅",
      controls: "WASD / 방향키",
      mode: "귀여운 모드: ON",
      score: "점수",
      best: "최고 점수",
    },
  },

  "es": {
    nav: { brand: "Agent Skill Index", search: "Buscar docs (Sólo sitio web)...", github: "Ver en GitHub", sponsor: "PATROCINADO" },
    sidebar: {
      intro: "Introducción", directory: "Directorio",
      standards: "Estándares y Guías", resources: "Recursos",
      whatAreSkills: "¿Qué son las Skills?", howItWorks: "Cómo funciona",
      findingSkills: "Encontrar Skills", compatibleAgents: "Agentes Compatibles",
      aiPlatforms: "Plataformas AI", cloudInfra: "Cloud & Infra",
      devTools: "Herramientas Dev", business: "Negocios",
      security: "Seguridad", qualityStandards: "Estándares de Calidad",
      usingSkills: "Uso de Skills", creatingSkills: "Creación de Skills",
      tutorials: "Tutoriales", trends: "Tendencias (2026)",
      faq: "FAQ", contributing: "Contribuir",
    },
    hero: {
      title: "Agent Skill Index",
      badge: "Actualizado en Abril 2026",
      subtitle: "El catálogo definitivo y guía para las capacidades, herramientas y flujos de trabajo de agentes de IA.",
      browseBtn: "Explorar Directorio", githubBtn: "Ver en GitHub",
    },
    what: {
      title: "¿Qué es una Agent Skill?",
      subtitle: "Imagina una Agent Skill como un manual de instrucciones para tu asistente de IA. Las skills permiten que la IA aprenda nuevas capacidades en el momento que las necesita, como darle a una persona una ficha de receta en lugar de hacer que memorice todo un libro de cocina.",
      howDesc: "Las skills son archivos de texto simples (llamados SKILL.md) que enseñan a una IA cómo hacer tareas específicas. Cuando le pides a la IA que haga algo, encuentra la skill adecuada, lee las instrucciones y se pone a trabajar.",
      cards: [
        { title: "Más Rápido y Ligero", desc: "La IA solo carga lo que necesita. No más prompts de 10,000 líneas.", icon: "⚡" },
        { title: "Portátil", desc: "Las skills funcionan en diferentes modelos y herramientas. Usa la misma skill en Cursor, Windsurf o tu agente personalizado.", icon: "📦" },
        { title: "Verificable", desc: "Cada skill incluye instrucciones claras y ejemplos, lo que facilita su prueba y mejora.", icon: "✅" },
        { title: "Momentos Mágicos", desc: "Tu agente ahora tiene esa habilidad. Ya no tienes que pegar 50 líneas de prompts en cada chat. Simplemente... lo sabe.", icon: "🪄" }
      ],
    },
    how: {
      title: "Cómo Funciona",
      subtitle: "Las skills se cargan en tres etapas. Esto mantiene la IA rápida: nunca carga más de lo que necesita.",
      steps: [
        { title: "Explorar", desc: "La IA ve una lista de skills disponibles, solo nombres y descripciones cortas. Escanea esta lista para entender qué capacidades están disponibles.", step: "01" },
        { title: "Cargar", desc: "Cuando se necesita una skill, la IA lee las instrucciones completas del archivo SKILL.md. Solo carga lo relevante para tu tarea actual.", step: "02" },
        { title: "Usar", desc: "La IA sigue las instrucciones y accede a cualquier archivo auxiliar: scripts, plantillas o documentos de referencia incluidos con la skill.", step: "03" },
      ],
    },
    finding: {
      title: "Cómo Encontrar Skills",
      subtitle: "Hay tres formas recomendadas de descubrir e instalar skills.",
      items: [
        { 
          title: "SkillsMP Marketplace", 
          desc: "Indexa automáticamente todos los proyectos de Skills en GitHub y los organiza por categoría, tiempo de actualización, estrellas y otras etiquetas.",
          link: "https://skillsmp.com"
        },
        { 
          title: "skills.sh Leaderboard", 
          desc: "El tablero de Vercel para visualizar intuitivamente los repositorios de Skills más populares y estadísticas de uso individual.",
          link: "https://skills.sh"
        },
        { 
          title: "npx skills CLI Tool", 
          desc: "Usa la herramienta de línea de comandos npx skills para descubrir, añadir y gestionar skills rápidamente desde tu terminal.",
          link: "https://github.com/heilcheng/awesome-agent-skills"
        },
      ],
    },
    compatible: { 
      title: "Agentes Compatibles", 
      subtitle: "Las Agent Skills funcionan en las principales herramientas y asistentes de codificación de IA. Haz clic en cualquier fila para visitar la documentación oficial.",
      headers: { agent: "Agente", docs: "Documentación" }
    },
    directory: { 
      title: "Directorio de Skills", 
      subtitle: "Capacidades oficiales y mantenidas por la comunidad organizadas por categoría. Haz clic en cualquier tarjeta para ver la fuente.",
      searchPlaceholder: "Buscar skills...",
      noResults: "No se encontraron skills que coincidan con tu búsqueda.",
      tabs: {
        official: "Oficial",
        ai: "Modelos AI",
        infra: "Cloud & Infra",
        devtools: "Herramientas Dev",
        business: "Negocios",
        security: "Seguridad"
      }
    },
    quality: { 
      title: "Estándares de Calidad", 
      subtitle: "Cada skill en este directorio cumple con un estándar mínimo de claridad, precisión y usabilidad real.",
      items: [
        { title: "Claridad y Precisión", description: "Las instrucciones deben ser inequívocas. Evite 'intente' o 'tal vez'. Use lenguaje directo como 'Ejecutar' o 'Generar'." },
        { title: "Alcance Enfocado", description: "Una buena skill hace una cosa bien. Las skills monolíticas ralentizan a los agentes y aumentan el costo de tokens." },
        { title: "Seguridad y Confiabilidad", description: "Defina explícitamente el manejo de errores y casos específicos. Una skill debe saber cuándo detenerse y pedir confirmación." },
        { title: "Ejemplos Probados", description: "Incluya al menos dos ejemplos de uso del mundo real en SKILL.md para fundamentar el comportamiento del agente." },
      ],
      goodHeader: "Buen patrón",
      goodPattern: "\"Cuando se abra un PR, escanee el directorio `packages/core` en busca de cambios. Si existen, ejecute `npm test` y muestre los resultados como una tabla resumen.\"",
      goodDesc: "Activador claro, objetivo específico, formato de salida definido.",
      badHeader: "Antipatrón",
      badPattern: "\"Intente revisar el código si tiene tiempo y tal vez avíseme si algo se ve raro o si hay errores.\"",
      badDesc: "Sin activador, sin objetivo, sin criterios de éxito. Propenso a alucinaciones."
    },
    using: { 
      title: "Uso de Skills", 
      subtitle: "Añadir una skill toma menos de un minuto. Sin archivos de configuración, sin cambios en el tiempo de ejecución.",
    },
    creating: { 
      title: "Creación de Skills", 
      subtitle: "Una buena skill es precisa, portátil y testeable.",
      structureTitle: "Estructura de Carpetas",
      blueprintTitle: "Plano de SKILL.md",
      structure: [
        { path: "my-skill/", desc: "Tu invento." },
        { path: "SKILL.md", desc: "El cerebro." },
        { path: "scripts/", desc: "Herramientas de ayuda." },
        { path: "examples/", desc: "Código de referencia." }
      ],
      blueprint: [
        { section: "# Nombre de la Skill", desc: "Define claramente el alcance." },
        { section: "## Propósito", desc: "¿Por qué existe?" },
        { section: "## Instrucciones", desc: "Lógica paso a paso." },
        { section: "## Herramientas", desc: "Recursos específicos necesarios." }
      ]
    },
    tutorials: {
      title: "Tutoriales y Guías",
      subtitle: "Recursos para llevarte de cero a producción con Agent Skills.",
      items: [
        { title: "Desarrollo Impulsado por Skills", desc: "Aprende a diseñar tu flujo de trabajo en torno a habilidades modulares de IA.", type: "Estrategia" },
        { title: "Deep Dive en MCP", desc: "La guía técnica del Model Context Protocol que potencia el descubrimiento de skills.", type: "Técnico" },
        { title: "Prompt vs Skill", desc: "Cuándo usar un prompt simple y cuándo empaquetarlo en una skill portátil.", type: "Práctica Recomendada" }
      ]
    },
    trends: {
      title: "Tendencias y Capacidades (2026)",
      subtitle: "El ecosistema de agentes de IA ha pasado de interfaces de chat a sistemas autónomos impulsados por objetivos. Esto es lo que define el panorama actual.",
      chartLabel: "Adopción Proyectada, 2026",
      items: [
        { name: "Ejecución Autónoma", desc: "Los agentes completan objetivos de varios pasos sin intervención humana. Se espera en el 40% de las apps empresariales." },
        { name: "Razonamiento Modular", desc: "Cambio entre motores de razonamiento especializados para diferentes tipos de tareas. Reducción de latencia en un 60%." },
        { name: "Despliegue en el Edge", desc: "Ejecución de lógica compleja de agentes en dispositivos locales sin dependencia de la nube. Gran crecimiento en apps de privacidad." },
        { name: "Protocolos Estandarizados", desc: "Descubrimiento unificado a través de MCP y especificaciones similares. Interoperabilidad entre marcos de agentes." }
      ]
    },
    faq: {
      title: "FAQ",
      subtitle: "¿Eres nuevo en Agent Skills? Aquí tienes las preguntas más comunes.",
      items: [
        { q: "What is MCP?", a: "El Model Context Protocol (MCP) es un estándar abierto que permite a los modelos de IA descubrir y utilizar datos y herramientas (skills) independientemente de la plataforma." },
        { q: "Cómo evalúo la calidad?", a: "Una skill de alta calidad tiene criterios de éxito claros, modos de falla definidos y lenguaje sin ambigüedades." },
        { q: "Do skills work across all tools?", a: "La mayoría de las herramientas de IA modernas admiten construcciones similares a skills. El formato SKILL.md es agnóstico al marco." }
      ]
    },
    contributing: { title: "Contribuir", subtitle: "Ayuda a hacer crecer la colección de código abierto más completa de skills para agentes de IA.", guideBtn: "Guía de Contribución", repoBtn: "Ver Repositorio" },
    footer: {
      bio: "Capacidades seleccionadas para el próximo salto en la ingeniería de agentes. Estandarizando las instrucciones que potencian a los asistentes autónomos más inteligentes del mundo.",
      contactTitle: "Preguntas, consultas de asociación o comentarios sobre este proyecto:",
      citation: "Cita",
      nav: {
        title: "Navegación",
        items: ["Qué es", "Directorio de Skills", "Estándares", "Guías", "Tendencias", "FAQ"]
      },
      resources: {
        title: "Recursos",
        items: [
          { label: "agent-skill.co", href: "https://agent-skill.co" },
          { label: "Repo GitHub", href: "https://github.com/heilcheng/awesome-agent-skills" },
          { label: "Contribuir", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
          { label: "Plantilla de Skill", href: "#creating-skills" },
          { label: "Licencia", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
          { label: "awesome-claude-code", href: "https://github.com/hesreallyhim/awesome-claude-code" },
          { label: "awesome-design-md", href: "https://github.com/VoltAgent/awesome-design-md" },
          { label: "awesome-openclaw-skills", href: "https://github.com/VoltAgent/awesome-openclaw-skills" },
          { label: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers" },
        ]
      },
      bottom: {
        copyright: "© 2026 Agent Skill Index. Código abierto bajo MIT.",
        builtWith: "Construido con Next.js y Three.js",
        curatedBy: "Curado por equipos de ingeniería"
      }
    },
    snake: {
      title: "Agent Snake",
      gameOver: "¡Ay! ¿Intentar de nuevo?",
      desc: "Navega con tu agente por el directorio. Come skills para fortalecerte.",
      init: "INICIALIZAR",
      reboot: "REINICIAR",
      controls: "WASD / FLECHAS",
      mode: "MODO CUTE: ACTIVADO",
      score: "Puntuación",
      best: "Mejor",
    },
  },
} as const;

export type Translations = typeof t.en;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && LANGUAGES.some((l) => l.code === saved)) setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslations(): Translations {
  const { lang } = useLanguage();
  return t[lang] as unknown as Translations;
}
