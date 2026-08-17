# Agent Skill Index

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 **[agent-skill.co](https://agent-skill.co)** 에서 실시간 디렉토리를 탐색하세요.

관리자: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

"agent skills"를 처음 들어보셨나요? 잘 찾아오셨습니다. 이곳은 Claude, Copilot, Codex 같은 AI 어시스턴트에게 재훈련 없이 필요할 때마다 새로운 기능을 가르쳐주는 간단한 텍스트 파일들을 모아놓은 커뮤니티 큐레이션 목록입니다. 대량 생성된 스킬 저장소와 달리, 이 컬렉션은 실제 엔지니어링 팀이 생성하고 사용하는 실무 에이전트 스킬에 집중합니다. Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, Windsurf 등과 호환됩니다.

---

## 빠른 시작 (30초)

**단계 1: 아래 디렉토리에서 스킬을 선택하세요** (또는 [agent-skill.co](https://agent-skill.co)에서 탐색)

**단계 2: AI 에이전트에 로드하세요:**
- Claude Code: `/skills add <github-url>`
- Claude.ai: 새 대화에 SKILL.md의 raw URL을 붙여넣기
- Codex / Copilot: [스킬 사용하기](#스킬-사용하기)에 링크된 플랫폼 문서를 따르세요.

**단계 3: AI에게 사용을 요청하세요.** 원하는 내용을 평범한 한국어나 영어로 설명하면 됩니다.

그게 전부입니다. 설치 불필요. 설정 불필요. 코딩 불필요.

---

## 목차

- [Agent Skills란 무엇인가요?](#agent-skills란-무엇인가요)
- [스킬 찾는 방법 (권장)](#스킬-찾는-방법-권장)
- [호환 가능한 에이전트](#호환-가능한-에이전트)
- [공식 스킬 디렉토리](#공식-스킬-디렉토리)
  - [AI 플랫폼 및 모델](#ai-플랫폼-및-모델)
  - [클라우드 및 인프라](#클라우드-및-인프라)
  - [개발자 도구 및 프레임워크](#개발자-도구-및-프레임워크)
  - [Google 생태계](#google-생태계)
  - [비즈니스, 생산성 및 마케팅](#비즈니스-생산성-및-마케팅)
  - [보안 및 웹 인텔리전스](#보안-및-웹-인텔리전스)
- [커뮤니티 스킬](#커뮤니티-스킬)
- [스킬 품질 기준](#스킬-품질-기준)
- [스킬 사용하기](#스킬-사용하기)
- [스킬 만들기](#스킬-만들기)
- [공식 튜토리얼 및 가이드](#공식-튜토리얼-및-가이드)
- [트렌드 및 역량 (2026)](#트렌드-및-역량-2026)
- [자주 묻는 질문](#자주-묻는-질문)
- [기여하기](#기여하기)
- [문의처](#문의처)
- [라이선스](#라이선스)

---

## Agent Skills란 무엇인가요?

**Agent Skills**를 AI 어시스턴트를 위한 "사용 설명서"라고 생각하세요. AI가 모든 것을 미리 알 필요 없이, 스킬을 통해 필요할 때 새로운 능력을 배울 수 있습니다. 요리책 전체를 외우게 하는 대신 레시피 카드를 주는 것과 같습니다.

스킬은 AI에게 특정 작업을 수행하는 방법을 가르치는 간단한 텍스트 파일(`SKILL.md`)입니다. AI에게 작업을 요청하면, AI는 적절한 스킬을 찾아 지침을 읽고 작업을 시작합니다.

### 작동 방식

스킬은 세 단계로 로드됩니다:

1. **탐색**: AI는 사용 가능한 스킬 목록(이름과 짧은 설명)을 확인합니다.
2. **로드**: 스킬이 필요할 때 AI는 전체 지침을 읽습니다.
3. **사용**: AI는 지침을 따르고 도우미 파일에 접근합니다.

### 왜 이것이 중요한가요?

- **빠르고 가벼움**: AI는 필요할 때만 필요한 것을 로드합니다.
- **어디서나 작동**: 스킬을 한 번 만들면 모든 호환 AI 도구에서 사용할 수 있습니다.
- **쉬운 공유**: 스킬은 단순한 파일입니다. 복사, 다운로드, GitHub 공유가 가능합니다.

스킬은 코드가 아닌 **지시사항**입니다. AI는 인간이 가이드를 읽듯이 지시를 읽고 단계를 따릅니다.

---

## 스킬 찾는 방법 (권장)

### SkillsMP 마켓플레이스

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

GitHub의 모든 스킬 프로젝트를 자동으로 인덱싱하고 카테고리, 스타 수 등으로 정리하여 보여주는 **[SkillsMP Marketplace](https://skillsmp.com)**의 사용을 권장합니다. 스킬을 발견하고 평가하는 가장 쉬운 방법입니다.

### skills.sh 리더보드 (Vercel 제공)

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

Vercel의 리더보드인 **[skills.sh](https://skills.sh)**를 사용하여 가장 인기 있는 스킬 저장소와 개별 스킬 사용 통계를 직관적으로 확인할 수 있습니다.

### npx skills CLI 도구

특정 스킬의 경우, `npx skills` 명령줄 도구를 사용하여 빠르게 발견, 추가 및 관리할 수 있습니다. 자세한 내용은 [vercel-labs/skills](https://github.com/vercel-labs/skills)를 참조하세요.

```bash
npx skills find [query]            # 관련 스킬 검색
npx skills add <owner/repo>        # 스킬 추가 (GitHub 단축형, 전체 URL, 로컬 경로 지원)
npx skills list                    # 설치된 스킬 목록
npx skills check                   # 업데이트 확인
npx skills update                  # 모든 스킬 업그레이드
npx skills remove [skill-name]     # 스킬 제거
```

---

## 호환 가능한 에이전트

| 에이전트 | 문서 |
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

## 공식 스킬 디렉토리

### AI 플랫폼 및 모델

#### Anthropic 스킬
공통 문서 유형 및 창의적 워크플로우를 위한 공식 내장 스킬.
- [anthropics/docx](https://agent-skill.co/anthropics/skills/docx) - Word 문서 생성, 편집 및 분석
- [anthropics/pptx](https://agent-skill.co/anthropics/skills/pptx) - PowerPoint 프레젠테이션 생성, 편집 및 분석
- [anthropics/xlsx](https://agent-skill.co/anthropics/skills/xlsx) - Excel 스프레드시트 생성, 편집 및 분석
- [anthropics/pdf](https://agent-skill.co/anthropics/skills/pdf) - 텍스트 추출, PDF 생성 및 폼 처리
- [anthropics/webapp-testing](https://agent-skill.co/anthropics/skills/webapp-testing) - Playwright를 사용한 로컬 웹 앱 테스트

#### OpenAI 스킬 (Codex)
OpenAI 카탈로그의 공식 큐레이션 스킬.
- [openai/cloudflare-deploy](https://agent-skill.co/openai/skills/cloudflare-deploy) - Cloudflare에 배포
- [openai/imagegen](https://agent-skill.co/openai/skills/imagegen) - OpenAI Image API를 사용한 이미지 생성
- [openai/figma-implement-design](https://agent-skill.co/openai/skills/figma-implement-design) - Figma 디자인을 프로덕션 코드로 변환

---

## 트렌드 및 역량 (2026)

AI 에이전트 생태계는 반응형 채팅 인터페이스에서 엔드투엔드 다단계 워크플로우를 실행하는 **자율적이고 목표 중심적인 시스템**으로 급격히 변화했습니다. 이 시기를 흔히 "에이전트 리프(Agent Leap)"라고 부릅니다.

### 1. 자율 실행
현대 에이전트는 단순한 "프롬프트-응답" 모델을 넘어섭니다. 광범위한 목표를 다단계 전략 계획으로 분해하고, 장단점을 따지며 독립적으로 순서를 실행합니다.

### 2. 멀티 에이전트 오케스트레이션
복잡한 작업은 전문 에이전트 팀(문서, 테스트, 코딩)에 의해 관리되며, 결과물을 통합하고 충돌을 해결하는 "매니저" 에이전트에 의해 조정됩니다.

---

## 자주 묻는 질문

### Agent Skills란 무엇인가요?
Agent Skills는 AI 어시스턴트에게 특정 작업을 수행하는 방법을 가르치는 지침 파일입니다. 필요할 때만 로드되므로 AI는 빠르고 집중된 상태를 유지할 수 있습니다.

### Agent Skills는 파인튜닝과 어떻게 다른가요?
파인튜닝은 AI의 사고방식을 영구적으로 변경합니다(비용이 많이 들고 업데이트가 어렵습니다). Agent Skills는 단순한 지침 파일입니다. AI 자체를 건드리지 않고도 언제든지 업데이트, 교체 또는 공유할 수 있습니다.

---

## 관련 Awesome 리스트

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - Claude Code를 위한 엄선된 스킬 및 도구 목록.
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - DESIGN.md 프로토콜용 표준 및 도구.
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - OpenClaw용 오픈 소스 에이전트 스킬.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Model Context Protocol (MCP) 서버 컬렉션.

---

## 문의처

이 프로젝트에 대한 질문, 파트너십 문의 또는 피드백:

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## 라이선스
MIT 라이선스 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
