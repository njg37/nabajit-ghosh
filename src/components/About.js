import React from "react";
import "./About.css";
import { FaDownload, FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

import njg from "../images/njg.png";

const About = () => {
  return (
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
              href="https://drive.google.com/file/d/1EIf1CcoDXylHPBSfc1H_CyHQoZVGQgrb/view?usp=drive_link"
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
  );
};

export default About;
