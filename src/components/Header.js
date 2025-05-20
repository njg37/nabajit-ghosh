import React from "react";
import "./Header.css";
import { Link } from "react-scroll"; // Import react-scroll

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link
          to="home"
          className="nav-item"
          title="Home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-house-user"></i>
          <span className="nav-tooltip">Home</span>
        </Link>
        <Link
          to="about"
          className="nav-item"
          title="About"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-address-card"></i>
          <span className="nav-tooltip">About</span>
        </Link>
        <Link
          to="experience"
          className="nav-item"
          title="Experience"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-briefcase"></i>
          <span className="nav-tooltip">Experience</span>
        </Link>
        <Link
          to="education"
          className="nav-item"
          title="Education"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-graduation-cap"></i>
          <span className="nav-tooltip">Education</span>
        </Link>
        <Link
          to="projects"
          className="nav-item"
          title="Projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-folder-open"></i>
          <span className="nav-tooltip">Projects</span>
        </Link>
        <Link
          to="skills"
          className="nav-item"
          title="Skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-brain"></i>
          <span className="nav-tooltip">Skills</span>
        </Link>
        <Link
          to="certificate"
          className="nav-item"
          title="Certificates"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-certificate"></i>
          <span className="nav-tooltip">Certificates</span>
        </Link>
        <Link
          to="contact"
          className="nav-item"
          title="Contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <i className="fas fa-envelope-open-text"></i>
          <span className="nav-tooltip">Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
