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
    <section className="flex flex-col gap-6 md:gap-8 items-start w-full text-left">
      <h2
        id="skills-heading"
        className="text-3xl md:text-5xl tracking-tighter text-[#22211b]"
      >
        Tech Stack
      </h2>

      <div className="flex max-w-3xl flex-wrap justify-start gap-x-3 gap-y-2 text-xl md:text-3xl text-[#22211b]">
        {SKILLS.map((skill, index) => (
          <div key={`${skill}-${index}`} className="flex items-center gap-x-3">
            <span>{skill}</span>
            {index !== SKILLS.length - 1 && (
              <span className="text-[#9b9383] select-none">/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
