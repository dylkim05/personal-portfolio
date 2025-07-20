const projects = [
  {
    title: "AppliTrack",
    date: "2024 - Present",
    description: [
      "Developed a full-stack job application tracker that centralizes status, deadlines, and follow-ups in one dashboard",
      "Utilized Amazon SES to send email reminders, ensuring users stay on top of application timelines",
      "Implemented file uploads using Amazon S3 pre-signed URLs, allowing users to attach resumes to job applications",
      "Integrated Google OAuth to sync application deadlines with users' calendars, enabling cross-platform scheduling",
    ],
  },
  {
    title: "School Store Website",
    date: "Sep 2022 - May 2023",
    description: [
      "Deployed a database-driven school store e-commerce platform, supporting real-time inventory and order management",
      "Engineered a custom role-based authentication system with session management and tokenized password reset, enhancing security and admin access control",
      "Implemented accessibility features to enhance usability for students with disabilities working at the store",
    ],
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-[rgb(220,220,200)] p-6 sm:p-8 md:p-10 w-full flex flex-col items-center justify-center gap-8 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch justify-center w-full gap-4 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#F2F1E7] p-4 sm:p-6 w-full h-full rounded-lg flex flex-col gap-3 sm:gap-4"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center gap-2 sm:gap-0">
                <div className="font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
                  {project.title}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-700">
                  {project.date}
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg list-disc list-inside leading-relaxed">
              {project.description.map((item, index) => (
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
