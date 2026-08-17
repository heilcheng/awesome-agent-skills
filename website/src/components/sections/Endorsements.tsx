"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const ENDORSEMENTS = [
  {
    name: "Alex Dev",
    handle: "@alexdotdev",
    role: "AI Engineer",
    text: "Finally, a standard for agentic capabilities. No more copying random prompts from Twitter.",
    type: "quote",
  },
  {
    name: "Agent Skill Index",
    handle: "github",
    role: "Community",
    text: "Join 1,200+ developers contributing to the skill ecosystem.",
    type: "stat",
    icon: Star,
  },
  {
    name: "Sarah C.",
    handle: "@sarah_codes",
    role: "Senior Dev",
    text: "The portable SKILL.md format is exactly what we needed to move agents from toy scripts to production.",
    type: "quote",
  },
  {
    name: "Discord",
    handle: "community",
    role: "Builders",
    text: "Over 500 active discussions on standardizing Model Context Protocol implementations.",
    type: "stat",
    icon: MessageSquare,
  },
  {
    name: "Mark T.",
    handle: "@mark_tech",
    role: "CTO",
    text: "We integrated agent-skill.co patterns across our internal Windsurf setup. It's a game changer.",
    type: "quote",
  },
  {
    name: "David K.",
    handle: "@davidk",
    role: "Agentic Builder",
    text: "This repo is the single best resource for understanding how to structure knowledge for AI.",
    type: "quote",
  },
];

export default function Endorsements() {
  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...ENDORSEMENTS, ...ENDORSEMENTS];

  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden relative bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-4xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
          Trusted by the Community
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Join thousands of developers building the future of agentic engineering.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-neutral-50 dark:from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-neutral-50 dark:from-[#0a0a0a] to-transparent pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-4 px-4 w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="w-80 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col justify-between shrink-0 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm"
            >
              <div className="mb-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                  "{item.text}"
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {item.role} &middot; {item.handle}
                  </p>
                </div>
                {item.type === "stat" && item.icon && (
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  </div>
                )}
                {item.type === "quote" && (
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
                     {/* Pseudo-avatar placeholder using initials */}
                     <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
                       {item.name.charAt(0)}
                     </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
