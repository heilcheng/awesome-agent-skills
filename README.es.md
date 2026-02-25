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
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |

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
| [agentskill.sh](https://agentskill.sh) | Directorio de 44k+ habilidades con escaneo de seguridad e instalador `/learn` |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Más de 50 habilidades verificadas para Claude Code y Claude.ai |
| [shajith003/awesome-claude-skills](https://github.com/shajith003/awesome-claude-skills) | Habilidades para capacidades especializadas |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | Habilidades de colaboración multi-agente |
| [DougTrajano/pydantic-ai-skills](https://github.com/DougTrajano/pydantic-ai-skills) | Integración de Pydantic AI |
| [OmidZamani/dspy-skills](https://github.com/OmidZamani/dspy-skills) | Habilidades para el framework DSPy |
| [hikanner/agent-skills](https://github.com/hikanner/agent-skills) | Colección curada de Claude Agent Skills |
| [gradion-ai/freeact-skills](https://github.com/gradion-ai/freeact-skills) | Habilidades de la librería de agentes Freeact |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | CLI estilo npm para habilidades (`brew install dmgrok/tap/skills`) — agrega 177+ habilidades de 24 proveedores |
| [gotalab/skillport](https://github.com/gotalab/skillport) | Distribución de habilidades vía CLI o MCP |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | Habilidades de Git, revisión de código y testing |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | Habilidades de criptomonedas, Web3 y blockchain |
| [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18 habilidades go-to-market: precios, outbound, SEO, anuncios, retención y operaciones |
| [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) | 24 habilidades de gestión de producto: descubrimiento, definición, entrega y optimización |
| [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) | Google Workspace (Gmail, Chat, Calendar, Docs, Drive, Sheets, Slides), delegación de IA (Jules, Manus, Deep Research) y habilidades de bases de datos |
| [RioBot-Grind/agentfund-skill](https://github.com/RioBot-Grind/agentfund-skill) | Crowdfunding para agentes de IA en cadena Base — custodia por hitos |
| [SSOJet/skill](https://github.com/ssojet/skills)] | Habilidades de SSOJet listas para producción y guías de integración para frameworks y plataformas populares: Node.js, Next.js, React, Java, .NET Core, Go, iOS, Android y más. Funciona sin problemas con SSOJet SAML, OIDC y flujos de SSO empresarial. Compatible con Cursor, Antigravity, Claude Code y Windsurf.|

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
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Guía de plataforma y SwiftUI creada por Apple extraída de Xcode |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | Interactuar con el Simulador de iOS para pruebas |
| [Swift Concurrency Migration](https://github.com/kylehughes/the-unofficial-swift-concurrency-migration-skill) | Guía de migración de Swift Concurrency |
| [Obsidian Plugin](https://github.com/gapmiss/obsidian-plugin-skill) | Desarrollo de plugins para Obsidian.md |
| [Stream Coding](https://github.com/frmoretto/stream-coding) | Metodología de Stream Coding |
| [Tool Advisor](https://github.com/dragon1086/claude-skills) | Analiza prompts y recomienda herramientas, habilidades, agentes y patrones de orquestación óptimos |
| [Vibe Testing](https://github.com/knot0-com/vibe-testing) | Prueba de estrés de documentos de especificación con razonamiento LLM antes de escribir código |
| [Mantra](https://mantra.gonewx.com) | Gestión de sesiones de codificación AI — guardar, restaurar y viajar en el tiempo en sesiones de Claude Code, Cursor y Windsurf |

#### Datos y Análisis

| Habilidad | Descripción |
|------|------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Analizar archivos CSV y generar insights con visualizaciones |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | Integración completa de Kaggle — configuración de cuenta, informes de competencias, descarga de datasets/modelos, ejecución de notebooks, envíos y colección de insignias |

#### Integración y Automatización

| Habilidad | Descripción |
|------|------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | Capacidad de navegador web para agentes |
| [Vectorize MCP Worker](https://github.com/dannwaneri/vectorize-mcp-worker) | Patrones de servidor MCP nativos de borde para RAG en producción |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | Gestiona agentes de IA CLI locales vía tmux (iniciar/parar/monitorear/asignar + programación cron) |
| [HOL Claude Skills](https://github.com/hashgraph-online/hol-claude-skills) | Descubrimiento de agentes de IA vía Registry Broker - /hol-search, /hol-resolve, /hol-chat |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Automatización CLI de Google Sheets |
| [Notification Skill](https://github.com/caopulan/Notification-Skill) | Enviar notificaciones de mensajes para flujos de trabajo de agentes |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Integración de API de Spotify |
| [AgentStore](https://github.com/techgangboss/agentstore) | Marketplace de plugins de código abierto con pagos USDC sin gas, instalación CLI y API de publicación de 3 campos |
| [Transloadit Skills](https://github.com/transloadit/skills) | Procesamiento de medios: codificación de video, manipulación de imágenes, OCR y 86+ Robots |
| [commune](https://github.com/shanjairaj7/commune-skill) | Bandeja de correo nativa para agentes — dirección permanente @commune.ai con envío/recepción completo, búsqueda semántica, triaje y webhooks |

#### Colaboración y Gestión de Proyectos

| Habilidad | Descripción |
|------|------|
| [git-pushing](https://github.com/mhattingpete/claude-skills-marketplace) | Automatizar operaciones git e interacciones con repositorios |
| [review-implementing](https://github.com/mhattingpete/claude-skills-marketplace) | Evaluar planes de implementación de código |
| [test-fixing](https://github.com/mhattingpete/claude-skills-marketplace) | Detectar pruebas fallidas y proponer correcciones |

#### Seguridad y Sistemas

| Habilidad | Descripción |
|------|------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | Análisis e investigación de informática forense digital |
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | Alternativa moderna de cifrado a GPG/PGP con soporte post-cuántico, autenticación componible y comunicación agente a agente |
| [Threat Hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Caza de amenazas usando reglas de detección Sigma |
| [Vincent Wallet](https://github.com/HeyVincent-ai/agent-skills/tree/main/wallet) | Wallet EVM seguro para agentes — transferencias, intercambios y transacciones |
| [Vincent Polymarket](https://github.com/HeyVincent-ai/agent-skills/tree/main/polymarket) | Trading en mercados de predicción Polymarket para agentes |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | Gobernanza a nivel de kernel para agentes de IA — aplicación determinista de políticas, verificación de cumplimiento, registro de auditoría |

#### Avanzado e Investigación

| Habilidad | Descripción |
|-----------|-------------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | Técnicas de ingeniería de contexto |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | Patrón de Habilidad del Sistema (habilidades que recuerdan y mejoran) |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | Clonación mental con habilidades LLM |

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

### Usando Habilidades en Google Antigravity

Antigravity soporta dos tipos de habilidades:

*   **Workspace Skills**: Habilidades específicas del proyecto ubicadas en `/.agent/skills/`
*   **Global Skills**: Habilidades globales del usuario ubicadas en `~/.gemini/antigravity/skills`

Para más detalles, consulta la [documentación oficial](https://antigravity.google/docs/skills).

### Usando Habilidades en Claude Code
Coloca la habilidad en tu directorio de configuración:

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

La habilidad se carga automáticamente y se activa cuando es relevante.

### Usando Habilidades en Codex

**Crear una habilidad:**

Usa la habilidad integrada `$skill-creator` en Codex. Describe lo que quieres que haga tu habilidad, y Codex la creará por ti.

Si instalas `$create-plan` (experimental) con `$skill-installer create-plan`, Codex creará un plan antes de escribir archivos.

También puedes crear una habilidad manualmente creando una carpeta con un archivo `SKILL.md`:

````markdown
---
name: skill-name
description: Descripción que ayuda a Codex a seleccionar la habilidad
metadata:
  short-description: Descripción opcional para el usuario
---

Instrucciones de la habilidad para que el agente Codex las siga al usar esta habilidad.
````

**Instalar nuevas habilidades:**

Descarga habilidades desde GitHub usando la habilidad `$skill-installer`:

```bash
$skill-installer linear
```

También puedes indicar al instalador que descargue habilidades de otros repositorios. Después de instalar una habilidad, reinicia Codex para cargar las nuevas habilidades.

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

### Usando Habilidades en Copilot CLI

**Agregar habilidades a tu repositorio:**

1. Crea un directorio `.github/skills` (las habilidades en `.claude/skills` también son compatibles)
2. Crea un subdirectorio para tu habilidad (ej. `.github/skills/webapp-testing`)
3. Crea un archivo `SKILL.md` con las instrucciones de tu habilidad

**Estructura de SKILL.md:**

- `name` (requerido): Un identificador único en minúsculas usando guiones para espacios
- `description` (requerido): Qué hace la habilidad y cuándo Copilot debe usarla
- `license` (opcional): Licencia que se aplica a esta habilidad
- Cuerpo en Markdown con instrucciones, ejemplos y pautas

**Ejemplo de SKILL.md:**

````markdown
---
name: github-actions-failure-debugging
description: Guía para depurar flujos de trabajo fallidos de GitHub Actions.
---

Para depurar flujos de trabajo fallidos de GitHub Actions:

1. Usa `list_workflow_runs` para buscar ejecuciones recientes del flujo de trabajo
2. Usa `summarize_job_log_failures` para obtener un resumen de IA de los trabajos fallidos
3. Usa `get_job_logs` para registros detallados de fallas si es necesario
4. Intenta reproducir la falla en tu entorno
5. Corrige la compilación fallida
````

Cuando realiza tareas, Copilot decide cuándo usar habilidades basándose en tu prompt y la descripción de la habilidad. El archivo `SKILL.md` se inyecta en el contexto del agente.

### Usando Servidores MCP (Claude Desktop)

Edita tu archivo de configuración:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Ejemplo de configuración:
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

### Ejemplo de Servidor MCP (Python)

Para habilidades que necesitan conectarse a fuentes de datos externas, puedes crear un servidor MCP:

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

## Recursos de la Comunidad

### Herramientas LangChain
- [Google Search](https://python.langchain.com/docs/integrations/tools/google_search/) - Envoltorio alrededor de SerpApi
- [Wikipedia](https://python.langchain.com/docs/integrations/tools/wikipedia/) - Obtener resúmenes de Wikipedia
- [Python REPL](https://python.langchain.com/docs/integrations/tools/python/) - Ejecutar código Python
- [Custom Tools Guide](https://python.langchain.com/docs/how_to/custom_tools/) - Cómo usar el decorador `@tool`

### Artículos e Investigación
- [I found 50 companies accidentally breaking HIPAA with ChatGPT](https://dev.to/dannwaneri/i-found-50-companies-accidentally-breaking-hipaa-with-chatgpt-1olc) - Análisis de riesgos de privacidad en IA
- [I built a Production RAG System for $5/month](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj) - Guía de optimización de costos para arquitecturas RAG

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

Actualmente soportadas: **Claude** (Claude.ai y Claude Code), **GitHub Copilot**, **VS Code**, **Codex** (OpenAI), **Antigravity** (Google), **Gemini CLI** y **Kiro**. La lista está creciendo a medida que más herramientas adoptan el estándar.

### ¿Las Agent Skills ejecutan código?

No. Las habilidades son solo instrucciones de texto, la IA las lee y las sigue como una receta. Si necesitas ejecutar código real, usarías algo como servidores MCP junto con las habilidades.

### ¿Cómo creo mi primera Agent Skill?

1. Crea un archivo `SKILL.md` con un nombre y una descripción en la parte superior
2. Escribe instrucciones claras paso a paso en el archivo
3. Colócalo en tu carpeta `.github/skills/` o `.claude/skills/`
4. ¡Pruébalo!

Guía completa: [Cómo crear habilidades personalizadas](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## Contribuyendo

Las contribuciones son bienvenidas. Consulta **[CONTRIBUTING.md](CONTRIBUTING.md)** para las directrices completas.

Resumen rápido:
- Sigue la estructura de la plantilla de habilidades
- Proporciona instrucciones claras y accionables
- Incluye ejemplos funcionales donde sea apropiado
- Documenta las compensaciones y problemas potenciales
- Mantén SKILL.md por debajo de 500 líneas para un rendimiento óptimo
- Verifica que las habilidades existan realmente antes de agregarlas

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
