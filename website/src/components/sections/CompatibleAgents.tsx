"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const agents = [
  { name: "Claude Code", docs: "code.claude.com", href: "https://code.claude.com/docs/en/skills" },
  { name: "Claude.ai", docs: "support.claude.com", href: "https://support.claude.com" },
  { name: "Codex (OpenAI)", docs: "developers.openai.com", href: "https://developers.openai.com" },
  { name: "GitHub Copilot", docs: "docs.github.com", href: "https://docs.github.com" },
  { name: "VS Code", docs: "code.visualstudio.com", href: "https://code.visualstudio.com" },
  { name: "Antigravity", docs: "antigravity.google", href: "https://antigravity.google" },
  { name: "Kiro", docs: "kiro.dev", href: "https://kiro.dev" },
  { name: "Gemini CLI", docs: "geminicli.com", href: "https://geminicli.com" },
  { name: "Junie", docs: "junie.jetbrains.com", href: "https://junie.jetbrains.com" },
];

export default function CompatibleAgents() {
  const t = useTranslations();

  return (
    <section id="compatible-agents" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.compatible.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        {t.compatible.subtitle}
      </p>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <th className="text-left px-5 py-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">Agent</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">Documentation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {agents.map((agent) => (
              <tr key={agent.name} className="bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
                <td className="px-5 py-3 font-medium text-neutral-900 dark:text-white">{agent.name}</td>
                <td className="px-5 py-3">
                  <a
                    href={agent.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {agent.docs}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
