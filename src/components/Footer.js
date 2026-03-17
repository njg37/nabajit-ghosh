import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const LINKS = [
  { to: "home",        label: "Home" },
  { to: "about",       label: "About" },
  { to: "experience",  label: "Experience" },
  { to: "education",   label: "Education" },
  { to: "projects",    label: "Projects" },
  { to: "skills",      label: "Skills" },
  { to: "certificate", label: "Certificates" },
  { to: "contact",     label: "Contact" },
];

const SOCIALS = [
  { href: "https://linkedin.com/in/nabajit-ghosh", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/njg37",              icon: <FaGithub />,   label: "GitHub" },
  { href: "mailto:nabajitghosh225@gmail.com",      icon: <FaEnvelope />, label: "Email" },
];

export default function Footer() {
  const canvasRef = useRef(null);

  /* subtle particle line at top edge */
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const resize = () => { cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight; };
    resize();

    const pts = Array.from({ length: 28 }, () => ({
      x: Math.random() * cvs.width,
      y: Math.random() * cvs.height,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.3 + 0.05,
    }));

    const getAcc = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--acc").trim() || "#00ffc8";

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      const acc = getAcc();
      pts.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > cvs.width)  p.dx *= -1;
        if (p.y < 0 || p.y > cvs.height) p.dy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = acc; ctx.globalAlpha = p.o; ctx.fill(); ctx.globalAlpha = 1;
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = acc;
          ctx.globalAlpha = 0.05 * (1 - d / 90);
          ctx.lineWidth = 0.5; ctx.stroke(); ctx.globalAlpha = 1;
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        .ngFt {
          background: var(--bg-0);
          border-top: 1px solid var(--bdr);
          position: relative;
          overflow: hidden;
          padding-right: 64px;
          transition: background .4s ease;
        }

        /* particle canvas */
        .ngFt-cvs {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none;
          opacity: 0.6;
        }

        /* top glow line */
        .ngFt::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: var(--sep);
          pointer-events: none;
        }

        .ngFt-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 3rem 32px;
          position: relative;
          z-index: 1;
        }

        /* ── top row ── */
        .ngFt-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 44px;
          border-bottom: 1px solid var(--div);
        }

        /* brand col */
        .ngFt-brand {}
        .ngFt-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--tx-1);
          line-height: 1;
          margin-bottom: 8px;
        }
        .ngFt-name span { color: var(--acc); }
        .ngFt-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          color: var(--tx-3);
          font-weight: 300;
          margin-bottom: 20px;
          line-height: 1.6;
          max-width: 240px;
        }
        .ngFt-socials {
          display: flex;
          gap: 9px;
        }
        .ngFt-soc {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--bdr);
          border-radius: 9px;
          color: var(--tx-3);
          font-size: .9rem;
          text-decoration: none;
          transition: all .3s ease;
        }
        .ngFt-soc:hover {
          border-color: var(--bdr-h);
          color: var(--acc);
          background: var(--acc-bg);
          transform: translateY(-3px);
        }

        /* nav col */
        .ngFt-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: .6rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--tx-3);
          margin-bottom: 16px;
        }
        .ngFt-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ngFt-nav-lnk {
          font-family: 'DM Sans', sans-serif;
          font-size: .82rem;
          color: var(--tx-2);
          font-weight: 300;
          text-decoration: none;
          cursor: pointer;
          transition: color .25s ease, transform .25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
        }
        .ngFt-nav-lnk::before {
          content: '→';
          font-size: .65rem;
          color: var(--acc);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity .25s ease, transform .25s ease;
        }
        .ngFt-nav-lnk:hover {
          color: var(--acc);
          transform: translateX(4px);
        }
        .ngFt-nav-lnk:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* status col */
        .ngFt-status-card {
          background: var(--bg-card);
          border: 1px solid var(--bdr);
          border-radius: 14px;
          padding: 20px 22px;
          transition: border-color .3s, background .3s;
        }
        .ngFt-status-card:hover {
          border-color: var(--bdr-h);
          background: var(--bg-card-h);
        }
        .ngFt-status-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .ngFt-sdot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--acc);
          animation: ngFtPulse 2s ease infinite;
          flex-shrink: 0;
        }
        @keyframes ngFtPulse {
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.5);opacity:.55}
        }
        .ngFt-status-text {
          font-family: 'DM Sans', sans-serif;
          font-size: .72rem;
          font-weight: 600;
          color: var(--acc);
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .ngFt-status-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .78rem;
          color: var(--tx-2);
          font-weight: 300;
          line-height: 1.55;
          margin-bottom: 14px;
        }
        .ngFt-hire-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          background: var(--btn-bg);
          color: var(--btn-tx);
          font-family: 'Syne', sans-serif;
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          border-radius: 6px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all .3s ease;
          position: relative;
          overflow: hidden;
        }
        .ngFt-hire-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,.18);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform .4s ease;
        }
        .ngFt-hire-btn:hover::before { transform: translateX(150%) skewX(-15deg); }
        .ngFt-hire-btn:hover { box-shadow: var(--sh-acc); transform: translateY(-1px); }

        /* ── bottom bar ── */
        .ngFt-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ngFt-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: .7rem;
          color: var(--tx-4);
          letter-spacing: .06em;
        }
        .ngFt-copy span { color: var(--acc-s); }

        .ngFt-built {
          font-family: 'DM Sans', sans-serif;
          font-size: .68rem;
          color: var(--tx-4);
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .ngFt-built-heart {
          color: var(--acc);
          animation: ngHeart .9s ease infinite alternate;
          display: inline-block;
          font-style: normal;
        }
        @keyframes ngHeart {
          from { transform: scale(1); }
          to   { transform: scale(1.28); }
        }

        /* back to top */
        .ngFt-top-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          background: var(--bg-card);
          border: 1px solid var(--bdr);
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: .68rem;
          font-weight: 500;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--tx-3);
          cursor: pointer;
          transition: all .3s ease;
        }
        .ngFt-top-btn:hover {
          border-color: var(--bdr-h);
          color: var(--acc);
          background: var(--acc-bg);
          transform: translateY(-2px);
        }
        .ngFt-top-btn svg {
          transition: transform .3s ease;
        }
        .ngFt-top-btn:hover svg {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .ngFt { padding-right: 0; }
          .ngFt-inner { padding: 40px 1.5rem 24px; }
          .ngFt-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ngFt-nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 20px;
          }
          .ngFt-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <footer className="ngFt ng-sec">
        <canvas ref={canvasRef} className="ngFt-cvs" />

        <div className="ngFt-inner">
          {/* ── top section ── */}
          <div className="ngFt-top">

            {/* brand */}
            <div className="ngFt-brand">
              <div className="ngFt-name">
                Nabajit<span>.</span>
              </div>
              <p className="ngFt-tagline">
                Software Developer · MERN Stack · Open to opportunities
              </p>
              <div className="ngFt-socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="ngFt-soc"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* nav links */}
            <div>
              <div className="ngFt-col-title">Navigate</div>
              <nav className="ngFt-nav">
                {LINKS.map((l) => (
                  <ScrollLink
                    key={l.to}
                    to={l.to}
                    smooth
                    duration={700}
                    className="ngFt-nav-lnk"
                  >
                    {l.label}
                  </ScrollLink>
                ))}
              </nav>
            </div>

            {/* availability card */}
            <div>
              <div className="ngFt-col-title">Status</div>
              <div className="ngFt-status-card">
                <div className="ngFt-status-row">
                  <span className="ngFt-sdot" />
                  <span className="ngFt-status-text">Open to Opportunities</span>
                </div>
                <p className="ngFt-status-desc">
                  Passionate about building scalable web apps and always open to exciting new projects or roles.
                </p>
                <a
                  href="mailto:nabajitghosh225@gmail.com"
                  className="ngFt-hire-btn"
                >
                  Let's Connect →
                </a>
              </div>
            </div>

          </div>

          {/* ── bottom bar ── */}
          <div className="ngFt-bottom">
            <p className="ngFt-copy">
              © {new Date().getFullYear()} <span>Nabajit Ghosh</span>. All rights reserved.
            </p>
            <p className="ngFt-built">
              Built with <em className="ngFt-built-heart">♥</em> using React
            </p>
            <ScrollLink to="home" smooth duration={700}>
              <div className="ngFt-top-btn">
                <FaArrowUp size={10} /> Back to top
              </div>
            </ScrollLink>
          </div>
        </div>
      </footer>
    </>
  );
}