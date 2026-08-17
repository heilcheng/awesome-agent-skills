"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Cloud, Wrench, Shield, Briefcase, Cpu, Globe, Server, Code, Zap, Database, Terminal, FileText, Image, Video, PenTool } from "lucide-react";
import { useTranslations } from "@/lib/i18n";


const skills = [
  // --- OFFICIAL AI PLATFORMS ---
  // Anthropic
  { id: "anthropic-docx", name: "anthropics/docx", description: "Create, edit, and analyze Word documents with Claude.", category: "official", tags: ["Document", "Anthropic"], Icon: FileText },
  { id: "anthropic-doc-coauthoring", name: "anthropics/doc-coauthoring", description: "Collaborative document editing and co-authoring.", category: "official", tags: ["Collaborative", "Anthropic"], Icon: FileText },
  { id: "anthropic-pptx", name: "anthropics/pptx", description: "Create, edit, and analyze PowerPoint presentations.", category: "official", tags: ["Presentation", "Anthropic"], Icon: FileText },
  { id: "anthropic-xlsx", name: "anthropics/xlsx", description: "Create, edit, and analyze Excel spreadsheets.", category: "official", tags: ["Spreadsheet", "Anthropic"], Icon: FileText },
  { id: "anthropic-pdf", name: "anthropics/pdf", description: "Extract text, create PDFs, and handle forms.", category: "official", tags: ["PDF", "Anthropic"], Icon: FileText },
  { id: "anthropic-art", name: "anthropics/algorithmic-art", description: "Create generative art using p5.js with seeded randomness.", category: "official", tags: ["Art", "Anthropic"], Icon: Image },
  { id: "anthropic-canvas", name: "anthropics/canvas-design", description: "Design visual art in PNG and PDF formats.", category: "official", tags: ["Design", "Anthropic"], Icon: Image },
  { id: "anthropic-frontend", name: "anthropics/frontend-design", description: "Frontend design and UI/UX development tools.", category: "official", tags: ["Frontend", "Anthropic"], Icon: PenTool },
  { id: "anthropic-webapp", name: "anthropics/webapp-testing", description: "Test local web applications using Playwright natively.", category: "official", tags: ["Testing", "Anthropic"], Icon: Terminal },
  { id: "anthropic-mcp", name: "anthropics/mcp-builder", description: "Create MCP servers to integrate external APIs and services.", category: "official", tags: ["MCP", "Anthropic"], Icon: Server },

  // OpenAI
  { id: "openai-cf", name: "openai/cloudflare-deploy", description: "Deploy apps to Cloudflare using Workers and Pages.", category: "official", tags: ["Cloudflare", "OpenAI"], Icon: Zap },
  { id: "openai-game", name: "openai/develop-web-game", description: "Build and test web games iteratively using Playwright.", category: "official", tags: ["Game", "OpenAI"], Icon: Zap },
  { id: "openai-linear", name: "openai/linear", description: "Manage issues, projects, and team workflows in Linear.", category: "official", tags: ["Linear", "OpenAI"], Icon: Zap },
  { id: "openai-notion", name: "openai/notion-knowledge-capture", description: "Convert conversations into structured Notion wiki entries.", category: "official", tags: ["Notion", "OpenAI"], Icon: Zap },
  { id: "openai-figma", name: "openai/figma-implement-design", description: "Translate Figma designs into production-ready code.", category: "official", tags: ["Figma", "OpenAI"], Icon: Zap },
  { id: "openai-sora", name: "openai/sora", description: "Generate, remix, and manage short video clips via Sora API.", category: "official", tags: ["Video", "OpenAI"], Icon: Video },

  // Google Gemini
  { id: "gemini-dev", name: "google-gemini/gemini-api-dev", description: "Best practices for developing Gemini-powered apps.", category: "official", tags: ["Gemini", "Google"], Icon: Globe },
  { id: "vertex-dev", name: "google-gemini/vertex-ai-api-dev", description: "Developing Gemini apps on Google Cloud Vertex AI.", category: "official", tags: ["Vertex", "Google"], Icon: Globe },
  { id: "gemini-live", name: "google-gemini/gemini-live-api-dev", description: "Building real-time bidirectional streaming apps.", category: "official", tags: ["Live", "Google"], Icon: Globe },

  // Others
  { id: "huggingface-cli", name: "huggingface/hf-cli", description: "Official Hugging Face CLI tool for Hub operations.", category: "official", tags: ["ML", "Hugging Face"], Icon: Cpu },
  { id: "replicate", name: "replicate/replicate", description: "Discover and run AI models via API.", category: "official", tags: ["Replicate", "API"], Icon: Cpu },
  { id: "fal-gen", name: "fal-ai-community/fal-generate", description: "Generate images and videos using fal.ai.", category: "official", tags: ["Image", "fal.ai"], Icon: Cpu },

  // --- CLOUD & INFRASTRUCTURE ---
  { id: "cf-agents-sdk", name: "cloudflare/agents-sdk", description: "Build stateful AI agents with scheduling and RPC.", category: "cloud", tags: ["Agents", "Cloudflare"], Icon: Cloud },
  { id: "cf-mcp", name: "cloudflare/building-mcp-server-on-cloudflare", description: "Build remote MCP servers with tools and OAuth.", category: "cloud", tags: ["MCP", "Cloudflare"], Icon: Cloud },
  { id: "netlify-blobs", name: "netlify/netlify-blobs", description: "Key-value object storage for files and data.", category: "cloud", tags: ["Blobs", "Netlify"], Icon: Cloud },
  { id: "netlify-ai", name: "netlify/netlify-ai-gateway", description: "Access AI models via unified gateway endpoint.", category: "cloud", tags: ["AI Gateway", "Netlify"], Icon: Cloud },
  { id: "vercel-react", name: "vercel-labs/react-best-practices", description: "React best practices and modern server patterns.", category: "cloud", tags: ["React", "Vercel"], Icon: Cloud },
  { id: "vercel-native", name: "vercel-labs/react-native-skills", description: "React Native best practices and performance guidelines.", category: "cloud", tags: ["Native", "Vercel"], Icon: Cloud },
  { id: "tf-style", name: "hashicorp/terraform-style-guide", description: "Official Terraform HCL style conventions.", category: "cloud", tags: ["Terraform", "HashiCorp"], Icon: Database },
  { id: "tf-stacks", name: "hashicorp/terraform-stacks", description: "Manage infrastructure across multiple environments.", category: "cloud", tags: ["Stacks", "HashiCorp"], Icon: Database },
  { id: "neon-postgres", name: "neondatabase/neon-postgres", description: "Best practices for Neon Serverless Postgres.", category: "cloud", tags: ["Postgres", "Neon"], Icon: Database },

  // --- DEVELOPER TOOLS ---
  { id: "volt-best", name: "voltagent/voltagent-best-practices", description: "Architecture and usage patterns for AI agents.", category: "devtools", tags: ["VoltAgent", "Architecture"], Icon: Wrench },
  { id: "expo-ui", name: "expo/building-native-ui", description: "Build apps with Expo Router and styling.", category: "devtools", tags: ["Expo", "Native"], Icon: Wrench },
  { id: "duckdb-query", name: "duckdb/query", description: "Run SQL queries against ad-hoc files.", category: "devtools", tags: ["DuckDB", "SQL"], Icon: Wrench },
  { id: "gsap-trig", name: "greensock/gsap-scrolltrigger", description: "Scroll-linked animations and pinning with GSAP.", category: "devtools", tags: ["GSAP", "Animation"], Icon: Wrench },
  { id: "wp-playground", name: "WordPress/wp-playground", description: "Instant local WordPress environments.", category: "devtools", tags: ["WordPress", "Web"], Icon: Globe },
  { id: "figma-impl", name: "figma/figma-implement-design", description: "Translate designs into code with 1:1 fidelity.", category: "devtools", tags: ["Figma", "UI"], Icon: PenTool },
  { id: "google-stitch", name: "google-labs-code/shadcn-ui", description: "Build UI components with shadcn/ui.", category: "devtools", tags: ["Stitch", "UI"], Icon: Globe },

  // --- BUSINESS & MARKETING ---
  { id: "stripe-best", name: "stripe/stripe-best-practices", description: "Best practices for building Stripe integrations.", category: "business", tags: ["Stripe", "Payments"], Icon: Briefcase },
  { id: "notion-capture", name: "makenotion/knowledge-capture", description: "Transform conversations into structured documentation.", category: "business", tags: ["Notion", "Docs"], Icon: Briefcase },
  { id: "resend-email", name: "resend/resend", description: "Send and manage emails via the Resend API.", category: "business", tags: ["Email", "Resend"], Icon: Briefcase },
  { id: "sanity-seo", name: "sanity-io/seo-aeo-best-practices", description: "SEO and answer engine optimization patterns.", category: "business", tags: ["SEO", "Sanity"], Icon: Briefcase },
  { id: "better-auth", name: "better-auth/best-practices", description: "Best practices for Better Auth integration.", category: "business", tags: ["Auth", "Better Auth"], Icon: Briefcase },
  { id: "pm-skills", name: "dean-peters/pm-skills", description: "24 PM skills covering discovery and delivery.", category: "business", tags: ["PM", "Product"], Icon: Briefcase },

  // --- SECURITY & INTELLIGENCE ---
  { id: "trailofbits-contracts", name: "trailofbits/building-secure-contracts", description: "Smart contract security toolkit.", category: "security", tags: ["Security", "Web3"], Icon: Shield },
  { id: "trailofbits-py", name: "trailofbits/modern-python", description: "Modern Python tooling with uv, ruff, and pytest.", category: "security", tags: ["Python", "Security"], Icon: Shield },
  { id: "getsentry-review", name: "getsentry/code-review", description: "Perform structured code reviews with Sentry.", category: "security", tags: ["Reviews", "Sentry"], Icon: Code },
  { id: "firecrawl-agent", name: "firecrawl/firecrawl-agent", description: "AI agent for autonomous web scraping.", category: "security", tags: ["Scraping", "Firecrawl"], Icon: Globe },
  { id: "binance-rank", name: "binance/crypto-market-rank", description: "Query crypto market rankings and leaderboards.", category: "security", tags: ["Crypto", "Binance"], Icon: Database },
];

export default function SkillDirectory() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("official");
  const [searchQuery, setSearchQuery] = useState("");

  const skillTabs = [
    { id: "official", label: t.directory.tabs.official },
    { id: "cloud", label: t.directory.tabs.infra },
    { id: "devtools", label: t.directory.tabs.devtools },
    { id: "business", label: t.directory.tabs.business },
    { id: "security", label: t.directory.tabs.security },
  ];

  const filtered = skills.filter((s) =>
    s.category === activeTab &&
    (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="directory" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.directory.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        {t.directory.subtitle}
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-px">
        {skillTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSearchQuery(""); }}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors relative -mb-px ${
              activeTab === tab.id
                ? "text-neutral-900 dark:text-white border border-b-white dark:border-neutral-700 dark:border-b-neutral-950 bg-white dark:bg-neutral-950"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder={t.directory.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
        />
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.a
              layout
              key={skill.id}
              href={`https://github.com/heilcheng/awesome-agent-skills`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="group flex items-start gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all"
            >
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <skill.Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white font-mono group-hover:underline underline-offset-2">
                    {skill.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-1 mb-2">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-neutral-400">
          No skills found matching "{searchQuery}"
        </div>
      )}
    </section>
  );
}
