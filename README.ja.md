# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

AI・コーディング・エージェントのためのスキル、ツール、機能を厳選したリストです。

---

## 目次

- [Agent Skillsとは？](#agent-skillsとは)
- [対応エージェント](#対応エージェント)
- [スキルリスト](#スキルリスト)
- [公式チュートリアル・ガイド](#公式チュートリアル・ガイド)
- [スキルの使い方](#スキルの使い方)
- [スキルの作成](#スキルの作成)
- [コミュニティリソース](#コミュニティリソース)
- [よくある質問 (FAQ)](#よくある質問-faq)
- [貢献](#貢献)
- [ライセンス](#ライセンス)
- [参考文献](#参考文献)

---

## Agent Skillsとは？

**Agent Skills**は、AIアシスタントのための「ハウツーガイド」のようなものだと考えてください。AIに最初からすべてを覚えさせる代わりに、スキルを使うことで、料理本を丸暗記させるのではなくレシピカードを渡すように、必要な能力をその場で学習させることができます。

スキルは、AIに特定のタスクの実行方法を教えるシンプルなテキストファイル（`SKILL.md`）です。AIに何かを頼むと、AIは適切なスキルを見つけ、指示を読み、作業に取り掛かります。

### 仕組み

スキルは3つの段階で読み込まれます：

1. **閲覧（Browse）** - AIは利用可能なスキルのリスト（名前と短い説明のみ）を確認します
2. **読み込み（Load）** - スキルが必要になると、AIは完全な指示を読み込みます
3. **使用（Use）** - AIは指示に従い、必要に応じてヘルパーファイルにアクセスします

### なぜ重要なのか

- **高速かつ軽量** - AIは必要なときに必要なものだけをロードします
- **どこでも使える** - 一度スキルを作れば、互換性のあるあらゆるAIツールで使用できます
- **共有が簡単** - スキルは単なるファイルなので、コピー、ダウンロード、GitHubでの共有が簡単です

スキルは**指示書**であり、コードではありません。AIは人間がガイドを読むようにそれを読み、手順に従います。

---

## 対応エージェント

以下のプラットフォームでAgent Skillsのサポートが文書化されています：

| エージェント | ドキュメント |
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

## スキルリスト

### 公式Claudeスキル（ドキュメント処理）

Claudeは一般的なドキュメントタイプ向けの組み込みスキルを提供しています：

| スキル | 説明 | ソース |
|------|------|------|
| docx | 変更履歴付きWordドキュメントの作成、編集、分析 | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | スプレッドシート操作：数式、グラフ、データ変換 | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | スライド、レイアウト、テンプレートの読み取り、生成、調整 | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | PDFからのテキスト、表、メタデータの抽出 | [anthropics/skills](https://github.com/anthropics/skills) |

### 公式OpenAI Codexスキル

Codexは異なるスコープのスキルをサポートしています：

| スキルスコープ | 場所 | 推奨用途 |
|----------|------|----------|
| REPO | `$CWD/.codex/skills` | 作業フォルダ（マイクロサービスやモジュールなど）に関連するスキル |
| REPO | `$CWD/../.codex/skills` | 親フォルダの共有エリアにあるスキル |
| REPO | `$REPO_ROOT/.codex/skills` | リポジトリを使用する全員向けのルートスキル |
| USER | `$CODEX_HOME/skills`（デフォルト：`~/.codex/skills`）| どのリポジトリにも適用できるユーザー個人のスキル |
| ADMIN | `/etc/codex/skills` | SDKスクリプト、自動化、デフォルトの管理スキル |
| SYSTEM | Codexにバンドル | skill-creatorやplanなどの組み込みスキル |

### 公式HuggingFaceスキル

| スキル | 説明 | ソース |
|------|------|------|
| hf_dataset_creator | 構造化されたトレーニングデータセットを作成するためのプロンプト、テンプレート、スクリプト | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | 評価ジョブの調整、レポート生成、メトリクスマッピングのための指示とツール | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | ガイド、ヘルパースクリプト、コスト見積もりを含む包括的なトレーニングスキル | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | Hugging Face Hubで研究論文を公開・管理するためのツール | [huggingface/skills](https://github.com/huggingface/skills) |

### コミュニティスキル

コミュニティによって維持されているスキルとコレクション（使用前に確認してください）：

#### スキルコレクション

| リポジトリ | 説明 |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | 公式Anthropicコレクション（ドキュメント編集、データ分析）|
| [openai/skills](https://github.com/openai/skills) | 公式OpenAI Codexスキルカタログ |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFaceスキル（Claude, Codex, Gemini互換）|
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.aiコレクション（CLIインストーラー付き）|
| [agentskill.sh](https://agentskill.sh) | 44k+のスキルディレクトリ、セキュリティスキャンと`/learn`インストーラー付き |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Claude CodeおよびClaude.ai向けの50以上の検証済みスキル |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | 専門的な機能のためのスキル |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | マルチエージェントコラボレーションスキル |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI統合 |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | DSPyフレームワーク向けスキル |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | 厳選されたClaude Agent Skillsコレクション |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeactエージェントライブラリスキル |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | npm風スキルCLI（`brew install dmgrok/tap/skills`）— 24プロバイダーから177以上のスキルを集約 |
| [gotalab/skillport](https://github.com/gotalab/skillport) | CLIまたはMCPによるスキル配布 |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git、コードレビュー、テストスキル |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | 暗号通貨、Web3、ブロックチェーンスキル |
| [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18のGo-To-Marketスキル：価格設定、アウトバウンド、SEO、広告、リテンション、オペレーション |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | 24のプロダクトマネジメントスキル：発見、定義、デリバリー、最適化をカバー |

#### ドキュメント処理

| スキル | 説明 |
|------|------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | MarkdownドキュメントをプロフェッショナルなEPUB電子書籍に変換 |

#### 開発・コードツール

| スキル | 説明 |
|------|------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS開発とCDKベストプラクティス |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3チャートとインタラクティブなデータ視覚化 |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | Webアプリテスト用のブラウザ自動化 |
| [Specrate](https://github.com/rickygao/specrate) | 仕様（spec）と変更を構造化されたワークフローで管理 |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Xcodeから抽出されたApple作成のSwiftUIおよびプラットフォームガイダンス |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | テスト用iOSシミュレーターとの連携 |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift Concurrency移行ガイド |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.mdプラグイン開発 |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | ストリームコーディング手法 |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | プロンプトを分析し、最適なツール、スキル、エージェント、オーケストレーションパターンを推奨 |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | コードを書く前にLLM推論で仕様書を圧力テスト |
| [Mantra](https://mantra.gonewx.com) | AIコーディングセッション管理 — Claude Code、Cursor、Windsurfセッションの保存・復元・タイムトラベル |

#### データ・分析

| スキル | 説明 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | CSVファイルを分析し、視覚化を伴う洞察を生成 |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | 完全なKaggle統合 — アカウント設定、コンペレポート、データセット/モデルダウンロード、ノートブック実行、提出、バッジ収集 |

#### 統合・自動化

| スキル | 説明 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | エージェント向けWebブラウザ機能 |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | 本番RAG向けのエッジネイティブMCPサーバーパターン |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | tmux経由でのローカルCLI AIエージェントの管理（開始/停止/監視/割り当て + cronスケジューリング） |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | Registry Broker経由のAIエージェント検出 - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI自動化 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | エージェントのワークフロー向けにメッセージ通知を送信 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API統合 |
| [AgentStore](https://github.com/techgangboss/agentstore) | オープンソースプラグインマーケットプレイス、ガスレスUSDC決済、CLIインストール、3フィールド公開API |
| [Transloadit Skills](https://github.com/transloadit/skills) | メディア処理：動画エンコード、画像加工、OCR、86以上のRobots |
| [commune](https://github.com/shanjairaj7/commune-skill) | エージェントネイティブメール受信箱 — 永続的な@commune.aiアドレス、完全な送受信、セマンティック検索、トリアージ、Webhook |

#### コラボレーション・プロジェクト管理

| スキル | 説明 |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | Git操作とリポジトリ連携の自動化 |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | コード実装プランの評価 |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | 失敗テストの検出と修正案の提示 |

#### コラボレーションとプロジェクト管理

| スキル | 説明 |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | git操作とリポジトリ対話を自動化 |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | コード実装計画を評価 |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | 失敗したテストを検出し、修正を提案 |

#### セキュリティ・システム

| スキル | 説明 |
|------|------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | デジタルフォレンジック分析・調査 |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | GPG/PGPに代わる現代的暗号化、ポスト量子対応、組み合わせ可能な認証、エージェント間通信 |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Sigma検出ルールを使用した脅威ハンティング |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | エージェント用セキュアEVMウォレット — 送金、スワップ、トランザクション |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | エージェント用Polymarket予測市場取引 |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | AIエージェントのカーネルレベルガバナンス — 決定的ポリシー実行、コンプライアンスチェック、監査ログ |

#### 上級・研究

| スキル | 説明 |
|--------|------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | コンテキストエンジニアリング技術 |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | システムスキルパターン（記憶し改善するスキル） |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | LLMスキルによるマインドクローニング |

#### 高度な研究

| スキル | 説明 |
|------|------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | コンテキストエンジニアリング技術 |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | システムスキルパターン（記憶し改善するスキル） |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | LLMスキルによるマインドクローニング |

---

## 公式チュートリアル・ガイド

### ClaudeとAnthropic
- [Claudeでのスキルの使用](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - 公式クイックスタートガイド
- [カスタムスキルの作成方法](https://support.claude.com/en/articles/12512198-creating-custom-skills) - ステップバイステップ作成ガイド
- [Claude Codeスキル・ドキュメント](https://code.claude.com/docs/en/skills) - 公式リファレンス

### GitHub Copilot
- [Agent Skillsについて](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHubドキュメント
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code統合

### Model Context Protocol (MCP)
- [MCP公式ドキュメント](https://modelcontextprotocol.io/) - オープンスタンダード
- [最初のMCPサーバーの構築](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScriptガイド
- [MCPサーバーの例](https://github.com/modelcontextprotocol/servers) - 公式サーバー実装

---

## スキルの使い方

### Claude.aiでのスキルの使用
1. チャットインターフェースのスキルアイコンをクリックします。
2. マーケットプレイスからスキルを追加するか、カスタムスキルをアップロードします。
3. Claudeはタスクに基づいて関連するスキルを自動的にアクティブにします。

### Google Antigravityでのスキルの使用

Antigravityは2種類のスキルをサポートしています：

*   **Workspace Skills**: `/.agent/skills/`にあるプロジェクト固有のスキル
*   **Global Skills**: `~/.gemini/antigravity/skills`にあるユーザー全体のスキル

詳細は[公式ドキュメント](https://antigravity.google/docs/skills)を参照してください。

### Claude Codeでのスキルの使用
設定ディレクトリにスキルを配置します：

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

スキルは自動的にロードされ、必要なときにアクティブになります。

### VS Codeでのスキルの使用

スキルは`SKILL.md`ファイルを含むディレクトリに保存されます。VS Codeは2つの場所をサポートしています：

- `.github/skills/` - すべての新しいスキルの推奨場所
- `.claude/skills/` - 従来の場所（サポート継続）

**スキルの作成：**

1. ワークスペースに`.github/skills`ディレクトリを作成します
2. スキル用のサブディレクトリ（例：`.github/skills/webapp-testing`）を作成します
3. 以下の構造で`SKILL.md`ファイルを作成します：

```markdown
---
name: skill-name
description: スキルの機能と使用タイミングの説明
---

# スキル指示書

詳細な指示、ガイドライン、例などをここに記述します...
```

---

## スキルの作成

スキルは、特定のタスクを実行する方法をエージェントに伝える指示の束です。デフォルトでは実行可能なコードではありません。

### スキル構造

```
skill-name/
├── SKILL.md          # 必須：指示とメタデータ
├── scripts/          # オプション：ヘルパースクリプト
├── templates/        # オプション：ドキュメントテンプレート
└── resources/        # オプション：参照ファイル
```

### 基本的なSKILL.mdテンプレート

```markdown
---
name: my-skill-name
description: このスキルが何をするか明確な説明。
---

# 私のスキル名

スキルの目的の詳細な説明。

## このスキルを使用するタイミング

- ユースケース 1
- ユースケース 2

## 指示

[このスキルを実行する方法に関するエージェントへの詳細な指示]

## 例

[実際の例]
```

---

## コミュニティリソース

### LangChainツール
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - SerpApiのラッパー
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - Wikipediaから要約を取得
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - Pythonコードを実行
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - `@tool`デコレーターの使用方法

---

## よくある質問 (FAQ)

### Agent Skillsとは何ですか？

Agent Skillsは、AIアシスタントに特定のタスクを行う方法を教える指示ファイルです。AIが読んで従う「ハウツーガイド」と考えてください。必要なときにだけロードされるため、AIは高速で集中した状態を保てます。

### Agent Skillsとファインチューニングの違いは何ですか？

ファインチューニングはAIの思考方法を永続的に変更します（高価で更新が難しい）。Agent Skillsは単なる指示ファイルであり、AI自体に触れることなく、いつでも更新、交換、共有が可能です。

### Agent SkillsとMCPの違いは何ですか？

これらは異なる役割を持ち、組み合わせるとうまく機能します：
- **Agent Skills** = AIに何かを*どうやるか*（ワークフロー、ベストプラクティス）を教える
- **MCP** = AIが何か（API、データベース、外部ツール）に*アクセス*するのを助ける

### どのAIツールがAgent Skillsをサポートしていますか？

現在サポートされているのは、**Claude**（Claude.aiおよびClaude Code）、**GitHub Copilot**、**VS Code**などです。標準を採用するツールが増えるにつれて、リストは拡大しています。

### Agent Skillsはコードを実行しますか？

いいえ。スキルは単なるテキスト指示であり、AIはレシピのようにそれを読んで従います。実際のコードを実行する必要がある場合は、スキルの並行してMCPサーバーなどを使用します。

---

## 貢献

このリポジトリはAgent Skillsのオープン開発モデルに従っています。より広いエコシステムからの貢献を歓迎します。貢献する際は：

- スキルテンプレートの構造に従う
- 明確で実行可能な指示を提供する
- 適切な場合は動作する例を含める
- トレードオフや潜在的な問題を文書化する
- 最適なパフォーマンスのためにSKILL.mdは500行以下に保つ

---

## ライセンス

MITライセンス - 詳細はLICENSEファイルを参照してください。

---

## 参考文献

- [Anthropic: Claudeでのスキルの使用](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: カスタムスキルの作成](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Codeスキル・ドキュメント](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: Agent Skillsについて](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocolドキュメント](https://modelcontextprotocol.io/)
