import { caudex, quintessential } from "../lib/fonts";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "Java",
  "PostgreSQL",
  "MySQL",
  "Git",
];

export default function SkillsSection() {
  return (
    <section className="container mx-auto rounded-lg px-4 py-10 mb-20 sm:px-8 sm:py-16 md:px-0 md:py-20 bg-[url(/skills_bg.jpg)] bg-cover bg-no-repeat bg-center bg-blend-overlay transition-all duration-300">
      <div className="flex flex-col items-center justify-center gap-8 rounded-lg p-6 text-center sm:p-10 md:gap-10">
        <div className="space-y-4">
          <h2
            id="skills-heading"
            className={`${quintessential.className} text-xl sm:text-3xl md:text-5xl tracking-tighter text-[#22211b] lowercase select-none`}
          >
            my tech stack
          </h2>
        </div>

        <div className="space-y-6 text-[#22211b]">
          <div
            className={`${caudex.className} mx-auto flex max-w-4xl flex-wrap justify-center gap-x-3 gap-y-2 text-lg md:text-3xl lg:text-5xl select-none transition-all duration-300`}
          >
            {SKILLS.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex items-center gap-x-3"
              >
                <span>{skill}</span>
                {index !== SKILLS.length - 1 && (
                  <span className="text-[#9b9383] select-none">/</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
