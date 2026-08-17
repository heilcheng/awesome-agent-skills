"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const cliCommands = [
  { cmd: "npx skills find [query]", desc: "Search for related skills" },
  { cmd: "npx skills add <owner/repo>", desc: "Install a skill (supports GitHub shorthand, full URL, local path)" },
  { cmd: "npx skills list", desc: "List installed skills" },
  { cmd: "npx skills check", desc: "Check for available updates" },
  { cmd: "npx skills update", desc: "Upgrade all skills" },
  { cmd: "npx skills remove [skill-name]", desc: "Uninstall a skill" },
];

export default function FindingSkills() {
  const [copied, setCopied] = useState<string | null>(null);
  const t = useTranslations();

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="finding-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.finding.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.finding.subtitle}
      </p>

      <div className="space-y-6">
        {t.finding.items.map((item, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm">
            <div className="flex items-center justify-between px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <div>
                {index === 0 && (
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Recommended</span>
                )}
                <h3 className={`text-base font-semibold text-neutral-900 dark:text-white ${index === 0 ? "mt-0.5" : ""}`}>{item.title}</h3>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {new URL(item.link).hostname} →
              </a>
            </div>
            <div className="px-5 py-5">
              {item.title.toLowerCase().includes("marketplace") || item.title.toLowerCase().includes("leaderboard") ? (
                <div className="mb-6 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                  <img 
                    src={item.title.toLowerCase().includes("marketplace") ? "/assets/skills-mp.png" : "/assets/skills-sh.png"} 
                    alt={item.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : null}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
              
              {item.title.toLowerCase().includes("cli") && (
                <div className="mt-6 divide-y divide-neutral-100 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                  {cliCommands.map(({ cmd, desc }) => (
                    <div key={cmd} className="flex items-center gap-4 px-4 py-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
                      <code className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex-1 min-w-0 truncate">{cmd}</code>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500 hidden sm:block shrink-0">{desc}</span>
                      <button
                        onClick={() => copy(cmd)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
                      >
                        {copied === cmd ? <Check className="w-3 h-3 text-neutral-600 dark:text-neutral-300" /> : <Copy className="w-3 h-3 text-neutral-400" />}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
