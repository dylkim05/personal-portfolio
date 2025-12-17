"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main
      className={`container mx-auto flex flex-col space-y-10 items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-background via-[rgb(240,240,220)] to-[rgb(220,220,200)] `}
    >
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
