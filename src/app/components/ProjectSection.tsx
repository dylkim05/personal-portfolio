import { caudex, quintessential } from "../lib/fonts";
import Image from "next/image";

const projects = [
  {
    title: "AppliTrack",
    date: "March 2024 - August 2024",
    image: "/applitrack.png",
    description:
      "A modern job application tracker that helps students and early-career professionals stay organized across recruiting cycles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  },
  {
    title: "StudyGlow",
    date: "July 2025 - August 2025",
    image: "/studyglow.png",
    description:
      "An AI-powered course management platform that ingests syllabi and coursework to give students personalized, contextual study support in one place.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LangChain",
      "OpenAI",
      "pgvector",
    ],
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="container mx-auto flex flex-col items-start justify-center gap-8 scroll-mt-20 mb-20"
    >
      <h1
        className={`${quintessential.className} text-xl sm:text-3xl md:text-5xl tracking-tighter text-[#22211b] lowercase select-none`}
      >
        my projects
      </h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 items-stretch justify-center w-full gap-5 sm:gap-6 ${caudex.className}`}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-xl border border-[#e3dccb] bg-[#faf6ee]/70"
          >
            <div className="relative w-full overflow-hidden bg-[#f1e7d4]">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="h-56 w-full object-cover object-top sm:h-64"
                priority
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl tracking-tight text-[#22211b]">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {project.date}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[#e0d6c3] bg-[#f7efe0] px-2.5 py-1 text-xs font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
