import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import njg37 from "../images/njg37.jpeg";
import About       from "../components/About";
import Experience  from "../components/Experience";
import Education   from "../components/Education";
import Projects    from "../components/Projects";
import Skills      from "../components/Skills";
import Certificate from "../components/Certificate";
import Contact     from "../components/Contact";

const ROLES = ["Software Developer", "Full Stack Dev", "Problem Solver",];

/* ─────────────────────────────────────────────────────
   Fixed typewriter — all loop state lives in a single
   ref so there is NO intermediate render that could
   flash the full word. Only setTxt() triggers a paint.
───────────────────────────────────────────────────── */
function useTypewriter(words, speed = 78, pause = 1900) {
  const [txt, setTxt] = useState("");
  const loop = useRef({ wi: 0, ci: 0, del: false });

  useEffect(() => {
    let timer;

    const tick = () => {
      const s   = loop.current;
      const cur = words[s.wi];

      if (!s.del && s.ci < cur.length) {
        // type one more character
        s.ci += 1;
        setTxt(cur.slice(0, s.ci));
        timer = setTimeout(tick, speed);

      } else if (!s.del && s.ci === cur.length) {
        // word complete → pause then start erasing
        s.del = true;
        timer = setTimeout(tick, pause);

      } else if (s.del && s.ci > 0) {
        // erase one character
        s.ci -= 1;
        setTxt(cur.slice(0, s.ci));
        timer = setTimeout(tick, speed / 2);

      } else {
        // fully erased → next word
        s.wi  = (s.wi + 1) % words.length;
        s.ci  = 0;
        s.del = false;
        setTxt("");
        timer = setTimeout(tick, speed);
      }
    };

    // 400 ms initial delay so the very first char types in cleanly
    // with no flash of a full word
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — loop ref holds all mutable state

  return txt;
}

export default function Home() {
  const role      = useTypewriter(ROLES);
  const canvasRef = useRef(null);

  /* animated particle canvas */
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const resize = () => { cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight; };
    resize();

    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * cvs.width,  y: Math.random() * cvs.height,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - .5) * .38, dy: (Math.random() - .5) * .38,
      o: Math.random() * .45 + .1,
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
        ctx.fillStyle = acc; ctx.globalAlpha = p.o;
        ctx.fill(); ctx.globalAlpha = 1;
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = acc;
          ctx.globalAlpha = 0.055 * (1 - d / 110); ctx.lineWidth = .5;
          ctx.stroke(); ctx.globalAlpha = 1;
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
        .ngHome {
          min-height:100vh; display:flex; align-items:center;
          position:relative; overflow:hidden;
          background:var(--bg-0); transition:background .4s ease;
        }
        .ngHome-cvs {
          position:absolute; inset:0; width:100%; height:100%;
          pointer-events:none; opacity:.9;
        }
        .ngHome-blob { position:absolute; border-radius:50%; pointer-events:none; }
        .ngHome-blob1 {
          width:560px; height:560px; top:-80px; left:-80px;
          background:radial-gradient(circle,var(--acc-bg) 0%,transparent 70%);
        }
        .ngHome-blob2 {
          width:380px; height:380px; bottom:0; right:80px;
          background:radial-gradient(circle,var(--acc-bg) 0%,transparent 70%);
        }
        .ngHome-inner {
          position:relative; z-index:2;
          max-width:1100px; margin:0 auto;
          padding:0 3rem; width:100%;
          display:flex; align-items:center; gap:5rem;
        }

        /* avatar */
        .ngHome-imgW { position:relative; flex-shrink:0; }
        .ngHome-ring {
          position:absolute; inset:-12px; border-radius:50%;
          border:1.5px solid var(--bdr-acc);
          animation:ngSpin 12s linear infinite;
        }
        .ngHome-ring2 {
          position:absolute; inset:-22px; border-radius:50%;
          border:1px solid var(--bdr);
          animation:ngSpin 20s linear infinite reverse;
        }
        @keyframes ngSpin { to { transform:rotate(360deg); } }
        .ngHome-ring::before, .ngHome-ring2::before {
          content:''; position:absolute; width:6px; height:6px;
          background:var(--acc); border-radius:50%;
          top:-3px; left:50%; transform:translateX(-50%);
          box-shadow:0 0 8px var(--acc);
        }
        .ngHome-avatar {
          width:230px; height:230px; border-radius:50%;
          object-fit:cover; display:block;
          border:3px solid var(--bdr-acc);
          filter:var(--img-f); transition:filter .4s ease;
        }
        .ngHome-imgW:hover .ngHome-avatar { filter:var(--img-fh); }
        .ngHome-status {
          position:absolute; bottom:4px; right:4px;
          background:var(--bg-nav); border:1px solid var(--bdr-acc);
          border-radius:20px; padding:5px 12px;
          font-family:'DM Sans',sans-serif; font-size:.63rem;
          font-weight:500; color:var(--acc); letter-spacing:.08em;
          display:flex; align-items:center; gap:6px; white-space:nowrap;
          transition:background .4s;
        }
        .ngHome-sdot {
          width:6px; height:6px; background:var(--acc);
          border-radius:50%; animation:ngPulse 2s ease infinite;
        }
        @keyframes ngPulse {
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.5);opacity:.55}
        }

        /* text content */
        .ngHome-content { flex:1; }
        .ngHome-greet {
          font-family:'DM Sans',sans-serif; font-size:.78rem;
          font-weight:400; letter-spacing:.26em; text-transform:uppercase;
          color:var(--acc); margin-bottom:16px;
          animation:ngFU .8s ease both;
        }
        .ngHome-name {
          font-family:'Syne',sans-serif;
          font-size:clamp(2.5rem,6vw,4.4rem);
          font-weight:800; line-height:1; color:var(--tx-1);
          margin-bottom:16px; animation:ngFU .8s .1s ease both;
        }
        .ngHome-role-row {
          height:36px; display:flex; align-items:center;
          gap:8px; margin-bottom:24px;
          animation:ngFU .8s .2s ease both;
        }
        .ngHome-role-pre {
          font-family:'DM Sans',sans-serif; font-size:.95rem;
          color:var(--tx-3); font-weight:300;
        }
        /* fixed min-width so layout doesn't jump between words */
        .ngHome-role-txt {
          font-family:'Syne',sans-serif; font-size:1.1rem;
          font-weight:700; color:var(--acc); min-width:240px;
        }
        .ngHome-caret {
          display:inline-block; width:2px; height:1.1em;
          background:var(--acc); margin-left:2px;
          vertical-align:middle; animation:ngBlink 1s step-end infinite;
        }
        @keyframes ngBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        .ngHome-desc {
          font-family:'DM Sans',sans-serif; font-size:.93rem;
          line-height:1.78; color:var(--tx-2);
          max-width:460px; margin-bottom:34px; font-weight:300;
          animation:ngFU .8s .3s ease both;
        }
        .ngHome-actions {
          display:flex; align-items:center; gap:16px;
          flex-wrap:wrap; animation:ngFU .8s .4s ease both;
        }
        .ngHome-btnP {
          display:inline-flex; align-items:center; gap:10px;
          padding:13px 26px; background:var(--btn-bg); color:var(--btn-tx);
          font-family:'Syne',sans-serif; font-size:.82rem; font-weight:700;
          letter-spacing:.05em; text-transform:uppercase; border-radius:7px;
          text-decoration:none; border:none; cursor:pointer;
          transition:all .3s ease; position:relative; overflow:hidden;
        }
        .ngHome-btnP::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,.18);
          transform:translateX(-100%) skewX(-15deg);
          transition:transform .4s ease;
        }
        .ngHome-btnP:hover::before { transform:translateX(150%) skewX(-15deg); }
        .ngHome-btnP:hover { box-shadow:var(--sh-acc); transform:translateY(-2px); }
        .ngHome-btnG {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 22px; background:transparent; color:var(--tx-2);
          font-family:'DM Sans',sans-serif; font-size:.85rem;
          border:1px solid var(--bdr); border-radius:7px;
          text-decoration:none; cursor:pointer; transition:all .3s ease;
        }
        .ngHome-btnG:hover {
          border-color:var(--bdr-h); color:var(--acc); background:var(--acc-bg);
        }
        .ngHome-socials {
          display:flex; gap:12px; margin-top:28px;
          animation:ngFU .8s .5s ease both;
        }
        .ngHome-soc {
          width:38px; height:38px; display:flex; align-items:center;
          justify-content:center; border:1px solid var(--bdr);
          border-radius:8px; color:var(--tx-3); font-size:.9rem;
          text-decoration:none; transition:all .3s ease;
        }
        .ngHome-soc:hover {
          border-color:var(--bdr-h); color:var(--acc);
          background:var(--acc-bg); transform:translateY(-3px);
        }

        /* scroll hint */
        .ngHome-scroll {
          position:absolute; bottom:34px; left:50%;
          transform:translateX(-50%); z-index:2;
          display:flex; flex-direction:column; align-items:center; gap:8px;
          cursor:pointer; animation:ngFU 1s 1s ease both;
        }
        .ngHome-scroll span {
          font-family:'DM Sans',sans-serif; font-size:.6rem;
          letter-spacing:.2em; text-transform:uppercase; color:var(--tx-4);
        }
        .ngHome-mouse {
          width:22px; height:34px; border:1.5px solid var(--bdr);
          border-radius:11px; display:flex; justify-content:center; padding-top:5px;
        }
        .ngHome-wheel {
          width:3px; height:7px; background:var(--acc);
          border-radius:2px; animation:ngWheel 1.8s ease infinite;
        }
        @keyframes ngWheel {
          0%  { transform:translateY(0);   opacity:1; }
          100%{ transform:translateY(10px);opacity:0; }
        }
        @keyframes ngFU {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:none; }
        }

        @media(max-width:768px){
          .ngHome-inner {
            flex-direction:column; padding:2rem 1.5rem;
            gap:2.5rem; text-align:center;
          }
          .ngHome-avatar { width:170px; height:170px; }
          .ngHome-desc { margin:0 auto 28px; }
          .ngHome-actions, .ngHome-socials, .ngHome-role-row { justify-content:center; }
          .ngHome-scroll { display:none; }
        }
      `}</style>

      <section className="ngHome ng-sec" id="home">
        <canvas ref={canvasRef} className="ngHome-cvs" />
        <div className="ngHome-blob ngHome-blob1" />
        <div className="ngHome-blob ngHome-blob2" />

        <div className="ngHome-inner">
          {/* avatar */}
          <div className="ngHome-imgW">
            <div className="ngHome-ring" />
            <div className="ngHome-ring2" />
            <img src={njg37} alt="Nabajit Ghosh" className="ngHome-avatar" />
            <div className="ngHome-status">
              <span className="ngHome-sdot" />
              Open to Opportunities
            </div>
          </div>

          {/* text */}
          <div className="ngHome-content">
            <p className="ngHome-greet">👋 Hello, I'm</p>
            <h1 className="ngHome-name">Nabajit Ghosh</h1>
            <div className="ngHome-role-row">
              <span className="ngHome-role-pre">I'm a</span>
              <span className="ngHome-role-txt">
                {role}<span className="ngHome-caret" />
              </span>
            </div>
            <p className="ngHome-desc">
              Building responsive, dynamic web apps with the MERN stack. I
              love turning ideas into real products and learning new
              technologies along the way.
            </p>
            <div className="ngHome-actions">
              <ScrollLink to="about" smooth duration={700} className="ngHome-btnP">
                Explore My Work <FaArrowDown size={12} />
              </ScrollLink>
              <a
                href="https://drive.google.com/file/d/1Ri4qDqNSeaxhqIrolkxeqa_u0Oc5-Omb/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="ngHome-btnG"
              >
                View Resume
              </a>
            </div>
            <div className="ngHome-socials">
              {[
                { href: "https://linkedin.com/in/nabajit-ghosh", icon: <FaLinkedin />, label: "LinkedIn" },
                { href: "https://github.com/njg37",              icon: <FaGithub />,   label: "GitHub" },
                { href: "mailto:nabajitghosh225@gmail.com",      icon: <FaEnvelope />, label: "Email" },
              ].map(s => (
                <a
                  key={s.label} href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="ngHome-soc" aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ScrollLink to="about" smooth duration={700} className="ngHome-scroll">
          <span>Scroll</span>
          <div className="ngHome-mouse"><div className="ngHome-wheel" /></div>
        </ScrollLink>
      </section>

      <section id="about"       className="ng-sec"><About /></section>
      <section id="experience"  className="ng-sec"><Experience /></section>
      <section id="education"   className="ng-sec"><Education /></section>
      <section id="projects"    className="ng-sec"><Projects /></section>
      <section id="skills"      className="ng-sec"><Skills /></section>
      <section id="certificate" className="ng-sec"><Certificate /></section>
      <section id="contact"     className="ng-sec"><Contact /></section>
    </>
  );
}