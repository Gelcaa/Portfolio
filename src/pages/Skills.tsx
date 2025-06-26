import { useState } from "react";
import GlassIcons from "../components/animations/GlassIcons";

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
      src: "logo/xml.svg",
    },
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
      src: "logo/agile.svg",
    },
    {
      name: "CI/CD",
      src: "logo/ci-cd.svg",
    },
    {
      name: "RESTful APIs",
      src: "logo/api.svg",
    },
    {
      name: "ML",
      src: "logo/machine-learning.svg",
    },
    {
      name: "NLP",
      src: "logo/nlp.svg",
    },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Languages");

  // Map your skills to GlassIcons items
  const glassItems = skills[activeTab].map((skill) => ({
    icon: (
      <img
        src={skill.src}
        alt={skill.name}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
      />
    ),
    color: "blue",
    label: skill.name,
  }));

  return (
    <div
      id="skills"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      ></div>
      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col justify-center md:px-12 lg:px-30 xl:px-70 p-9 lg:p-10 xl:p-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none mb-8 pb-2">
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
                    ? "bg-[#93DEFF] text-black"
                    : "bg-[#606470] text-white"
                } transition-all`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Animated Glass Icons */}
          <div style={{ position: "relative" }}>
            <GlassIcons items={glassItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
