"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { BookOpen, Grid3X3, Shield, Lightbulb, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import { useSidebar } from "@/lib/SidebarContext";

interface SidebarItem {
  labelKey: string;
  href: string;
  isNew?: boolean;
}

interface SidebarGroup {
  titleKey: "intro" | "directory" | "standards" | "resources";
  icon: typeof BookOpen;
  items: SidebarItem[];
}

const sidebarGroups: SidebarGroup[] = [
  {
    titleKey: "intro",
    icon: BookOpen,
    items: [
      { labelKey: "whatAreSkills", href: "#what-are-skills" },
      { labelKey: "howItWorks", href: "#how-it-works" },
      { labelKey: "findingSkills", href: "#finding-skills" },
      { labelKey: "compatibleAgents", href: "#compatible-agents" },
    ],
  },
  {
    titleKey: "directory",
    icon: Grid3X3,
    items: [
      { labelKey: "aiPlatforms", href: "#directory" },
      { labelKey: "cloudInfra", href: "#directory" },
      { labelKey: "devTools", href: "#directory" },
      { labelKey: "business", href: "#directory" },
      { labelKey: "security", href: "#directory" },
    ],
  },
  {
    titleKey: "standards",
    icon: Shield,
    items: [
      { labelKey: "qualityStandards", href: "#quality-standards" },
      { labelKey: "usingSkills", href: "#using-skills" },
      { labelKey: "creatingSkills", href: "#creating-skills" },
    ],
  },
  {
    titleKey: "resources",
    icon: Lightbulb,
    items: [
      { labelKey: "tutorials", href: "#tutorials" },
      { labelKey: "trends", href: "#trends", isNew: true },
      { labelKey: "faq", href: "#faq" },
      { labelKey: "contributing", href: "#contributing" },
    ],
  },
];

// Section IDs mapped from hrefs for IntersectionObserver
const sectionIds = [
  "what-are-skills",
  "how-it-works",
  "finding-skills",
  "compatible-agents",
  "directory",
  "quality-standards",
  "using-skills",
  "creating-skills",
  "tutorials",
  "trends",
  "faq",
  "contributing",
];

export default function WikiSidebar() {
  const [activeSection, setActiveSection] = useState("what-are-skills");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const t = useTranslations();
  const { isOpen } = useSidebar();

  // IntersectionObserver for active section tracking
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleGroup = useCallback((key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const getLabel = (key: string): string => {
    return (t.sidebar as Record<string, string>)[key] ?? key;
  };

  const isItemActive = (href: string): boolean => {
    const id = href.replace("#", "");
    if (id === "directory") {
      return activeSection === "directory";
    }
    return activeSection === id;
  };

  return (
    <aside className={`w-64 h-[calc(100vh-3.5rem)] hidden md:block fixed left-0 top-14 overflow-y-auto sidebar-scroll backdrop-blur-sm bg-white/90 dark:bg-neutral-950/90 border-r border-neutral-200/60 dark:border-neutral-800/60 py-6 px-4 transition-transform duration-300 ease-in-out z-40 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}>
      <div className="space-y-5">
        {sidebarGroups.map((group) => {
          const Icon = group.icon;
          const isCollapsed = collapsed[group.titleKey] ?? false;
          const groupTitle = t.sidebar[group.titleKey] as string;

          return (
            <div key={group.titleKey}>
              <button
                onClick={() => toggleGroup(group.titleKey)}
                className="flex items-center gap-2 w-full text-left mb-2 px-3 group"
              >
                <Icon className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex-1">
                  {groupTitle}
                </span>
                <motion.div
                  animate={{ rotate: isCollapsed ? -90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-0.5 overflow-hidden"
                  >
                    {group.items.map((item) => {
                      const active = isItemActive(item.href);
                      return (
                        <li key={item.labelKey} className="relative">
                          {active && (
                            <motion.div
                              layoutId="sidebar-indicator"
                              className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-neutral-900 dark:bg-white"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                          <Link
                            href={item.href}
                            className={`block pl-5 pr-3 py-1.5 rounded-md text-sm transition-colors ${
                              active
                                ? "text-neutral-900 dark:text-white font-medium bg-neutral-100 dark:bg-neutral-800/70"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {getLabel(item.labelKey)}
                              {item.isNew && (
                                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  New
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 px-3 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-6 space-y-2">
        <a
          href="https://agent-skill.co"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          agent-skill.co →
        </a>
        <a
          href="https://github.com/heilcheng/awesome-agent-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
        >
          heilcheng/awesome-agent-skills →
        </a>
      </div>
    </aside>
  );
}
