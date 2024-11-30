import React from "react";
import "./Skills.css";
import { FaPython, FaJava, FaPhp, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "HTML", icon: <i className="fab fa-html5" /> },
        { name: "CSS", icon: <i className="fab fa-css3-alt" /> },
        { name: "JavaScript", icon: <i className="fab fa-js" /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ]
    },
    {
      category: "Frontend Technologies",
      skills: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> }, // Reuse icon for now
        { name: "PHP", icon: <FaPhp /> },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ]
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub /> },
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
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
