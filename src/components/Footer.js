import React from "react";
import { FiArrowUp, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

const FOOTER_LINKS = [
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Capabilities", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Back to home">NG<span>.</span></a>
          <p>Dependable web products, built from interface to API.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {FOOTER_LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/njg37" target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/in/nabajit-ghosh" target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Nabajit Ghosh.</p>
        <a href="#home">Back to top <FiArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
