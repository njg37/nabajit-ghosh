import React from "react";
import "./Home.css";
import { FaArrowDown } from "react-icons/fa"; // Removed unused Link from react-router-dom
import njg37 from "../images/njg37.jpeg";
import Certificate from "../components/Certificate";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Import the Link component from react-scroll
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="home-section" id="home">
        <div className="home-container">
          {/* Left Side - Profile Image */}
          <div className="home-image">
            <img src={njg37} alt="Nabajit Ghosh" className="profile-image" />
          </div>

          {/* Right Side - Content */}
          <div className="home-content">
            <h1 className="home-title">Hi, I'm Nabajit Ghosh</h1>
            <p className="home-description">I am a MERN Stack Developer.</p>
            {/* Modify Link to use ScrollLink from react-scroll */}
            <ScrollLink 
              to="about" // The target section ID
              smooth={true} // Smooth scroll effect
              duration={500} // Duration of the scroll in ms
              className="btn-about"
            >
              About Me <FaArrowDown className="btn-icon" />
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* The sections with corresponding ids */}
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="certificate"><Certificate /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
