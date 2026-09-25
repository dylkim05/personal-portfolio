"use client";

import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main
      className={`flex flex-col gap-20 md:gap-32 px-6 sm:px-12 md:px-25 py-16 md:py-24 items-start justify-start min-h-screen w-full bg-gradient-to-b from-background via-[rgb(240,240,220)] to-[rgb(220,220,200)] `}
    >
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
