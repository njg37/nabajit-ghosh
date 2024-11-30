import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-item" title="Home" onClick={scrollToTop}>
          <i className="fas fa-house-user"></i>
          <span className="nav-tooltip">Home</span>
        </NavLink>
        <NavLink to="/about" className="nav-item" title="About">
          <i className="fas fa-address-card"></i>
          <span className="nav-tooltip">About</span>
        </NavLink>
        <NavLink to="/experience" className="nav-item" title="Experience">
          <i className="fas fa-briefcase"></i>
          <span className="nav-tooltip">Experience</span>
        </NavLink>
        <NavLink to="/education" className="nav-item" title="Education">
          <i className="fas fa-graduation-cap"></i>
          <span className="nav-tooltip">Education</span>
        </NavLink>
        <NavLink to="/projects" className="nav-item" title="Projects">
          <i className="fas fa-folder-open"></i>
          <span className="nav-tooltip">Projects</span>
        </NavLink>
        <NavLink to="/skills" className="nav-item" title="Skills">
          <i className="fas fa-brain"></i>
          <span className="nav-tooltip">Skills</span>
        </NavLink>
        <NavLink to="/contact" className="nav-item" title="Contact">
          <i className="fas fa-envelope-open-text"></i>
          <span className="nav-tooltip">Contact</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
