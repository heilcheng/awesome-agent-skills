"use client";

import { useTranslations } from "@/lib/i18n";

export default function HowItWorks() {
  const t = useTranslations();

  const stages = t.how.steps;

  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.how.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.how.subtitle}
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {stages.map((s) => (
          <div key={s.step} className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <div className="text-2xl font-black text-neutral-200 dark:text-neutral-700 mb-4 font-mono">{s.step}</div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">{s.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
