# Agent Skill Index

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 **[agent-skill.co](https://agent-skill.co)** でライブディレクトリを閲覧する

メンテナー：[Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

「agent skills」を聞いたことがありませんか？ここは、Claude、Copilot、Codex などの AI アシスタントに、再トレーニングなしで必要に応じて新しいことを教えるためのシンプルなテキストファイルのコミュニティキュレーションリストです。大量生成されたスキルリポジトリとは異なり、このコレクションは実際のエンジニアリングチームによって作成され、使用されている現実世界の Agent スキルに焦点を当てています。Claude Code、Codex、Antigravity、Gemini CLI、Cursor、GitHub Copilot、Windsurf などに対応しています。

---

## クイックスタート（30 秒）

**ステップ 1：下のディレクトリからスキルを選択する**（または [agent-skill.co](https://agent-skill.co) で閲覧）

**ステップ 2：AI エージェントに読み込む：**
- Claude Code：`/skills add <github-url>`
- Claude.ai：新しい会話に SKILL.md の raw URL を貼り付ける
- Codex / Copilot：[スキルの使用](#スキルの使用) にリンクされているプラットフォームドキュメントに従う
- Autohand Code：カタログ掲載のスキルは `autohand --skill-install <skill-name>` で、またはスキルフォルダを `~/.autohand/skills/` にコピー

**ステップ 3：AI に使用を依頼する。** やりたいことを普通の日本語または英語で説明するだけです。

これだけです。インストール不要。設定不要。コーディング不要。

---

## 目次

- [Agent Skills とは？](#agent-skills-とは)
- [スキルの見つけ方（推奨）](#スキルの見つけ方推奨)
- [対応エージェント](#対応エージェント)
- [公式スキルディレクトリ](#公式スキルディレクトリ)
  - [AI プラットフォームとモデル](#ai-プラットフォームとモデル)
  - [クラウドとインフラ](#クラウドとインフラ)
  - [開発ツールとフレームワーク](#開発ツールとフレームワーク)
  - [Google エコシステム](#google-エコシステム)
  - [ビジネス・生産性・マーケティング](#ビジネス生産性マーケティング)
  - [セキュリティと Web インテリジェンス](#セキュリティと-web-インテリジェンス)
- [コミュニティスキル](#コミュニティスキル)
- [スキルの品質基準](#スキルの品質基準)
- [スキルの使い方](#スキルの使い方)
- [スキルの作成](#スキルの作成)
- [公式チュートリアルとガイド](#公式チュートリアルとガイド)
- [トレンドと能力 (2026)](#トレンドと能力-2026)
- [よくある質問](#よくある質問)
- [関連する Awesome リスト](#関連する-awesome-リスト)
- [コントリビューション](#コントリビューション)
- [連絡先](#連絡先)
- [引用](#引用)
- [ライセンス](#ライセンス)

---

## Agent Skills とは？

**Agent Skills** を AI アシスタントのための「使い方ガイド」と考えてください。AI があらかじめすべてを知っている必要はなく、スキルによって必要に応じて新しい能力を習得できます。料理本を丸暗記させるのではなく、レシピカードを渡すようなイメージです。

スキルは、AI に特定のタスクを実行する方法を教えるシンプルなテキストファイル（`SKILL.md` と呼ばれる）です。AI に何かを依頼すると、AI は適切なスキルを見つけ、指示を読み、作業を開始します。

### 仕組み

スキルは 3 段階で読み込まれます：

1. **ブラウズ**：AI は利用可能なスキルのリストを確認します（名前と短い説明のみ）
2. **ロード**：スキルが必要になると、AI は完全な指示を読み取ります
3. **使用**：AI は指示に従い、補助ファイルにアクセスします

### なぜこれが重要なのか

- **高速かつ軽量**：AI は必要なときに必要なものだけを読み込みます
- **どこでも動作**：スキルを一度作成すれば、対応する AI ツールでどこでも使用できます
- **共有が簡単**：スキルは単なるファイルです。コピーしたり、ダウンロードしたり、GitHub で共有したりできます

スキルは**指示**であり、コードではありません。AI は人間がガイドを読むように指示を読み、手順に従います。

---

## スキルの見つけ方（推奨）

### SkillsMP マーケットプレイス

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

GitHub 上のすべての Skill プロジェクトを自動的にインデックス化し、カテゴリ、更新時間、スター数などで整理している **[SkillsMP Marketplace](https://skillsmp.com)** の使用をお勧めします。これがスキルを発見し評価する最も簡単な方法です。

### skills.sh リーダーボード (Vercel 提供)

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

Vercel のリーダーボードである **[skills.sh](https://skills.sh)** を使用して、最も人気のある Skills リポジトリや個々のスキルの使用統計を直感的に確認することもできます。

### WorkBuddy Skill Atlas

WorkBuddy ユーザー向けの **[WorkBuddy Skill Atlas](https://sandbaseai.github.io/workbuddy-skill/)** は、10,000 件を超える公開 `SKILL.md` パスを、不変の GitHub 出典、重複検出、互換性スコア、保守的な静的レビューシグナルとともに索引化しています。カタログ ID をコピーし、オープンソースのアダプターでレビュー可能な WorkBuddy パッケージを作成できます。

### npx skills CLI ツール

特定のスキルについては、`npx skills` コマンドラインツールを使用して、スキルの発見、追加、管理を迅速に行うことができます。詳細は [vercel-labs/skills](https://github.com/vercel-labs/skills) を参照してください。

```bash
npx skills find [query]            # 関連スキルの検索
npx skills add <owner/repo>        # スキルの追加（GitHub 短縮形、フルURL、ローカルパス対応）
npx skills list                    # インストール済みスキルの表示
npx skills check                   # アップデートの確認
npx skills update                  # 全スキルのアップグレード
npx skills remove [skill-name]     # スキルの削除
```

---

## 対応エージェント

---

<!-- sync:agents:start -->
| エージェント | ドキュメント |
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
| Autohand Code | [github.com/autohandai/code-cli](https://github.com/autohandai/code-cli) |
<!-- sync:agents:end -->

---

<!-- sync:directory:start -->
## 公式スキルディレクトリ

### AI プラットフォームとモデル

#### Anthropic のスキル
一般的なドキュメント形式とクリエイティブなワークフロー向けの公式組み込みスキル。
- [anthropics/docx](https://github.com/anthropics/skills/tree/main/skills/docx) - Word ドキュメントの作成、編集、分析
- [anthropics/doc-coauthoring](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring) - 共同編集と共著
- [anthropics/pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) - PowerPoint プレゼンの作成、編集、分析
- [anthropics/xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx) - Excel スプレッドシートの作成、編集、分析
- [anthropics/pdf](https://github.com/anthropics/skills/tree/main/skills/pdf) - テキスト抽出、PDF作成、フォーム処理
- [anthropics/algorithmic-art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art) - Create generative art using p5.js with seeded randomness
- [anthropics/canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design) - Design visual art in PNG and PDF formats
- [anthropics/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) - Frontend design and UI/UX development tools
- [anthropics/slack-gif-creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator) - Create animated GIFs optimized for Slack size constraints
- [anthropics/theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory) - Style artifacts with professional themes or generate custom themes
- [anthropics/web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder) - Build complex claude.ai HTML artifacts with React and Tailwind
- [anthropics/mcp-builder](https://github.com/anthropics/skills/tree/main/skills/mcp-builder) - Create MCP servers to integrate external APIs and services
- [anthropics/webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) - Playwright を使用したローカルウェブアプリのテスト
- [anthropics/brand-guidelines](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) - Apply Anthropic's brand colors and typography to artifacts
- [anthropics/internal-comms](https://github.com/anthropics/skills/tree/main/skills/internal-comms) - Write status reports, newsletters, and FAQs
- [anthropics/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) - Guide for creating skills that extend Claude's capabilities
- [anthropics/template](https://github.com/anthropics/skills/tree/main/template) - Basic template for creating new skills

#### OpenAI (Codex) のスキル
OpenAI のカタログから厳選された公式スキル。
- [openai/cloudflare-deploy](https://github.com/openai/skills/tree/main/skills/.curated/cloudflare-deploy) - Cloudflare へのデプロイ
- [openai/develop-web-game](https://github.com/openai/skills) - Build and test web games iteratively using Playwright
- [openai/doc](https://github.com/openai/skills) - Read, create, and edit .docx documents with formatting
- [openai/gh-address-comments](https://github.com/openai/skills/tree/main/skills/.curated/gh-address-comments) - Address review and issue comments on open GitHub PRs via CLI
- [openai/gh-fix-ci](https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci) - Debug and fix failing GitHub Actions PR checks
- [openai/imagegen](https://github.com/openai/skills/tree/main/skills/.system/imagegen) - OpenAI Image API を使用した画像生成
- [openai/jupyter-notebook](https://github.com/openai/skills/tree/main/skills/.curated/jupyter-notebook) - Create clean, reproducible Jupyter notebooks
- [openai/linear](https://github.com/openai/skills/tree/main/skills/.curated/linear) - Manage issues, projects, and team workflows in Linear
- [openai/netlify-deploy](https://github.com/openai/skills/tree/main/skills/.curated/netlify-deploy) - Automate Netlify deployments with CLI support
- [openai/notion-knowledge-capture](https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture) - Convert conversations into structured Notion wiki entries
- [openai/pdf](https://github.com/openai/skills/tree/main/skills/.curated/pdf) - Read, create, and review PDFs with layout integrity
- [openai/playwright](https://github.com/openai/skills/tree/main/skills/.curated/playwright) - Automate real browser interactions for navigation and forms
- [openai/sora](https://github.com/openai/skills) - Generate, remix, and manage short video clips via Sora API
- [openai/speech](https://github.com/openai/skills/tree/main/skills/.curated/speech) - Generate spoken audio from text using OpenAI's API
- [openai/spreadsheet](https://github.com/openai/skills) - Create, edit, analyze, and visualize spreadsheets
- [openai/figma](https://github.com/openai/skills/tree/main/skills/.curated/figma) - Use the Figma MCP server to fetch design context
- [openai/figma-implement-design](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design) - Figma デザインを本番用コードに変換
- [openai/frontend-skill](https://github.com/openai/skills) - Create visually strong landing pages and web apps

#### Google Gemini のスキル
インストール元：[google-gemini/gemini-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/skills/gemini-api-dev)。
- [google-gemini/gemini-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/skills/gemini-api-dev) - Gemini 駆動アプリ開発のベストプラクティス
- [google-gemini/vertex-ai-api-dev](https://github.com/google-gemini/gemini-skills) - Developing Gemini apps on Google Cloud Vertex AI
- [google-gemini/gemini-live-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/skills/gemini-live-api-dev) - Building real-time bidirectional streaming apps
- [google-gemini/gemini-interactions-api](https://github.com/google-gemini/gemini-skills) - Text, chat, streaming, and image generation

#### Hugging Face のスキル
機械学習ワークフロー向けの公式スキル。
- [huggingface/hf-cli](https://github.com/huggingface/skills/tree/main/skills/hf-cli) - HF CLI tool for Hub operations
- [huggingface/hugging-face-datasets](https://github.com/huggingface/skills/tree/main/skills/huggingface-datasets) - Create and manage datasets with SQL querying
- [huggingface/hugging-face-model-trainer](https://github.com/huggingface/skills) - Train models with TRL: SFT, DPO, GRPO
- [huggingface/transformers.js](https://github.com/huggingface/skills/tree/main/skills/transformers-js) - Run ML models in the browser with Transformers.js

#### Replicate のスキル
- [replicate/replicate](https://github.com/replicate/skills) - Discover and run AI models via API

#### fal.ai のスキル
- [fal-ai-community/fal-generate](https://github.com/fal-ai-community/skills) - Generate images and videos using fal.ai
- [fal-ai-community/fal-realtime](https://github.com/fal-ai-community/skills) - Real-time and streaming AI image generation
- [fal-ai-community/fal-upscale](https://github.com/fal-ai-community/skills) - Upscale and enhance image resolution

#### MiniMax のスキル
- [MiniMax-AI/frontend-dev](https://github.com/MiniMax-AI/skills/tree/main/skills/frontend-dev) - Frontend with animations and AI media via MiniMax
- [MiniMax-AI/minimax-pdf](https://github.com/MiniMax-AI/skills/tree/main/skills/minimax-pdf) - Generate, fill, and reformat PDFs

#### Bria AI のスキル
- [Bria-AI/bria-ai](https://github.com/Bria-AI/bria-skill/tree/main/skills/bria-ai) - AI image generation, editing, and background removal API
- [Bria-AI/remove-background](https://github.com/Bria-AI/bria-skill/tree/main/skills/remove-background) - Remove image backgrounds for transparent PNGs and cutouts
- [Bria-AI/video-remove-background](https://github.com/Bria-AI/bria-skill/tree/main/skills/video-remove-background) - Remove video backgrounds for transparent, alpha-channel clips
- [Bria-AI/vgl](https://github.com/Bria-AI/bria-skill/tree/main/skills/vgl) - Structured JSON control over AI image generation (FIBO)
- [Bria-AI/image-utils](https://github.com/Bria-AI/bria-skill/tree/main/skills/image-utils) - Resize, crop, composite, and convert images with Pillow

### クラウドとインフラ

#### Cloudflare のスキル
- [cloudflare/agents-sdk](https://github.com/cloudflare/skills/tree/main/skills/agents-sdk) - Build stateful AI agents with scheduling, RPC, and MCP servers
- [cloudflare/building-ai-agent-on-cloudflare](https://github.com/cloudflare/skills) - Build AI agents with state and WebSockets on Cloudflare
- [cloudflare/building-mcp-server-on-cloudflare](https://github.com/cloudflare/skills) - Build remote MCP servers with tools and OAuth
- [cloudflare/durable-objects](https://github.com/cloudflare/skills/tree/main/skills/durable-objects) - Stateful coordination with RPC, SQLite, and WebSockets
- [cloudflare/web-perf](https://github.com/cloudflare/skills/tree/main/skills/web-perf) - Audit Core Web Vitals and render-blocking resources
- [cloudflare/wrangler](https://github.com/cloudflare/skills/tree/main/skills/wrangler) - Deploy and manage Workers, KV, R2, D1, Vectorize, Queues, Workflows

#### Netlify のスキル
- [netlify/netlify-functions](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-functions) - Build serverless API endpoints and background tasks
- [netlify/netlify-edge-functions](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-edge-functions) - Low-latency edge middleware and geolocation logic
- [netlify/netlify-blobs](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-blobs) - Key-value object storage for files and data
- [netlify/netlify-db](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-database) - Managed Postgres with deploy preview branching
- [netlify/netlify-deploy](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-deploy) - Automated deployment workflow for Netlify sites
- [netlify/netlify-ai-gateway](https://github.com/netlify/context-and-tools/tree/main/skills/netlify-ai-gateway) - Access AI models via unified gateway endpoint

#### Vercel のスキル
- [vercel-labs/react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) - React best practices and patterns
- [vercel-labs/web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) - Web design guidelines and standards
- [vercel-labs/next-best-practices](https://github.com/vercel-labs/agent-skills) - Next.js best practices and recommended patterns
- [vercel-labs/next-cache-components](https://github.com/vercel-labs/agent-skills) - Caching strategies and cache-aware components in Next.js
- [vercel-labs/react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) - React Native best practices and performance guidelines

#### HashiCorp (Terraform) のスキル
- [hashicorp/new-terraform-provider](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/new-terraform-provider) - Scaffold a new Terraform provider project using the Plugin Framework
- [hashicorp/provider-resources](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/provider-resources) - Implement Terraform Provider resources and data sources
- [hashicorp/provider-test-patterns](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/provider-test-patterns) - Acceptance test patterns for Terraform providers
- [hashicorp/refactor-module](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/refactor-module) - Transform monolithic Terraform configurations into reusable modules
- [hashicorp/terraform-style-guide](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/terraform-style-guide) - Generate Terraform HCL code following HashiCorp's official style conventions
- [hashicorp/terraform-stacks](https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/terraform-stacks) - Manage infrastructure across multiple environments, regions, and cloud accounts

#### Neon のスキル
- [neondatabase/neon-postgres](https://github.com/neondatabase/agent-skills/tree/main/skills/neon-postgres) - Best practices for Neon Serverless Postgres
- [neondatabase/claimable-postgres](https://github.com/neondatabase/mcp-server-neon/tree/main/.agents/skills/claimable-postgres) - Claimable Postgres database provisioning with Neon
- [neondatabase/neon-postgres-egress-optimizer](https://github.com/neondatabase/agent-skills/tree/main/skills/neon-postgres-egress-optimizer) - Optimize Neon Postgres egress and data transfer

#### ClickHouse のスキル
- [clickhouse/clickhouse-best-practices](https://github.com/ClickHouse/agent-skills/tree/main/skills/clickhouse-best-practices) - Best practices for working with ClickHouse

#### Supabase のスキル
- [supabase/postgres-best-practices](https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices) - PostgreSQL best practices for Supabase

#### Tinybird のスキル
- [tinybirdco/tinybird-best-practices](https://github.com/tinybirdco/tinybird-agent-skills/tree/main/skills/tinybird-best-practices) - Tinybird project guidelines for datasources, pipes, endpoints, and SQL
- [tinybirdco/tinybird-cli-guidelines](https://github.com/tinybirdco/tinybird-agent-skills/tree/main/skills/tinybird-cli-guidelines) - Tinybird CLI usage guidelines and commands
- [tinybirdco/tinybird-typescript-sdk-guidelines](https://github.com/tinybirdco/tinybird-agent-skills/tree/main/skills/tinybird-typescript-sdk-guidelines) - Tinybird TypeScript SDK usage guidelines

---

### 開発ツールとフレームワーク

#### VoltAgent のスキル
- [voltagent/create-voltagent](https://github.com/VoltAgent/skills/tree/main/skills/create-voltagent) - Project setup guide with CLI and manual steps
- [voltagent/voltagent-best-practices](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-best-practices) - Architecture and usage patterns for agents, workflows, memory, and servers
- [voltagent/voltagent-core-reference](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-core-reference) - Reference for the VoltAgent class options and lifecycle methods
- [voltagent/voltagent-docs-bundle](https://github.com/VoltAgent/skills/tree/main/skills/voltagent-docs-bundle) - Lookup embedded docs from @voltagent/core for version-matched documentation

#### CallStack のスキル
- [callstackincubator/react-native-best-practices](https://github.com/callstackincubator/agent-skills/tree/main/skills/react-native-best-practices) - Performance optimization for React Native apps
- [callstackincubator/github](https://github.com/callstackincubator/agent-skills) - GitHub workflow patterns for PRs, code review, branching
- [callstackincubator/upgrading-react-native](https://github.com/callstackincubator/agent-skills/tree/main/skills/upgrading-react-native) - React Native upgrade workflow: templates, dependencies, and pitfalls

#### Expo のスキル
- [expo/building-native-ui](https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-native-ui) - Build apps with Expo Router, styling, components, and animations
- [expo/expo-api-routes](https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-router) - Create API routes in Expo Router with EAS Hosting
- [expo/expo-deployment](https://github.com/expo/skills/tree/main/plugins/expo/skills/eas-hosting) - Deploy Expo apps to production
- [expo/upgrading-expo](https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-upgrade) - Upgrade Expo SDK versions
- [expo/use-dom](https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-dom) - Run web code in a webview on native using DOM components

#### Remotion のスキル
- [remotion-dev/remotion](https://github.com/remotion-dev/skills) - Programmatic video creation with React

#### DuckDB のスキル
- [duckdb/attach-db](https://github.com/duckdb/duckdb-skills/tree/main/skills/attach-db) - Attach a DuckDB database file for interactive querying
- [duckdb/query](https://github.com/duckdb/duckdb-skills/tree/main/skills/query) - Run SQL queries against attached databases or ad-hoc files
- [duckdb/duckdb-docs](https://github.com/duckdb/duckdb-skills/tree/main/skills/duckdb-docs) - Search DuckDB and DuckLake documentation

#### GSAP (GreenSock) のスキル
- [greensock/gsap-core](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core) - Core API: gsap.to(), from(), fromTo(), easing, duration, stagger
- [greensock/gsap-scrolltrigger](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-scrolltrigger) - ScrollTrigger for scroll-linked animations and pinning
- [greensock/gsap-react](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-react) - React integration with useGSAP hook and SSR patterns

#### Markstream のスキル

インストール元：[Simon-He95/markstream-vue](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills)。

| スキル | 説明 |
|-------|-------------|
| [markstream-angular](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-angular) | Integrate streaming Markdown into Angular apps |
| [markstream-custom-components](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-custom-components) | Add scoped renderer overrides and trusted custom tags |
| [markstream-install](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-install) | Choose and install the correct framework package and peers |
| [markstream-migration](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-migration) | Migrate existing Markdown renderers while preserving behavior |
| [markstream-nuxt](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-nuxt) | Configure SSR-safe streaming Markdown in Nuxt 3 and Nuxt 4 |
| [markstream-react](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-react) | Integrate streaming Markdown into React and Next.js apps |
| [markstream-svelte](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-svelte) | Integrate streaming Markdown into Svelte 5 apps |
| [markstream-vue](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-vue) | Integrate streaming Markdown into Vue 3 apps |
| [markstream-vue2](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-vue2) | Integrate streaming Markdown into Vue 2.6 and Vue 2.7 apps |
| [markstream-vue2-cli](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-vue2-cli) | Configure Vue CLI and Webpack 4-compatible Vue 2 rendering |
| [markstream-vue2-vite](https://github.com/Simon-He95/markstream-vue/tree/main/.agents/skills/markstream-vue2-vite) | Configure Vue 2 and Vite worker imports and CSS |

#### WordPress のスキル
- [WordPress/wp-block-development](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-block-development) - Gutenberg blocks: block.json, attributes, rendering
- [WordPress/wp-plugin-development](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-plugin-development) - Plugin architecture, hooks, settings API, security
- [WordPress/wp-playground](https://github.com/WordPress/agent-skills/tree/trunk/skills/wp-playground) - WordPress Playground for instant local environments

#### Figma のスキル
- [figma/figma-implement-design](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design) - Translate Figma designs into production-ready code with 1:1 fidelity
- [figma/figma-generate-library](https://github.com/figma/mcp-server-guide/tree/main/skills/figma-generate-library) - Build or update a design system library in Figma from a codebase
- [figma/figma-use](https://github.com/figma/mcp-server-guide/tree/main/skills/figma-use) - Run Figma Plugin API scripts for canvas writes and inspections

---

#### Ivy のスキル
- [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril) - Open-source agentic software factory with an amazing UI that handles parallel Git worktrees for you, complete with programmatic verifications and fast review loops.

### Google エコシステム

#### Google Labs (Stitch) のスキル
- [google-labs-code/design-md](https://github.com/google-labs-code/stitch-skills/tree/main/plugins/stitch-utilities/skills/design-md) - Create and manage DESIGN.md files
- [google-labs-code/enhance-prompt](https://github.com/google-labs-code/stitch-skills/tree/main/plugins/stitch-utilities/skills/enhance-prompt) - Improve prompts with design specs and UI/UX vocabulary
- [google-labs-code/react-components](https://github.com/google-labs-code/stitch-skills/tree/main/plugins/stitch-build/skills/react-components) - Stitch to React components conversion
- [google-labs-code/shadcn-ui](https://github.com/google-labs-code/stitch-skills/tree/main/plugins/stitch-build/skills/shadcn-ui) - Build UI components with shadcn/ui
- [google-labs-code/stitch-loop](https://github.com/google-labs-code/stitch-skills/tree/main/plugins/stitch-utilities/skills/stitch-loop) - Iterative design-to-code feedback loop

#### Google Workspace CLI のスキル
- [googleworkspace/gws-drive](https://github.com/googleworkspace/cli/tree/main/skills/gws-drive) - Manage Google Drive files, folders, and shared drives
- [googleworkspace/gws-sheets](https://github.com/googleworkspace/cli/tree/main/skills/gws-sheets) - Read and write Google Sheets spreadsheets
- [googleworkspace/gws-gmail](https://github.com/googleworkspace/cli/tree/main/skills/gws-gmail) - Send, read, and manage Gmail email
- [googleworkspace/gws-calendar](https://github.com/googleworkspace/cli/tree/main/skills/gws-calendar) - Manage Google Calendar calendars and events
- [googleworkspace/gws-workflow](https://github.com/googleworkspace/cli/tree/main/skills/gws-workflow) - Cross-service Google Workspace productivity workflows

---

### ビジネス・生産性・マーケティング

#### Stripe のスキル
- [stripe/stripe-best-practices](https://github.com/stripe/ai/tree/main/skills/stripe-best-practices) - Best practices for building Stripe integrations
- [stripe/upgrade-stripe](https://github.com/stripe/ai/tree/main/skills/upgrade-stripe) - Upgrade Stripe SDK and API versions

#### Courier のスキル
- [trycourier/courier-skills](https://github.com/trycourier/courier-skills) - Multi-channel notifications via email, SMS, push, and chat

#### Typefully のスキル
- [typefully/typefully](https://github.com/typefully/agent-skills/tree/main/skills/typefully) - Create, schedule, and publish social media content

#### SocialClaw のスキル
- [ndesv21/socialclaw](https://github.com/ndesv21/socialclaw) - Schedule and publish social media posts across 13 platforms (X, LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit, WordPress, Pinterest) via a single workspace API key.

#### Surendran B のスキル
- [surendranb/writing-skills](https://github.com/surendranb/writing-skills) - 15 writing-style skills: 8 measurable frameworks (plain language, ASD-STE100, AP journalism, GOV.UK, business BLUF) and 7 character voices, each with a verify checklist

#### Composio のスキル
- [composiohq/composio](https://github.com/composio-community/skills/tree/main/skills/composio) - Connect AI agents to 1000+ external apps with managed authentication

#### Authsome のスキル
- [agentrhq/authsome](https://github.com/agentrhq/authsome) - Local OAuth2 and API-key credential broker for AI agents. Login once via browser PKCE or device code, encrypted vault at ~/.authsome, local proxy injects credentials at request time. 30+ providers preconfigured.

#### Notion のスキル
- [makenotion/knowledge-capture](https://github.com/makenotion/cursor-notion-plugin/tree/main/skills/knowledge-capture) - Transform conversations into structured Notion documentation
- [makenotion/meeting-intelligence](https://github.com/makenotion/cursor-notion-plugin/tree/main/skills/meeting-intelligence) - Prepare meeting materials by gathering Notion context
- [makenotion/spec-to-implementation](https://github.com/makenotion/cursor-notion-plugin/tree/main/skills/spec-to-implementation) - Turn tech specs into concrete Notion tasks

#### Resend のスキル
- [resend/resend](https://github.com/resend/resend-skills/tree/main/skills/resend) - Send and manage emails via the Resend API
- [resend/react-email](https://github.com/resend/resend-skills/tree/main/skills/react-email) - Build emails with React Email components
- [resend/email-best-practices](https://github.com/resend/resend-skills/tree/main/skills/email-best-practices) - Email deliverability and design best practices

#### Sanity のスキル
インストール元：[sanity-io/agent-toolkit](https://github.com/sanity-io/agent-toolkit)。
- [sanity-io/sanity-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/sanity-best-practices) - Best practices for Sanity Studio and content workflows
- [sanity-io/content-modeling-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/content-modeling-best-practices) - Guidelines for designing scalable content models in Sanity
- [sanity-io/seo-aeo-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/skills/seo-aeo-best-practices) - SEO and answer engine optimization patterns

#### Better Auth のスキル
- [better-auth/best-practices](https://github.com/better-auth/skills/tree/main/better-auth/best-practices) - Best practices for Better Auth integration
- [better-auth/create-auth](https://github.com/better-auth/skills/tree/main/better-auth/create-auth) - Create authentication setup with Better Auth
- [better-auth/twoFactor](https://github.com/better-auth/skills/tree/main/better-auth/twoFactor) - Two-factor authentication with Better Auth
- [better-auth/explain-error](https://github.com/better-auth/skills) - Explain Better Auth error messages

#### NotFair のスキル
マーケティング向けのオープンソース SEO・GEO・広告運用スキル。Google Ads、Meta Ads、Google Search Console、Google Analytics (GA4) の MCP からライブデータを取得するため、推測ではなく実数値に基づいて監査できます。
- [nowork-studio/seo](https://github.com/nowork-studio/NotFair/tree/main/seo) - SEO and GEO: site analysis, keyword research, meta tags, schema markup, and content writing
- [nowork-studio/google-ads](https://github.com/nowork-studio/NotFair/tree/main/google-ads) - Google Ads audits: wasted-spend detection, search-term cleanup, keyword and bid management
- [nowork-studio/meta-ads](https://github.com/nowork-studio/NotFair/tree/main/meta-ads) - Meta (Facebook + Instagram) Ads: ROAS analysis, creative-fatigue and audience-overlap diagnosis

#### HumanPen のスキル
- [humanpen/humanpen-skill](https://github.com/humanpen/humanpen-skill) - Rewrites .docx/.pptx documents to read as human-written and lower AI-detection scores

#### Product on Purpose のプロダクトマネジメントスキル
- [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) - 68 product management skills covering discovery, definition, delivery, and iteration, with 6 sub-agents and 12 workflows

#### SuperCLI のスキル
- [javimosch/supercli](https://github.com/javimosch/supercli) - Universal CLI router with 4,795+ agent skills (`SKILL.md`). Agents discover CLI tools by intent via `sc skills search`, inspect schemas via `sc inspect`, and execute with deterministic JSON output. Each plugin ships with its own `skills/quickstart/SKILL.md` — instant agent onboarding for 7,000+ CLI tools.

<details>
<summary><strong>Corey Haines のマーケティングスキル</strong></summary>

[Corey Haines](https://github.com/coreyhaines31) による包括的な SaaS マーケティングスキル。
- [coreyhaines31/ai-seo](https://github.com/coreyhaines31/marketingskills/tree/main/skills/ai-seo) - Optimize content for AI-generated answers
- [coreyhaines31/copywriting](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting) - Write marketing copy for landing pages and ads
- [coreyhaines31/email-sequence](https://github.com/coreyhaines31/marketingskills) - Build email sequences and drip campaigns
- [coreyhaines31/page-cro](https://github.com/coreyhaines31/marketingskills) - Improve conversion rates on marketing pages
- [coreyhaines31/pricing-strategy](https://github.com/coreyhaines31/marketingskills/tree/main/skills/pricing) - Define pricing and packaging for SaaS
- [coreyhaines31/social-content](https://github.com/coreyhaines31/marketingskills/tree/main/skills/social) - Create and schedule social media content
</details>

<details>
<summary><strong>Dean Peters のプロダクトマネジメントスキル</strong></summary>

[Dean Peters](https://github.com/deanpeters) による実戦で磨かれた 46 の PM スキル。
- [deanpeters/epic-hypothesis](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/epic-hypothesis) - Turn initiatives into testable hypotheses
- [deanpeters/opportunity-solution-tree](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/opportunity-solution-tree) - Generate solution trees based on Teresa Torres' method
- [deanpeters/prd-development](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/prd-development) - Structured PRD process: problem to metrics
- [deanpeters/roadmap-planning](https://github.com/deanpeters/Product-Manager-Skills/tree/main/skills/roadmap-planning) - Strategic roadmap process and communication
</details>

<details>
<summary><strong>Pawel Huryn のプロダクトマネジメントスキル</strong></summary>

The Product Compass の作者 [Paweł Huryn](https://github.com/phuryn) による 65 の PM スキル。
- [phuryn/create-prd](https://github.com/phuryn/pm-skills/tree/main/pm-execution/skills/create-prd) - Create a PRD with 8-section template
- [phuryn/product-strategy](https://github.com/phuryn/pm-skills/tree/main/pm-product-strategy/skills/product-strategy) - Create product strategy using the Canvas
- [phuryn/user-personas](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/user-personas) - Create user personas with JTBD, pains, and gains
- [phuryn/market-sizing](https://github.com/phuryn/pm-skills/tree/main/pm-market-research/skills/market-sizing) - Estimate TAM, SAM, SOM with top-down and bottom-up
- [phuryn/pm-skills](https://github.com/phuryn/pm-skills) - Full collection: advanced product management frameworks, OKRs, and strategy skills
</details>

<details>
<summary><strong>Garry Tan (gstack) のスキル</strong></summary>

[Garry Tan](https://github.com/garrytan) による 28 のエンジニアリングリーダーシップスキル。
- [garrytan/office-hours](https://github.com/garrytan/gstack/tree/main/office-hours) - YC Office Hours: reframing product before code
- [garrytan/plan-ceo-review](https://github.com/garrytan/gstack/tree/main/plan-ceo-review) - CEO/Founder plan review modes
- [garrytan/design-review](https://github.com/garrytan/gstack/tree/main/design-review) - Visual audit and atomic fixes with screenshots
- [garrytan/qa](https://github.com/garrytan/gstack/tree/main/qa) - QA Lead: find bugs and generate regression tests
- [garrytan/ship](https://github.com/garrytan/gstack/tree/main/ship) - Release Engineer: sync, test, audit, and push
- [garrytan/gstack](https://github.com/garrytan/gstack) - Full gstack collection: YC founder stack for planning, review, QA, and shipping
</details>

---

### セキュリティと Web インテリジェンス

#### Trail of Bits のスキル
- [trailofbits/audit-context-building](https://github.com/trailofbits/skills/tree/main/plugins/audit-context-building/skills/audit-context-building) - Deep architectural context via granular code analysis
- [trailofbits/building-secure-contracts](https://github.com/trailofbits/skills) - Smart contract security toolkit for 6 blockchains
- [trailofbits/modern-python](https://github.com/trailofbits/skills/tree/main/plugins/modern-python/skills/modern-python) - Modern Python tooling with uv, ruff, and pytest
- [trailofbits/static-analysis](https://github.com/trailofbits/skills) - Static analysis toolkit with CodeQL and Semgrep

#### Sentry のスキル
- [getsentry/agents-md](https://github.com/getsentry/skills/tree/main/skills/agents-md) - Generate and manage AGENTS.md files
- [getsentry/code-review](https://github.com/getsentry/skills/tree/main/skills/code-review) - Perform structured code reviews
- [getsentry/find-bugs](https://github.com/getsentry/skills/tree/main/skills/find-bugs) - Find and identify bugs in code
- [getsentry/skills](https://github.com/getsentry/skills) - Full collection: debug errors, performance issues, and traces with Sentry

#### Firecrawl のスキル
- [firecrawl/firecrawl-cli](https://github.com/firecrawl/cli/tree/main/skills/firecrawl) - Scrape, crawl, search, and map the web via CLI
- [firecrawl/firecrawl-agent](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-agent) - AI agent for autonomous web scraping
- [firecrawl/firecrawl-browser](https://github.com/firecrawl/cli) - Browser-based web scraping and interaction
- [firecrawl/firecrawl-scrape](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-scrape) - Scrape web pages and extract content
- [firecrawl/firecrawl-search](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-search) - Search the web and extract results

<details>
<summary><strong>Microsoft のスキル</strong></summary>

Azure SDK と Microsoft AI Foundry 向けの 133 のドメイン特化スキル。
- [microsoft/cloud-solution-architect](https://github.com/microsoft/skills/tree/main/.github/skills/cloud-solution-architect) - Design well-architected Azure cloud systems
- [microsoft/copilot-sdk](https://github.com/microsoft/skills/tree/main/.github/skills/copilot-sdk) - Build applications powered by GitHub Copilot SDK
- [microsoft/azure-ai-openai-dotnet](https://github.com/microsoft/skills/tree/main/.github/plugins/azure-sdk-dotnet/skills/azure-ai-openai-dotnet) - GPT-4, embeddings, and DALL-E client for .NET
- [microsoft/azure-ai-projects-python](https://github.com/microsoft/skills/tree/main/.github/plugins/azure-sdk-python/skills/azure-ai-projects-py) - AI Foundry project client and agents for Python
- [microsoft/azure-identity-typescript](https://github.com/microsoft/skills/tree/main/.github/plugins/azure-sdk-typescript/skills/azure-identity-ts) - Microsoft Entra ID authentication for TypeScript
- [microsoft/skills](https://github.com/microsoft/skills) - Full official Microsoft agent skills collection
</details>

#### Binance のスキル
- [binance/crypto-market-rank](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/crypto-market-rank) - Query crypto market rankings and leaderboards
- [binance/query-token-audit](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/query-token-audit) - Audit token security to detect scams and honeypots
- [binance/trading-signal](https://github.com/binance/binance-skills-hub/tree/main/skills/binance-web3/trading-signal) - Monitor on-chain Smart Money buy/sell signals

---

## コミュニティスキル

> 英語版と常に同期させるため、スキルの説明は原則として英語のままです。既存の翻訳は保持されます。

<details>
<summary><strong>ベクトルデータベース</strong></summary>

- [qdrant/skills](https://github.com/qdrant/skills) - Agent skills for Qdrant vector search, scaling, and performance
</details>

<details>
<summary><strong>データと分析</strong></summary>

- [honeydew-ai/honeydew-ai-coding-agents-plugins](https://github.com/honeydew-ai/honeydew-ai-coding-agents-plugins) - 11 skills + MCP server for building and querying a governed semantic layer over Snowflake, Databricks, and BigQuery from coding agents (Claude Code, Codex, Cursor, Copilot CLI, Gemini CLI). Same trusted model serves BI tools and AI agents. Plugins are Apache 2.0.
<summary><strong>クラウドストレージ</strong></summary>

- [backblaze-labs/claude-skill-b2-cloud-storage](https://github.com/backblaze-labs/claude-skill-b2-cloud-storage) - Manage Backblaze B2 storage: list, audit, cleanup, security, lifecycle
- [coffeefuelbump/csv-data-summarizer-claude-skill](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) - Analyze CSV files and generate insights with visualizations
- [shepsci/kaggle-skill](https://github.com/shepsci/kaggle-skill) - Complete Kaggle integration — competition reports, dataset downloads, submissions
</details>

<details>
<summary><strong>マーケティング</strong></summary>

- [BrianRWagner/ai-marketing-skills](https://github.com/BrianRWagner/ai-marketing-skills) - 17 marketing frameworks for outreach and audits
- [cognyai/claude-code-marketing-skills](https://github.com/cognyai/claude-code-marketing-skills) - AI marketing skills: SEO Audit, Landing Page Review, Competitor Analysis, Ad Copy Writer, Lead Qualification. 5 free skills + premium via Cogny MCP
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) - Universal SEO skill for website analysis
- [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill) - 20+ creative methodologies (SIT, TRIZ, SCAMPER)
- [SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose) - Hard-edged writing style contract for forceful English prose
- [LeadMagic/gtm-skills](https://github.com/LeadMagic/gtm-skills) - 189+ GTM playbooks for AI agents covering marketing, sales, customer success, and revenue operations across 26 categories. Compatible with Claude Code, Codex, Cursor, GitHub Copilot, and 12+ agent platforms. [Website](https://leadmagic.io/gtm-skills)
- [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) - Russian AI-writing cleanup with 38 style patterns and 35 regex markers.
- [gooseworks-ai/goose-skills](https://github.com/gooseworks-ai/goose-skills) - 125 growth/GTM skills for ads, lead gen, outreach, and SEO
- [wgwtest/novel-writing](https://github.com/wgwtest/novel-writing) - Codex skill for fiction planning, drafting, and revision with viewpoint, scene-causality, dialogue, and style-preservation checks
- [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) - 18 go-to-market skills: pricing, outbound, SEO, ads, retention, and ops
</details>

<details>
<summary><strong>キャリア</strong></summary>

- [vaibhavarora14/job-application-agent](https://github.com/vaibhavarora14/job-application-agent) - Privacy-first skill to discover, qualify, complete, and track your own job applications
- [socai-io/jev-social](https://github.com/socai-io/jev-social/tree/main/skills/jev-social) - Research social platforms through typed Jev actions in local Chrome
- [xianyu110/ecommerce-image-skills](https://github.com/xianyu110/ecommerce-image-skills) - 12 skills for ecommerce product images (Amazon main image, A+, banners)
- [xianyu110/ecommerce-video-skills](https://github.com/xianyu110/ecommerce-video-skills) - 12 skills for ecommerce short videos with local ffmpeg rendering
</details>

<details>
<summary><strong>生産性とコラボレーション</strong></summary>

- [PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill) - Document processing: convert, OCR, and redact PII
- [RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills) - Transform docs or codebases into interactive StudyVaults
- [hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill) - Hierarchical memory system with filesystem persistence
- [salespeak-ai/buyer-eval-skill](https://github.com/salespeak-ai/buyer-eval-skill) - B2B vendor evaluation skill: 7-dimension scoring with evidence-tracked scorecards for procurement and build-vs-buy decisions
- [wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill) - Manage Linear issues, projects, and teams
- [Orkas-AI/video-router](https://github.com/Orkas-AI/Orkas-VideoStudio/tree/main/packages/skills/video-router) - Route video requests through deterministic agent production stages
- [anzy-renlab-ai/pronounce-word](https://github.com/anzy-renlab-ai/pronounce/tree/main/skills/pronounce-word) - Play sourced developer-jargon pronunciations with local TTS, IPA, and contested alternatives
- [chubbyguan/chubbyskills](https://github.com/chubbyguan/chubbyskills) - 14 skills for ingesting Chinese content (Douyin, Bilibili, Xiaohongshu, WeChat, X/Twitter, podcasts) into a personal knowledge base — auto image/video routing, subtitle-first transcription, RSS/YouTube subscription scheduling, and a knowledge-base MCP server
- [KKKKhazix/aihot](https://github.com/KKKKhazix/khazix-skills/tree/main/aihot) - Query Chinese AI news, current topics, and daily briefs from AIHOT through anonymous read-only requests; retain dates and original-source links. [Service terms](https://aihot.news/terms) apply separately from the MIT-licensed skill.
- [Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills) - PM operator skill across 12 domains: discovery, PRDs, SaaS metrics, pricing, launch, and stakeholder comms
- [makenotion/skills](https://github.com/makenotion/skills) - Notion API integration, database operations, and content management
- [smerchek/claude-epub-skill](https://github.com/smerchek/claude-epub-skill) - Converts markdown documents into professional EPUB ebook files
- [talkstream/ru-text](https://github.com/talkstream/ru-text) - Russian text quality: ~1,040 rules for typography, info-style, editorial, UX writing, business correspondence
</details>

<details>
<summary><strong>開発とテスト</strong></summary>

- [vostride/agent-qa](https://github.com/vostride/agent-qa) - Three skills for authoring natural-language web and mobile tests, triaging failures, and debugging fixes with MCP evidence
- [kranz-org/kranz-services](https://github.com/kranz-org/kranz/tree/main/skills/kranz-services) - Inspect and control live development services through Kranz MCP
- [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) - Generate hand-drawn Excalidraw diagrams from prompt
- [coderabbitai/skills](https://github.com/coderabbitai/skills) - Code review and PR autofix workflows
- [lmammino/c4-codebase-architecture](https://github.com/lmammino/c4-codebase-architecture-skill/tree/main/skills/c4-codebase-architecture) - Generate evidence-based C4 architecture docs from codebases
- [luoyuctl/agenttrace](https://github.com/luoyuctl/agenttrace/tree/master/skills/agenttrace-session-audit) - Audit AI coding-agent session health and cost
- [massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill) - Handle long-context tasks (100+ files) via decomposition
- [mcollina/skills](https://github.com/mcollina/skills/tree/main/skills) - Node.js core, Fastify, and TypeScript skills by Matteo Collina
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) - High-agency frontend skill to eliminate generic UI slop
- [Evol-ai/SkillCompass](https://github.com/Evol-ai/SkillCompass) - Local-first skill quality evaluator scoring 6 dimensions with fix suggestions and version tracking
- [smorky850612/AuraKit](https://github.com/smorky850612/Aurakit) - Full dev lifecycle skill for Claude Code: 46 modes (BUILD/FIX/DEPLOY/REVIEW/TDD/QA/DEBUG), 23 sub-agents, 6-layer OWASP+ security, ~55% token savings via Tiered Model routing
- [MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop) - MCP server and CLI skill that removes named AI writing patterns: tricolons, em-dash overuse, hedging stacks, sycophancy openers, and overused vocab. Lint-only audit mode, five intensity levels.
- [kubestellar/console](https://github.com/kubestellar/console) - Multi-cluster Kubernetes dashboard with 10+ built-in agent skills for performance testing, cache compliance, CI debugging, and K8s troubleshooting. MCP server bridges agents to kubeconfig and Kubernetes APIs
- [swarmclawai/swarmclaw](https://github.com/swarmclawai/swarmclaw/tree/main/skills/swarmclaw) - Operate self-hosted multi-agent runtime workflows
- [swarmclawai/karpathy-guidelines](https://github.com/swarmclawai/andrej-karpathy-skills/tree/main/skills/karpathy-guidelines) - Coding-agent guardrails for clarity, minimal diffs, and verification
- [ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills) - YouTube transcripts, search, channel data, and playlists via TranscriptAPI. Works anywhere.
- [0xheycat/isometric-game-skills](https://github.com/0xheycat/isometric-game-skills) - 20 agent-ready skills for isometric game dev: ComfyUI art pipeline, terrain, sprites, renderer, pathfinding, and more
- [sametcelikbicak/coverage-guard](https://github.com/sametcelikbicak/coverage-guard) - Enforces 100% test coverage for any JavaScript/TypeScript project. Works with Vitest, Jest, react-scripts, and more
- [sametcelikbicak/flaky-test-detector](https://github.com/sametcelikbicak/flaky-test-detector) - Detects, analyzes, and eliminates flaky tests across any test runner
- [sametcelikbicak/rolecraft](https://github.com/rolecraft-sh/rolecraft) - Zero-dependency CLI to install AI agent skills as roles & behaviors from any source. Works with opencode, claude-code, cursor, and all spec-compliant agents
- [sametcelikbicak/task-decomposer](https://github.com/sametcelikbicak/task-decomposer) - Decomposes complex requests into structured, AI-friendly task sequences
- [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills/tree/master/harmony-next) - HarmonyOS NEXT workflows for AI coding agents
- [sarveshsea/audit-frontend-design](https://github.com/sarveshsea/memi/tree/main/skills/audit-frontend-design) - Audit frontend design debt before editing code
- [eduardo-sl/go-agent-skills](https://github.com/eduardo-sl/go-agent-skills) - 28 curated Go skills for code review, concurrency, testing, and architecture
- [fcavalcantirj/claude-code-eyes](https://github.com/fcavalcantirj/claude-code-eyes) - Camera vision for Claude Code — see hardware, screens and wiring to verify physical output
- [Shilo/pixellab-pip](https://github.com/Shilo/pixellab-pip) - Route PixelLab MCP/REST to generate, edit, and animate pixel art
- [aaddrick/attention-control](https://github.com/aaddrick/attention-control) - Air traffic control discipline for coding-agent output, tuned for ADHD reading
- [mdrbx/nerv-ui](https://github.com/mdrbx/nerv-ui/tree/master/skills/nerv-ui) - Typed React command-center components, live examples, and a portable Agent Skills-compatible skill
- [Tencent/aig-agent-redteam](https://github.com/Tencent/AI-Infra-Guard/tree/main/skills/aig-agent-redteam) - One-command Agent red-team security assessment
- [Continuum-AI-Corp/OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay/tree/main/skills/orca-replay) - Read a recorded agent run from its trace, replay it offline, or fork it onto another model
- [mblode/agent-skills](https://github.com/mblode/agent-skills) - 26 skills for UI audits, typography, docs, PR review, and releases
- [lukstei/slop-grader](https://github.com/lukstei/slop-grader) - Rule-based CLI tool evaluating custom rulesets to guide auto-fixing with an AI agent
- [unbrowse-ai/unbrowse](https://github.com/unbrowse-ai/unbrowse/tree/main/skill) - Search, call, and read websites through a hosted API or MCP
- [aaddrick/building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev) - Design TypeSafe Jev calls: typed questions, confidence routing, 150+ prior-art projects
- [umutbozdag/manage-skills](https://github.com/umutbozdag/agent-skills-manager/tree/main/skills/manage-skills) - Discover, create, edit, toggle, copy, and move agent skills across 11 tools from the terminal
- [ameyalambat128/swiftui-skills](https://github.com/ameyalambat128/swiftui-skills) - Apple-authored SwiftUI and platform guidance extracted from Xcode
- [AppDeploy-AI/skills](https://github.com/AppDeploy-AI/skills) - Deploy apps with full stack and get a live URL back
- [ChaosRealmsAI/agent-cli-spec](https://github.com/ChaosRealmsAI/agent-cli-spec) - CLI design spec — 98 rules for building agent-safe CLI tools
- [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill) - D3 charts and interactive data visualizations
- [conorluddy/ios-simulator-skill](https://github.com/conorluddy/ios-simulator-skill) - Interact with iOS Simulator for testing
- [dadwadw233/claude-code-harness](https://github.com/dadwadw233/claude-code-harness) - Harness blueprint skill for request assembly, control loops, memory boundaries, permissions, and recovery
- [dadwadw233/claude-code-philosophy](https://github.com/dadwadw233/claude-code-philosophy) - Skill for reviewing and structuring agent products around harnesses, memory, permissions, recovery, and UX
- [dragon1086/claude-skills](https://github.com/dragon1086/claude-skills) - Analyzes prompts and recommends optimal tools, skills, agents, and orchestration patterns
- [frmoretto/stream-coding](https://github.com/frmoretto/stream-coding) - Stream Coding methodology
- [gapmiss/obsidian-plugin-skill](https://github.com/gapmiss/obsidian-plugin-skill) - Obsidian.md plugin development
- [glacierphonk/naming](https://github.com/glacierphonk/naming) - Metaphor-driven naming for products, SaaS, brands, and open source projects
- [knot0-com/vibe-testing](https://github.com/knot0-com/vibe-testing) - Pressure-test spec documents with LLM reasoning before writing code
- [kylehughes/the-unofficial-swift-concurrency-migration-skill](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) - Swift Concurrency Migration guide
- [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) - Browser automation for testing web apps
- [rickygao/specrate](https://github.com/rickygao/specrate) - Manage specs and changes in a structured workflow
- [yshishenya/stitchflow](https://github.com/yshishenya/stitchflow) - Stitch UI generation with local HTML and screenshots
- [zxkane/aws-skills](https://github.com/zxkane/aws-skills) - AWS development with CDK best practices
</details>

<details>
<summary><strong>コンテキストエンジニアリング</strong></summary>

- [DrDroidLab/setup-open-index](https://github.com/DrDroidLab/open-index/blob/main/skills/setup-open-index/SKILL.md) - Set up structured context graphs with hybrid search and read/write MCP access
- [muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression) - Compression strategies for long-running sessions
- [muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems) - Design short-term and graph-based memory architectures
- [TerminallyLazy/tree-ring-memory](https://github.com/TerminallyLazy/Tree-Ring-Memory/tree/main/skills/tree-ring-memory) - Lifecycle-aware local memory with recall, evidence, audit, and forgetting
- [ohad6k/ditto](https://github.com/ohad6k/ditto) - Mine Claude Code and Codex session logs into local, evidence-backed agent profiles
- [k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol) - Graph-based memory for faster context and safer refactors
- [fockus/skill-memory-bank](https://github.com/fockus/skill-memory-bank) - Cross-agent long-term project memory via `.memory-bank/` for Claude Code, Cursor, Windsurf, Cline, Kilo, OpenCode, Pi Code, Codex — bundles TDD / SOLID / Clean Architecture / FSD rules and 18 dev-toolkit commands
- [swarmclawai/swarmvault](https://github.com/swarmclawai/swarmvault/tree/main/skills/swarmvault) - Build local knowledge vaults and context packs
- [Necmttn/ax-extract-workflow](https://github.com/Necmttn/ax/tree/main/skills/ax-extract-workflow) - Reconstruct shipped workflows from local ax sessions, commits, skills, and subagent traces
- [qualixar/superlocalmemory](https://github.com/qualixar/superlocalmemory) - Local-first persistent memory for coding agents via MCP, with governed recall
- [jakedahn/pomodoro](https://github.com/jakedahn/pomodoro) - System Skill Pattern — skills that remember and improve
- [yzfly/Mind-Cloning-Engineering](https://github.com/yzfly/Mind-Cloning-Engineering) - Mind cloning with LLM skills
</details>

<details>
<summary><strong>暗号資産と市場データ</strong></summary>

- [coinpaprika/coinpaprika-api](https://github.com/coinpaprika/skills/tree/main/coinpaprika-api) - Crypto market data for 12,000+ coins and 350+ exchanges
- [coinpaprika/dexpaprika-api](https://github.com/coinpaprika/skills/tree/main/dexpaprika-api) - DEX pools, tokens, and OHLCV across 36 chains
- [HeyVincent-ai/agent-skills](https://github.com/HeyVincent-ai/agent-skills) - Polymarket prediction market trading for agents
- [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) - Cryptocurrency, web3 and blockchain skills
- [RioTheGreat-ai/agentfund-skill](https://github.com/RioTheGreat-ai/agentfund-skill) - Crowdfunding for AI agents on Base chain - milestone escrow
- [kybernetwork/kyberswap-skills](https://github.com/kybernetwork/kyberswap-skills) - Token swap quotes and transactions across 18 EVM chains
</details>

<details>
<summary><strong>教育と指導</strong></summary>

- [YujxZJCN/teaching-skills](https://github.com/YujxZJCN/teaching-skills) - University teaching lifecycle for professors: course design, lessons, exams, grading (Codex: YujxZJCN/teaching-skills-codex)
</details>

<details>
<summary><strong>クリエイティブとメディア</strong></summary>

- [Alisa0808/vibe-creating-skill](https://github.com/Alisa0808/vibe-creating-skill) - Rewrite rough ideas into model-ready text-to-video prompts (Seedance, Sora, Kling, Veo); bilingual EN/中文
- [NoizAI/skills](https://github.com/NoizAI/skills) - Human-like TTS skills with tested speaking styles, emotional tone, and local or cloud voice backends
</details>

<details>
<summary><strong>執筆とストーリーテリング</strong></summary>

- [danjdewhurst/story-skills](https://github.com/danjdewhurst/story-skills) - 16 skills for planning, tracking, and drafting fiction in markdown (worldbuilding, characters, plot, scenes, chapters, revision, continuity), plus a CLI that checks continuity
- [Qiuner/birdview](https://github.com/Qiuner/birdview) - Treat architecture and constraints as the enduring work of programming, with reviewable scope, evidence, and verification in standalone HTML
</details>

<details>
<summary><strong>メディアとコンテンツ</strong></summary>

- [tubeagentkit/youtube-transcript-skills](https://github.com/tubeagentkit/youtube-transcript-skills) - Fetch YouTube transcripts, search videos/channels, browse channels, and extract playlists via getyoutubetranscript.com's free-tier API
</details>

<details>
<summary><strong>セキュリティ</strong></summary>

- [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) - Digital forensics analysis and investigation
- [grittygrease/safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) - Modern encryption alternative to GPG/PGP with post-quantum support
- [jthack/threat-hunting-with-sigma-rules-skill](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) - Hunt for threats using Sigma detection rules
</details>

<details>
<summary><strong>連携と自動化</strong></summary>

- [c5huracan/meyhem](https://github.com/c5huracan/meyhem) - Agent-native web search with feedback-driven ranking via REST API and MCP server
- [caopulan/Notification-Skill](https://github.com/caopulan/Notification-Skill) - Send message notifications for agent workflows
- [commune-dev/commune-skill](https://github.com/commune-dev/commune-skill) - Agent-native email inbox — permanent @commune.ai address with full send/receive, semantic search, triage, and webhooks
- [ComposioHQ/composio](https://github.com/ComposioHQ/composio) - Connect AI agents to 1000+ external apps with managed authentication
- [fabioc-aloha/spotify-skill](https://github.com/fabioc-aloha/spotify-skill) - Spotify API integration
- [gmickel/sheets-cli](https://github.com/gmickel/sheets-cli) - Google Sheets CLI automation
- [Ivlad003/plugins](https://github.com/Ivlad003/plugins) - Query and analyze Datadog logs, metrics, monitors, and traces directly from Claude Code via REST API
- [SawyerHood/dev-browser](https://github.com/SawyerHood/dev-browser) - Web browser capability for agents
- [techgangboss/agentstore](https://github.com/techgangboss/agentstore) - Open-source plugin marketplace with CLI install
- [transloadit/skills](https://github.com/transloadit/skills) - Media processing: video encoding, image manipulation, OCR
</details>

<details>
<summary><strong>スキルコレクション</strong></summary>

- [browser-act/skills](https://github.com/browser-act/skills) - 22 browser automation skills for structured data extraction
- [ckanner/agent-skills](https://github.com/ckanner/agent-skills) - Curated Claude Agent Skills collection
- [cuongducle/community-demand-prospecting-skill](https://github.com/cuongducle/community-demand-prospecting-skill) - Repo audit, market research, positioning, and community outreach planning
- [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) - Pydantic AI integration
- [gotalab/skillport](https://github.com/gotalab/skillport) - Skills distribution via CLI or MCP
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) - 50+ verified skills for Claude Code and Claude.ai
- [MoizIbnYousaf/ai-agent-skills](https://github.com/MoizIbnYousaf/ai-agent-skills) - SkillCreator.ai collection with CLI installer
- [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) - Skills for DSPy framework
- [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) - Google Workspace (Gmail, Chat, Calendar, Docs, Drive, Sheets, Slides), AI delegation (Jules, Manus, Deep Research), and database skills
- [uxuiprinciples/agent-skills](https://github.com/uxuiprinciples/agent-skills) - 5 UX/UI skills: evaluate interfaces against 168 research-backed principles
- [yshishenya/stitchflow](https://github.com/yshishenya/stitchflow) - Cross-agent UI design skill collection for turning briefs and mockups into screens, variants, HTML, and screenshots
</details>

---

- [sergebulaev/linkedin-skills](https://github.com/sergebulaev/linkedin-skills) - Social media marketing skills for 7 platforms: corpus-validated hooks, humanizer, audience insights
<!-- sync:directory:end -->

---

## スキルの品質基準

スキルを評価・投稿する際は、次の点を確認してください：

- **明確な指示**：手順があいまいでなく、そのまま実行できる
- **適切な範囲**：1 つのスキルは 1 つのタスクに集中している
- **動く例**：理論だけでなく実際の使い方を示している
- **トレードオフの記載**：制限や例外ケースを正直に書いている
- **サイズ上限**：エージェントの性能を保つため SKILL.md は 500 行以内
- **テスト済み**：対象エージェントで実際に動作することを確認している

---

## スキルの使い方

### Claude.ai でスキルを使う
1. チャット画面のスキルアイコンをクリックします。
2. マーケットプレイスからスキルを追加するか、カスタムスキルをアップロードします。
3. Claude はタスクに応じて関連するスキルを自動的に有効にします。

### Google Antigravity でスキルを使う

Antigravity は 2 種類のスキルに対応しています：

- **ワークスペーススキル**：プロジェクト固有のスキル。`/.agent/skills/` に配置
- **グローバルスキル**：ユーザー全体のスキル。`~/.gemini/antigravity/skills` に配置

詳しくは[公式ドキュメント](https://antigravity.google/docs/skills)を参照してください。

### Claude Code でスキルを使う

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

スキルのメタデータを確認：
```bash
head ~/.claude/skills/skill-name/SKILL.md
```

スキルは自動的に読み込まれ、関連する場面で有効になります。

### Codex でスキルを使う

Codex 組み込みの `$skill-creator` スキルを使うか、手動でインストールします：

```bash
$skill-installer linear
```

スキルをインストールしたら Codex を再起動してください。

### Autohand Code でスキルを使う

Autohand Code はカタログ掲載のスキルを直接インストールできます：

```bash
autohand --skill-install <skill-name>
autohand --skill-install <skill-name> --project
```

手動でダウンロードしたスキルは、スキルフォルダごと Autohand Code が読み込む場所に置きます：

```text
~/.autohand/skills/skill-name/SKILL.md
<project>/.autohand/skills/skill-name/SKILL.md
```

複数のプロジェクトで使うスキルはグローバルパスに、現在のワークスペースだけで使うスキルはプロジェクトパスに置きます。

### VS Code / GitHub Copilot でスキルを使う

スキルは `SKILL.md` を含むディレクトリに保存します：

- `.github/skills/` — 新しいスキルの推奨場所
- `.claude/skills/` — 従来の場所（引き続き対応）

**SKILL.md の構成：**
- `name`（必須）：ハイフン区切りの一意な小文字の識別子
- `description`（必須）：スキルの内容と、エージェントが使うべきタイミング
- 指示・例・ガイドラインを含む Markdown 本文

### MCP サーバーを使う（Claude Desktop）

設定ファイルを編集します：
- **macOS**：`~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**：`%APPDATA%\Claude\claude_desktop_config.json`

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

## スキルの作成

スキルは、特定のタスクの進め方をエージェントに伝える指示のまとまりです。実行可能なコードではありません。

### スキルの構成

```
skill-name/
├── SKILL.md          # Required: Instructions and metadata
├── scripts/          # Optional: Helper scripts
├── templates/        # Optional: Document templates
└── resources/        # Optional: Reference files
```

### 基本的な SKILL.md テンプレート

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

### MCP サーバーの例（Python）

外部データソースへの接続が必要なスキル向け：

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

## 公式チュートリアルとガイド

### Agent Skills 仕様
- [agentskills/agentskills](https://github.com/agentskills/agentskills) — オープンな `SKILL.md` 形式の仕様とリファレンス

### Claude と Anthropic
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) — 公式クイックスタートガイド
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) — ステップごとの作成ガイド
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) — 公式リファレンス

### GitHub Copilot
- [About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) — GitHub ドキュメント
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — VS Code との連携

### Model Context Protocol (MCP)
- [MCP Official Documentation](https://modelcontextprotocol.io/) — オープン標準
- [Build your first MCP Server](https://modelcontextprotocol.io/docs/first-server) — Python/TypeScript ガイド
- [MCP Server Examples](https://github.com/modelcontextprotocol/servers) — 公式サーバー実装

---

## トレンドと能力 (2026)

AI エージェントのエコシステムは、反応的なチャットインターフェースから、エンドツーエンドの多段階ワークフローを実行する **自律的で目標駆動型のシステム** へと劇的に変化しました。この時期はしばしば「エージェント・リープ（エージェントの跳躍）」と呼ばれます。

### 1. 自律実行
現代のエージェントは単純な「プロンプト応答」モデルを超えています。彼らは広範な目標を多段階の戦略計画に分解し、トレードオフを検討し、独自にシーケンスを実行します。

### 2. マルチエージェントオーケストレーション
複雑なタスクは、専門のエージェントチーム（ドキュメント、テスト、コーディング）によって管理され、成果物を統合し対立を解決する「マネージャー」エージェントによって調整されます。

---

## よくある質問

### Agent Skills とは？
Agent Skills は、AI アシスタントに特定のタスクのやり方を教える指示ファイルです。必要なときだけ読み込まれるため、AI は速く集中したままでいられます。

### Agent Skills とファインチューニングの違いは？
ファインチューニングは AI の考え方を恒久的に変えます（高コストで更新しにくい）。Agent Skills は指示ファイルにすぎないため、AI 自体に手を加えずにいつでも更新・差し替え・共有できます。

### Agent Skills と MCP の違いは？
両者はうまく組み合わせて使えます：
- **Agent Skills** — AI に何かを*どうやるか*を教える（ワークフロー、ベストプラクティス）
- **MCP** — AI が何かに*アクセス*できるようにする（API、データベース、外部ツール）

### どの AI ツールが Agent Skills に対応していますか？
現在の対応：**Claude**（Claude.ai と Claude Code）、**GitHub Copilot**、**VS Code**、**Codex**（OpenAI）、**Antigravity**（Google）、**Gemini CLI**、**Kiro**、**Junie**、**Autohand Code**。エコシステムは急速に拡大しています。

### Agent Skills はコードを実行しますか？
いいえ。スキルは単なるテキストの指示で、AI はレシピのように読んで従います。実際のコードを実行したい場合は、スキルと一緒に MCP サーバーを使います。

### 最初の Agent Skill はどう作りますか？
1. 先頭に名前と説明を書いた `SKILL.md` ファイルを作る
2. ファイルに明確な手順を書く
3. `.github/skills/` または `.claude/skills/` フォルダに置く
4. 試してみる！

詳しいガイド：[How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)

### 開発者でなくてもスキルは使えますか？
使えます。スキルはコードではなく、普通の言葉で書かれた指示ファイルです。必要なのは AI アシスタント（Claude.ai など）だけで、ターミナルや GitHub アカウント、技術的な知識はいりません。スキルの URL を AI チャットに貼り付けるだけで使い始められます。

### スキルは無料ですか？
スキル自体は無料のテキストファイルで、このリストのスキルはすべて無料でダウンロードして使えます。ただしスキルは AI が読んで実行するため、AI のサブスクリプション（Claude Pro、GitHub Copilot など）が必要です。

### スキルが安全かどうかはどう判断できますか？
このリストのスキルはすべて公開 GitHub リポジトリなので、読み込む前に指示全体を確認できます。リポジトリのスター数、最終更新日、README を確認してください。スキルはプレーンテキストなので、あなたのマシンで実行されるコードは含まれません。

---

## 関連する Awesome リスト

---

<!-- sync:related:start -->
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - Claude Code 用の厳選されたスキルとツールのリスト。
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - DESIGN.md プロトコルの標準とツール。
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - OpenClaw 用のオープンソース エージェント スキル。
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Model Context Protocol (MCP) サーバーのコレクション。
- [awesome-agentic-ai](https://github.com/adriannoes/awesome-agentic-ai) - Learning hub of agent skills, prompts, notebooks, and papers for product builders.
- [awesome-agent-skills (VoltAgent)](https://github.com/VoltAgent/awesome-agent-skills) - Large curated list of agent skills from official teams and the community.
<!-- sync:related:end -->

---

## コントリビューション

コントリビューションを歓迎します。詳しくは **[CONTRIBUTING.md](CONTRIBUTING.md)** をご覧ください。**AI エージェントで投稿する場合は、先に [AGENTS.md](AGENTS.md) を読ませてください。**

要点：
- `SKILL.md` を含む公開 GitHub リポジトリのみ掲載します
- リポジトリにスターが 20 以上あり、作成から 14 日以上経っていること
- 英語版 `README.md` のコミュニティスキルで、既存カテゴリの末尾に 1 行追加し、それ以外は変更しないこと
- スキルの提案は Issue ではなく Pull Request で行うこと
- ディレクトリ、マーケットプレイス、バッジ、宣伝リンクは受け付けません

---

## 連絡先

このプロジェクトに関する質問、提携の問い合わせ、フィードバックについては：

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## 引用

研究やプロジェクトでこれらのスキルパターンを使用する場合は、以下を引用してください：

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

---

## ライセンス

MIT ライセンス - 詳細は [LICENSE](LICENSE) ファイルを参照してください。
