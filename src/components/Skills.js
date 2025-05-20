import React from "react";
import "./Skills.css";
import {
  FaPython,
  FaJava,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaRobot,
  FaBrain,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVisualstudiocode,
  SiIntellijidea,
  SiGithubpages,
  SiRender,
} from "react-icons/si";

const Skills = () => {
const skillsData = [
  {
    category: "Languages",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        description: "Used for DSA and problem-solving.",
      },
      {
        name: "Java",
        icon: <FaJava />,
        description: "Basic knowledge; learned for LLD.",
      },
      {
        name: "PHP",
        icon: <FaPhp />,
        description: "Used in an internship project for backend development.",
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
        description: "Core frontend language.",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        description: "Used for styling web pages.",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
        description: "Used in multiple frontend projects.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        description: "Used in one Next.js project.",
      },
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      {
        name: "ReactJS",
        icon: <FaReact />,
        description: "Main frontend library used in multiple projects.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        description: "Used in a personal project with TypeScript.",
      },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        description: "Used in multiple MERN stack projects.",
      },
      {
        name: "Express.js",
        icon: <FaNodeJs />,
        description: "Used in multiple MERN stack projects.",
      },
      {
        name: "PHP",
        icon: <FaPhp />,
        description: "Used in an internship project for backend development.",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description: "Used in multiple MERN stack projects.",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        description: "Used in an internship project for basic CRUD operations.",
      },
    ],
  },
  {
    category: "Tool Stack",
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGithub />,
        description: "Used for version control and managing code repositories.",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        description: "Used for testing and debugging APIs.",
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode />,
        description: "Primary code editor.",
      },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea />,
        description: "Used for Java development.",
      },
      {
        name: "GitHub Pages",
        icon: <SiGithubpages />,
        description: "Used for deploying frontend applications.",
      },
      {
        name: "Render",
        icon: <SiRender />,
        description: "Used for backend deployment.",
      },
    ],
  },
  {
    category: "Currently Exploring",
    skills: [
      {
        name: "Prompt Engineering",
        icon: <FaTerminal />,
        description: "Crafting effective prompts for AI tools.",
      },
      {
        name: "Generative AI",
        icon: <FaBrain />,
        description: "Exploring.",
      },
      {
        name: "AI-powered Web Apps",
        icon: <FaRobot />,
        description: "Currently exploring integration of AI in web applications.",
      },
    ],
  },
];


  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        {skillsData.map((category, idx) => (
          <div key={idx} className="skills-category">
            <h3 className="skills-category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-description">{skill.description}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
