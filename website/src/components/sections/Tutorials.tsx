"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";


export default function Tutorials() {
  const t = useTranslations();

  return (
    <section id="tutorials" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.tutorials.title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl">
          {t.tutorials.subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {t.tutorials.items.map((item, i) => (
          <div key={i} className="group p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 rounded">
                {item.type}
              </span>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm max-w-3xl space-y-8">
        
        {/* Dialogue 1 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">🧑‍💻</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{t.tutorials.chat.human}</div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-700 shadow-sm text-sm text-neutral-700 dark:text-neutral-300">
              {t.tutorials.chat.msg1}
            </div>
          </div>
        </div>

        {/* Dialogue 2 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl border border-blue-200 dark:border-blue-800/50 shadow-sm">🤖</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{t.tutorials.chat.agent}</div>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 lg:p-5 rounded-2xl rounded-tl-sm border border-blue-200 dark:border-blue-800/30 shadow-sm text-sm text-neutral-800 dark:text-neutral-200">
              <p className="mb-3">{t.tutorials.chat.msg2}</p>
              
              <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <div className="text-xs font-bold text-neutral-400 mb-2 uppercase">{t.tutorials.chat.quest1.title} 🔰</div>
                <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                  <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">{t.tutorials.chat.quest1.link}</div>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dialogue 3 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">🧑‍💻</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{t.tutorials.chat.human}</div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-700 shadow-sm text-sm text-neutral-700 dark:text-neutral-300">
              {t.tutorials.chat.msg3}
            </div>
          </div>
        </div>

        {/* Dialogue 4 */}
        <div className="flex gap-3 sm:gap-4 w-full">
           <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl border border-blue-200 dark:border-blue-800/50 shadow-sm">🤖</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{t.tutorials.chat.agent}</div>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 lg:p-5 rounded-2xl rounded-tl-sm border border-blue-200 dark:border-blue-800/30 shadow-sm text-sm text-neutral-800 dark:text-neutral-200">
              <p className="mb-3">{t.tutorials.chat.msg4}</p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <div className="text-xs font-bold text-neutral-400 mb-2 uppercase">{t.tutorials.chat.quest2.title} ⚡️</div>
                  <a href="#directory" className="flex items-center justify-between group">
                    <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">{t.tutorials.chat.quest2.link}</div>
                    <ArrowUpRight className="w-4 h-4 text-blue-400" />
                  </a>
                </div>
                <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">{t.tutorials.chat.quest3.title} 🧙‍♂️</div>
                  <a href="https://modelcontextprotocol.io/docs/first-server" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">{t.tutorials.chat.quest3.link}</div>
                    <ArrowUpRight className="w-4 h-4 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
