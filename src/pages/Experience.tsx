const experiences = [
  {
    title: "Software Engineer Intern",
    company: "QuadX",
    date: "Jun 2024 – Dec 2024",
    description: [
      "Participated in a structured mentorship program with a senior engineer, contributing to a core company project.",
      "Resolved bugs and enhanced application features, aligning with project requirements and coding standards.",
      "Maintained clear communication with lead developers to ensure high-quality deliverables.",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    company: "Symph",
    date: "Mar 2025 – Apr 2025",
    description: [
      "Supported the development of full-stack applications in a remote work setup.",
      "Assisted in building modular components using JavaScript, Node.js, and modern frontend frameworks.",
      "Gained hands-on experience in agile development and code collaboration.",
    ],
  },
  {
    title: "Student Assistant",
    company: "De La Salle University - Dasmariñas",
    date: "Oct 2022 – May 2025",
    description: [
      "Maintained and organized confidential student records with strict adherence to university protocols.",
      "Performed data entry tasks and updated student information in databases.",
      "Coordinated with other departments to manage student-related documents.",
      "Developed strong skills in admin support, data management, and professional communication.",
    ],
  },
  {
    title: "Digital Artist",
    company: "Cyber Outlaws NFT",
    date: "Feb 2022 – Jul 2022",
    description: [
      "Created digital illustrations and NFT artwork using tools like Krita and Procreate.",
      "Collaborated with the creative team to develop cohesive visual branding.",
    ],
  },
];

const Experience = () => (
  <div
    id="experience"
    className="flex flex-col md:flex-row justify-center md:px-12 lg:px-30 xl:px-70 p-9 lg:p-10 xl:p-20 gap-12"
  >
    {/* Left: Title */}
    <div className="md:w-1/3 flex-shrink-0">
      <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none mb-8 pb-2 font-bold">
        MY EXPERIENCE
      </h1>
    </div>
    {/* Right: Experience List */}
    <div className="flex-1 flex flex-col gap-10">
      {experiences.map((exp, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-start">
            <div>
              <div className="text-xl md:text-2xl font-semibold">
                {exp.title}
              </div>
              <div className="text-[#93DEFF] font-medium text-base">
                {exp.company}
              </div>
            </div>
            <div className="text-sm text-gray-400 min-w-fit text-right">
              {exp.date}
            </div>
          </div>
          <ul className="mt-2 text-gray-300 text-base list-disc list-inside pl-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="mb-1">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
