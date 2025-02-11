import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import njg37 from "../images/njg37.jpeg";
import Certificate from "../components/Certificate";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
            <p className="home-description">I am a MERN Stack Developer.</p>
            <Link to="/about" className="btn-about">
              About Me <FaArrowDown className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
    </>
  );
};

export default Home;
