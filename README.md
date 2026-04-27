# Agent Skill Index

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 Browse the live directory at **[agent-skill.co](https://agent-skill.co)**

Maintained by [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

Never heard of "agent skills" before? You're in the right place. This is a community-curated list of simple text files that teach AI assistants (like Claude, Copilot, or Codex) how to do new things on demand, without retraining. Unlike bulk-generated skill repositories, this collection focuses on real-world Agent Skills created and used by actual engineering teams. Compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, Windsurf, and more.

---

## Quick Start (30 seconds)

**Step 1: Pick a skill** from the directory below (or browse at [agent-skill.co](https://agent-skill.co))

**Step 2: Load it into your AI agent:**
- Claude Code: `/skills add <github-url>`
- Claude.ai: paste the raw SKILL.md URL in a new conversation
- Codex / Copilot: follow platform docs linked in [Using Skills](#using-skills)

**Step 3: Ask your AI to use it.** Just describe what you want in plain English.

That's it. No installation. No configuration. No coding required.

---

## Table of Contents

- [What Are Agent Skills?](#what-are-agent-skills)
- [How to Find Skills (Recommended)](#how-to-find-skills-recommended)
- [Compatible Agents](#compatible-agents)
- [Official Skill Directories](#official-skill-directories)
  - [AI Platforms & Models](#ai-platforms--models)
  - [Cloud & Infrastructure](#cloud--infrastructure)
  - [Developer Tools & Frameworks](#developer-tools--frameworks)
  - [Google Ecosystem](#google-ecosystem)
  - [Business, Productivity & Marketing](#business-productivity--marketing)
  - [Security & Web Intelligence](#security--web-intelligence)
- [Community Skills](#community-skills)
  - [Vector Databases](#vector-databases)
  - [Marketing](#marketing)
  - [Productivity and Collaboration](#productivity-and-collaboration)
  - [Development and Testing](#development-and-testing)
  - [Context Engineering](#context-engineering)
- [Skill Quality Standards](#skill-quality-standards)
- [Using Skills](#using-skills)
- [Creating Skills](#creating-skills)
- [Official Tutorials and Guides](#official-tutorials-and-guides)
- [Trends & Capabilities (2026)](#trends--capabilities-2026)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## What Are Agent Skills?

Think of **Agent Skills** as "how-to guides" for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly, like giving someone a recipe card instead of making them memorize an entire cookbook.

Skills are simple text files (called `SKILL.md`) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.

### How It Works

Skills load in three stages:

1. **Browse**: The AI sees a list of available skills (just names and short descriptions)
2. **Load**: When a skill is needed, the AI reads the full instructions
3. **Use**: The AI follows the instructions and accesses any helper files

### Why This Matters

- **Faster and lighter**: The AI only loads what it needs, when it needs it
- **Works everywhere**: Create a skill once, use it with any compatible AI tool
- **Easy to share**: Skills are just files you can copy, download, or share on GitHub

Skills are **instructions**, not code. The AI reads them like a human would read a guide, then follows the steps.

---

## How to Find Skills (Recommended)

### SkillsMP Marketplace

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

It is recommended to use the **[SkillsMP Marketplace](https://skillsmp.com)**, which automatically indexes all Skill projects on GitHub and organizes them by category, update time, star count, and other tags — making it the easiest way to discover and evaluate skills.

### skills.sh Leaderboard by Vercel

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

You can also use **[skills.sh](https://skills.sh)** — Vercel's leaderboard — to intuitively view the most popular Skills repositories and individual Skill usage statistics.

### npx skills CLI Tool

For specific skills, use the `npx skills` command-line tool to quickly discover, add, and manage skills. For detailed parameters, see [vercel-labs/skills](https://github.com/vercel-labs/skills).

```bash
npx skills find [query]            # Search for related skills
npx skills add <owner/repo>        # Install skills (supports GitHub shorthand, full URL, local path)
npx skills list                    # List installed skills
npx skills check                   # Check for available updates
npx skills update                  # Upgrade all skills
npx skills remove [skill-name]     # Uninstall skills
```

---

## Compatible Agents

| Agent | Documentation |
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

## Official Skill Directories

### AI Platforms & Models

#### Skills by Anthropic
Official built-in skills for common document types and creative workflows.
- [anthropics/docx](https://agent-skill.co/anthropics/skills/docx) - Create, edit, and analyze Word documents
- [anthropics/doc-coauthoring](https://agent-skill.co/anthropics/skills/doc-coauthoring) - Collaborative document editing and co-authoring
- [anthropics/pptx](https://agent-skill.co/anthropics/skills/pptx) - Create, edit, and analyze PowerPoint presentations
- [anthropics/xlsx](https://agent-skill.co/anthropics/skills/xlsx) - Create, edit, and analyze Excel spreadsheets
- [anthropics/pdf](https://agent-skill.co/anthropics/skills/pdf) - Extract text, create PDFs, and handle forms
- [anthropics/algorithmic-art](https://agent-skill.co/anthropics/skills/algorithmic-art) - Create generative art using p5.js with seeded randomness
- [anthropics/canvas-design](https://agent-skill.co/anthropics/skills/canvas-design) - Design visual art in PNG and PDF formats
- [anthropics/frontend-design](https://agent-skill.co/anthropics/skills/frontend-design) - Frontend design and UI/UX development tools
- [anthropics/slack-gif-creator](https://agent-skill.co/anthropics/skills/slack-gif-creator) - Create animated GIFs optimized for Slack size constraints
- [anthropics/theme-factory](https://agent-skill.co/anthropics/skills/theme-factory) - Style artifacts with professional themes or generate custom themes
- [anthropics/web-artifacts-builder](https://agent-skill.co/anthropics/skills/web-artifacts-builder) - Build complex claude.ai HTML artifacts with React and Tailwind
- [anthropics/mcp-builder](https://agent-skill.co/anthropics/skills/mcp-builder) - Create MCP servers to integrate external APIs and services
- [anthropics/webapp-testing](https://agent-skill.co/anthropics/skills/webapp-testing) - Test local web applications using Playwright
- [anthropics/brand-guidelines](https://agent-skill.co/anthropics/skills/brand-guidelines) - Apply Anthropic's brand colors and typography to artifacts
- [anthropics/internal-comms](https://agent-skill.co/anthropics/skills/internal-comms) - Write status reports, newsletters, and FAQs
- [anthropics/skill-creator](https://agent-skill.co/anthropics/skills/skill-creator) - Guide for creating skills that extend Claude's capabilities
- [anthropics/template](https://agent-skill.co/anthropics/skills/template) - Basic template for creating new skills

#### Skills by OpenAI (Codex)
Official curated skills from OpenAI's catalog.
- [openai/cloudflare-deploy](https://agent-skill.co/openai/skills/cloudflare-deploy) - Deploy apps to Cloudflare using Workers and Pages
- [openai/develop-web-game](https://agent-skill.co/openai/skills/develop-web-game) - Build and test web games iteratively using Playwright
- [openai/doc](https://agent-skill.co/openai/skills/doc) - Read, create, and edit .docx documents with formatting
- [openai/gh-address-comments](https://agent-skill.co/openai/skills/gh-address-comments) - Address review and issue comments on open GitHub PRs via CLI
- [openai/gh-fix-ci](https://agent-skill.co/openai/skills/gh-fix-ci) - Debug and fix failing GitHub Actions PR checks
- [openai/imagegen](https://agent-skill.co/openai/skills/imagegen) - Generate and edit images using OpenAI's Image API
- [openai/jupyter-notebook](https://agent-skill.co/openai/skills/jupyter-notebook) - Create clean, reproducible Jupyter notebooks
- [openai/linear](https://agent-skill.co/openai/skills/linear) - Manage issues, projects, and team workflows in Linear
- [openai/netlify-deploy](https://agent-skill.co/openai/skills/netlify-deploy) - Automate Netlify deployments with CLI support
- [openai/notion-knowledge-capture](https://agent-skill.co/openai/skills/notion-knowledge-capture) - Convert conversations into structured Notion wiki entries
- [openai/pdf](https://agent-skill.co/openai/skills/pdf) - Read, create, and review PDFs with layout integrity
- [openai/playwright](https://agent-skill.co/openai/skills/playwright) - Automate real browser interactions for navigation and forms
- [openai/sora](https://agent-skill.co/openai/skills/sora) - Generate, remix, and manage short video clips via Sora API
- [openai/speech](https://agent-skill.co/openai/skills/speech) - Generate spoken audio from text using OpenAI's API
- [openai/spreadsheet](https://agent-skill.co/openai/skills/spreadsheet) - Create, edit, analyze, and visualize spreadsheets
- [openai/figma](https://agent-skill.co/openai/skills/figma) - Use the Figma MCP server to fetch design context
- [openai/figma-implement-design](https://agent-skill.co/openai/skills/figma-implement-design) - Translate Figma designs into production-ready code
- [openai/frontend-skill](https://agent-skill.co/openai/skills/frontend-skill) - Create visually strong landing pages and web apps

#### Skills by Google Gemini
Install via [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev).
- [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) - Best practices for developing Gemini-powered apps
- [google-gemini/vertex-ai-api-dev](https://agent-skill.co/google-gemini/skills/vertex-ai-api-dev) - Developing Gemini apps on Google Cloud Vertex AI
- [google-gemini/gemini-live-api-dev](https://agent-skill.co/google-gemini/skills/gemini-live-api-dev) - Building real-time bidirectional streaming apps
- [google-gemini/gemini-interactions-api](https://agent-skill.co/google-gemini/skills/gemini-interactions-api) - Text, chat, streaming, and image generation

#### Skills by Hugging Face
Official skills for ML workflows.
- [huggingface/hf-cli](https://agent-skill.co/huggingface/skills/hf-cli) - HF CLI tool for Hub operations
- [huggingface/hugging-face-datasets](https://agent-skill.co/huggingface/skills/hugging-face-datasets) - Create and manage datasets with SQL querying
- [huggingface/hugging-face-model-trainer](https://agent-skill.co/huggingface/skills/hugging-face-model-trainer) - Train models with TRL: SFT, DPO, GRPO
- [huggingface/transformers.js](https://agent-skill.co/huggingface/skills/transformers.js) - Run ML models in the browser with Transformers.js

#### Skills by Replicate
- [replicate/replicate](https://agent-skill.co/replicate/skills/replicate) - Discover and run AI models via API

#### Skills by fal.ai
- [fal-ai-community/fal-generate](https://agent-skill.co/fal-ai-community/skills/fal-generate) - Generate images and videos using fal.ai
- [fal-ai-community/fal-realtime](https://agent-skill.co/fal-ai-community/skills/fal-realtime) - Real-time and streaming AI image generation
- [fal-ai-community/fal-upscale](https://agent-skill.co/fal-ai-community/skills/fal-upscale) - Upscale and enhance image resolution

#### Skills by MiniMax
- [MiniMax-AI/frontend-dev](https://agent-skill.co/MiniMax-AI/skills/frontend-dev) - Frontend with animations and AI media via MiniMax
- [MiniMax-AI/minimax-pdf](https://agent-skill.co/MiniMax-AI/skills/minimax-pdf) - Generate, fill, and reformat PDFs
### Cloud & Infrastructure

#### Skills by Cloudflare
- [cloudflare/agents-sdk](https://agent-skill.co/cloudflare/skills/agents-sdk) - Build stateful AI agents with scheduling, RPC, and MCP servers
- [cloudflare/building-ai-agent-on-cloudflare](https://agent-skill.co/cloudflare/skills/building-ai-agent-on-cloudflare) - Build AI agents with state and WebSockets on Cloudflare
- [cloudflare/building-mcp-server-on-cloudflare](https://agent-skill.co/cloudflare/skills/building-mcp-server-on-cloudflare) - Build remote MCP servers with tools and OAuth
- [cloudflare/durable-objects](https://agent-skill.co/cloudflare/skills/durable-objects) - Stateful coordination with RPC, SQLite, and WebSockets
- [cloudflare/web-perf](https://agent-skill.co/cloudflare/skills/web-perf) - Audit Core Web Vitals and render-blocking resources
- [cloudflare/wrangler](https://agent-skill.co/cloudflare/skills/wrangler) - Deploy and manage Workers, KV, R2, D1, Vectorize, Queues, Workflows

#### Skills by Netlify
- [netlify/netlify-functions](https://agent-skill.co/netlify/skills/netlify-functions) - Build serverless API endpoints and background tasks
- [netlify/netlify-edge-functions](https://agent-skill.co/netlify/skills/netlify-edge-functions) - Low-latency edge middleware and geolocation logic
- [netlify/netlify-blobs](https://agent-skill.co/netlify/skills/netlify-blobs) - Key-value object storage for files and data
- [netlify/netlify-db](https://agent-skill.co/netlify/skills/netlify-db) - Managed Postgres with deploy preview branching
- [netlify/netlify-deploy](https://agent-skill.co/netlify/skills/netlify-deploy) - Automated deployment workflow for Netlify sites
- [netlify/netlify-ai-gateway](https://agent-skill.co/netlify/skills/netlify-ai-gateway) - Access AI models via unified gateway endpoint

#### Skills by Vercel
- [vercel-labs/react-best-practices](https://agent-skill.co/vercel-labs/skills/react-best-practices) - React best practices and patterns
- [vercel-labs/web-design-guidelines](https://agent-skill.co/vercel-labs/skills/web-design-guidelines) - Web design guidelines and standards
- [vercel-labs/next-best-practices](https://agent-skill.co/vercel-labs/skills/next-best-practices) - Next.js best practices and recommended patterns
- [vercel-labs/next-cache-components](https://agent-skill.co/vercel-labs/skills/next-cache-components) - Caching strategies and cache-aware components in Next.js
- [vercel-labs/react-native-skills](https://agent-skill.co/vercel-labs/skills/react-native-skills) - React Native best practices and performance guidelines

#### Skills by HashiCorp (Terraform)
- [hashicorp/new-terraform-provider](https://agent-skill.co/hashicorp/skills/new-terraform-provider) - Scaffold a new Terraform provider project using the Plugin Framework
- [hashicorp/provider-resources](https://agent-skill.co/hashicorp/skills/provider-resources) - Implement Terraform Provider resources and data sources
- [hashicorp/provider-test-patterns](https://agent-skill.co/hashicorp/skills/provider-test-patterns) - Acceptance test patterns for Terraform providers
- [hashicorp/refactor-module](https://agent-skill.co/hashicorp/skills/refactor-module) - Transform monolithic Terraform configurations into reusable modules
- [hashicorp/terraform-style-guide](https://agent-skill.co/hashicorp/skills/terraform-style-guide) - Generate Terraform HCL code following HashiCorp's official style conventions
- [hashicorp/terraform-stacks](https://agent-skill.co/hashicorp/skills/terraform-stacks) - Manage infrastructure across multiple environments, regions, and cloud accounts

#### Skills by Neon
- [neondatabase/neon-postgres](https://agent-skill.co/neondatabase/skills/neon-postgres) - Best practices for Neon Serverless Postgres
- [neondatabase/claimable-postgres](https://agent-skill.co/neondatabase/skills/claimable-postgres) - Claimable Postgres database provisioning with Neon
- [neondatabase/neon-postgres-egress-optimizer](https://agent-skill.co/neondatabase/skills/neon-postgres-egress-optimizer) - Optimize Neon Postgres egress and data transfer

#### Skill by ClickHouse
- [clickhouse/clickhouse-best-practices](https://agent-skill.co/clickhouse/skills/clickhouse-best-practices) - Best practices for working with ClickHouse

#### Skills by Supabase
- [supabase/postgres-best-practices](https://agent-skill.co/supabase/skills/postgres-best-practices) - PostgreSQL best practices for Supabase

#### Skills by Tinybird
- [tinybirdco/tinybird-best-practices](https://agent-skill.co/tinybirdco/skills/tinybird-best-practices) - Tinybird project guidelines for datasources, pipes, endpoints, and SQL
- [tinybirdco/tinybird-cli-guidelines](https://agent-skill.co/tinybirdco/skills/tinybird-cli-guidelines) - Tinybird CLI usage guidelines and commands
- [tinybirdco/tinybird-typescript-sdk-guidelines](https://agent-skill.co/tinybirdco/skills/tinybird-typescript-sdk-guidelines) - Tinybird TypeScript SDK usage guidelines

---

### Developer Tools & Frameworks

#### Skills by VoltAgent
- [voltagent/create-voltagent](https://agent-skill.co/voltagent/skills/create-voltagent) - Project setup guide with CLI and manual steps
- [voltagent/voltagent-best-practices](https://agent-skill.co/voltagent/skills/voltagent-best-practices) - Architecture and usage patterns for agents, workflows, memory, and servers
- [voltagent/voltagent-core-reference](https://agent-skill.co/voltagent/skills/voltagent-core-reference) - Reference for the VoltAgent class options and lifecycle methods
- [voltagent/voltagent-docs-bundle](https://agent-skill.co/voltagent/skills/voltagent-docs-bundle) - Lookup embedded docs from @voltagent/core for version-matched documentation

#### Skills by CallStack
- [callstackincubator/react-native-best-practices](https://agent-skill.co/callstackincubator/skills/react-native-best-practices) - Performance optimization for React Native apps
- [callstackincubator/github](https://agent-skill.co/callstackincubator/skills/github) - GitHub workflow patterns for PRs, code review, branching
- [callstackincubator/upgrading-react-native](https://agent-skill.co/callstackincubator/skills/upgrading-react-native) - React Native upgrade workflow: templates, dependencies, and pitfalls

#### Skills by Expo
- [expo/building-native-ui](https://agent-skill.co/expo/skills/building-native-ui) - Build apps with Expo Router, styling, components, and animations
- [expo/expo-api-routes](https://agent-skill.co/expo/skills/expo-api-routes) - Create API routes in Expo Router with EAS Hosting
- [expo/expo-deployment](https://agent-skill.co/expo/skills/expo-deployment) - Deploy Expo apps to production
- [expo/upgrading-expo](https://agent-skill.co/expo/skills/upgrading-expo) - Upgrade Expo SDK versions
- [expo/use-dom](https://agent-skill.co/expo/skills/use-dom) - Run web code in a webview on native using DOM components

#### Skills by Remotion
- [remotion-dev/remotion](https://agent-skill.co/remotion-dev/skills/remotion) - Programmatic video creation with React

#### Skills by DuckDB
- [duckdb/attach-db](https://agent-skill.co/duckdb/skills/attach-db) - Attach a DuckDB database file for interactive querying
- [duckdb/query](https://agent-skill.co/duckdb/skills/query) - Run SQL queries against attached databases or ad-hoc files
- [duckdb/duckdb-docs](https://agent-skill.co/duckdb/skills/duckdb-docs) - Search DuckDB and DuckLake documentation

#### Skills by GSAP (GreenSock)
- [greensock/gsap-core](https://agent-skill.co/greensock/skills/gsap-core) - Core API: gsap.to(), from(), fromTo(), easing, duration, stagger
- [greensock/gsap-scrolltrigger](https://agent-skill.co/greensock/skills/gsap-scrolltrigger) - ScrollTrigger for scroll-linked animations and pinning
- [greensock/gsap-react](https://agent-skill.co/greensock/skills/gsap-react) - React integration with useGSAP hook and SSR patterns

#### Skills by WordPress
- [WordPress/wp-block-development](https://agent-skill.co/WordPress/skills/wp-block-development) - Gutenberg blocks: block.json, attributes, rendering
- [WordPress/wp-plugin-development](https://agent-skill.co/WordPress/skills/wp-plugin-development) - Plugin architecture, hooks, settings API, security
- [WordPress/wp-playground](https://agent-skill.co/WordPress/skills/wp-playground) - WordPress Playground for instant local environments

#### Skills by Figma
- [figma/figma-implement-design](https://agent-skill.co/figma/skills/figma-implement-design) - Translate Figma designs into production-ready code with 1:1 fidelity
- [figma/figma-generate-library](https://agent-skill.co/figma/skills/figma-generate-library) - Build or update a design system library in Figma from a codebase
- [figma/figma-use](https://agent-skill.co/figma/skills/figma-use) - Run Figma Plugin API scripts for canvas writes and inspections

---

### Google Ecosystem

#### Skills by Google Labs (Stitch)
- [google-labs-code/design-md](https://agent-skill.co/google-labs-code/skills/design-md) - Create and manage DESIGN.md files
- [google-labs-code/enhance-prompt](https://agent-skill.co/google-labs-code/skills/enhance-prompt) - Improve prompts with design specs and UI/UX vocabulary
- [google-labs-code/react-components](https://agent-skill.co/google-labs-code/skills/react-components) - Stitch to React components conversion
- [google-labs-code/shadcn-ui](https://agent-skill.co/google-labs-code/skills/shadcn-ui) - Build UI components with shadcn/ui
- [google-labs-code/stitch-loop](https://agent-skill.co/google-labs-code/skills/stitch-loop) - Iterative design-to-code feedback loop

#### Skills by Google Workspace CLI
- [googleworkspace/gws-drive](https://agent-skill.co/googleworkspace/skills/gws-drive) - Manage Google Drive files, folders, and shared drives
- [googleworkspace/gws-sheets](https://agent-skill.co/googleworkspace/skills/gws-sheets) - Read and write Google Sheets spreadsheets
- [googleworkspace/gws-gmail](https://agent-skill.co/googleworkspace/skills/gws-gmail) - Send, read, and manage Gmail email
- [googleworkspace/gws-calendar](https://agent-skill.co/googleworkspace/skills/gws-calendar) - Manage Google Calendar calendars and events
- [googleworkspace/gws-workflow](https://agent-skill.co/googleworkspace/skills/gws-workflow) - Cross-service Google Workspace productivity workflows

---

### Business, Productivity & Marketing

#### Skills by Stripe
- [stripe/stripe-best-practices](https://agent-skill.co/stripe/skills/stripe-best-practices) - Best practices for building Stripe integrations
- [stripe/upgrade-stripe](https://agent-skill.co/stripe/skills/upgrade-stripe) - Upgrade Stripe SDK and API versions

#### Skills by Courier
- [trycourier/courier-skills](https://github.com/trycourier/courier-skills) - Multi-channel notifications via email, SMS, push, and chat

#### Skills by Typefully
- [typefully/typefully](https://agent-skill.co/typefully/skills/typefully) - Create, schedule, and publish social media content

#### Skills by Composio
- [composiohq/composio](https://agent-skill.co/composiohq/skills/composio) - Connect AI agents to 1000+ external apps with managed authentication

#### Skills by Notion
- [makenotion/knowledge-capture](https://agent-skill.co/makenotion/skills/knowledge-capture) - Transform conversations into structured Notion documentation
- [makenotion/meeting-intelligence](https://agent-skill.co/makenotion/skills/meeting-intelligence) - Prepare meeting materials by gathering Notion context
- [makenotion/spec-to-implementation](https://agent-skill.co/makenotion/skills/spec-to-implementation) - Turn tech specs into concrete Notion tasks

#### Skills by Resend
- [resend/resend](https://github.com/resend/resend-skills/tree/main/skills/resend) - Send and manage emails via the Resend API
- [resend/react-email](https://github.com/resend/resend-skills/tree/main/skills/react-email) - Build emails with React Email components
- [resend/email-best-practices](https://github.com/resend/resend-skills/tree/main/skills/email-best-practices) - Email deliverability and design best practices

#### Skills by Sanity
- [sanity-io/sanity-best-practices](https://agent-skill.co/sanity-io/skills/sanity-best-practices) - Best practices for Sanity Studio and content workflows
- [sanity-io/content-modeling-best-practices](https://agent-skill.co/sanity-io/skills/content-modeling-best-practices) - Guidelines for designing scalable content models in Sanity
- [sanity-io/seo-aeo-best-practices](https://agent-skill.co/sanity-io/skills/seo-aeo-best-practices) - SEO and answer engine optimization patterns

#### Skills by Better Auth
- [better-auth/best-practices](https://agent-skill.co/better-auth/skills/best-practices) - Best practices for Better Auth integration
- [better-auth/create-auth](https://agent-skill.co/better-auth/skills/create-auth) - Create authentication setup with Better Auth
- [better-auth/twoFactor](https://agent-skill.co/better-auth/skills/twoFactor) - Two-factor authentication with Better Auth

<details>
<summary><strong>Marketing Skills by Corey Haines</strong></summary>

Comprehensive SaaS marketing stack skills by [Corey Haines](https://github.com/coreyhaines31).
- [coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo) - Optimize content for AI-generated answers
- [coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting) - Write marketing copy for landing pages and ads
- [coreyhaines31/email-sequence](https://github.com/coreyhaines31/marketingskills/tree/main/skills/email-sequence) - Build email sequences and drip campaigns
- [coreyhaines31/page-cro](https://github.com/coreyhaines31/marketingskills/tree/main/skills/page-cro) - Improve conversion rates on marketing pages
- [coreyhaines31/pricing-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing-strategy) - Define pricing and packaging for SaaS
- [coreyhaines31/social-content](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social-content) - Create and schedule social media content
</details>

<details>
<summary><strong>Product Manager Skills by Dean Peters</strong></summary>

46 battle-tested PM skills by [Dean Peters](https://github.com/deanpeters).
- [deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis) - Turn initiatives into testable hypotheses
- [deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree) - Generate solution trees based on Teresa Torres' method
- [deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development) - Structured PRD process: problem to metrics
- [deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning) - Strategic roadmap process and communication
</details>

<details>
<summary><strong>Product Management Skills by Pawel Huryn</strong></summary>

65 PM skills by [Paweł Huryn](https://github.com/phuryn), creator of The Product Compass.
- [phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd) - Create a PRD with 8-section template
- [phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy) - Create product strategy using the Canvas
- [phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas) - Create user personas with JTBD, pains, and gains
- [phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing) - Estimate TAM, SAM, SOM with top-down and bottom-up
</details>

<details>
<summary><strong>Skills by Garry Tan (gstack)</strong></summary>

28 engineering leadership skills by [Garry Tan](https://github.com/garrytan).
- [garrytan/office-hours](https://agent-skill.co/garrytan/skills/office-hours) - YC Office Hours: reframing product before code
- [garrytan/plan-ceo-review](https://agent-skill.co/garrytan/skills/plan-ceo-review) - CEO/Founder plan review modes
- [garrytan/design-review](https://agent-skill.co/garrytan/skills/design-review) - Visual audit and atomic fixes with screenshots
- [garrytan/qa](https://agent-skill.co/garrytan/skills/qa) - QA Lead: find bugs and generate regression tests
- [garrytan/ship](https://agent-skill.co/garrytan/skills/ship) - Release Engineer: sync, test, audit, and push
</details>

---

### Security & Web Intelligence

#### Skills by Trail of Bits
- [trailofbits/audit-context-building](https://agent-skill.co/trailofbits/skills/audit-context-building) - Deep architectural context via granular code analysis
- [trailofbits/building-secure-contracts](https://agent-skill.co/trailofbits/skills/building-secure-contracts) - Smart contract security toolkit for 6 blockchains
- [trailofbits/modern-python](https://agent-skill.co/trailofbits/skills/modern-python) - Modern Python tooling with uv, ruff, and pytest
- [trailofbits/static-analysis](https://agent-skill.co/trailofbits/skills/static-analysis) - Static analysis toolkit with CodeQL and Semgrep

#### Skills by Sentry
- [getsentry/agents-md](https://agent-skill.co/getsentry/skills/agents-md) - Generate and manage AGENTS.md files
- [getsentry/code-review](https://agent-skill.co/getsentry/skills/code-review) - Perform structured code reviews
- [getsentry/find-bugs](https://agent-skill.co/getsentry/skills/find-bugs) - Find and identify bugs in code

#### Skills by Firecrawl
- [firecrawl/firecrawl-cli](https://agent-skill.co/firecrawl/skills/firecrawl-cli) - Scrape, crawl, search, and map the web via CLI
- [firecrawl/firecrawl-agent](https://agent-skill.co/firecrawl/skills/firecrawl-agent) - AI agent for autonomous web scraping
- [firecrawl/firecrawl-browser](https://agent-skill.co/firecrawl/skills/firecrawl-browser) - Browser-based web scraping and interaction

<details>
<summary><strong>Skills by Microsoft</strong></summary>

133 domain-specific skills for Azure SDK and Microsoft AI Foundry.
- [microsoft/cloud-solution-architect](https://agent-skill.co/microsoft/skills/cloud-solution-architect) - Design well-architected Azure cloud systems
- [microsoft/copilot-sdk](https://agent-skill.co/microsoft/skills/copilot-sdk) - Build applications powered by GitHub Copilot SDK
- [microsoft/azure-ai-openai-dotnet](https://agent-skill.co/microsoft/skills/azure-ai-openai-dotnet) - GPT-4, embeddings, and DALL-E client for .NET
- [microsoft/azure-ai-projects-python](https://agent-skill.co/microsoft/skills/azure-ai-projects-py) - AI Foundry project client and agents for Python
- [microsoft/azure-identity-typescript](https://agent-skill.co/microsoft/skills/azure-identity-ts) - Microsoft Entra ID authentication for TypeScript
</details>

#### Skills by Binance
- [binance/crypto-market-rank](https://agent-skill.co/binance/skills/crypto-market-rank) - Query crypto market rankings and leaderboards
- [binance/query-token-audit](https://agent-skill.co/binance/skills/query-token-audit) - Audit token security to detect scams and honeypots
- [binance/trading-signal](https://agent-skill.co/binance/skills/trading-signal) - Monitor on-chain Smart Money buy/sell signals

#### Skills by Sanity

Install from [sanity-io/agent-toolkit](https://github.com/sanity-io/agent-toolkit).

| Skill | Description |
|-------|-------------|
| [sanity-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/sanity-best-practices) | Best practices for Sanity Studio, GROQ queries, and content workflows |
| [content-modeling-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/content-modeling-best-practices) | Guidelines for designing scalable content models in Sanity |
| [seo-aeo-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/seo-aeo-best-practices) | SEO and answer engine optimization patterns for content sites |

#### Skills by Better Auth

Install from [better-auth/skills](https://github.com/better-auth/skills).

| Skill | Description |
|-------|-------------|
| [best-practices](https://github.com/better-auth/skills/tree/main/best-practices) | Best practices for Better Auth integration |
| [explain-error](https://github.com/better-auth/skills/tree/main/explain-error) | Explain Better Auth error messages |
| [create-auth](https://github.com/better-auth/skills/tree/main/create-auth) | Create authentication setup with Better Auth |
| [twoFactor](https://github.com/better-auth/skills/tree/main/twoFactor) | Two-factor authentication with Better Auth |

#### Marketing Skills by Corey Haines

| Skill | Description |
|-------|-------------|
| [agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18 go-to-market skills: pricing, outbound, SEO, ads, retention, and ops |

#### Product Manager Skills by Dean Peters

| Skill | Description |
|-------|-------------|
| [pm-skills](https://github.com/product-on-purpose/pm-skills) | 24 product management skills covering discovery, definition, delivery, and optimization |

#### Product Management Skills by Pawel Huryn

| Skill | Description |
|-------|-------------|
| [pm-skills-huryn](https://github.com/product-on-purpose/pm-skills) | Advanced product management frameworks, OKRs, and strategy skills |

#### Skills by Garry Tan (gstack)

| Skill | Description |
|-------|-------------|
| [gstack](https://github.com/garrytan/gstack) | YC founder stack recommendations for infra, tooling, and deployment |

---

### Security & Web Intelligence

#### Skills by Trail of Bits

| Skill | Description |
|-------|-------------|
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | Modern encryption alternative to GPG/PGP with post-quantum support |
| [threat-hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Hunt for threats using Sigma detection rules |

#### Skills by Sentry

Install from [getsentry/skills](https://github.com/getsentry/skills).

| Skill | Description |
|-------|-------------|
| [sentry-skills](https://github.com/getsentry/skills) | Debug errors, performance issues, and traces directly with Sentry integration |

#### Skills by Firecrawl

Install from [firecrawl/cli](https://github.com/firecrawl/cli).

| Skill | Description |
|-------|-------------|
| [firecrawl-cli](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-cli) | Scrape, crawl, search, and map the web via CLI |
| [firecrawl-agent](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-agent) | AI agent for autonomous web scraping and data extraction |
| [firecrawl-scrape](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-scrape) | Scrape web pages and extract content |
| [firecrawl-search](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-search) | Search the web and extract results |

#### Skills by Microsoft

Install from [microsoft/agent-skills](https://github.com/microsoft/agent-skills).

| Skill | Description |
|-------|-------------|
| [agent-skills](https://github.com/microsoft/agent-skills) | Official Microsoft agent skills collection |

#### Skills by Binance

| Skill | Description |
|-------|-------------|
| [kyberswap-skills](https://github.com/kybernetwork/kyberswap-skills) | Token swap quotes and transactions across 18 EVM chains |

---

## Community Skills

<details>
<summary><strong>Vector Databases</strong></summary>

- [qdrant/skills](https://github.com/qdrant/skills) - Agent skills for Qdrant vector search, scaling, and performance
</details>

<details>
<summary><strong>Marketing</strong></summary>

- [BrianRWagner/ai-marketing-skills](https://github.com/BrianRWagner/ai-marketing-skills) - 17 marketing frameworks for outreach and audits
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) - Universal SEO skill for website analysis
- [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill) - 20+ creative methodologies (SIT, TRIZ, SCAMPER)
- [SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose) - Hard-edged writing style contract for forceful English prose
</details>

<details>
<summary><strong>Productivity and Collaboration</strong></summary>

- [PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill) - Document processing: convert, OCR, and redact PII
- [RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills) - Transform docs or codebases into interactive StudyVaults
- [hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill) - Hierarchical memory system with filesystem persistence
- [wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill) - Manage Linear issues, projects, and teams
</details>

<details>
<summary><strong>Development and Testing</strong></summary>

- [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) - Generate hand-drawn Excalidraw diagrams from prompt
- [coderabbitai/skills](https://github.com/coderabbitai/skills) - Code review and PR autofix workflows
- [massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill) - Handle long-context tasks (100+ files) via decomposition
- [mcollina/skills](https://github.com/mcollina/skills/tree/main/skills) - Node.js core, Fastify, and TypeScript skills by Matteo Collina
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) - High-agency frontend skill to eliminate generic UI slop
</details>

<details>
<summary><strong>Context Engineering</strong></summary>

- [muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression) - Compression strategies for long-running sessions
- [muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems) - Design short-term and graph-based memory architectures
- [k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol) - Graph-based memory for faster context and safer refactors
</details>

<details>
<summary><strong>Data & Compliance</strong></summary>

- [strale-io/strale](https://github.com/strale-io/strale) - MCP server + REST API exposing Strale’s data capability catalog: company registry lookups across 27 countries, sanctions/PEP screening, IBAN/VAT/LEI validation, web intelligence, and document extraction. Also reachable via x402 micropayments on Base.
</details>

---

## Skill Quality Standards

When evaluating or contributing skills, look for:

- **Clear instructions**: Steps are unambiguous and actionable
- **Appropriate scope**: Skill handles one focused task, not everything
- **Working examples**: Demonstrates real usage, not just theory
- **Documented trade-offs**: Honest about limitations and edge cases
- **Size limit**: SKILL.md under 500 lines for optimal agent performance
- **Tested**: Verified to actually work with the agent it targets

---

## Using Skills

### Using Skills in Claude.ai
1. Click the skill icon in your chat interface.
2. Add skills from the marketplace or upload custom skills.
3. Claude automatically activates relevant skills based on your task.

### Using Skills in Google Antigravity

Antigravity supports two types of skills:

- **Workspace Skills**: Project-specific skills located in `/.agent/skills/`
- **Global Skills**: User-wide skills located in `~/.gemini/antigravity/skills`

For more details, see the [official documentation](https://antigravity.google/docs/skills).

### Using Skills in Claude Code

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

Use the built-in `$skill-creator` skill in Codex. Or install manually:

```bash
$skill-installer linear
```

Restart Codex after installing a skill to pick it up.

### Using Skills in VS Code / GitHub Copilot

Skills are stored in directories with a `SKILL.md` file:

- `.github/skills/` — Recommended location for all new skills
- `.claude/skills/` — Legacy location, also supported

**SKILL.md structure:**
- `name` (required): A unique lowercase identifier using hyphens for spaces
- `description` (required): What the skill does and when the agent should use it
- Markdown body with instructions, examples, and guidelines

### Using MCP Servers (Claude Desktop)

Edit your configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Desktop"]
    }
  }
}
```

---

## Creating Skills

Skills are instruction bundles that tell the agent how to perform specific tasks. They are not executable code.

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

For skills that need to connect to external data sources:

```bash
pip install fastmcp
```

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

## Official Tutorials and Guides

### Claude and Anthropic
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) — Official quick start guide
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) — Step-by-step authoring
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) — Official reference

### GitHub Copilot
- [About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) — GitHub documentation
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — VS Code integration

### Model Context Protocol (MCP)
- [MCP Official Documentation](https://modelcontextprotocol.io/) — The open standard
- [Build your first MCP Server](https://modelcontextprotocol.io/docs/first-server) — Python/TypeScript guide
- [MCP Server Examples](https://github.com/modelcontextprotocol/servers) — Official server implementations

---

---

## Trends & Capabilities (2026)

The AI agent ecosystem has dramatically shifted from reactive chat interfaces to **autonomous, goal-driven systems** executing end-to-end multi-step workflows — a period often called the "Agent Leap."

### 1. Autonomous Execution

Modern agents move past simple "prompt-response" models. They break down broad objectives into multi-step strategic plans, weighing trade-offs and executing sequences independently.

### 2. Multi-Agent Orchestration

Complex tasks are managed by specialized agent teams (documentation, testing, coding) coordinated by "manager" agents that synthesize deliverables and resolve conflicts.

### 3. Agentic IDEs

Environments like Cursor, Windsurf, Claude Code, and GitHub Copilot have evolved into full "Agentic IDEs" where agents execute terminal commands, monitor telemetry, and manage files natively via MCP and direct filesystem access.

### 4. Domain-Specific Skills at Scale

Organizations are moving from general-purpose prompting to highly specialized skills for each platform and workflow — reducing hallucinations and improving reliability in production deployments.

---

## Frequently Asked Questions

### What are Agent Skills?

Agent Skills are instruction files that teach AI assistants how to do specific tasks. They only load when needed, so the AI stays fast and focused.

### How are Agent Skills different from fine-tuning?

Fine-tuning permanently changes how an AI thinks (expensive and hard to update). Agent Skills are just instruction files — you can update, swap, or share them anytime without touching the AI itself.

### What's the difference between Agent Skills and MCP?

They work great together:
- **Agent Skills** — teach the AI *how* to do something (workflows, best practices)
- **MCP** — help the AI *access* things (APIs, databases, external tools)

### Which AI tools support Agent Skills?

Currently supported: **Claude** (Claude.ai and Claude Code), **GitHub Copilot**, **VS Code**, **Codex** (OpenAI), **Antigravity** (Google), **Gemini CLI**, **Kiro**, and **Junie**. The ecosystem is growing rapidly.

### Do Agent Skills run code?

No. Skills are just text instructions — the AI reads and follows them like a recipe. If you need to run actual code, you'd use MCP servers alongside skills.

### How do I create my first Agent Skill?

1. Create a `SKILL.md` file with a name and description at the top
2. Write clear, step-by-step instructions in the file
3. Put it in your `.github/skills/` or `.claude/skills/` folder
4. Test it out!

Full guide: [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)

### I'm not a developer — can I still use skills?

Yes. Skills are plain-English instruction files, not code. You need an AI assistant (like Claude.ai) and nothing else. No terminal, no GitHub account, no technical background required. Just paste a skill's URL into your AI chat and start using it.

### Are skills free?

Skills themselves are free text files — you can download and use any skill in this list at no cost. You do need an AI subscription (e.g., Claude Pro, GitHub Copilot) to run them, since skills are read and followed by the AI.

### How do I know if a skill is safe to use?

Every skill in this list is a public GitHub repository — you can read the full instructions before loading anything. Check the repo's stars, last update date, and README. Skills are plain text: there's no executable code that can run on your machine.

## Related Awesome Lists

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - Curated list of skills and tools for Claude Code.
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - Standards and tools for the DESIGN.md protocol.
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - Open source agent skills for OpenClaw.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - A collection of Model Context Protocol (MCP) servers.

---

## Contributing

Contributions are welcome. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for full guidelines.

Quick summary:
- Follow the skill template structure
- Provide clear, actionable instructions
- Include working examples where appropriate
- Document trade-offs and potential issues
- Keep SKILL.md under 500 lines for optimal performance
- Verify that skills actually exist before adding them

---

## Contact

Questions, partnership inquiries, or feedback about this project:

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## Citation

If you use these skill patterns in your research or project, please cite:

```bibtex
@misc{awesome-agent-skills,
  author = {Hailey Cheng (Cheng Hei Lam)},
  title = {Agent Skill Index},
  year = {2026},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/heilcheng/awesome-agent-skills}}
}
```

## License

MIT License. See LICENSE file for details.
