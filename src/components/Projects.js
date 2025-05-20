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
      techStack: ["React.js", "JavaScript", "Bootstrap", "GitHub Pages"],
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
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "Render",
        "GitHub Pages",
      ],
      liveLink: "https://njg37.github.io/task-manager-client/",
      githubLink: "https://github.com/njg37/task-manager-client",
      imageSrc: TM,
    },
    {
      name: "Song Background Generator",
      description: [
        "Web app that allows users to upload a song, select a theme, customize a video, preview it, and generate a final output.",
        "Features music upload, theme selection, video customization, and preview before downloading.",
        "Built with React, Node.js, Express, Multer, Fluent-FFmpeg, and deployed on GitHub Pages & Render.",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "Multer",
        "Fluent-FFmpeg",
        "GitHub Pages",
        "Render",
      ],
      liveLink: "https://njg37.github.io/upload",
      githubLink: "https://github.com/njg37/video_generator",
    },
    {
      name: "News App",
      description: [
        "Responsive web app fetching real-time news from an API.",
        "Categorized news with a search feature to find specific articles.",
        "Built using React, JavaScript, CSS, and News API.",
      ],
      techStack: ["React.js", "JavaScript", "News API", "CSS"],
      liveLink: "#",
      githubLink: "https://github.com/njg37/NewsMonkey-Reactjs",
    },
    {
      name: "Quiz App with Gamification",
      description: [
        "Web-based quiz app with gamification features like animations and score tracking.",
        "Fetches quiz data from an API, supports multiple-choice questions, and provides instant feedback.",
        "Built with React, Axios, Framer Motion, and Local Storage.",
      ],
      techStack: ["React.js", "Axios", "Framer Motion", "Local Storage", "CSS"],
      liveLink: "#",
      githubLink: "https://github.com/njg37/quiz-app",
    },
    {
      name: "WeatherWatcher",
      description: [
        "Weather app with user authentication and profile management.",
        "Displays real-time weather using the OpenWeatherMap API.",
        "Built with PHP, HTML, CSS, JavaScript, and Bootstrap.",
      ],
      techStack: [
        "PHP",
        "JavaScript",
        "Bootstrap",
        "OpenWeatherMap API",
        "HTML/CSS",
      ],
      liveLink: "#",
      githubLink: "https://github.com/njg37/intern-PHP-MYSQL",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div
        className="projects-disclaimer"
        data-text="⚠️ Some live demos may be slow or temporarily unavailable due to free-tier deployment limits. Please check the GitHub repo for full project details mentioned in the README file."
        aria-live="polite"
        role="note"
      ></div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="project-tech-stack">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
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
