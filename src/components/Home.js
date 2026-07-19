import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import profilePhoto from "../images/n1.png";
import reactCertificate from "../images/ReactJsCertificate.png";
import cleanCodeCertificate from "../images/CleanCodeOOPCertificate.png";
import wiproCertificate from "../images/WiproTalentNextJavaFullStackCertification.png";

const RESUME_URL =
  "https://drive.google.com/file/d/1Ri4qDqNSeaxhqIrolkxeqa_u0Oc5-Omb/view?usp=sharing";

const PROJECTS = [
  {
    number: "01",
    name: "Task Management System",
    category: "Full-stack product",
    description:
      "A role-aware workspace for creating, prioritising and tracking team tasks—from secure sign-in through exportable reports.",
    decisions: ["JWT authentication", "Admin / user permissions", "CSV report generation"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://njg37.github.io/task-manager-client/",
    code: "https://github.com/njg37/task-manager-client",
    visual: "tasks",
  },
  {
    number: "02",
    name: "Song Background Generator",
    category: "Media tooling",
    description:
      "A guided workflow that turns an uploaded song and a visual theme into a previewable, downloadable video.",
    decisions: ["File upload pipeline", "FFmpeg processing", "Preview-first workflow"],
    stack: ["React", "Node.js", "Multer", "FFmpeg"],
    live: "https://njg37.github.io/upload",
    code: "https://github.com/njg37/video_generator",
    visual: "audio",
  },
  {
    number: "03",
    name: "Text Utils",
    category: "Frontend utility",
    description:
      "A focused writing utility for cleaning, transforming and analysing text without slowing down the user’s flow.",
    decisions: ["Instant transformations", "Reading-time estimate", "Accessible dark mode"],
    stack: ["React", "JavaScript", "Bootstrap", "GitHub Pages"],
    live: "https://njg37.github.io/TextUtils.React/",
    code: "https://github.com/njg37/TextUtils.React",
    visual: "text",
  },
];

const MORE_PROJECTS = [
  {
    name: "News App",
    summary: "Real-time news discovery with category filters and article search.",
    stack: "React · News API",
    code: "https://github.com/njg37/NewsMonkey-Reactjs",
  },
  {
    name: "Quiz Gamification",
    summary: "API-powered quizzes with feedback, animation and persistent scores.",
    stack: "React · Framer Motion",
    code: "https://github.com/njg37/quiz-app",
  },
  {
    name: "WeatherWatcher",
    summary: "Weather lookup with authentication, profiles and live forecast data.",
    stack: "PHP · MySQL · Weather API",
    code: "https://github.com/njg37/intern-PHP-MYSQL",
  },
];

const EXPERIENCE = [
  {
    period: "Aug — Sep 2024",
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt Ltd",
    points: [
      "Implemented admin and user authentication flows with PHP and MySQL.",
      "Integrated profile uploads and live API data into the account experience.",
      "Tested responsive views and documented the deployment workflow.",
    ],
    certificate:
      "https://drive.google.com/file/d/1rlD6u3iUD9rDg1RPnONtEpVCv3CJNSuZ/view?usp=sharing",
  },
  {
    period: "Jul — Aug 2024",
    role: "Web Development Intern",
    company: "CodeSpeedy",
    points: [
      "Created and tested original JavaScript and CSS tutorials for publication.",
      "Worked inside WordPress to deliver production-ready web content.",
      "Collaborated through review cycles while meeting strict quality standards.",
    ],
    certificate:
      "https://drive.google.com/file/d/1Qtl9eHAnuE6DQQqgli3q0hdabOUhUcro/view?usp=sharing",
  },
];

const CAPABILITIES = [
  {
    number: "01",
    title: "Frontend systems",
    description: "Responsive interfaces with clear states, reusable components and considered interaction.",
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Practical services that handle authentication, data flow and product logic reliably.",
    tools: ["Node.js", "Express", "REST APIs", "PHP", "JWT", "Postman"],
  },
  {
    number: "03",
    title: "Data & problem solving",
    description: "Structured thinking across application data, algorithms and maintainable design.",
    tools: ["MongoDB", "MySQL", "Python", "DSA", "Java", "OOP"],
  },
  {
    number: "04",
    title: "Delivery workflow",
    description: "From local development to version control, deployment and product iteration.",
    tools: ["Git", "GitHub", "GitHub Pages", "Render", "VS Code", "Cloud basics"],
  },
];

const EDUCATION = [
  {
    period: "2021 — 2025",
    title: "B.Tech · Computer Science & Engineering",
    institution: "Bengal College of Engineering & Technology · MAKAUT",
    result: "8.12 CGPA",
  },
  {
    period: "2020 — 2021",
    title: "Higher Secondary · Science",
    institution: "Kamalpur Class XII School · TBSE, Tripura",
    result: "85.8%",
  },
  {
    period: "2018 — 2019",
    title: "Secondary Education",
    institution: "Kamalpur Madrassa Class XII School · TBSE, Tripura",
    result: "81.2%",
  },
];

const CERTIFICATES = [
  {
    title: "React JS — Beginner to Expert",
    issuer: "Udemy",
    category: "Frontend",
    image: reactCertificate,
    link: "https://www.udemy.com/certificate/UC-0d0b2a1b-42d5-4e89-8ee7-a0109272163f/",
  },
  {
    title: "Clean Code & OOP Design",
    issuer: "Udemy",
    category: "Architecture",
    image: cleanCodeCertificate,
    link: "https://www.udemy.com/certificate/UC-901bbaf1-5635-42b5-aea6-879dbf444760/",
  },
  {
    title: "Java Full Stack Certification",
    issuer: "Wipro TalentNext",
    category: "Full stack",
    image: wiproCertificate,
  },
  {
    title: "Cloud Computing with AWS",
    issuer: "Internshala",
    category: "Cloud",
    link: "https://drive.google.com/file/d/14UZpAx1AKGwwVyx8340VAEyYW-F9amgq/view?usp=sharing",
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/njg37", icon: <FiGithub /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/nabajit-ghosh", icon: <FiLinkedin /> },
  { label: "Email", href: "mailto:nabajitghosh225@gmail.com", icon: <FiMail /> },
];

function SectionHeading({ index, eyebrow, title, description, headingId }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-kicker">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <div className="section-title-row">
        <h2 id={headingId}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "tasks") {
    return (
      <div className="project-visual visual-tasks" aria-hidden="true">
        <div className="mock-window-bar"><i /><i /><i /><span>workspace / overview</span></div>
        <div className="task-layout">
          <div className="mock-sidebar"><b>NG</b><i /><i /><i /><i /></div>
          <div className="task-main">
            <div className="mock-toolbar"><strong>Project board</strong><span>+ New task</span></div>
            <div className="task-columns">
              {["Backlog", "In progress", "Complete"].map((label, column) => (
                <div className="task-column" key={label}>
                  <small>{label}</small>
                  {Array.from({ length: column === 1 ? 3 : 2 }).map((_, item) => (
                    <div className="mock-task" key={item}>
                      <i style={{ width: `${62 + ((item + column) % 3) * 12}%` }} />
                      <i style={{ width: `${40 + ((item + column) % 2) * 18}%` }} />
                      <span>{column === 2 ? "Done" : column === 1 ? "Active" : "Queued"}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "audio") {
    return (
      <div className="project-visual visual-audio" aria-hidden="true">
        <div className="audio-orb"><span>NG</span></div>
        <div className="waveform">
          {Array.from({ length: 34 }).map((_, index) => (
            <i key={index} style={{ "--bar": `${20 + ((index * 17) % 76)}%`, "--delay": `${index * -0.04}s` }} />
          ))}
        </div>
        <div className="audio-controls"><i /><b /><i /></div>
        <div className="audio-meta"><span>Theme / midnight</span><span>02:48</span></div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-text" aria-hidden="true">
      <div className="text-toolbar"><span>Text workspace</span><i>Dark mode</i></div>
      <div className="text-editor">
        <div className="text-lines">
          <i /><i /><i /><i /><i />
        </div>
        <div className="text-actions"><span>UPPERCASE</span><span>lowercase</span><span>Clean spaces</span></div>
      </div>
      <div className="text-stats"><span><b>247</b> words</span><span><b>1.2</b> min read</span><span><b>1,442</b> characters</span></div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xdkowbjq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} data-reveal>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="How should I address you?" required />
        </label>
        <label>
          <span>Email address</span>
          <input type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        <span>Tell me about the opportunity</span>
        <textarea name="message" rows="5" placeholder="A role, a project, or an interesting problem…" required />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
          {status === "success" ? <FiCheck aria-hidden="true" /> : <FiSend aria-hidden="true" />}
        </button>
        <p className={`form-status is-${status}`} role="status" aria-live="polite">
          {status === "success" && "Thanks — your message is on its way."}
          {status === "error" && "That did not send. Please email me directly instead."}
        </p>
      </div>
    </form>
  );
}

export default function Home() {
  const pageRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const elements = pageRef.current?.querySelectorAll("[data-reveal]");
    if (!elements?.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nabajitghosh225@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:nabajitghosh225@gmail.com";
    }
  };

  return (
    <div ref={pageRef}>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />

        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="availability-dot" />
              Full-stack developer
            </p>
            <h1 id="hero-title">
              I build dependable web products
              <span>from interface to API.</span>
            </h1>
            <p className="hero-description">
              I’m Nabajit Ghosh, a MERN-focused developer turning product ideas into responsive,
              deployable software—with practical curiosity for AI and cloud systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <FiArrowDownRight aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#contact">
                Let’s talk <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
              <span />
              <p>Open to software roles and select freelance builds.</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Nabajit Ghosh">
            <div className="portrait-frame">
              <div className="portrait-index" aria-hidden="true">NjG</div>
              <img src={profilePhoto} alt="Nabajit Ghosh" />
              <div className="portrait-shade" aria-hidden="true" />
              <div className="portrait-caption">
                <span>Currently exploring</span>
                <strong>AI-powered web experiences</strong>
              </div>
            </div>
            <div className="hero-note note-code" aria-hidden="true">
              <span>build.status</span><strong>ready</strong>
            </div>
            <div className="hero-note note-stack" aria-hidden="true">
              <span>Core stack</span><strong>React · Node · MongoDB</strong>
            </div>
          </div>
        </div>

        <div className="container hero-proof" aria-label="Portfolio highlights">
          <div><strong>06+</strong><span>Products built</span></div>
          <div><strong>02</strong><span>Industry internships</span></div>
          <div><strong>8.12</strong><span>B.Tech CGPA</span></div>
          <a href="#about">A little more about me <FiArrowDownRight aria-hidden="true" /></a>
        </div>
      </section>

      <div className="stack-marquee" aria-label="Technology focus">
        <div className="marquee-track">
          {["React", "Node.js", "Product thinking", "MongoDB", "Clean interfaces", "REST APIs", "JavaScript", "Cloud delivery"].map((item) => (
            <span key={item}>{item}<i aria-hidden="true">✦</i></span>
          ))}
          {["React", "Node.js", "Product thinking", "MongoDB", "Clean interfaces", "REST APIs", "JavaScript", "Cloud delivery"].map((item) => (
            <span key={`${item}-copy`} aria-hidden="true">{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            headingId="projects-title"
            title="Products built to solve real, practical problems."
            description="A closer look at the decisions behind my strongest full-stack and frontend builds."
          />

          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <article className={`project-case${index % 2 ? " is-reversed" : ""}`} key={project.name} data-reveal>
                <div className="project-content">
                  <div className="project-meta"><span>{project.number}</span><p>{project.category}</p></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-decisions">
                    {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                  </ul>
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <FiArrowUpRight aria-hidden="true" /></a>}
                    <a href={project.code} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Source code</a>
                  </div>
                </div>
                <ProjectVisual type={project.visual} />
              </article>
            ))}
          </div>

          <div className="more-work" data-reveal>
            <div className="more-work-heading">
              <p>More builds</p>
              <span>Smaller experiments, same attention to the details.</span>
            </div>
            <div className="more-project-grid">
              {MORE_PROJECTS.map((project, index) => (
                <a key={project.name} href={project.code} target="_blank" rel="noreferrer" className="mini-project">
                  <div><span>0{index + 4}</span><FiArrowUpRight aria-hidden="true" /></div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <small>{project.stack}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="container split-section">
          <div className="split-intro" data-reveal>
            <p className="section-index">02 / Experience</p>
            <h2 id="experience-title">Learning by shipping, reviewing and improving.</h2>
            <p>Two focused internships gave me hands-on experience with authentication, content quality, responsive UI and production workflows.</p>
            <a href={RESUME_URL} target="_blank" rel="noreferrer">View full résumé <FiArrowUpRight aria-hidden="true" /></a>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <article className="timeline-item" key={item.company} data-reveal>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <a href={item.certificate} target="_blank" rel="noreferrer">View credential <FiArrowUpRight aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <SectionHeading
            index="03"
            eyebrow="Capabilities"
            headingId="skills-title"
            title="A practical toolkit for moving ideas into production."
            description="I care about the whole path—from a clear interface to the API and data behind it."
          />
          <div className="capability-grid">
            {CAPABILITIES.map((capability) => (
              <article className="capability-card" key={capability.title} data-reveal>
                <span className="capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tag-list">{capability.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="exploring-strip" data-reveal>
            <span>Now exploring</span>
            <p>Generative AI · AI-assisted product workflows · Prompt design</p>
            <i aria-hidden="true">↗</i>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-heading" data-reveal>
            <p className="section-index">04 / About</p>
            <h2 id="about-title">Engineering with curiosity and product instinct.</h2>
          </div>
          <div className="about-copy" data-reveal>
            <p className="about-lead">
              I’m a computer science graduate who enjoys the space where thoughtful interfaces meet reliable engineering.
            </p>
            <p>
              My strongest work starts with understanding the actual problem, then making the experience simpler—whether that means shaping a React interface, designing an API, modelling data or tracking down the detail that makes a feature feel complete.
            </p>
            <p>
              I’m currently looking for a team where I can contribute, learn quickly and help turn useful ideas into software people can trust.
            </p>
            <div className="about-actions">
              <a className="text-link" href={RESUME_URL} target="_blank" rel="noreferrer">Download résumé <FiArrowUpRight aria-hidden="true" /></a>
              <a className="text-link" href="https://github.com/njg37" target="_blank" rel="noreferrer">Browse GitHub <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="about-principles" data-reveal>
            {["Clarity before complexity", "Build, test, refine", "Stay curious, stay useful"].map((principle, index) => (
              <div key={principle}><span>0{index + 1}</span><p>{principle}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section credentials-section" id="education" aria-labelledby="credentials-title">
        <div className="container">
          <SectionHeading
            index="05"
            eyebrow="Foundation"
            headingId="credentials-title"
            title="Education and continued learning."
            description="Formal computer science training, supported by focused credentials across frontend, architecture and cloud."
          />

          <div className="credentials-grid">
            <div className="education-list" data-reveal>
              <p className="subsection-label" id="education-title">Education</p>
              {EDUCATION.map((item, index) => (
                <article className={index === 0 ? "is-primary" : ""} key={item.title}>
                  <span>{item.period}</span>
                  <div><h3>{item.title}</h3><p>{item.institution}</p></div>
                  <strong>{item.result}</strong>
                </article>
              ))}
            </div>

            <div className="certificate-list" id="certificates" data-reveal>
              <p className="subsection-label">Selected credentials</p>
              {CERTIFICATES.map((certificate) => {
                const content = (
                  <>
                    <div className="certificate-thumb">
                      {certificate.image ? <img src={certificate.image} alt="" /> : <span>NG</span>}
                    </div>
                    <div><small>{certificate.category}</small><h3>{certificate.title}</h3><p>{certificate.issuer}</p></div>
                    {certificate.link ? <FiArrowUpRight aria-hidden="true" /> : <FiCheck aria-hidden="true" />}
                  </>
                );

                return certificate.link ? (
                  <a className="certificate-item" key={certificate.title} href={certificate.link} target="_blank" rel="noreferrer">{content}</a>
                ) : (
                  <article className="certificate-item" key={certificate.title}>{content}</article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-heading" data-reveal>
            <p className="section-index">06 / Contact</p>
            <h2 id="contact-title">Have a role, a product idea or a hard problem?</h2>
            <p>Let’s make the next useful thing together.</p>
          </div>

          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-details" data-reveal>
              <div className="contact-card location-card"><FiMapPin aria-hidden="true" /><div><span>Based in</span><strong>Gurugram, Haryana, India</strong></div></div>
              <a className="contact-card" href="mailto:nabajitghosh225@gmail.com"><FiMail aria-hidden="true" /><div><span>Email</span><strong>nabajitghosh225@gmail.com</strong></div></a>
              <a className="contact-card" href="tel:+918837337805"><FiPhone aria-hidden="true" /><div><span>Phone</span><strong>+91 88373 37805</strong></div></a>
              <button className="copy-email" type="button" onClick={copyEmail}>
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? "Email copied" : "Copy email address"}
              </button>
              <div className="contact-socials">
                {SOCIALS.slice(0, 2).map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<FiArrowUpRight aria-hidden="true" /></a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
