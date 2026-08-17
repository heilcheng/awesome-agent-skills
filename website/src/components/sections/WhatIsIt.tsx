"use client";

import { Package, Code2, BookOpen, Check } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function WhatIsIt() {
  const t = useTranslations();
  const icons = [BookOpen, Package, Code2, Check]; // Provide fallback icons
  const cards = t.what.cards.map((card, i) => ({
    ...card,
    Icon: icons[i] || Code2
  }));

  return (
    <section id="what-are-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.what.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        {t.what.subtitle}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.what.howDesc}
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {cards.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 h-fit">
              <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
