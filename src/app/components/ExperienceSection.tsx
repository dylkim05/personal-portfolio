import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer Intern - AI/ML",
    date: "June 2025 - Present",
    company: "Draup",
    location: "The Woodlands, TX",
    logo: "/draup.png",
    description: [
      "Built an LLM-powered visualization workflow using FastAPI and OpenAI to extract and normalize key job information from unstructured job descriptions",
      "Designed 4 REST APIs to provide real-time data and actionable metrics from the extracted information, leveraging FastAPI and internal APIs",
      "Developed a dynamic dashboard using Chart.js and D3.js that allows HR leaders to visualize career paths, skill trends, and role networks through interactive charts and network graphs",
    ],
  },
  {
    title: "Khoury College Teaching Assistant",
    date: "Sep 2025 - Dec 2025",
    company: "Northeastern University",
    location: "Boston, MA",
    logo: "/neu.png",
    description: [
      "Incoming Fall 2025 Teaching Assistant for Introduction to Program Design and Implementation (CS 2000)",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[rgb(220,220,200)] p-6 sm:p-8 md:p-12 lg:p-20 w-full flex flex-col items-center justify-center gap-8 scroll-mt-20">
      <h2 className="font-bold text-4xl md:text-5xl text-center">Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch justify-center w-full gap-4 sm:gap-6">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="bg-[#F2F1E7] p-4 sm:p-6 w-full h-full rounded-lg flex flex-col gap-3 sm:gap-4"
          >
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
            <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg list-disc list-inside leading-relaxed">
              {experience.description.map((item, index) => (
                <li key={index} className="text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
