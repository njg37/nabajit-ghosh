import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import njg37 from "../images/njg37.jpeg";
import njg from "../images/njg.png";
import { FaCertificate } from 'react-icons/fa';

import "./About.css";
import { FaDownload, FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

import './Education.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

import './Experience.css';

import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import TextUtils from "../images/TextUtils.png";
import TM from "../images/TM.png";

import "./Skills.css";
import { FaPython, FaJava, FaPhp, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

import { FaPhone } from 'react-icons/fa';
import './Contact.css';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt Ltd',
    duration: 'Aug 2024 – Sep 2024',
    details: [
      'Developed and implemented user authentication systems with roles and permissions (admin and user) using PHP and MySQL.',
      'Enhanced profile management features, including file upload functionality and API integration for real-time data.',
      'Collaborated on front-end improvements and ensured responsive design across devices.',
      'Conducted thorough testing and prepared documentation for seamless project deployment.',
      'Gained hands-on experience with PHP, MySQL, API integration, and responsive web design.',
    ],
    certificateLink: 'https://drive.google.com/file/d/1Qtl9eHAnuE6DQQqgli3q0hdabOUhUcro/view?usp=sharing',
  },
  {
    title: 'Web Development Intern',
    company: 'CodeSpeedy',
    duration: 'Jul 2024 – Aug 2024',
    details: [
      'Developed high-quality, original tutorials on JavaScript and CSS topics.',
      'Worked as a web developer with WordPress.',
      'Ensured all content was tested and compliant with strict non-copying policies.',
      'Delivered top-tier work with effective team communication.',
    ],
    certificateLink: 'https://drive.google.com/file/d/1rlD6u3iUD9rDg1RPnONtEpVCv3CJNSuZ/view?usp=sharing',
  },
];




const educationDetails = [
  {
    degree: 'B.Tech',
    institution: 'Bengal College of Engineering and Technology, MAKAUT University',
    field: 'Computer Science and Engineering',
    duration: '2021-2025',
    icon: <FaGraduationCap />,
  },
  {
    degree: '12th',
    institution: 'Kamalpur Class XII School, TBSE, Tripura',
    field: 'Science Stream',
    duration: '2020-2021',
    icon: <FaSchool />,
  },
  {
    degree: '10th',
    institution: 'Kamalpur Madrassa Class XII School, TBSE, Tripura',
    field: 'General Study',
    duration: '2018-2019',
    icon: <FaSchool />,
  },
];

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

const Home = () => {
  return (
    <>
    <section className="home-section">
      <div className="home-container">
        {/* Left Side - Profile Image */}
        <div className="home-image">
          <img src={njg37} alt="Nabajit Ghosh" className="profile-image" />
        </div>

        {/* Right Side - Content */}
        <div className="home-content">
          <h1 className="home-title">Hi, I'm Nabajit Ghosh</h1>
          <p className="home-description">
          I am a MERN Stack Developer.
          </p>
          <Link to="/about" className="btn-about">
            About Me <FaArrowDown className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
        <section className="about-section">
        <div className="about-container">
          {/* Left Side - Profile Image */}
          <div className="about-image">
            <img src={njg} alt="Profile" />
          </div>
  
          {/* Right Side - About Content */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              Hi, I’m <strong>Nabajit Ghosh</strong>, a Web Developer with expertise in building responsive web applications. I enjoy learning new technologies and solving problems through programming.
            </p>
            <div className="action-section">
              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/file/d/1eSvifgJf-CYV74juM9O-l08YFhjLoDXY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
                aria-label="Download Resume"
              >
                <FaDownload className="button-icon" /> Download Resume
              </a>
  
              {/* Social Media Icons */}
              <div className="social-media">
                <a href="https://linkedin.com/in/nabajit-ghosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin className="social-icon-about" />
                </a>
                <a href="https://github.com/njg37" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FaGithub className="social-icon-about" />
                </a>
                <a href="mailto:nabajitghosh225@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Nabajit">
                  <FaEnvelope className="social-icon-about" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


         <section className="experience-section" data-aos="fade-up">
           <h2 className="section-title">My Experience</h2>
           <div className="timeline">
             {experiences.map((exp, index) => (
               <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                 <div className="timeline-content">
                   <h3>{exp.title}</h3>
                   <h4>{exp.company}</h4>
                   <p className="duration">{exp.duration}</p>
                   <ul>
                     {exp.details.map((detail, i) => (
                       <li key={i}>{detail}</li>
                     ))}
                   </ul>
                   <a href={exp.certificateLink} className="certificate-button" target="_blank" rel="noopener noreferrer">
                     <FaCertificate className="certificate-icon" /> View Certificate
                   </a>
                 </div>
               </div>
             ))}
             <div className="timeline-line"></div>
           </div>
         </section>

    <section className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="education-container">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-card" data-aos="fade-up" style={{ '--delay': `${index * 0.3}s` }}>
            <div className="icon-circle">{edu.icon}</div>
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="field">{edu.field}</p>
              <p className="duration">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="background-effect"></div>
    </section>

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


    <section className="contact" data-aos="fade-up">
    <h2>Contact Me</h2>

    {/* Interactive Contact Form */}
    <div className="contact-form">
      <form action="https://formspree.io/f/xdkowbjq" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          aria-label="Your full name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          aria-label="Your email address"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          aria-label="Your message"
        ></textarea>
        <button
          type="submit"
          className="send-button"
          aria-label="Send your message"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Options */}
    <div className="contact-list">
      <div className="contact-card">
        <a href="mailto:nabajitghosh225@gmail.com">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>nabajitghosh225@gmail.com</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="tel:+918837337805">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 8837337805</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://linkedin.com/in/nabajit-ghosh" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/nabajit-ghosh</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://github.com/njg37" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
          <p>github.com/njg37</p>
        </a>
      </div>
    </div>

    {/* Map */}
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29444.68991043454!2d91.8711696!3d24.1416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ef4b34a841671%3A0x6e80b0fdb3d7f10c!2sKamalpur%2C%20Tripura!5e0!3m2!1sen!2sin!4v1637166411087!5m2!1sen!2sin"
        title="Location"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
      </>

  );
};

export default Home;
