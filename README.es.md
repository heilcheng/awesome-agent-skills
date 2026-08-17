# Agent Skill Index

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

[![Agent Skill Index Banner](assets/banner.png)](https://agent-skill.co)

> 🌐 **[agent-skill.co](https://agent-skill.co)**: Explora el directorio en vivo

Mantenido por [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/) · X [@haileyhmt](https://x.com/haileyhmt) · [haileycheng@proton.me](mailto:haileycheng@proton.me)

¿Nunca has oído hablar de las "agent skills"? Estás en el lugar correcto. Esta es una lista curada por la comunidad de archivos de texto simples que enseñan a los asistentes de IA (como Claude, Copilot o Codex) cómo hacer cosas nuevas bajo demanda, sin necesidad de reentrenamiento. A diferencia de los repositorios de habilidades generados en masa, esta colección se centra en Agent Skills del mundo real creadas y utilizadas por equipos de ingeniería reales. Compatible con Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, Windsurf y más.

---

## Inicio Rápido (30 segundos)

**Paso 1: Elige una skill** del directorio de abajo (o explora en [agent-skill.co](https://agent-skill.co))

**Paso 2: Cárgala en tu agente de IA:**
- Claude Code: `/skills add <github-url>`
- Claude.ai: pega la URL raw de SKILL.md en una nueva conversación
- Codex / Copilot: sigue los docs de la plataforma en [Usando Skills](#usando-skills)

**Paso 3: Pídele a tu IA que la use.** Solo describe lo que quieres en español o inglés simple.

Eso es todo. Sin instalación. Sin configuración. Sin necesidad de programar.

---

## Tabla de Contenidos

- [¿Qué son las Agent Skills?](#qué-son-las-agent-skills)
- [Cómo encontrar Skills (Recomendado)](#cómo-encontrar-skills-recomendado)
- [Agentes Compatibles](#agentes-compatibles)
- [Directorios Oficiales de Skills](#directorios-oficiales-de-skills)
  - [Plataformas de IA y Modelos](#plataformas-de-ia-y-modelos)
  - [Cloud e Infraestructura](#cloud-e-infraestructura)
  - [Herramientas de Desarrollo y Frameworks](#herramientas-de-desarrollo-y-frameworks)
  - [Ecosistema de Google](#ecosistema-de-google)
  - [Negocios, Productividad y Marketing](#negocios-productividad-y-marketing)
  - [Seguridad e Inteligencia Web](#seguridad-e-inteligencia-web)
- [Skills de la Comunidad](#skills-de-la-comunidad)
- [Estándares de Calidad de Skills](#estándares-de-calidad-de-skills)
- [Usando Skills](#usando-skills)
- [Creando Skills](#creando-skills)
- [Tutoriales y Guías Oficiales](#tutoriales-y-guías-oficiales)
- [Tendencias y Capacidades (2026)](#tendencias-y-capacidades-2026)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Contribuir](#contribuir)
- [Contacto](#contacto)
- [Licencia](#licencia)

---

## ¿Qué son las Agent Skills?

Piensa en las **Agent Skills** como "guías de cómo hacerlo" para asistentes de IA. En lugar de que la IA necesite saberlo todo de antemano, las skills le permiten aprender nuevas habilidades al instante, como darle a alguien una tarjeta de receta en lugar de hacerle memorizar un libro de cocina entero.

Las skills son archivos de texto simples (llamados `SKILL.md`) que enseñan a una IA cómo realizar tareas específicas. Cuando le pides a la IA que haga algo, esta busca la skill adecuada, lee las instrucciones y se pone a trabajar.

### Cómo Funciona

Las skills se cargan en tres etapas:

1. **Explorar**: La IA ve una lista de skills disponibles (solo nombres y descripciones cortas).
2. **Cargar**: Cuando se necesita una skill, la IA lee las instrucciones completas.
3. **Usar**: La IA sigue las instrucciones y accede a cualquier archivo auxiliar.

### Por qué es importante

- **Más rápido y ligero**: La IA solo carga lo que necesita, cuando lo necesita.
- **Funciona en todas partes**: Crea una skill una vez, úsala con cualquier herramienta de IA compatible.
- **Fácil de compartir**: Las skills son solo archivos que puedes copiar, descargar o compartir en GitHub.

Las skills son **instrucciones**, no código. La IA las lee como un humano leería una guía y luego sigue los pasos.

---

## Cómo encontrar Skills (Recomendado)

### SkillsMP Marketplace

[![SkillsMP Marketplace](assets/skills-mp.png)](https://skillsmp.com)

Se recomienda utilizar el **[SkillsMP Marketplace](https://skillsmp.com)**, que indexa automáticamente todos los proyectos de Skills en GitHub y los organiza por categoría, tiempo de actualización, número de estrellas y otras etiquetas.

### skills.sh Leaderboard (de Vercel)

[![skills.sh Leaderboard](assets/skills-sh.png)](https://skills.sh)

También puedes usar **[skills.sh](https://skills.sh)** —— el leaderboard de Vercel —— para ver intuitivamente los repositorios de Skills más populares y las estadísticas de uso de Skills individuales.

### Herramienta CLI npx skills

Para skills específicas, usa la herramienta de línea de comandos `npx skills` para descubrir, añadir y gestionar skills rápidamente. Para parámetros detallados, consulta [vercel-labs/skills](https://github.com/vercel-labs/skills).

```bash
npx skills find [query]            # Buscar skills relacionadas
npx skills add <owner/repo>        # Instalar skills (soporta atajos de GitHub, URL completa, ruta local)
npx skills list                    # Listar skills instaladas
npx skills check                   # Comprobar actualizaciones disponibles
npx skills update                  # Actualizar todas las skills
npx skills remove [skill-name]     # Desinstalar skills
```

---

## Agentes Compatibles

| Agente | Documentación |
|-------|---------------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code| [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |
| Junie | [junie.jetbrains.com](https://junie.jetbrains.com/docs/agent-skills.html) |

---

## Directorios Oficiales de Skills

### Plataformas de IA y Modelos

#### Skills de Anthropic
Skills oficiales integradas para tipos de documentos comunes y flujos de trabajo creativos.
- [anthropics/docx](https://agent-skill.co/anthropics/skills/docx) - Crear, editar y analizar documentos Word
- [anthropics/pptx](https://agent-skill.co/anthropics/skills/pptx) - Crear, editar y analizar presentaciones PowerPoint
- [anthropics/xlsx](https://agent-skill.co/anthropics/skills/xlsx) - Crear, editar y analizar hojas de cálculo Excel
- [anthropics/pdf](https://agent-skill.co/anthropics/skills/pdf) - Extraer texto, crear PDFs y manejar formularios
- [anthropics/webapp-testing](https://agent-skill.co/anthropics/skills/webapp-testing) - Probar aplicaciones web locales usando Playwright

#### Skills de OpenAI (Codex)
Skills curadas oficiales del catálogo de OpenAI.
- [openai/cloudflare-deploy](https://agent-skill.co/openai/skills/cloudflare-deploy) - Desplegar en Cloudflare
- [openai/imagegen](https://agent-skill.co/openai/skills/imagegen) - Generar imágenes con OpenAI Image API
- [openai/figma-implement-design](https://agent-skill.co/openai/skills/figma-implement-design) - Traducir diseños de Figma a código de producción

#### Skills de Google Gemini
Instalar mediante [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev).
- [google-gemini/gemini-api-dev](https://agent-skill.co/google-gemini/skills/gemini-api-dev) - Mejores prácticas para apps con Gemini

---

## Skills de la Comunidad

<details>
<summary><strong>Bases de datos vectoriales</strong></summary>

- [qdrant/skills](https://github.com/qdrant/skills) - Búsqueda vectorial, escalado y rendimiento en Qdrant
</details>

<details>
<summary><strong>Marketing</strong></summary>

- [BrianRWagner/ai-marketing-skills](https://github.com/BrianRWagner/ai-marketing-skills) - 17 marcos de marketing para outreach y auditorías
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) - SEO universal para analizar sitios
- [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill) - Más de 20 métodos creativos (SIT, TRIZ, SCAMPER)
- [SHADOWPR0/beautiful_prose](https://github.com/SHADOWPR0/beautiful_prose) - Contrato de estilo para prosa inglesa directa y fuerte
</details>

<details>
<summary><strong>Productividad y colaboración</strong></summary>

- [PSPDFKit-labs/nutrient-agent-skill](https://github.com/PSPDFKit-labs/nutrient-agent-skill) - Convertir, OCR y redactar PII en documentos
- [RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills) - Convierte docs o código en StudyVaults interactivos
- [hanfang/claude-memory-skill](https://github.com/hanfang/claude-memory-skill) - Memoria jerárquica persistida en el sistema de archivos
- [wrsmith108/linear-claude-skill](https://github.com/wrsmith108/linear-claude-skill) - Gestiona issues, proyectos y equipos de Linear
- [weike-zhang/grounded-ai-tutor](https://github.com/weike-zhang/grounded-ai-tutor) - Tutor de IA que explica el paso que falta, en lenguaje sencillo
</details>

<details>
<summary><strong>Desarrollo y pruebas</strong></summary>

- [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) - Genera diagramas Excalidraw a mano alzada desde un prompt
- [coderabbitai/skills](https://github.com/coderabbitai/skills) - Revisión de código y autofix de PRs
- [massimodeluisa/recursive-decomposition-skill](https://github.com/massimodeluisa/recursive-decomposition-skill) - Parte tareas largas (100+ archivos) por descomposición
- [mcollina/skills](https://github.com/mcollina/skills/tree/main/skills) - Skills de Node.js, Fastify y TypeScript de Matteo Collina
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) - Frontend con criterio para evitar UI genérica
- [weike-zhang/project-publisher](https://github.com/weike-zhang/project-publisher) - Revisa y actualiza los archivos públicos antes del lanzamiento
</details>

<details>
<summary><strong>Ingeniería de contexto</strong></summary>

- [muratcankoylan/context-compression](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/context-compression) - Estrategias de compresión para sesiones largas
- [muratcankoylan/memory-systems](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/memory-systems) - Diseña memoria a corto plazo y basada en grafos
- [k-kolomeitsev/data-structure-protocol](https://github.com/k-kolomeitsev/data-structure-protocol) - Memoria en grafo para más contexto y refactors más seguros
</details>

---

## Tendencias y Capacidades (2026)

El ecosistema de agentes de IA ha pasado drásticamente de interfaces de chat reactivas a **sistemas autónomos orientados a objetivos** que ejecutan flujos de trabajo de varios pasos de extremo a extremo, un periodo a menudo llamado el "Salto del Agente".

### 1. Ejecución Autónoma
Los agentes modernos superan los modelos simples de "prompt-respuesta". Desglosan objetivos amplios en planes estratégicos de varios pasos, sopesando compensaciones y ejecutando secuencias de forma independiente.

### 2. Orquestación Multi-Agente
Las tareas complejas son gestionadas por equipos de agentes especializados (documentación, pruebas, código) coordinados por agentes "gerentes" que sintetizan entregables y resuelven conflictos.

---

## Preguntas Frecuentes

### ¿Qué son las Agent Skills?
Las Agent Skills son archivos de instrucciones que enseñan a los asistentes de IA cómo realizar tareas específicas. Solo se cargan cuando se necesitan, para que la IA siga siendo rápida y enfocada.

### ¿En qué se diferencian las Agent Skills del fine-tuning?
El fine-tuning cambia permanentemente la forma en que piensa una IA (es caro y difícil de actualizar). Las Agent Skills son simplemente archivos de instrucciones: puedes actualizarlas, intercambiarlas o compartirlas en cualquier momento sin tocar la IA en sí.

---

## Listas Awesome Relacionadas

- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) - Lista seleccionada de habilidades y herramientas para Claude Code.
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - Estándares y herramientas para el protocolo DESIGN.md.
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - Habilidades de agente de código abierto para OpenClaw.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Una colección de servidores de Model Context Protocol (MCP).

---

## Contacto

Preguntas, consultas de asociación o comentarios sobre este proyecto:

- LinkedIn: [Hailey Cheng (Cheng Hei Lam)](https://www.linkedin.com/in/heilcheng/)
- X / Twitter: [@haileyhmt](https://x.com/haileyhmt)
- Email: [haileycheng@proton.me](mailto:haileycheng@proton.me)

---

## Licencia
Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
