# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

AI 코딩 에이전트를 위한 엄선된 기술, 도구 및 기능 목록입니다.

---

## 목차

- [Agent Skills란?](#agent-skills란)
- [호환되는 에이전트](#호환되는-에이전트)
- [스킬 목록](#스킬-목록)
- [공식 튜토리얼 및 가이드](#공식-튜토리얼-및-가이드)
- [스킬 사용하기](#스킬-사용하기)
- [스킬 만들기](#스킬-만들기)
- [커뮤니티 리소스](#커뮤니티-리소스)
- [자주 묻는 질문 (FAQ)](#자주-묻는-질문-faq)
- [기여하기](#기여하기)
- [라이선스](#라이선스)
- [참고 자료](#참고-자료)

---

## Agent Skills란?

**Agent Skills**를 AI 비서를 위한 "사용 설명서"라고 생각하세요. AI가 처음부터 모든 것을 알 필요 없이, 스킬을 사용하면 요리책 전체를 외우게 하는 대신 레시피 카드를 건네주는 것처럼 새로운 능력을 즉석에서 배우게 할 수 있습니다.

스킬은 AI에게 특정 작업을 수행하는 방법을 가르치는 단순한 텍스트 파일(`SKILL.md`)입니다. AI에게 무언가를 요청하면 AI는 올바른 스킬을 찾고 지침을 읽은 다음 작업을 시작합니다.

### 작동 방식

스킬은 세 단계로 로드됩니다:

1. **탐색 (Browse)** - AI가 사용 가능한 스킬 목록(이름 및 짧은 설명)을 확인합니다.
2. **로드 (Load)** - 스킬이 필요할 때 AI가 전체 지침을 읽습니다.
3. **사용 (Use)** - AI가 지침을 따르고 필요한 경우 도우미 파일에 액세스합니다.

### 중요한 이유

- **빠르고 가벼움** - AI는 필요할 때 필요한 것만 로드합니다.
- **어디서나 작동** - 스킬을 한 번 만들면 호환되는 모든 AI 도구에서 사용할 수 있습니다.
- **쉬운 공유** - 스킬은 GitHub에서 복사, 다운로드 또는 공유할 수 있는 파일일 뿐입니다.

스킬은 코드가 아니라 **지침**입니다. AI는 사람이 가이드를 읽는 것처럼 이를 읽고 단계를 따릅니다.

---

## 호환되는 에이전트

다음 플랫폼은 Agent Skills 지원을 문서화했습니다:

| 에이전트 | 문서 |
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

## 스킬 목록

### 공식 Claude 스킬 (문서 처리)

Claude는 일반적인 문서 유형에 대한 내장 스킬을 제공합니다:

| 스킬 | 설명 | 소스 |
|------|------|------|
| docx | 변경 내용 추적이 포함된 Word 문서 생성, 편집, 분석 | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | 스프레드시트 조작: 수식, 차트, 데이터 변환 | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | 슬라이드, 레이아웃, 템플릿 읽기, 생성 및 조정 | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | PDF에서 텍스트, 표, 메타데이터 추출 | [anthropics/skills](https://github.com/anthropics/skills) |

### 공식 OpenAI Codex 스킬

Codex는 다양한 범위의 스킬을 지원합니다:

| 스킬 범위 | 위치 | 권장 용도 |
|----------|------|----------|
| REPO | `$CWD/.codex/skills` | 작업 폴더(예: 마이크로서비스 또는 모듈)와 관련된 스킬 |
| REPO | `$CWD/../.codex/skills` | 상위 폴더의 공유 영역에 있는 스킬 |
| REPO | `$REPO_ROOT/.codex/skills` | 저장소를 사용하는 모든 사람을 위한 루트 스킬 |
| USER | `$CODEX_HOME/skills` (기본값: `~/.codex/skills`) | 모든 저장소에 적용되는 사용자 개인 스킬 |
| ADMIN | `/etc/codex/skills` | SDK 스크립트, 자동화 및 기본 관리 스킬 |
| SYSTEM | Codex 번들 | skill-creator 및 plan과 같은 내장 스킬 |

### 공식 HuggingFace 스킬

| 스킬 | 설명 | 소스 |
|------|------|------|
| hf_dataset_creator | 구조화된 학습 데이터 세트를 생성하기 위한 프롬프트, 템플릿 및 스크립트 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | 평가 작업 조정, 보고서 생성 및 지표 매핑을 위한 지침 및 도구 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | 가이드, 도우미 스크립트, 비용 추정기를 포함한 포괄적인 학습 스킬 | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | Hugging Face Hub에 연구 논문을 게시하고 관리하기 위한 도구 | [huggingface/skills](https://github.com/huggingface/skills) |

### 커뮤니티 스킬

커뮤니티에서 유지 관리하는 스킬 및 모음(사용하기 전에 확인하세요):

#### 스킬 모음

| 저장소 | 설명 |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | 공식 Anthropic 컬렉션 (문서 편집, 데이터 분석) |
| [openai/skills](https://github.com/openai/skills) | 공식 OpenAI Codex 스킬 카탈로그 |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace 스킬 (Claude, Codex, Gemini 호환) |
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai 컬렉션 (CLI 설치 프로그램 포함) |
| [agentskill.sh](https://agentskill.sh) | 44k+ 스킬 디렉토리, 보안 스캔 및 `/learn` 설치 프로그램 포함 |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Claude Code 및 Claude.ai를 위한 50개 이상의 검증된 스킬 |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | 전문 기능 스킬 |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | 멀티 에이전트 협업 스킬 |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Pydantic AI 통합 |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | DSPy 프레임워크 스킬 |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | 엄선된 Claude Agent Skills 컬렉션 |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Freeact 에이전트 라이브러리 스킬 |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | npm 스타일 스킬 CLI(`brew install dmgrok/tap/skills`) — 24개 제공자의 177+ 스킬 집계 |
| [gotalab/skillport](https://github.com/gotalab/skillport) | CLI 또는 MCP를 통한 스킬 배포 |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Git, 코드 리뷰 및 테스트 스킬 |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | 암호화폐, Web3 및 블록체인 스킬 |
| [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18개 Go-to-Market 스킬: 가격, 아웃바운드, SEO, 광고, 리텐션, 운영 |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | 24개 제품 관리 스킬: 발견, 정의, 전달, 최적화 포함 |
| [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) | Google Workspace (Gmail, Chat, Calendar, Docs, Drive, Sheets, Slides), AI 위임 (Jules, Manus, Deep Research) 및 데이터베이스 스킬 |
| [RioBot-Grind/agentfund-skill](https://github.com/RioBot-Grind/agentfund-skill) | Base 체인의 AI 에이전트용 크라우드펀딩 — 마일스톤 에스크로 |

#### 문서 처리

| 스킬 | 설명 |
|------|------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | Markdown 문서를 전문적인 EPUB 전자지갑으로 변환 |

#### 개발 및 코드 도구

| 스킬 | 설명 |
|------|------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS 개발 및 CDK 모범 사례 |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 차트 및 대화형 데이터 시각화 |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | 웹 앱 테스트를 위한 브라우저 자동화 |
| [Specrate](https://github.com/rickygao/specrate) | 명세(spec)와 변경을 구조화된 워크플로로 관리 |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Xcode에서 추출한 Apple 작성 SwiftUI 및 플랫폼 지침 |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | 테스트를 위한 iOS 시뮬레이터 상호작용 |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Swift Concurrency 마이그레이션 가이드 |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Obsidian.md 플러그인 개발 |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | 스트림 코딩 방법론 |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | 프롬프트를 분석하고 최적의 도구, 스킬, 에이전트 및 오케스트레이션 패턴 추천 |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | 코드 작성 전 LLM 추론으로 사양 문서 압력 테스트 |
| [Mantra](https://mantra.gonewx.com) | AI 코딩 세션 관리 — Claude Code, Cursor, Windsurf 세션 저장, 복원, 타임 트래블 |

#### 데이터 및 분석

| 스킬 | 설명 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | CSV 파일을 분석하고 시각화를 포함한 인사이트 생성 |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | 완전한 Kaggle 통합 — 계정 설정, 대회 보고서, 데이터셋/모델 다운로드, 노트북 실행, 제출 및 배지 수집 |

#### 통합 및 자동화

| 스킬 | 설명 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | 에이전트를 위한 웹 브라우저 기능 |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | 프로덕션 RAG를 위한 엣지 네이티브 MCP 서버 패턴 |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | tmux를 통한 로컬 CLI AI 에이전트 관리 (시작/중지/모니터링/할당 + cron 스케줄링) |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | Registry Broker를 통한 AI 에이전트 검색 - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI 자동화 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | 에이전트 워크플로우용 메시지 알림 전송 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API 통합 |
| [AgentStore](https://github.com/techgangboss/agentstore) | 오픈소스 플러그인 마켓플레이스, 가스리스 USDC 결제, CLI 설치, 3필드 게시 API |
| [Transloadit Skills](https://github.com/transloadit/skills) | 미디어 처리: 비디오 인코딩, 이미지 조작, OCR 및 86+ Robots |
| [commune](https://github.com/shanjairaj7/commune-skill) | 에이전트 네이티브 이메일 수신함 — 영구 @commune.ai 주소, 완전한 송수신, 시맨틱 검색, 분류 및 웹훅 |

#### 협업 및 프로젝트 관리

| 스킬 | 설명 |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | Git 작업 및 저장소 상호작용 자동화 |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | 코드 구현 계획 평가 |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | 실패한 테스트 감지 및 수정 제안 |

#### 보안 및 시스템

| 스킬 | 설명 |
|------|------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | 디지털 포렌식 분석 및 조사 |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | GPG/PGP를 대체하는 현대적 암호화, 포스트 양자 지원, 조합 가능한 인증, 에이전트 간 통신 |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Sigma 탐지 규칙을 사용한 위협 사냥 |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | 에이전트용 보안 EVM 지갑 — 전송, 스왑, 트랜잭션 |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | 에이전트용 Polymarket 예측 시장 거래 |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | AI 에이전트 커널 수준 거버넌스 — 결정적 정책 실행, 규정 준수 검사, 감사 로깅 |

#### 고급 및 연구

| 스킬 | 설명 |
|------|------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 컨텍스트 엔지니어링 기술 |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | 시스템 스킬 패턴 (기억하고 개선하는 스킬) |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | LLM 스킬을 이용한 마인드 클로닝 |

---

## 공식 튜토리얼 및 가이드

### Claude 및 Anthropic
- [Claude에서 스킬 사용하기](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - 공식 빠른 시작 가이드
- [커스텀 스킬 만드는 방법](https://support.claude.com/en/articles/12512198-creating-custom-skills) - 단계별 작성 가이드
- [Claude Code 스킬 문서](https://code.claude.com/docs/en/skills) - 공식 참조

### GitHub Copilot
- [Agent Skills 정보](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - GitHub 문서
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - VS Code 통합

### Model Context Protocol (MCP)
- [MCP 공식 문서](https://modelcontextprotocol.io/) - 개방형 표준
- [첫 번째 MCP 서버 구축](https://modelcontextprotocol.io/docs/first-server) - Python/TypeScript 가이드
- [MCP 서버 예제](https://github.com/modelcontextprotocol/servers) - 공식 서버 구현

---

## 스킬 사용하기

### Claude.ai에서 스킬 사용하기
1. 채팅 인터페이스에서 스킬 아이콘을 클릭합니다.
2. 마켓플레이스에서 스킬을 추가하거나 커스텀 스킬을 업로드합니다.
3. Claude는 작업에 따라 관련 스킬을 자동으로 활성화합니다.

### Google Antigravity에서 스킬 사용하기

Antigravity는 두 가지 유형의 스킬을 지원합니다:

*   **Workspace Skills**: `/.agent/skills/`에 위치한 프로젝트별 스킬
*   **Global Skills**: `~/.gemini/antigravity/skills`에 위치한 사용자 전역 스킬

자세한 내용은 [공식 문서](https://antigravity.google/docs/skills)를 참조하세요.

### Claude Code에서 스킬 사용하기
구성 디렉터리에 스킬을 배치합니다:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

스킬은 자동으로 로드되며 관련이 있을 때 활성화됩니다.

### Codex에서 스킬 사용

**스킬 만들기:**

Codex의 내장 `$skill-creator` 스킬을 사용하세요. 스킬이 무엇을 하길 원하는지 설명하면 Codex가 자동으로 생성합니다.

`$skill-installer create-plan`으로 `$create-plan`(실험적)을 설치하면, Codex가 파일을 작성하기 전에 계획을 생성합니다.

폴더와 `SKILL.md` 파일을 만들어 수동으로 스킬을 생성할 수도 있습니다:

````markdown
---
name: skill-name
description: Codex가 스킬을 선택하는 데 도움이 되는 설명
metadata:
  short-description: 선택적 사용자 대상 설명
---

이 스킬을 사용할 때 Codex 에이전트가 따를 스킬 지침.
````

**새 스킬 설치:**

`$skill-installer` 스킬을 사용하여 GitHub에서 스킬을 다운로드합니다:

```bash
$skill-installer linear
```

설치 프로그램에 다른 리포지토리에서 스킬을 다운로드하도록 지시할 수도 있습니다. 스킬을 설치한 후 새 스킬을 로드하려면 Codex를 다시 시작하세요.

### VS Code에서 스킬 사용하기

스킬은 `SKILL.md` 파일이 포함된 디렉터리에 저장됩니다. VS Code는 두 위치를 지원합니다:

- `.github/skills/` - 모든 새 스킬의 권장 위치
- `.claude/skills/` - 레거시 위치(계속 지원됨)

**스킬 만들기:**

1. 작업 공간에 `.github/skills` 디렉터리를 만듭니다.
2. 스킬을 위한 하위 디렉터리(예: `.github/skills/webapp-testing`)를 만듭니다.
3. 다음 구조로 `SKILL.md` 파일을 만듭니다:

```markdown
---
name: skill-name
description: 스킬의 기능과 사용 시기에 대한 설명
---

# 스킬 지침

자세한 지침, 가이드라인 및 예제는 여기에...
```

4. 선택 사항으로 스킬 디렉터리에 스크립트, 예제 또는 기타 리소스를 추가합니다.

### Copilot CLI에서 스킬 사용

**리포지토리에 스킬 추가하기:**

1. `.github/skills` 디렉토리를 만듭니다 (`.claude/skills`의 스킬도 지원됩니다)
2. 스킬용 하위 디렉토리를 만듭니다 (예: `.github/skills/webapp-testing`)
3. 스킬 지침이 포함된 `SKILL.md` 파일을 만듭니다

**SKILL.md 구조:**

- `name` (필수): 공백 대신 하이픈을 사용하는 고유한 소문자 식별자
- `description` (필수): 스킬이 하는 일과 Copilot이 언제 사용해야 하는지
- `license` (선택): 이 스킬에 적용되는 라이선스
- 지침, 예제, 가이드라인이 포함된 Markdown 본문

**SKILL.md 예제:**

````markdown
---
name: github-actions-failure-debugging
description: 실패한 GitHub Actions 워크플로우 디버깅 가이드.
---

실패한 GitHub Actions 워크플로우를 디버깅하려면:

1. `list_workflow_runs`를 사용하여 최근 워크플로우 실행을 조회
2. `summarize_job_log_failures`를 사용하여 실패한 작업의 AI 요약을 가져옴
3. 필요한 경우 `get_job_logs`로 상세 실패 로그를 가져옴
4. 환경에서 실패를 재현해 봄
5. 실패한 빌드를 수정
````

작업을 수행할 때 Copilot은 프롬프트와 스킬 설명을 기반으로 스킬 사용 시점을 결정합니다. `SKILL.md` 파일은 에이전트의 컨텍스트에 주입됩니다.

### MCP 서버 사용 (Claude Desktop)

설정 파일을 편집합니다:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

설정 예시:
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

## 스킬 만들기

스킬은 에이전트에게 특정 작업을 수행하는 방법을 알려주는 지침 번들입니다. 기본적으로 실행 가능한 코드가 아닙니다.

### 스킬 구조

```
skill-name/
├── SKILL.md          # 필수: 지침 및 메타데이터
├── scripts/          # 선택 사항: 도우미 스크립트
├── templates/        # 선택 사항: 문서 템플릿
└── resources/        # 선택 사항: 참조 파일
```

### 기본 SKILL.md 템플릿

```markdown
---
name: my-skill-name
description: 이 스킬이 하는 일에 대한 명확한 설명.
---

# 내 스킬 이름

스킬 목적에 대한 자세한 설명.

## 이 스킬을 사용하는 시기

- 사용 사례 1
- 사용 사례 2

## 지침

[이 스킬을 실행하는 방법에 대한 에이전트용 자세한 지침]

## 예제

[실제 예제]
```

### MCP 서버 예제 (Python)

외부 데이터 소스에 연결해야 하는 스킬의 경우 MCP 서버를 만들 수 있습니다:

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

## 커뮤니티 리소스

### LangChain 도구
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - SerpApi 래퍼
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - Wikipedia에서 요약 가져오기
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - Python 코드 실행
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - `@tool` 데코레이터 사용 지침

### 기사 및 연구
- [I found 50 companies accidentally breaking HIPAA with ChatGPT](https://dev.to/dannwaneri/i-found-50-companies-accidentally-breaking-hipaa-with-chatgpt-1olc) - AI의 개인정보 위험 분석
- [I built a Production RAG System for $5/month](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj) - RAG 아키텍처 비용 최적화 가이드

---

## 자주 묻는 질문 (FAQ)

### Agent Skills란 무엇인가요?

Agent Skills는 AI 비서에게 특정 작업을 수행하는 방법을 가르치는 지침 파일입니다. AI가 읽고 따르는 "사용 설명서"라고 생각하세요. 필요할 때만 로드되므로 AI는 빠르고 집중된 상태를 유지합니다.

### Agent Skills와 파인 튜닝의 차이점은 무엇인가요?

파인 튜닝은 AI의 사고 방식을 영구적으로 변경합니다(비용이 많이 들고 업데이트하기 어려움). Agent Skills는 단순한 지침 파일이므로 AI 자체를 건드리지 않고 언제든지 업데이트, 교체 또는 공유할 수 있습니다.

### Agent Skills와 MCP의 차이점은 무엇인가요?

이들은 서로 다른 역할을 하며 함께 사용하면 잘 작동합니다:
- **Agent Skills** = AI에게 무언가를 *어떻게* 하는지(워크플로, 모범 사례) 가르침
- **MCP** = AI가 무언가(API, 데이터베이스, 외부 도구)에 *액세스*하도록 도움

### 어떤 AI 도구가 Agent Skills를 지원하나요?

현재 지원: **Claude** (Claude.ai 및 Claude Code), **GitHub Copilot**, **VS Code**, **Codex** (OpenAI), **Antigravity** (Google), **Gemini CLI**, **Kiro**. 더 많은 도구가 표준을 채택함에 따라 목록이 계속 늘어나고 있습니다.

### Agent Skills는 코드를 실행하나요?

아니요. 스킬은 단순한 텍스트 지침이며 AI는 이를 레시피처럼 읽고 따릅니다. 실제 코드를 실행해야 하는 경우 스킬과 함께 MCP 서버 등을 사용합니다.

### 첫 번째 Agent Skill은 어떻게 만드나요?

1. `SKILL.md` 파일을 만들고 상단에 이름과 설명을 작성합니다
2. 파일에 명확한 단계별 지침을 작성합니다
3. `.github/skills/` 또는 `.claude/skills/` 폴더에 넣습니다
4. 테스트해 보세요!

전체 가이드: [커스텀 스킬 만드는 방법](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## 기여하기

기여를 환영합니다. 전체 가이드라인은 **[CONTRIBUTING.md](CONTRIBUTING.md)**를 참조하세요.

빠른 요약:
- 스킬 템플릿 구조를 따르세요
- 명확하고 실행 가능한 지침을 제공하세요
- 적절한 경우 작동하는 예제를 포함하세요
- 트레이드오프와 잠재적 문제를 문서화하세요
- 최적의 성능을 위해 SKILL.md를 500줄 이하로 유지하세요
- 추가하기 전에 스킬이 실제로 존재하는지 확인하세요

---

## 라이선스

MIT 라이선스 - 자세한 내용은 LICENSE 파일을 참조하세요.

---

## 참고 자료

- [Anthropic: Claude에서 스킬 사용하기](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: 커스텀 스킬 만들기](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code 스킬 문서](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: Agent Skills 정보](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Model Context Protocol 문서](https://modelcontextprotocol.io/)
