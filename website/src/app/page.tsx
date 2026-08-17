"use client";

import Hero from "@/components/sections/Hero";
import WhatIsIt from "@/components/sections/WhatIsIt";
import HowItWorks from "@/components/sections/HowItWorks";
import FindingSkills from "@/components/sections/FindingSkills";
import CompatibleAgents from "@/components/sections/CompatibleAgents";
import Ads from "@/components/sections/Ads";
import SkillDirectory from "@/components/sections/SkillDirectory";
import QualityStandards from "@/components/sections/QualityStandards";
import UsingSkills from "@/components/sections/UsingSkills";
import CreatingSkills from "@/components/sections/CreatingSkills";
import Trends from "@/components/sections/Trends";
import FAQ from "@/components/sections/FAQ";
import Contributing from "@/components/sections/Contributing";

export default function Home() {
  return (
    <div className="w-full max-w-4xl px-6 md:px-10 space-y-24 pb-36 pt-4">
      <Hero />
      <WhatIsIt />
      <HowItWorks />
      <FindingSkills />
      <CompatibleAgents />
      <Ads />
      <SkillDirectory />
      <QualityStandards />
      <UsingSkills />
      <CreatingSkills />
      <Trends />
      <FAQ />
      <Contributing />
    </div>
  );
}
