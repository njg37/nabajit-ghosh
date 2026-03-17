import React, { useEffect, useRef, useCallback } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const EDU = [
  {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    inst: "Bengal College of Engineering & Technology, MAKAUT University",
    dur: "2021–2025",
    score: "8.12",
    scoreLabel: "CGPA",
    icon: <FaGraduationCap />,
    latest: true,
    accent: "#00ffc8",
    art: "graduation",
    highlights: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Web Technologies"],
  },
  {
    degree: "12th Grade",
    field: "Science Stream",
    inst: "Kamalpur Class XII School, TBSE, Tripura",
    dur: "2020–2021",
    score: "85.8%",
    scoreLabel: "Percentage",
    icon: <FaSchool />,
    accent: "#7c6cfc",
    art: "books",
    highlights: ["Physics", "Chemistry", "Mathematics", "Biology"],
  },
  {
    degree: "10th Grade",
    field: "General Study",
    inst: "Kamalpur Madrassa Class XII School, TBSE, Tripura",
    dur: "2018–2019",
    score: "81.2%",
    scoreLabel: "Percentage",
    icon: <FaSchool />,
    accent: "#f5a623",
    art: "star",
    highlights: ["Mathematics", "Science", "English", "Social Studies"],
  },
];

/* ─── shared canvas hook ─── */
function useCanvasArt(drawFn) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const resize = () => { cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight; };
    resize();
    let tick = 0, raf;
    const loop = () => { drawFn(ctx, cvs.width, cvs.height, tick); tick++; raf = requestAnimationFrame(loop); };
    loop();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [drawFn]);
  return ref;
}

/* ─────────────────────────────────────────────────────────
   ART 1 — GRADUATION (B.Tech)
   Floating cap, confetti stars, diploma scroll, sparkles
───────────────────────────────────────────────────────── */
function ArtGraduation({ accent }) {
  const draw = useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const capFloat = Math.sin(t * 0.038) * 3.5;

    /* ── helper: draw one laurel leaf ── */
    const drawLeaf = (lx, ly, angle, size, alpha) => {
      ctx.save();
      ctx.translate(lx, ly);
      ctx.rotate(angle);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo( size * 0.5, -size * 0.3,  size * 1.1, -size * 0.1,  size, 0);
      ctx.bezierCurveTo( size * 1.1,  size * 0.1,  size * 0.5,  size * 0.3,  0, 0);
      ctx.closePath();
      ctx.fill();
      // centre vein
      ctx.globalAlpha = alpha * 0.35;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(size, 0);
      ctx.stroke();
      ctx.restore();
    };

    /* ══════════════════════════
       LAUREL BRANCHES — left & right
       Each branch has 7 leaves fanning outward
    ══════════════════════════ */
    const leafCount = 7;
    const branchR   = 32;   // how far each leaf origin is from cx

    // Left branch — leaves fan from bottom-left to top-left
    for (let i = 0; i < leafCount; i++) {
      const frac      = i / (leafCount - 1);           // 0 → 1
      const branchAng = Math.PI * 0.55 + frac * Math.PI * 0.7; // ~100°→226°
      const lx = cx - 16 + Math.cos(branchAng) * branchR * (0.6 + frac * 0.4);
      const ly = cy + capFloat + Math.sin(branchAng) * branchR * (0.6 + frac * 0.4);
      // leaf points outward (away from centre)
      const leafAng = branchAng + Math.PI + 0.2;
      const leafSz  = 7 + frac * 4;
      const alpha   = 0.22 + frac * 0.28;
      drawLeaf(lx, ly, leafAng, leafSz, alpha);
    }

    // Right branch — mirror image
    for (let i = 0; i < leafCount; i++) {
      const frac      = i / (leafCount - 1);
      const branchAng = Math.PI * (-0.55) - frac * Math.PI * 0.7; // mirrored
      const lx = cx + 16 + Math.cos(branchAng) * branchR * (0.6 + frac * 0.4);
      const ly = cy + capFloat + Math.sin(branchAng) * branchR * (0.6 + frac * 0.4);
      const leafAng = branchAng - 0.2;
      const leafSz  = 7 + frac * 4;
      const alpha   = 0.22 + frac * 0.28;
      drawLeaf(lx, ly, leafAng, leafSz, alpha);
    }

    // Small berries at the bottom tip of each branch
    [cx - 44, cx + 44].forEach((bx, side) => {
      const by = cy + capFloat + 18;
      for (let b = 0; b < 3; b++) {
        const bOff = (b - 1) * 4;
        const pulse = 0.5 + Math.sin(t * 0.06 + b + side * 2) * 0.3;
        ctx.globalAlpha = pulse * 0.55;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(bx + bOff * (side === 0 ? -1 : 1), by + Math.abs(bOff) * 0.3, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    /* ══════════════════════════
       GRADUATION CAP  (centred)
    ══════════════════════════ */
    const capCY = cy + capFloat;
    const bW = 48, bH = 8;
    const hW = 20, hH = 14;

    // soft glow
    const glow = ctx.createRadialGradient(cx, capCY, 0, cx, capCY, 34);
    glow.addColorStop(0, accent + "28"); glow.addColorStop(1, accent + "00");
    ctx.globalAlpha = 1; ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cx, capCY, 34, 0, Math.PI * 2); ctx.fill();

    // flat mortarboard top
    ctx.globalAlpha = 0.88; ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.roundRect(cx - bW / 2, capCY - bH - hH / 2, bW, bH, 2);
    ctx.fill();
    // highlight strip on board
    ctx.globalAlpha = 0.22; ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.roundRect(cx - bW / 2 + 5, capCY - bH - hH / 2, bW - 10, 2.5, 1);
    ctx.fill();

    // hat body (trapezoid)
    const hatTop = capCY - hH / 2;
    ctx.globalAlpha = 0.7; ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.moveTo(cx - hW,     hatTop);
    ctx.lineTo(cx + hW,     hatTop);
    ctx.lineTo(cx + hW - 5, hatTop + hH);
    ctx.lineTo(cx - hW + 5, hatTop + hH);
    ctx.closePath(); ctx.fill();

    // tassel — swings from right edge
    const tasX  = cx + bW / 2 - 3;
    const tasY0 = capCY - hH / 2 - bH / 2;
    const swing = Math.sin(t * 0.038) * 6;
    ctx.globalAlpha = 0.55; ctx.strokeStyle = accent;
    ctx.lineWidth = 1.5; ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(tasX, tasY0);
    ctx.quadraticCurveTo(tasX + swing * 0.7, tasY0 + 10, tasX + swing, tasY0 + 22);
    ctx.stroke();
    // fringe
    [[- 4, 6],[0, 7],[4, 6]].forEach(([dx, dy]) => {
      ctx.globalAlpha = 0.38;
      ctx.beginPath();
      ctx.moveTo(tasX + swing, tasY0 + 22);
      ctx.lineTo(tasX + swing + dx, tasY0 + 22 + dy);
      ctx.stroke();
    });
    ctx.lineCap = "butt";
    ctx.globalAlpha = 0.82; ctx.fillStyle = accent;
    ctx.beginPath(); ctx.arc(tasX + swing, tasY0 + 24, 2.5, 0, Math.PI * 2); ctx.fill();

    ctx.globalAlpha = 1;
  }, [accent]);

  const ref = useCanvasArt(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ─────────────────────────────────────────────────────────
   ART 2 — BOOKS (12th Grade)
   Stack of books with floating knowledge particles
───────────────────────────────────────────────────────── */
function ArtBooks({ accent }) {
  const draw = useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, baseY = H * 0.72;

    /* ── floating subject particles ── */
    const subjects = ["Phy", "Che", "Math", "Bio"];
    subjects.forEach((s, i) => {
      const px = cx - 36 + i * 24;
      const py = baseY - 60 - Math.abs(Math.sin(t * 0.03 + i * 1.1)) * 22;
      const alpha = 0.2 + Math.abs(Math.sin(t * 0.04 + i)) * 0.25;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = accent;
      ctx.font = "bold 7px 'DM Sans',sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(s, px, py);
      // tiny dot under each
      ctx.beginPath(); ctx.arc(px, py + 8, 1, 0, Math.PI * 2); ctx.fill();
    });

    /* ── book stack ── */
    const books = [
      { w: 52, h: 11, color: accent, label: "Science",  xOff: 0,    yOff: 0 },
      { w: 46, h: 11, color: accent, label: "Maths",    xOff: -4,   yOff: -12 },
      { w: 50, h: 11, color: accent, label: "English",  xOff: 2,    yOff: -24 },
      { w: 42, h: 11, color: accent, label: "Notes",    xOff: -2,   yOff: -36 },
    ];

    books.forEach((b, i) => {
      const floatY = Math.sin(t * 0.035 + i * 0.5) * 2;
      const bx = cx - b.w / 2 + b.xOff;
      const by = baseY + b.yOff + floatY;

      // book shadow
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.roundRect(bx + 3, by + 3, b.w, b.h, 2); ctx.fill();

      // book body
      const alpha = 0.1 + (books.length - i) * 0.05;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.roundRect(bx, by, b.w, b.h, 2); ctx.fill();

      // spine line
      ctx.globalAlpha = 0.35 - i * 0.04;
      ctx.strokeStyle = accent; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(bx, by, b.w, b.h, 2); ctx.stroke();

      // spine left highlight
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.roundRect(bx, by, 5, b.h, [2, 0, 0, 2]); ctx.fill();

      // book label
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = accent;
      ctx.font = "bold 6.5px 'DM Sans',sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(b.label, bx + b.w / 2 + 3, by + b.h / 2);

      // page lines on right side
      for (let p = 0; p < 4; p++) {
        ctx.globalAlpha = 0.12;
        ctx.beginPath();
        ctx.moveTo(bx + b.w - 2, by + 2 + p * 2);
        ctx.lineTo(bx + b.w, by + 2 + p * 2);
        ctx.strokeStyle = accent; ctx.lineWidth = 0.8; ctx.stroke();
      }
    });

    /* ── pencil beside stack ── */
    const px2 = cx + 32, py2 = baseY - 14;
    const pencilAngle = -0.25 + Math.sin(t * 0.03) * 0.06;
    ctx.save(); ctx.translate(px2, py2); ctx.rotate(pencilAngle);
    // pencil body
    ctx.globalAlpha = 0.35; ctx.fillStyle = accent;
    ctx.beginPath(); ctx.roundRect(-3, -22, 6, 28, 1); ctx.fill();
    // tip
    ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.moveTo(-3, 6); ctx.lineTo(3, 6); ctx.lineTo(0, 12); ctx.closePath(); ctx.fill();
    // eraser
    ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.roundRect(-3, -26, 6, 5, 1); ctx.fill();
    ctx.restore();

    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; ctx.globalAlpha = 1;
  }, [accent]);

  const ref = useCanvasArt(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ─────────────────────────────────────────────────────────
   ART 3 — MORPHING STAR (10th Grade)
   Particles fly in from scatter positions → form a 5-point
   star → star pulses with glow + sparkle trails → dissolves
   back → repeats
───────────────────────────────────────────────────────── */
function ArtStar({ accent }) {
  const draw = useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;

    const POINTS  = 5;
    const CYCLE   = 200;
    const BUILD   = 65;   // 0–65:   particles converge into star
    const HOLD    = 135;  // 65–135: star holds, pulses, shoots trails
    // 135–200: star dissolves back to scatter

    const outerR = Math.min(W, H) * 0.28;
    const innerR = outerR * 0.42;
    const spin   = t * 0.007;
    const phase  = t % CYCLE;

    // ease cubic in-out
    const ease = p => p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2,3)/2;

    /* ── build the 10 star vertices in final (rotated) position ── */
    const finalVerts = [];
    for (let p = 0; p < POINTS; p++) {
      const aOut = (p / POINTS) * Math.PI * 2 - Math.PI / 2 + spin;
      const aIn  = aOut + Math.PI / POINTS;
      finalVerts.push(
        { x: cx + Math.cos(aOut) * outerR, y: cy + Math.sin(aOut) * outerR, outer: true  },
        { x: cx + Math.cos(aIn)  * innerR, y: cy + Math.sin(aIn)  * innerR, outer: false },
      );
    }

    /* ── scatter origins (fixed per vertex index) ── */
    const scatterVerts = finalVerts.map((_, i) => {
      const a = (i / finalVerts.length) * Math.PI * 2 + i * 0.38;
      const r = outerR * 1.55;
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
    });

    /* ── interpolate particle positions ── */
    let progEnter = 0, progExit = 0;
    if      (phase < BUILD)        progEnter = ease(phase / BUILD);
    else if (phase < HOLD)         progEnter = 1;
    else                           { progEnter = 1; progExit = ease((phase - HOLD) / (CYCLE - HOLD)); }

    const particles = finalVerts.map((fv, i) => {
      const sv = scatterVerts[i];
      const px = sv.x + (fv.x - sv.x) * progEnter - (fv.x - sv.x) * progExit;
      const py = sv.y + (fv.y - sv.y) * progEnter - (fv.y - sv.y) * progExit;
      const alpha = (0.5 + (fv.outer ? 0.4 : 0.2)) * (1 - progExit * 0.8);
      return { px, py, alpha, outer: fv.outer };
    });

    /* ── 1. draw connecting lines between consecutive particles ── */
    particles.forEach((p, i) => {
      const n = particles[(i + 1) % particles.length];
      ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(n.px, n.py);
      ctx.strokeStyle = accent;
      ctx.globalAlpha = Math.min(p.alpha, n.alpha) * 0.2;
      ctx.lineWidth = 0.8; ctx.stroke();
    });

    /* ── 2. draw particles ── */
    particles.forEach((p, i) => {
      const r = p.outer ? 3.5 : 2;
      // glow halo on outer points
      if (p.outer) {
        const g = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, 9);
        g.addColorStop(0, accent + "66"); g.addColorStop(1, accent + "00");
        ctx.globalAlpha = p.alpha * 0.5; ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.px, p.py, 9, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = p.alpha; ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(p.px, p.py, r, 0, Math.PI * 2); ctx.fill();
    });

    /* ── 3. filled + stroked star (only when mostly formed) ── */
    const starAlpha = Math.max(0, progEnter * 1.4 - 0.4) * (1 - progExit);
    if (starAlpha > 0.05) {
      const pulse = 1 + Math.sin(t * 0.08) * 0.045;

      // outer glow ring
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerR * pulse * 1.25);
      grd.addColorStop(0, accent + "22"); grd.addColorStop(1, accent + "00");
      ctx.globalAlpha = starAlpha * 0.7; ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(cx, cy, outerR * 1.25, 0, Math.PI * 2); ctx.fill();

      // star fill
      ctx.globalAlpha = starAlpha * 0.18; ctx.fillStyle = accent;
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(spin);
      ctx.beginPath();
      for (let p = 0; p < POINTS; p++) {
        const aO = (p / POINTS) * Math.PI * 2 - Math.PI / 2;
        const aI = aO + Math.PI / POINTS;
        p === 0 ? ctx.moveTo(Math.cos(aO)*outerR*pulse, Math.sin(aO)*outerR*pulse)
                : ctx.lineTo(Math.cos(aO)*outerR*pulse, Math.sin(aO)*outerR*pulse);
        ctx.lineTo(Math.cos(aI)*innerR*pulse, Math.sin(aI)*innerR*pulse);
      }
      ctx.closePath(); ctx.fill();

      // star stroke
      ctx.globalAlpha = starAlpha * 0.65; ctx.strokeStyle = accent; ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let p = 0; p < POINTS; p++) {
        const aO = (p / POINTS) * Math.PI * 2 - Math.PI / 2;
        const aI = aO + Math.PI / POINTS;
        p === 0 ? ctx.moveTo(Math.cos(aO)*outerR*pulse, Math.sin(aO)*outerR*pulse)
                : ctx.lineTo(Math.cos(aO)*outerR*pulse, Math.sin(aO)*outerR*pulse);
        ctx.lineTo(Math.cos(aI)*innerR*pulse, Math.sin(aI)*innerR*pulse);
      }
      ctx.closePath(); ctx.stroke();
      ctx.restore();

      /* ── sparkle trails from each outer tip ── */
      for (let p = 0; p < POINTS; p++) {
        const aO     = (p / POINTS) * Math.PI * 2 - Math.PI / 2 + spin;
        const tipX   = cx + Math.cos(aO) * outerR * pulse;
        const tipY   = cy + Math.sin(aO) * outerR * pulse;
        const tLen   = 12 + Math.abs(Math.sin(t * 0.09 + p * 1.3)) * 10;
        const tAlpha = starAlpha * (0.3 + Math.abs(Math.sin(t * 0.07 + p)) * 0.4);
        const grad   = ctx.createLinearGradient(tipX, tipY,
          tipX + Math.cos(aO)*tLen, tipY + Math.sin(aO)*tLen);
        grad.addColorStop(0, accent + "dd"); grad.addColorStop(1, accent + "00");
        ctx.globalAlpha = tAlpha; ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(tipX, tipY);
        ctx.lineTo(tipX + Math.cos(aO)*tLen, tipY + Math.sin(aO)*tLen);
        ctx.stroke(); ctx.lineCap = "butt";
      }
    }

    /* ── 4. centre core dot (always) ── */
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10);
    cg.addColorStop(0, accent + "bb"); cg.addColorStop(1, accent + "00");
    ctx.globalAlpha = 0.18 + Math.sin(t * 0.06) * 0.08;
    ctx.fillStyle = cg;
    ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2); ctx.fill();

    ctx.globalAlpha = 1;
  }, [accent]);

  const ref = useCanvasArt(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

const ART_MAP = { graduation: ArtGraduation, books: ArtBooks, star: ArtStar };

/* ─── MAIN COMPONENT ─── */
export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".ngEd-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("ng-in"); obs.unobserve(e.target); }
      }),
      { threshold: .1 }
    );
    cards.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ngEd {
          background: var(--bg-1); padding: 100px 3rem;
          position: relative; overflow: hidden;
          transition: background .4s ease;
        }
        .ngEd::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngEd::after {
          content:''; position:absolute; bottom:-180px; right:-180px;
          width:460px; height:460px;
          background:radial-gradient(circle, var(--acc-bg) 0%, transparent 70%);
          pointer-events:none;
        }
        .ngEd-inner { max-width:980px; margin:0 auto; position:relative; z-index:1; }
        .ngEd-hdr   { margin-bottom:64px; }

        /* timeline */
        .ngEd-timeline { position:relative; padding-left:28px; }
        .ngEd-timeline::before {
          content:''; position:absolute; left:0; top:20px; bottom:20px; width:1px;
          background:linear-gradient(180deg, var(--acc), var(--acc-bg));
        }

        /* card */
        .ngEd-card {
          position:relative; margin-bottom:26px;
          opacity:0; transform:translateX(-22px) scale(.985);
          transition:opacity .55s ease, transform .55s ease;
        }
        .ngEd-card:nth-child(2){ transition-delay:.12s; }
        .ngEd-card:nth-child(3){ transition-delay:.24s; }
        .ngEd-card.ng-in { opacity:1; transform:none; }

        /* timeline dot */
        .ngEd-card::before {
          content:''; position:absolute; left:-34px; top:28px;
          width:13px; height:13px; border-radius:50%;
          background:var(--card-acc, var(--acc));
          border:3px solid var(--bg-1);
          box-shadow:0 0 0 1px var(--card-acc, var(--acc)), 0 0 12px var(--acc-glow);
          transition:transform .3s ease;
        }
        .ngEd-card:hover::before { transform:scale(1.35); }

        /* two-col inner */
        .ngEd-ci {
          display:grid; grid-template-columns:148px 1fr;
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:18px; overflow:hidden;
          transition:border-color .4s, box-shadow .4s, transform .3s;
        }
        .ngEd-card.latest .ngEd-ci { border-color:var(--bdr-acc); }
        .ngEd-card:hover .ngEd-ci {
          border-color:var(--bdr-h); box-shadow:var(--sh-h); transform:translateX(6px);
        }

        /* art panel */
        .ngEd-art {
          position:relative; overflow:hidden; min-height:165px;
        }
        .ngEd-art-bg {
          position:absolute; inset:0; pointer-events:none;
          opacity:.6; transition:opacity .5s ease;
        }
        .ngEd-card:hover .ngEd-art-bg { opacity:1; }
        /* right fade into body */
        .ngEd-art-fade {
          position:absolute; top:0; right:0; bottom:0; width:36px;
          background:linear-gradient(90deg, transparent, var(--bg-card));
          pointer-events:none; z-index:3;
          transition:background .4s ease;
        }

        /* body */
        .ngEd-body {
          padding:22px 24px;
          display:flex; flex-direction:column; justify-content:space-between;
        }
        .ngEd-top {
          display:flex; align-items:flex-start;
          justify-content:space-between; gap:12px; margin-bottom:10px;
        }
        .ngEd-badge {
          padding:3px 10px; background:var(--bg-tag);
          border:1px solid var(--bdr-acc); border-radius:20px;
          font-family:'DM Sans',sans-serif; font-size:.58rem;
          letter-spacing:.08em; text-transform:uppercase; white-space:nowrap;
        }
        .ngEd-deg {
          font-family:'Syne',sans-serif; font-size:1.1rem;
          font-weight:800; color:var(--tx-1); margin-bottom:3px; line-height:1.2;
        }
        .ngEd-inst {
          font-family:'DM Sans',sans-serif; font-size:.78rem;
          color:var(--tx-2); font-weight:300; margin-bottom:4px; line-height:1.45;
        }
        .ngEd-field {
          font-family:'DM Sans',sans-serif; font-size:.7rem;
          color:var(--acc-d); font-style:italic; margin-bottom:14px;
        }
        .ngEd-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:14px; }
        .ngEd-tag {
          padding:3px 9px; background:var(--bg-tag); border:1px solid var(--bdr);
          border-radius:4px; font-family:'DM Sans',sans-serif;
          font-size:.62rem; color:var(--tx-3); letter-spacing:.04em;
          transition:all .3s ease;
        }
        .ngEd-card:hover .ngEd-tag { border-color:var(--bdr-acc); color:var(--acc-d); }
        .ngEd-bottom {
          display:flex; align-items:center; justify-content:space-between;
          padding-top:12px; border-top:1px solid var(--div);
        }
        .ngEd-score-wrap { display:flex; flex-direction:column; }
        .ngEd-score-lbl {
          font-family:'DM Sans',sans-serif; font-size:.58rem;
          color:var(--tx-3); letter-spacing:.12em; text-transform:uppercase;
        }
        .ngEd-score {
          font-family:'Syne',sans-serif; font-size:1.3rem;
          font-weight:800; line-height:1.15;
        }
        .ngEd-dur {
          font-family:'DM Sans',sans-serif; font-size:.68rem;
          color:var(--tx-3); letter-spacing:.1em; text-transform:uppercase;
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:20px; padding:4px 12px;
        }

        @media(max-width:768px){
          .ngEd{ padding:80px 1.5rem; }
          .ngEd-timeline{ padding-left:20px; }
          .ngEd-card::before{ left:-26px; }
          .ngEd-ci{ grid-template-columns:1fr; }
          .ngEd-art{ min-height:110px; }
          .ngEd-art-fade{
            top:auto; right:0; left:0; bottom:0; width:100%; height:30px;
            background:linear-gradient(0deg, var(--bg-card), transparent);
          }
        }
      `}</style>

      <section className="ngEd" ref={ref}>
        <div className="ngEd-inner">
          <div className="ngEd-hdr">
            <span className="ng-lbl">Academic Background</span>
            <h2 className="ng-hd">My Education</h2>
          </div>

          <div className="ngEd-timeline">
            {EDU.map((e, i) => {
              const ArtComp = ART_MAP[e.art];
              return (
                <div key={i} className={`ngEd-card${e.latest ? " latest" : ""}`}
                  style={{ "--card-acc": e.accent }}>
                  <div className="ngEd-ci">

                    {/* art panel */}
                    <div className="ngEd-art">
                      <div className="ngEd-art-bg"
                        style={{ background:`radial-gradient(ellipse at 45% 50%, ${e.accent}22 0%, transparent 75%)` }} />
                      {ArtComp && <ArtComp accent={e.accent} />}
                      <div className="ngEd-art-fade" />
                    </div>

                    {/* content */}
                    <div className="ngEd-body">
                      <div>
                        <div className="ngEd-top">
                          <div />
                          {e.latest && (
                            <div className="ngEd-badge" style={{ color:e.accent, borderColor:`${e.accent}55` }}>
                              Latest
                            </div>
                          )}
                        </div>
                        <div className="ngEd-deg">{e.degree}</div>
                        <div className="ngEd-inst">{e.inst}</div>
                        <div className="ngEd-field">{e.field}</div>
                        <div className="ngEd-tags">
                          {e.highlights.map((h, j) => (
                            <span key={j} className="ngEd-tag">{h}</span>
                          ))}
                        </div>
                      </div>
                      <div className="ngEd-bottom">
                        <div className="ngEd-score-wrap">
                          <span className="ngEd-score-lbl">{e.scoreLabel}</span>
                          <span className="ngEd-score" style={{ color:e.accent }}>{e.score}</span>
                        </div>
                        <div className="ngEd-dur">{e.dur}</div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}