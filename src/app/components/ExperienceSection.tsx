const experiences = [
  {
    title: "Full Stack Software Engineer Co-op",
    date: "January - July 2026",
    company: "Robotics and AI Institute",
    location: "Cambridge, MA",
    description: [
      "Built a production robotics data collection platform (TanStack Start, Python, Google Pub/Sub, ROS) managing the full request-to-upload lifecycle across Franka and UMI gripper hardware",
      "Established Vitest testing infrastructure achieving 80%+ code coverage",
      "Developed a custom UI component library (React, TypeScript, Storybook) standardizing front-end design patterns across all company web applications",
    ],
  },
  {
    title: "CS 2000 Teaching Assistant",
    date: "September - December 2025",
    company: "Northeastern University",
    location: "Boston, MA",
    description: [
      "Facilitated weekly labs for 36 students, providing hands-on debugging support to reinforce course concepts",
      "Graded weekly assignments for 600+ students, delivering targeted feedback to enhance programming proficiency",
      "Conducted 4+ hours of weekly office hours, clarifying complex material and guiding students through coursework",
      "Led one-on-one tutoring sessions with students, providing personalized guidance and support to enhance understanding of course material",
    ],
  },
  {
    title: "AI/ML Software Engineer Intern",
    date: "June - August 2025",
    company: "Draup",
    location: "The Woodlands, TX",
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
                <div className="font-semibold text-lg md:text-2xl leading-tight">
                  {experience.title}
                </div>
                <div className="text-sm md:text-lg text-gray-700">
                  {experience.date}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 w-full">
                <span className="text-base md:text-xl font-medium">
                  {experience.company}
                </span>
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
