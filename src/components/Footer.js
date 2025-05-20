import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Nabajit Ghosh. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/nabajit-ghosh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/njg37"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nabajitghosh225@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
