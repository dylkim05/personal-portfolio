"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  const [showExperience, setShowExperience] = useState(true);

  return (
    <main
      className={`container mx-auto flex flex-col items-center justify-center min-h-screen min-w-screen`}
    >
      <HeroSection />
      <SkillsSection />

      <div className="flex justify-center w-screen bg-[rgb(220,220,200)] p-4">
        <div className="rounded-lg p-1 shadow-md text-xl">
          <button
            onClick={() => setShowExperience(true)}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              showExperience
                ? "bg-[#E8E7D8] text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setShowExperience(false)}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              !showExperience
                ? "bg-[#E8E7D8] text-gray-800 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          className={`transition-all duration-300 ease-in-out ${
            showExperience
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 absolute top-0 left-0 w-full"
          }`}
        >
          <ExperienceSection />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            !showExperience
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 absolute top-0 left-0 w-full"
          }`}
        >
          <ProjectSection />
        </div>
      </div>
    </main>
  );
}
