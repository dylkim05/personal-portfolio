import Image from "next/image";
import { caudex, quintessential } from "../lib/fonts";

const experiences = [
  {
    title: "CS 2000 Teaching Assistant",
    date: "Sep 2025 - Dec 2025",
    company: "Northeastern University",
    location: "Boston, MA",
    logo: "/neu.png",
    image: "/tas.jpg",
    description: [
      "Facilitated weekly labs for 36 students, providing hands-on debugging support to reinforce course concepts",
      "Graded weekly assignments for 600+ students, delivering targeted feedback to enhance programming proficiency",
      "Conducted 4+ hours of weekly office hours, clarifying complex material and guiding students through coursework",
      "Led one-on-one tutoring sessions with students, providing personalized guidance and support to enhance understanding of course material",
    ],
  },
  {
    title: "Software Engineer Intern",
    date: "June 2025 - August 2025",
    company: "Draup",
    location: "The Woodlands, TX",
    logo: "/draup.png",
    image: "/draup_team.jpeg",
    description: [
      "Built a multi-modal RAG pipeline with ChromaDB, supporting PDF, Excel, PowerPoint, and text ingestion with fixed-size chunking and vector embedding generation through Ollama and OpenAI models",
      "Optimized retrieval pipeline using query rewriting and cross-encoder re-ranking, achieving 93% retrieval accuracy",
      "Developed an LLM-powered analytics workflow that extracts and visualizes skills, KPIs, and role insights from job descriptions across 4 dynamic analytical views",
      "Designed REST APIs with FastAPI to serve real-time role data and skill trends from an Amazon S3 data lake, delivering sub-500ms response times",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="container mx-auto flex flex-col items-start justify-center gap-8 scroll-mt-20 mb-20">
      <h1
        className={`${quintessential.className}  text-xl sm:text-3xl md:text-5xl tracking-tighter text-[#22211b] lowercase select-none`}
      >
        my experience
      </h1>
      <div
        className={`grid grid-cols-1 items-stretch justify-center w-full gap-4 sm:gap-6 ${caudex.className}`}
      >
        {experiences.map((experience, index) => (
          <div
            key={experience.title}
            className={`w-full h-full rounded-lg flex items-center justify-center lg:gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center gap-2 sm:gap-0">
                  <div className="font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
                    {experience.title}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-700">
                    {experience.date}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center gap-2 sm:gap-0 mt-2">
                  <div className="flex items-center gap-2">
                    {experience.logo && (
                      <Image
                        src={experience.logo}
                        width={32}
                        height={32}
                        alt={`${experience.company} logo`}
                        className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                      />
                    )}
                    <span className="text-base sm:text-lg lg:text-xl font-medium">
                      {experience.company}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-700">
                    {experience.location}
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm sm:text-base lg:text-lg leading-normal">
                {experience.description?.map((item, index) => (
                  <li key={index} className="text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {experience.image && (
              <Image
                src={experience.image}
                alt="image"
                width={500}
                height={500}
                className="object-contain rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
