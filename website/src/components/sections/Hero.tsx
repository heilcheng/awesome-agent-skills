"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n";
import SnakeGame from "../animations/SnakeGame";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-[60vh] flex items-center pt-8 pb-16 border-b border-neutral-200 dark:border-neutral-800">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-6 max-w-3xl leading-none">
            {t.hero.title}
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="#directory"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              {t.hero.browseBtn} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/heilcheng/awesome-agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="w-4 h-4" /> {t.hero.githubBtn}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Playable Snake Game */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full order-1 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="w-full max-w-[320px] sm:max-w-md md:max-w-lg mx-auto lg:mx-0">
            <SnakeGame />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
