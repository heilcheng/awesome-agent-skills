"use client";

import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";
import { useTranslations } from "@/lib/i18n";

export default function Contributing() {
  const t = useTranslations();

  return (
    <section id="contributing" className="scroll-mt-20 py-16">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.contributing.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.contributing.subtitle}
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          {
            title: "Submit a skill",
            description: "Open a pull request with your SKILL.md and any supporting scripts. We review every submission and help refine the instructions.",
          },
          {
            title: "Report an issue",
            description: "Found a broken link, outdated resource, or a skill that doesn't work as described? Open an issue directly on GitHub.",
          },
          {
            title: "Join discussions",
            description: "Talk about new agentic patterns, trends, and the MCP ecosystem in the GitHub Discussions tab.",
          },
        ].map((item) => (
          <div key={item.title} className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
        >
          Contributing Guide <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/heilcheng/awesome-agent-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <Github className="w-4 h-4" /> View Repository
        </a>
      </div>
    </section>
  );
}
