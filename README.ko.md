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
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Claude Code 및 Claude.ai를 위한 50개 이상의 검증된 스킬 |

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

#### 데이터 및 분석

| 스킬 | 설명 |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | CSV 파일을 분석하고 시각화를 포함한 인사이트 생성 |

#### 통합 및 자동화

| 스킬 | 설명 |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | 에이전트를 위한 웹 브라우저 기능 |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI 자동화 |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | 에이전트 워크플로우용 메시지 알림 전송 |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API 통합 |

#### 보안 및 시스템

| 스킬 | 설명 |
|------|------|
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Sigma 탐지 규칙을 사용한 위협 사냥 |

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

### Claude Code에서 스킬 사용하기
구성 디렉터리에 스킬을 배치합니다:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

스킬은 자동으로 로드되며 관련이 있을 때 활성화됩니다.

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

현재 지원되는 도구는 **Claude**(Claude.ai 및 Claude Code), **GitHub Copilot**, **VS Code** 등입니다. 표준을 채택하는 도구가 늘어남에 따라 목록이 확장되고 있습니다.

### Agent Skills는 코드를 실행하나요?

아니요. 스킬은 단순한 텍스트 지침이며 AI는 이를 레시피처럼 읽고 따릅니다. 실제 코드를 실행해야 하는 경우 스킬과 함께 MCP 서버 등을 사용합니다.

---

## 기여하기

이 저장소는 Agent Skills 개방형 개발 모델을 따릅니다. 더 넓은 생태계의 기여를 환영합니다. 기여할 때:

- 스킬 템플릿 구조를 따르세요.
- 명확하고 실행 가능한 지침을 제공하세요.
- 적절한 경우 작동하는 예제를 포함하세요.
- 장단점과 잠재적인 문제를 문서화하세요.
- 최적의 성능을 위해 SKILL.md를 500줄 미만으로 유지하세요.

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
