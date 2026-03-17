import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    name: "Text Utils", num: "01",
    desc: "ReactJS app for text processing with case conversion, whitespace management, and text analysis. Displays word/character counts and reading time estimates.",
    stack: ["React.js", "JavaScript", "Bootstrap", "GitHub Pages"],
    live: "https://njg37.github.io/TextUtils.React/",
    gh: "https://github.com/njg37/TextUtils.React",
    // visual: type of animated card art
    art: "code",
    accent: "#00ffc8",
  },
  {
    name: "Task Management System", num: "02",
    desc: "Full-stack task management app with user authentication and role-based access. Features task creation, status updates, priority settings, and CSV report generation.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Render"],
    live: "https://njg37.github.io/task-manager-client/",
    gh: "https://github.com/njg37/task-manager-client",
    art: "kanban",
    accent: "#7c6cfc",
  },
  {
    name: "Song Background Generator", num: "03",
    desc: "Upload a song, select a theme, customize a video, preview and download. Built with FFmpeg on the backend for video processing.",
    stack: ["React.js", "Node.js", "Express.js", "Multer", "Fluent-FFmpeg"],
    live: "https://njg37.github.io/upload",
    gh: "https://github.com/njg37/video_generator",
    art: "wave",
    accent: "#fc6c8f",
  },
  {
    name: "News App", num: "04",
    desc: "Responsive web app fetching real-time news from a public API. Categorized sections with search to find specific articles.",
    stack: ["React.js", "JavaScript", "News API", "CSS"],
    gh: "https://github.com/njg37/NewsMonkey-Reactjs",
    art: "grid",
    accent: "#f5a623",
  },
  {
    name: "Quiz App with Gamification", num: "05",
    desc: "Web-based quiz app with gamification features, animations, and score tracking. Fetches quiz data from API and provides instant feedback.",
    stack: ["React.js", "Axios", "Framer Motion", "Local Storage"],
    gh: "https://github.com/njg37/quiz-app",
    art: "orbit",
    accent: "#4ecdc4",
  },
  {
    name: "WeatherWatcher", num: "06",
    desc: "Weather app with user authentication and profile management. Displays real-time weather using the OpenWeatherMap API.",
    stack: ["PHP", "JavaScript", "Bootstrap", "OpenWeatherMap API"],
    gh: "https://github.com/njg37/intern-PHP-MYSQL",
    art: "radar",
    accent: "#a8edea",
  },
];

/* ── individual art canvases ── */
function ArtCode({ accent }) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    const lines = [
      "const app = () => {",
      "  const [state, set]",
      "  = useState(null);",
      "  useEffect(() => {",
      "    fetchData();",
      "  }, []);",
      "  return <UI />;",
      "};",
    ];
    let tick = 0;
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.font = "11px 'Courier New', monospace";
      lines.forEach((line, i) => {
        const visible = Math.max(0, Math.min(line.length, tick - i * 8));
        const txt = line.slice(0, visible);
        const alpha = 0.12 + (i / lines.length) * 0.45;
        ctx.fillStyle = accent;
        ctx.globalAlpha = alpha;
        ctx.fillText(txt, 14, 22 + i * 18);
      });
      // blinking cursor
      const curLine = Math.min(Math.floor(tick / 8), lines.length - 1);
      const curCol  = tick - curLine * 8;
      if (Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.globalAlpha = 0.7;
        const w = ctx.measureText(lines[curLine].slice(0, curCol)).width;
        ctx.fillRect(14 + w, 12 + curLine * 18, 2, 13);
      }
      ctx.globalAlpha = 1;
      tick = tick < lines.length * 8 + 20 ? tick + 0.45 : 0;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

function ArtKanban({ accent }) {
  const cols = [
    { label:"To Do",      items:["Auth UI","API routes","Roles"] },
    { label:"In Progress",items:["Dashboard","CSV export"] },
    { label:"Done",       items:["DB schema","JWT","Tests"] },
  ];
  const colW = 80;
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    let tick = 0; let raf;
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      const startX = (cvs.width - cols.length * colW - (cols.length - 1) * 10) / 2;
      cols.forEach((col, ci) => {
        const x = startX + ci * (colW + 10);
        // column header
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = accent;
        ctx.fillRect(x, 12, colW, 16);
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = "#08080c";
        ctx.font = "bold 7px 'DM Sans', sans-serif";
        ctx.fillText(col.label, x + 4, 23);
        // cards with staggered float
        col.items.forEach((item, ii) => {
          const y = 36 + ii * 26;
          const float = Math.sin(tick * 0.04 + ci + ii) * 2;
          ctx.globalAlpha = 0.18 + ii * 0.06;
          ctx.fillStyle = accent;
          ctx.beginPath();
          ctx.roundRect(x, y + float, colW, 18, 4);
          ctx.fill();
          ctx.globalAlpha = 0.65;
          ctx.fillStyle = accent;
          ctx.font = "8px 'DM Sans', sans-serif";
          ctx.fillText(item, x + 5, y + float + 12);
        });
      });
      ctx.globalAlpha = 1;
      tick++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

function ArtWave({ accent }) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    let tick = 0; let raf;
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      const cx = cvs.width / 2, cy = cvs.height / 2;
      // multiple sine waves layered
      [0.8, 0.5, 0.28].forEach((amp, wi) => {
        ctx.beginPath();
        for (let x = 0; x <= cvs.width; x += 2) {
          const y = cy + Math.sin((x / cvs.width) * Math.PI * 4 + tick * 0.06 + wi * 1.2) * (cy * amp * 0.55)
                       + Math.sin((x / cvs.width) * Math.PI * 2 + tick * 0.04) * (cy * 0.15);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = accent;
        ctx.globalAlpha = 0.12 + wi * 0.14;
        ctx.lineWidth = 2 - wi * 0.4;
        ctx.stroke();
      });
      // pulsing center orb
      const pulse = 1 + Math.sin(tick * 0.07) * 0.3;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28 * pulse);
      grd.addColorStop(0, accent + "55");
      grd.addColorStop(1, accent + "00");
      ctx.globalAlpha = 1;
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(cx, cy, 28 * pulse, 0, Math.PI * 2); ctx.fill();
      // equalizer bars at bottom
      for (let b = 0; b < 18; b++) {
        const bx = 20 + b * ((cvs.width - 40) / 18);
        const bh = 10 + Math.abs(Math.sin(tick * 0.1 + b * 0.6)) * 30;
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = accent;
        ctx.fillRect(bx, cvs.height - 8 - bh, 6, bh);
      }
      ctx.globalAlpha = 1;
      tick++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

function ArtGrid({ accent }) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    let tick = 0; let raf;
    const cards = [
      { x:.05, y:.08, w:.42, h:.28, label:"Top Story" },
      { x:.53, y:.08, w:.42, h:.13, label:"Tech" },
      { x:.53, y:.26, w:.42, h:.13, label:"Science" },
      { x:.05, y:.42, w:.28, h:.13, label:"Sports" },
      { x:.38, y:.42, w:.28, h:.13, label:"World" },
      { x:.70, y:.42, w:.25, h:.13, label:"Local" },
    ];
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      const W = cvs.width, H = cvs.height;
      cards.forEach((c, i) => {
        const pulse = Math.sin(tick * 0.03 + i) * 0.06;
        ctx.globalAlpha = 0.1 + pulse + i * 0.02;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.roundRect(c.x * W, c.y * H, c.w * W, c.h * H, 5);
        ctx.fill();
        ctx.globalAlpha = 0.45 + pulse;
        ctx.fillStyle = accent;
        ctx.font = `bold ${c.w * W > 100 ? 9 : 7}px 'DM Sans',sans-serif`;
        ctx.fillText(c.label, c.x * W + 6, c.y * H + 13);
        // shimmer line
        const shimX = ((tick * 2 + i * 30) % (c.w * W + 40)) - 20;
        ctx.globalAlpha = 0.12;
        ctx.fillStyle = "#fff";
        ctx.fillRect(c.x * W + shimX, c.y * H, 12, c.h * H);
      });
      ctx.globalAlpha = 1;
      tick++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

function ArtOrbit({ accent }) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    let tick = 0; let raf;
    const cx = cvs.width / 2, cy = cvs.height / 2;
    const orbits = [
      { r:22, speed:0.08, size:5, label:"Q1" },
      { r:40, speed:0.05, size:4, label:"Q2" },
      { r:58, speed:0.03, size:6, label:"Q3" },
    ];
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      // orbit rings
      orbits.forEach(o => {
        ctx.beginPath(); ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
        ctx.strokeStyle = accent; ctx.globalAlpha = 0.1; ctx.lineWidth = 1; ctx.stroke();
      });
      // center — score badge
      const pulse = 1 + Math.sin(tick * 0.06) * 0.12;
      ctx.globalAlpha = 0.18 * pulse;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(cx, cy, 14 * pulse, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = accent;
      ctx.font = "bold 9px 'Syne',sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("100", cx, cy);
      // orbiting dots
      orbits.forEach((o, i) => {
        const angle = tick * o.speed + i * (Math.PI * 2 / 3);
        const px = cx + Math.cos(angle) * o.r;
        const py = cy + Math.sin(angle) * o.r;
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(px, py, o.size / 2, 0, Math.PI * 2); ctx.fill();
        // trail
        for (let t = 1; t <= 5; t++) {
          const ta = angle - t * 0.12;
          const tx2 = cx + Math.cos(ta) * o.r;
          const ty2 = cy + Math.sin(ta) * o.r;
          ctx.globalAlpha = 0.12 * (1 - t / 6);
          ctx.beginPath(); ctx.arc(tx2, ty2, o.size / 2, 0, Math.PI * 2); ctx.fill();
        }
        ctx.globalAlpha = 0.5;
        ctx.font = "bold 7px 'DM Sans',sans-serif";
        ctx.fillText(o.label, px + 6, py - 4);
      });
      ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
      ctx.globalAlpha = 1;
      tick++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

function ArtRadar({ accent }) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight;
    let tick = 0; let raf;
    const cx = cvs.width / 2, cy = cvs.height / 2;
    const maxR = Math.min(cx, cy) * 0.78;
    // simulated weather dots
    const dots = Array.from({ length: 12 }, (_, i) => ({
      angle: Math.random() * Math.PI * 2,
      r: 0.2 + Math.random() * 0.75,
      size: 1.5 + Math.random() * 3,
      blink: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      // concentric rings
      [0.3, 0.55, 0.78].forEach(f => {
        ctx.beginPath(); ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2);
        ctx.strokeStyle = accent; ctx.globalAlpha = 0.1; ctx.lineWidth = 1; ctx.stroke();
      });
      // cross hairs
      ctx.globalAlpha = 0.07;
      ctx.beginPath(); ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR); ctx.stroke();
      // sweep beam
      const sweepAngle = tick * 0.04;
      const grd = ctx.createConicalGradient
        ? ctx.createConicalGradient(cx, cy, sweepAngle)
        : null;
      // fallback arc sweep
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(sweepAngle);
      const sweep = ctx.createLinearGradient(0, 0, maxR, 0);
      sweep.addColorStop(0, accent + "55");
      sweep.addColorStop(1, accent + "00");
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxR, -0.35, 0.35);
      ctx.closePath();
      ctx.fillStyle = sweep;
      ctx.fill();
      ctx.restore();
      // dots (weather blips)
      dots.forEach(d => {
        const px = cx + Math.cos(d.angle) * d.r * maxR;
        const py = cy + Math.sin(d.angle) * d.r * maxR;
        const alpha = 0.4 + Math.sin(tick * 0.08 + d.blink) * 0.35;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(px, py, d.size, 0, Math.PI * 2); ctx.fill();
      });
      // center dot
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      tick++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [accent]);
  return <canvas ref={ref} style={{ width:"100%", height:"100%", display:"block" }} />;
}

const ART_MAP = { code: ArtCode, kanban: ArtKanban, wave: ArtWave, grid: ArtGrid, orbit: ArtOrbit, radar: ArtRadar };

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".ngPr-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("ng-in"); obs.unobserve(e.target); } }),
      { threshold: .08 }
    );
    cards.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ngPr {
          background:var(--bg-0); padding:100px 3rem;
          position:relative; overflow:hidden;
          transition:background .4s ease;
        }
        .ngPr::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngPr-inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
        .ngPr-hdr {
          display:flex; align-items:flex-end;
          justify-content:space-between; flex-wrap:wrap; gap:14px;
          margin-bottom:60px;
        }
        .ngPr-note {
          font-family:'DM Sans',sans-serif; font-size:.7rem;
          color:var(--tx-3); max-width:280px; line-height:1.6; text-align:right;
        }
        .ngPr-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
          gap:18px;
        }

        /* card */
        .ngPr-card {
          opacity:0; transform:translateY(26px) scale(.985);
          transition:opacity .52s ease, transform .52s ease;
        }
        .ngPr-card:nth-child(2){transition-delay:.07s}
        .ngPr-card:nth-child(3){transition-delay:.14s}
        .ngPr-card:nth-child(4){transition-delay:.21s}
        .ngPr-card:nth-child(5){transition-delay:.28s}
        .ngPr-card:nth-child(6){transition-delay:.35s}
        .ngPr-card.ng-in{ opacity:1; transform:none; }

        .ngPr-ci {
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:16px; overflow:hidden;
          transition:border-color .4s,transform .4s,box-shadow .3s;
          height:100%; display:flex; flex-direction:column;
        }
        .ngPr-ci:hover {
          border-color:var(--bdr-h); transform:translateY(-6px);
          box-shadow:var(--sh-h);
        }

        /* art area */
        .ngPr-art {
          position:relative; height:168px; overflow:hidden;
          background: linear-gradient(135deg, rgba(0,0,0,0.04), transparent);
        }
        .ngPr-art-bg {
          position:absolute; inset:0;
          transition:opacity .5s ease;
          opacity:0.6;
        }
        .ngPr-ci:hover .ngPr-art-bg { opacity:1; }

        .ngPr-art-canvas {
          position:absolute; inset:0; width:100%; height:100%;
        }

        /* number badge */
        .ngPr-num {
          position:absolute; bottom:10px; right:14px;
          font-family:'Syne',sans-serif; font-size:2.4rem;
          font-weight:800; line-height:1;
          color:var(--bg-card);
          opacity:0.18;
          pointer-events:none;
          transition:opacity .4s;
        }
        .ngPr-ci:hover .ngPr-num { opacity:0.28; }

        /* top row inside art: num + accent dot */
        .ngPr-art-top {
          position:absolute; top:12px; left:14px;
          display:flex; align-items:center; gap:7px; z-index:2;
        }
        .ngPr-art-label {
          font-family:'Syne',sans-serif; font-size:.6rem;
          font-weight:800; letter-spacing:.15em;
          color:var(--acc); opacity:0.7;
        }
        .ngPr-art-dot {
          width:6px; height:6px; border-radius:50%;
          animation:ngDotPulse 2s ease infinite;
        }
        @keyframes ngDotPulse {
          0%,100%{transform:scale(1);opacity:.6}
          50%{transform:scale(1.5);opacity:1}
        }

        /* bottom fade */
        .ngPr-art-fade {
          position:absolute; bottom:0; left:0; right:0; height:40px;
          background:linear-gradient(0deg, var(--bg-card), transparent);
          pointer-events:none; z-index:2;
        }

        /* body */
        .ngPr-body { padding:20px 22px; flex:1; display:flex; flex-direction:column; }
        .ngPr-name {
          font-family:'Syne',sans-serif; font-size:1.08rem;
          font-weight:700; color:var(--tx-1); margin-bottom:8px; line-height:1.2;
        }
        .ngPr-desc {
          font-family:'DM Sans',sans-serif; font-size:.81rem;
          line-height:1.72; color:var(--tx-2); font-weight:300;
          margin-bottom:15px; flex:1;
        }
        .ngPr-stack { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:16px; }
        .ngPr-tech {
          padding:3px 9px; background:var(--bg-tag);
          border:1px solid var(--bdr-acc); border-radius:4px;
          font-family:'DM Sans',sans-serif; font-size:.62rem;
          font-weight:500; color:var(--acc-d); letter-spacing:.04em;
          transition:all .3s ease;
        }
        .ngPr-ci:hover .ngPr-tech { border-color:var(--bdr-h); color:var(--acc); }

        .ngPr-links { display:flex; gap:8px; }
        .ngPr-lnk {
          display:inline-flex; align-items:center; gap:5px;
          padding:7px 13px; border:1px solid var(--bdr);
          border-radius:6px; font-family:'DM Sans',sans-serif;
          font-size:.68rem; font-weight:500; letter-spacing:.05em;
          text-transform:uppercase; color:var(--tx-3);
          text-decoration:none; transition:all .3s ease;
        }
        .ngPr-lnk:hover { border-color:var(--bdr-h); color:var(--acc); background:var(--acc-bg); }
        .ngPr-lnk.primary {
          background:var(--bg-tag); border-color:var(--bdr-acc); color:var(--acc-d);
        }
        .ngPr-lnk.primary:hover {
          background:var(--acc-bg); border-color:var(--bdr-h); color:var(--acc);
        }

        /* more */
        .ngPr-more { text-align:center; margin-top:46px; }
        .ngPr-more a {
          display:inline-flex; align-items:center; gap:9px;
          padding:13px 26px; border:1px solid var(--bdr-acc);
          border-radius:6px; font-family:'Syne',sans-serif;
          font-size:.78rem; font-weight:700; letter-spacing:.06em;
          text-transform:uppercase; color:var(--acc-d);
          text-decoration:none; background:var(--bg-tag);
          transition:all .3s ease;
        }
        .ngPr-more a:hover {
          background:var(--acc-bg); border-color:var(--bdr-h);
          color:var(--acc); box-shadow:var(--sh-acc); transform:translateY(-2px);
        }

        @media(max-width:768px){
          .ngPr{ padding:80px 1.5rem; }
          .ngPr-grid{ grid-template-columns:1fr; }
          .ngPr-note{ text-align:left; }
        }
      `}</style>

      <section className="ngPr" ref={ref}>
        <div className="ngPr-inner">
          <div className="ngPr-hdr">
            <div>
              <span className="ng-lbl">What I've Built</span>
              <h2 className="ng-hd">My Projects</h2>
            </div>
            <div className="ngPr-note">
              ⚠ Some live demos may be slow due to free-tier deployment. Check GitHub README for details.
            </div>
          </div>

          <div className="ngPr-grid">
            {PROJECTS.map((p, i) => {
              const ArtComp = ART_MAP[p.art];
              return (
                <div key={i} className="ngPr-card">
                  <div className="ngPr-ci">

                    {/* animated art header */}
                    <div className="ngPr-art">
                      {/* tinted bg */}
                      <div
                        className="ngPr-art-bg"
                        style={{ background: `radial-gradient(ellipse at 60% 40%, ${p.accent}22 0%, transparent 70%)` }}
                      />
                      {/* canvas art */}
                      <div className="ngPr-art-canvas">
                        <ArtComp accent={p.accent} />
                      </div>
                      {/* top label */}
                      <div className="ngPr-art-top">
                        <span className="ngPr-art-label" style={{ color: p.accent }}>{p.num}</span>
                        <span className="ngPr-art-dot" style={{ background: p.accent }} />
                      </div>
                      {/* big ghost number */}
                      <div className="ngPr-num">{p.num}</div>
                      {/* bottom fade */}
                      <div className="ngPr-art-fade" />
                    </div>

                    <div className="ngPr-body">
                      <div className="ngPr-name">{p.name}</div>
                      <div className="ngPr-desc">{p.desc}</div>
                      <div className="ngPr-stack">
                        {p.stack.map((t, j) => (
                          <span key={j} className="ngPr-tech">{t}</span>
                        ))}
                      </div>
                      <div className="ngPr-links">
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="ngPr-lnk primary">
                            <FaExternalLinkAlt size={9} /> Live
                          </a>
                        )}
                        <a href={p.gh} target="_blank" rel="noopener noreferrer" className="ngPr-lnk">
                          <FaGithub size={11} /> GitHub
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="ngPr-more">
            <a href="https://github.com/njg37" target="_blank" rel="noopener noreferrer">
              <FaGithub size={13} /> View More on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}