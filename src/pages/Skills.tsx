import { useState } from "react";

type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Databases & Cloud"
  | "Tools & Methodologies";

type Skill = {
  name: string;
  src: string;
};

const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Kotlin",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "Dart",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "SQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "HTML/CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "PHP",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "XML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
    }, // Example logo
  ],
  "Frameworks & Libraries": [
    {
      name: "Flutter",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "React.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Prisma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      name: "TensorFlow",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Scikit-learn",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
  ],
  "Databases & Cloud": [
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Supabase",
      src: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    },
    {
      name: "Firebase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ],
  "Tools & Methodologies": [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Agile",
      src: "https://cdn-icons-png.flaticon.com/512/10499/10499613.png",
    }, // Example logo
    {
      name: "CI/CD",
      src: "https://cdn-icons-png.flaticon.com/512/10329/10329051.png",
    }, // Example logo
    {
      name: "RESTful APIs",
      src: "https://cdn-icons-png.flaticon.com/512/10883/10883668.png",
    }, // Example logo
    {
      name: "ML",
      src: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
    }, // Example logo
    {
      name: "NLP",
      src: "https://cdn-icons-png.flaticon.com/512/8578/8578693.png",
    }, // Example logo
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Languages");

  return (
    <div className="flex flex-col justify-center sm:px-2 md:px-13 lg:px-30 xl:px-70 px-4 p-3 md:p-5 lg:p-10 xl:p-20">
      <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-none mb-8 pb-2">
        My Capabilities
      </h1>

      {/* Clickable Tabs */}
      <div className="flex flex-wrap gap-4 pb-20">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category as SkillCategory)}
            className={`px-4 py-2 rounded-full border ${
              activeTab === category
                ? "bg-slate-700 text-white"
                : "bg-white text-slate-700"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Logos Display */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {skills[activeTab].map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.src}
              alt={skill.name}
              className="h-16 w-16 object-contain mb-2"
            />
            {/* <p className="text-gray-300 text-sm text-center">{skill.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
