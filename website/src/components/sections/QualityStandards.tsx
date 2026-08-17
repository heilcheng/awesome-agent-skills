"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function QualityStandards() {
  const t = useTranslations();

  return (
    <section id="quality-standards" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.quality.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.quality.subtitle}
      </p>

      {/* Standards list */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {t.quality.items.map((s, i) => (
          <div key={i} className="flex gap-4 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <span className="text-xs font-bold text-neutral-400 dark:text-neutral-600 mt-0.5 w-4 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{s.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Good vs Bad */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <CheckCircle2 className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-widest">{t.quality.goodHeader}</span>
          </div>
          <div className="p-4">
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              {t.quality.goodPattern}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 italic">{t.quality.goodDesc}</p>
          </div>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <XCircle className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest">{t.quality.badHeader}</span>
          </div>
          <div className="p-4">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 leading-relaxed bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 opacity-70">
              {t.quality.badPattern}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 italic">{t.quality.badDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
