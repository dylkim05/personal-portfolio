"use client";

import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main
      className={`container mx-auto flex flex-col items-center justify-center min-h-screen min-w-screen`}
    >
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
