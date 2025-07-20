import { motion } from "motion/react";
import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const TECHNOLOGIES = [
  { name: "Javascript", icon: <IoLogoJavascript className="w-10 h-10" /> },
  { name: "Typescript", icon: <SiTypescript className="w-10 h-10" /> },
  { name: "Python", icon: <FaPython className="w-10 h-10" /> },
  { name: "Java", icon: <FaJava className="w-10 h-10" /> },
  { name: "React", icon: <FaReact className="w-10 h-10" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-10 h-10" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-10 h-10" /> },
  { name: "HTML", icon: <FaHtml5 className="w-10 h-10" /> },
  { name: "CSS", icon: <FaCss3 className="w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10" /> },
  { name: "Express", icon: <SiExpress className="w-10 h-10" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-10 h-10" /> },
  { name: "PostgreSQL", icon: <DiPostgresql className="w-10 h-10" /> },
  { name: "MySQL", icon: <DiMysql className="w-10 h-10" /> },
  { name: "Git", icon: <FaGitAlt className="w-10 h-10" /> },
];

export default function SkillsSection() {
  const [selectedTechnology, setSelectedTechnology] = useState<string>("logic");

  return (
    <section className="bg-[rgb(220,220,200)] p-6 sm:p-8 md:p-10 w-full">
      <h2 className="font-bold text-4xl lg:hidden text-center">Skills</h2>
      <div
        id="skills"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center rounded-lg gap-3 p-4 sm:p-8 md:p-10 scroll-mt-20"
      >
        <div className="flex flex-col gap-5 justify-center">
          <h2 className="font-bold self-start flex-col gap-2 max-w-md text-5xl hidden lg:flex">
            <span>Solving real problems</span>
            <span>
              with{" "}
              <motion.span
                key={selectedTechnology || "default"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`bg-gradient-to-r from-purple-700 via-violet-600 to-purple-800 bg-clip-text text-transparent font-bold`}
              >
                {selectedTechnology}
              </motion.span>
            </span>
          </h2>
          <div className="hidden lg:flex items-center gap-2 text-gray-600 text-sm animate-pulse">
            <span>hover the cards!</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IoArrowForward className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center col-span-2 md:col-span-1">
          {TECHNOLOGIES.map((technology) => (
            <div
              key={technology.name}
              className="bg-[#F2F1E7] p-4 w-24 h-24 rounded-md flex flex-col items-center justify-center hover:bg-[#F8F7F0] hover:shadow-sm transition-all duration-200"
              onMouseEnter={() => {
                setSelectedTechnology(technology.name);
              }}
              onMouseLeave={() => {
                setSelectedTechnology("logic");
              }}
            >
              {technology.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
