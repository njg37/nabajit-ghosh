import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import TextUtils from "../images/TextUtils.png";
import TM from "../images/TM.png";

const Projects = () => {
  const projects = [
    {
      name: "Text Utils",
      description: [
        "Built a ReactJS app for text processing with case conversion, whitespace management, and text analysis.",
        "Displays word/character counts and reading time estimates.",
      ],
      liveLink: "https://njg37.github.io/TextUtils.React/",
      githubLink: "https://github.com/njg37/TextUtils.React",
      imageSrc: TextUtils,
    },
    {
      name: "Task Management System",
      description: [
        "Developed a full-stack task management app with user authentication and role-based access.",
        "Features include task creation, status updates, priority settings, and CSV report generation.",
        "Built with React, Node.js, Express, and MongoDB, deployed on Render and GitHub Pages.",
      ],
      liveLink: "https://njg37.github.io/task-manager-client/",
      githubLink: "https://github.com/njg37/task-manager-client",
      imageSrc: TM,
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageSrc} alt={project.name} />
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <a
          href="https://github.com/njg37"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-link"
        >
          View More Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
