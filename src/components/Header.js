import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const NAV_ITEMS = [
  { id: "projects", label: "Work", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "skills", label: "Capabilities", number: "03" },
  { id: "about", label: "About", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1Ri4qDqNSeaxhqIrolkxeqa_u0Oc5-Omb/view?usp=sharing";

export default function Header() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 24);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-34% 0px -56%", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nabajit Ghosh, home">
          <span className="brand-mark" aria-hidden="true">NG</span>
          <span className="brand-copy">
            <strong>Nabajit Ghosh</strong>
            <small>Software developer</small>
          </span>
        </a>

        <nav id="mobile-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          <div className="mobile-nav-heading">
            <span>Navigate</span>
            <button className="icon-button" type="button" onClick={closeMenu} aria-label="Close menu">
              <FiX aria-hidden="true" />
            </button>
          </div>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={active === item.id ? "is-active" : ""}
                aria-current={active === item.id ? "location" : undefined}
              >
                <span>{item.number}</span>
                {item.label}
              </a>
            ))}
          </div>

          <a className="mobile-resume" href={RESUME_URL} target="_blank" rel="noreferrer">
            View résumé <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="resume-link" href={RESUME_URL} target="_blank" rel="noreferrer">
            Résumé <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open menu"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
