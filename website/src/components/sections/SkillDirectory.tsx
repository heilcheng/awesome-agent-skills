"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Cloud, Wrench, Shield, Briefcase, Cpu, Globe } from "lucide-react";
import { useTranslations } from "@/lib/i18n";
import skillsData from "@/data/skills.json";


type Skill = { name: string; url: string; description: string; tab: string; group: string };

// Generated from README.md by scripts/build-skills.mjs; do not edit by hand.
const skills = skillsData as Skill[];

const tabIcons: Record<string, typeof Cpu> = {
  ai: Cpu,
  infra: Cloud,
  devtools: Wrench,
  business: Briefcase,
  security: Shield,
  community: Globe,
};

export default function SkillDirectory() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("ai");
  const [searchQuery, setSearchQuery] = useState("");

  const skillTabs = [
    { id: "ai", label: t.directory.tabs.ai },
    { id: "infra", label: t.directory.tabs.infra },
    { id: "devtools", label: t.directory.tabs.devtools },
    { id: "business", label: t.directory.tabs.business },
    { id: "security", label: t.directory.tabs.security },
    { id: "community", label: t.directory.tabs.community },
  ].map((tab) => ({ ...tab, count: skills.filter((s) => s.tab === tab.id).length }));

  const query = searchQuery.trim().toLowerCase();
  // Searching looks across every tab so a skill is never hidden behind the wrong tab.
  const filtered = skills.filter((s) =>
    query
      ? [s.name, s.description, s.group].some((f) => f.toLowerCase().includes(query))
      : s.tab === activeTab
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
            {tab.label} <span className="text-neutral-400 dark:text-neutral-500 font-normal">{tab.count}</span>
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
              key={skill.url}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="group flex items-start gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all"
            >
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0">
                {(() => { const Icon = tabIcons[skill.tab] ?? Globe; return <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />; })()}
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
                {skill.group && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {skill.group}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-neutral-400">
          {t.directory.noResults}
        </div>
      )}
    </section>
  );
}
