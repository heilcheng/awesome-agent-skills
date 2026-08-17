"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const steps = [
  {
    step: "01",
    title: "Find a skill",
    description: "Browse the Directory above to find an official or community skill that fits your workflow. Each one is a self-contained folder you can read and understand before adding it.",
  },
  {
    step: "02",
    title: "Add it to your project",
    description: "Drop the skill folder into `.github/skills/` in your repo. Modern agentic IDEs (Cursor, Claude Code, Windsurf) automatically index this directory on startup.",
  },
  {
    step: "03",
    title: "It just works",
    description: "Your agent now knows when and how to run this capability based on semantic context. No manual prompting needed. The skill activates automatically.",
  },
];

export default function UsingSkills() {
  const [copied, setCopied] = useState(false);
  const t = useTranslations();

  const copyCode = () => {
    navigator.clipboard.writeText("npx skills add anthropics/skills/docx");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="using-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.using.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.using.subtitle}
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Steps */}
        <div className="space-y-4">
          <div className="flex gap-5 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <span className="text-xl mt-0.5 w-6 shrink-0 text-center">🕵️‍♂️</span>
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Step 1: Scuff the Directory</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Don't reinvent the wheel! Browse the Directory above. Each skill is just a friendly folder that your AI is literally <i>dying</i> to read.</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <span className="text-xl mt-0.5 w-6 shrink-0 text-center">🚚</span>
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Step 2: The "Drop-In" Move</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Simply hurl that folder into <code>.github/skills/</code>. Modern IDEs like Cursor and Claude Code will sniff it out instantly and go "Oh wow, new knowledge!"</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <span className="text-xl mt-0.5 w-6 shrink-0 text-center">🪄</span>
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Step 3: Magic Happens</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Your agent is now officially "skilled." No more pasting 50-line prompts into every new chat window. It just... <i>knows</i>.</p>
            </div>
          </div>
        </div>

        {/* Code panels */}
        <div className="space-y-4">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">CLI</span>
              <button
                onClick={copyCode}
                className="p-1.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="px-4 py-4 text-sm font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto">
              <code>npx skills add anthropics/skills/docx</code>
            </pre>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
            <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">Manual drop-in path</span>
            </div>
            <pre className="px-4 py-4 text-sm font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto">
              <code>.github/skills/skill-name/</code>
            </pre>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed px-1">
            Supports GitHub shorthand, full URLs, or local relative paths. Drop-in paths support GitHub shorthand or full URLs.
          </p>
        </div>
      </div>
    </section>
  );
}
