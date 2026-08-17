"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Search, Moon, Sun, Globe, Menu, X, PanelLeft, Star, Eye } from "lucide-react";
import { Github } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import { LANGUAGES, useLanguage, useTranslations } from "@/lib/i18n";
import { useSidebar } from "@/lib/SidebarContext";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [githubStars, setGithubStars] = useState<number | null>(null);

  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const { lang, setLang } = useLanguage();
  const { toggleSidebar } = useSidebar();
  const t = useTranslations();

  const LOCAL_SECTIONS = [
    { id: "what-are-skills", label: t.sidebar.whatAreSkills },
    { id: "how-it-works", label: t.sidebar.howItWorks },
    { id: "directory", label: t.sidebar.directory },
    { id: "quality-standards", label: t.sidebar.qualityStandards },
    { id: "using-skills", label: t.sidebar.usingSkills },
    { id: "creating-skills", label: t.sidebar.creatingSkills },
    { id: "tutorials", label: t.sidebar.tutorials },
    { id: "faq", label: t.sidebar.faq },
    { id: "contributing", label: t.sidebar.contributing }
  ];

  const mobileNavItems = [
    { id: "what-are-skills", label: t.sidebar.whatAreSkills },
    { id: "directory", label: t.sidebar.directory },
    { id: "quality-standards", label: t.sidebar.qualityStandards },
    { id: "using-skills", label: t.sidebar.usingSkills },
    { id: "creating-skills", label: t.sidebar.creatingSkills },
    { id: "tutorials", label: t.sidebar.tutorials },
    { id: "trends", label: t.sidebar.trends },
    { id: "faq", label: t.sidebar.faq }
  ];

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));

    // Fetch GitHub Stars
    fetch("https://api.github.com/repos/heilcheng/awesome-agent-skills")
      .then(res => res.json())
      .then(data => {
        if (data && data.stargazers_count) {
          setGithubStars(data.stargazers_count);
        }
      })
      .catch((e) => console.log("Failed to fetch stars", e));
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut: Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (!mounted) return null;

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  const filterSearch = LOCAL_SECTIONS.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Sponsored Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center py-2 px-4 relative"
          >
            <div className="text-xs sm:text-sm font-medium text-center">
              <span className="bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider mr-2 align-middle">{t.nav.sponsor}</span>
              Your ad here. Contact <a href="mailto:haileycheng@proton.me" className="underline font-bold hover:text-black dark:hover:text-white">haileycheng@proton.me</a> for sponsorship.
            </div>
            <button 
              onClick={() => setBannerVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-md transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/60 dark:border-neutral-800/60 h-14`}>
        <div className="w-full h-full flex items-center justify-between px-6">

        {/* Left: logo and toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors"
            title="Toggle Sidebar"
          >
            <PanelLeft className="w-4 h-4 cursor-pointer" />
          </button>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
              <img src="/icon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-base tracking-tight text-neutral-900 dark:text-white">
              {t.nav.brand}
            </span>
          </Link>
          <a
            href="https://agent-skill.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            agent-skill.co
          </a>
        </div>

        {/* Center: Website local search */}
        <div className="hidden md:flex flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  (window as any).find(searchQuery.trim());
                }
              }}
              placeholder={t.nav.search}
              className="w-full pl-9 pr-10 py-1.5 text-sm bg-neutral-100/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-neutral-400 bg-neutral-200 dark:bg-neutral-700 rounded pointer-events-none">
              ⌘K
            </kbd>

            {/* Dropdown Local Results */}
            {searchQuery && (
              <div className="absolute top-11 left-0 w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl shadow-black/10 overflow-hidden flex flex-col py-1 z-50">
                {filterSearch.map((s) => (
                  <Link 
                    key={s.id} 
                    href={`#${s.id}`} 
                    onClick={() => { setSearchQuery(""); searchRef.current?.blur(); }} 
                    className="block px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200"
                  >
                    Go to: <span className="font-semibold">{s.label}</span>
                  </Link>
                ))}
                {filterSearch.length === 0 && (
                  <div className="px-4 py-2 text-xs text-neutral-500 italic">Hit 'Enter' to text-search the page.</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: actions & Topbar Metrics */}
        <div className="flex items-center gap-2">
          
          <div className="hidden lg:flex items-center gap-3 mr-3 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
            {/* Github Stars Area */}
            <a href="https://github.com/heilcheng/awesome-agent-skills" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
              {githubStars ? (githubStars >= 1000 ? `${(githubStars/1000).toFixed(1)}k` : githubStars) : "..."}
            </a>
          </div>

          <div className="hidden lg:block w-px h-4 bg-neutral-200 dark:bg-neutral-700" />

          {/* Language selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400 text-xs font-medium"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{currentLang?.flag}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-10 w-44 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium"
                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu focus */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <motion.div
          className="h-full bg-neutral-400 dark:bg-neutral-500"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-14 left-0 right-0 backdrop-blur-md bg-white/95 dark:bg-neutral-950/95 border-b border-neutral-200 dark:border-neutral-800 py-4 px-6 flex flex-col gap-1 shadow-md"
          >
            {mobileNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
}
