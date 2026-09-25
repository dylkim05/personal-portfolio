import Image from "next/image";

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
    <section className="flex flex-col gap-6 md:gap-8 items-start w-full text-left">
      <h2 className="text-3xl md:text-5xl tracking-tighter text-[#22211b] select-none">
        Experience
      </h2>
      <div className="flex flex-col gap-10 md:gap-12 items-start w-full">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="flex flex-col gap-4 md:gap-6 items-start w-full"
          >
            <div className="flex flex-col gap-2 items-start w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 w-full">
                <div className="font-bold text-lg md:text-2xl leading-tight">
                  {experience.title}
                </div>
                <div className="text-sm md:text-lg text-gray-700">
                  {experience.date}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 w-full">
                <div className="flex items-center gap-2">
                  {experience.logo && (
                    <Image
                      src={experience.logo}
                      width={40}
                      height={40}
                      alt={`${experience.company} logo`}
                      className="object-contain w-8 h-8 md:w-10 md:h-10"
                    />
                  )}
                  <span className="text-base md:text-xl font-medium">
                    {experience.company}
                  </span>
                </div>
                <div className="text-sm md:text-lg text-gray-700">
                  {experience.location}
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-3 text-base md:text-lg leading-normal text-gray-800">
              {experience.description?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
