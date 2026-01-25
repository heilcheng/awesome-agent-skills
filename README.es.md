# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

Una lista seleccionada de habilidades, herramientas y capacidades para agentes de codificación de IA.

---

## Tabla de Contenidos

- [¿Qué son las Agent Skills?](#qué-son-las-agent-skills)
- [Agentes Compatibles](#agentes-compatibles)
- [Lista de Habilidades](#lista-de-habilidades)
- [Tutoriales y Guías Oficiales](#tutoriales-y-guías-oficiales)
- [Usando Habilidades](#usando-habilidades)
- [Creando Habilidades](#creando-habilidades)
- [Recursos de la Comunidad](#recursos-de-la-comunidad)
- [Preguntas Frecuentes (FAQ)](#preguntas-frecuentes-faq)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)
- [Referencias](#referencias)

---

## ¿Qué son las Agent Skills?

Piensa en las **Agent Skills** (Habilidades de Agente) como "guías prácticas" para asistentes de IA. En lugar de que la IA necesite saber todo de antemano, las habilidades le permiten aprender nuevas capacidades sobre la marcha, como dar a alguien una tarjeta de receta en lugar de hacer que memorice un libro de cocina entero.

Las habilidades son archivos de texto simples (llamados `SKILL.md`) que enseñan a una IA cómo realizar tareas específicas. Cuando le pides a la IA que haga algo, encuentra la habilidad adecuada, lee las instrucciones y se pone a trabajar.

### Cómo Funciona

Las habilidades se cargan en tres etapas:

1. **Explorar (Browse)** - La IA ve una lista de habilidades disponibles (solo nombres y descripciones breves)
2. **Cargar (Load)** - Cuando se necesita una habilidad, la IA lee las instrucciones completas
3. **Usar (Use)** - La IA sigue las instrucciones y accede a cualquier archivo auxiliar

### Por qué es Importante

- **Más rápido y ligero** - La IA solo carga lo que necesita, cuando lo necesita
- **Funciona en todas partes** - Crea una habilidad una vez, úsala con cualquier herramienta de IA compatible
- **Fácil de compartir** - Las habilidades son solo archivos que puedes copiar, descargar o compartir en GitHub

Las habilidades son **instrucciones**, no código. La IA las lee como un humano leería una guía, y luego sigue los pasos.

---

## Agentes Compatibles

Las siguientes plataformas tienen soporte documentado para Agent Skills:

| Agente | Documentación |
|------|------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |

---

## Lista de Habilidades

### Habilidades Oficiales de Claude (Procesamiento de Documentos)

Claude proporciona habilidades integradas para tipos de documentos comunes:

| Habilidad | Descripción | Fuente |
|------|------|------|
| docx | Crear, editar, analizar documentos Word con control de cambios | [anthropics/skills](https://github.com/anthropics/skills) |
| xlsx | Manipulación de hojas de cálculo: fórmulas, gráficos, transformaciones de datos | [anthropics/skills](https://github.com/anthropics/skills) |
| pptx | Leer, generar y ajustar diapositivas, diseños, plantillas | [anthropics/skills](https://github.com/anthropics/skills) |
| pdf | Extraer texto, tablas, metadatos de PDFs | [anthropics/skills](https://github.com/anthropics/skills) |

### Habilidades Oficiales de OpenAI Codex

Codex soporta habilidades en diferentes ámbitos:

| Ámbito | Ubicación | Uso Sugerido |
|----------|------|----------|
| REPO | `$CWD/.codex/skills` | Habilidades relevantes para una carpeta de trabajo (ej. microservicio o módulo) |
| REPO | `$CWD/../.codex/skills` | Habilidades para áreas compartidas en carpetas padre |
| REPO | `$REPO_ROOT/.codex/skills` | Habilidades raíz para todos los que usan el repositorio |
| USER | `$CODEX_HOME/skills` (default: `~/.codex/skills`) | Habilidades personales que se aplican a cualquier repositorio |
| ADMIN | `/etc/codex/skills` | Scripts SDK, automatización y habilidades administrativas predeterminadas |
| SYSTEM | Incluido con Codex | Habilidades integradas como skill-creator y plan |

### Habilidades Oficiales de HuggingFace

| Habilidad | Descripción | Fuente |
|------|------|------|
| hf_dataset_creator | Prompts, plantillas y scripts para crear conjuntos de datos de entrenamiento estructurados | [huggingface/skills](https://github.com/huggingface/skills) |
| hf_model_evaluation | Instrucciones y utilidades para orquestar trabajos de evaluación, generar informes y mapear métricas | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-llm-trainer | Habilidad de entrenamiento integral con guía, scripts auxiliares, estimadores de costos | [huggingface/skills](https://github.com/huggingface/skills) |
| hf-paper-publisher | Herramientas para publicar y gestionar artículos de investigación en Hugging Face Hub | [huggingface/skills](https://github.com/huggingface/skills) |

### Habilidades de la Comunidad

Habilidades y colecciones mantenidas por la comunidad (verificar antes de usar):

#### Colecciones de Habilidades

| Repositorio | Descripción |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | Colección oficial de Anthropic (edición de documentos, análisis de datos) |
| [openai/skills](https://github.com/openai/skills) | Catálogo oficial de habilidades de OpenAI Codex |
| [huggingface/skills](https://github.com/huggingface/skills) | Habilidades de HuggingFace (compatible con Claude, Codex, Gemini) |
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | Colección de SkillCreator.ai con instalador CLI |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Más de 50 habilidades verificadas para Claude Code y Claude.ai |

#### Procesamiento de Documentos

| Habilidad | Descripción |
|------|------|
| [Markdown to EPUB](https://github.com/smerchek/claude-epub-skill) | Convierte documentos markdown en libros electrónicos EPUB profesionales |

#### Herramientas de Desarrollo y Código

| Habilidad | Descripción |
|------|------|
| [aws-skills](https://github.com/zxkane/aws-skills) | Desarrollo AWS y mejores prácticas CDK |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | Gráficos D3 y visualizaciones de datos interactivas |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | Automatización del navegador para probar aplicaciones web |
| [Specrate](https://github.com/rickygao/specrate) | Gestiona especificaciones y cambios con un flujo de trabajo estructurado |

#### Datos y Análisis

| Habilidad | Descripción |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Analizar archivos CSV y generar insights con visualizaciones |

#### Integración y Automatización

| Habilidad | Descripción |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | Capacidad de navegador web para agentes |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Automatización CLI de Google Sheets |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | Enviar notificaciones de mensajes para flujos de trabajo de agentes |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Integración de API de Spotify |

#### Seguridad y Sistemas

| Habilidad | Descripción |
|------|------|
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Caza de amenazas usando reglas de detección Sigma |

---

## Tutoriales y Guías Oficiales

### Claude y Anthropic
- [Usando habilidades en Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - Guía oficial de inicio rápido
- [Cómo crear habilidades personalizadas](https://support.claude.com/en/articles/12512198-creating-custom-skills) - Guía de creación paso a paso
- [Documentación de Habilidades de Claude Code](https://code.claude.com/docs/en/skills) - Referencia oficial

### GitHub Copilot
- [Acerca de Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) - Documentación de GitHub
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) - Integración con VS Code

### Model Context Protocol (MCP)
- [Documentación Oficial de MCP](https://modelcontextprotocol.io/) - El estándar abierto
- [Construye tu primer servidor MCP](https://modelcontextprotocol.io/docs/first-server) - Guía Python/TypeScript
- [Ejemplos de Servidores MCP](https://github.com/modelcontextprotocol/servers) - Implementaciones oficiales de servidores

---

## Usando Habilidades

### Usando Habilidades en Claude.ai
1. Haz clic en el icono de habilidad en tu interfaz de chat.
2. Añade habilidades desde el mercado o sube habilidades personalizadas.
3. Claude activa automáticamente las habilidades relevantes según tu tarea.

### Usando Habilidades en Claude Code
Coloca la habilidad en tu directorio de configuración:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

La habilidad se carga automáticamente y se activa cuando es relevante.

### Usando Habilidades en VS Code

Las habilidades se almacenan en directorios con un archivo `SKILL.md`. VS Code soporta dos ubicaciones:

- `.github/skills/` - Ubicación recomendada para todas las habilidades nuevas
- `.claude/skills/` - Ubicación heredada, también soportada

**Crear una habilidad:**

1. Crea un directorio `.github/skills` en tu espacio de trabajo
2. Crea un subdirectorio para tu habilidad (ej. `.github/skills/webapp-testing`)
3. Crea un archivo `SKILL.md` con la siguiente estructura:

```markdown
---
name: skill-name
description: Descripción de lo que hace la habilidad y cuándo usarla
---

# Instrucciones de la Habilidad

Tus instrucciones detalladas, pautas y ejemplos van aquí...
```

---

## Creando Habilidades

Las habilidades son paquetes de instrucciones que le dicen al agente cómo realizar tareas específicas. Por defecto, no son código ejecutable.

### Estructura de la Habilidad

```
skill-name/
├── SKILL.md          # Requerido: Instrucciones y metadatos
├── scripts/          # Opcional: Scripts auxiliares
├── templates/        # Opcional: Plantillas de documentos
└── resources/        # Opcional: Archivos de referencia
```

### Plantilla Básica de SKILL.md

```markdown
---
name: my-skill-name
description: Una descripción clara de lo que hace esta habilidad.
---

# Nombre de mi Habilidad

Descripción detallada del propósito de la habilidad.

## Cuándo Usar Esta Habilidad

- Caso de uso 1
- Caso de uso 2

## Instrucciones

[Instrucciones detalladas para el agente sobre cómo ejecutar esta habilidad]

## Ejemplos

[Ejemplos del mundo real]
```

---

## Preguntas Frecuentes (FAQ)

### ¿Qué son las Agent Skills?

Las Agent Skills (Habilidades de Agente) son archivos de instrucciones que enseñan a los asistentes de IA cómo hacer tareas específicas. Piensa en ellas como "guías prácticas" que la IA lee y sigue. Solo se cargan cuando son necesarias, por lo que la IA se mantiene rápida y enfocada.

### ¿En qué se diferencian las Agent Skills del fine-tuning?

El fine-tuning cambia permanentemente cómo piensa una IA (es costoso y difícil de actualizar). Las Agent Skills son solo archivos de instrucciones, puedes actualizarlas, intercambiarlas o compartirlas en cualquier momento sin tocar la IA misma.

### ¿Cuál es la diferencia entre Agent Skills y MCP?

Hacen cosas diferentes y funcionan muy bien juntas:
- **Agent Skills** = enseñan a la IA *cómo* hacer algo (flujos de trabajo, mejores prácticas)
- **MCP** = ayudan a la IA a *acceder* a cosas (APIs, bases de datos, herramientas externas)

### ¿Qué herramientas de IA soportan Agent Skills?

Actualmente soportadas: **Claude** (Claude.ai y Claude Code), **GitHub Copilot**, **VS Code**, y otras. La lista está creciendo a medida que más herramientas adoptan el estándar.

### ¿Las Agent Skills ejecutan código?

No. Las habilidades son solo instrucciones de texto, la IA las lee y las sigue como una receta. Si necesitas ejecutar código real, usarías algo como servidores MCP junto con las habilidades.

---

## Contribuyendo

Este repositorio sigue el modelo de desarrollo abierto de Agent Skills. Las contribuciones son bienvenidas desde el ecosistema más amplio. Al contribuir:

- Sigue la estructura de la plantilla de habilidades
- Proporciona instrucciones claras y accionables
- Incluye ejemplos funcionales donde sea apropiado
- Documenta las compensaciones y problemas potenciales
- Mantén SKILL.md por debajo de 500 líneas para un rendimiento óptimo

---

## Licencia

Licencia MIT - ver el archivo LICENSE para más detalles.

---

## Referencias

- [Anthropic: Usando habilidades en Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Anthropic: Creando habilidades personalizadas](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Documentación de Habilidades de Claude Code](https://code.claude.com/docs/en/skills)
- [GitHub Copilot: Acerca de Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills)
- [Documentación del Protocolo de Contexto de Modelo](https://modelcontextprotocol.io/)
