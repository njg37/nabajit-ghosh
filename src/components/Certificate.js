import React, { useState, useEffect, useRef } from "react";
import WiproTalentNextJavaFullStackCertification from "../images/WiproTalentNextJavaFullStackCertification.png";
import CleanCodeOOPCertificate                  from "../images/CleanCodeOOPCertificate.png";
import ReactJsCertificate                       from "../images/ReactJsCertificate.png";

const CERTS = [
  {
    id: 1, title: "React JS – Beginner to Expert",
    issuer: "Udemy", tag: "Frontend", art: "react",
    img: ReactJsCertificate,
    link: "https://www.udemy.com/certificate/UC-0d0b2a1b-42d5-4e89-8ee7-a0109272163f/",
    desc: "React fundamentals, hooks, state management, routing, and performance optimization.",
  },
  {
    id: 2, title: "Clean Code & OOP Design",
    issuer: "Udemy", tag: "Architecture", art: "oop",
    img: CleanCodeOOPCertificate,
    link: "https://www.udemy.com/certificate/UC-901bbaf1-5635-42b5-aea6-879dbf444760/",
    desc: "Clean code practices, object-oriented design principles, and software architecture patterns.",
  },
  {
    id: "w", title: "Java Full Stack Certification",
    issuer: "Wipro TalentNext", tag: "Full Stack", art: "stack",
    img: WiproTalentNextJavaFullStackCertification,
    link: null,
    desc: "Core Java, front-end technologies, databases, and full-stack application development.",
  },
  {
    id: "internship", title: "Internship & Job Preparation",
    issuer: "Internshala", tag: "Career", art: "career",
    img: null,
    link: "https://drive.google.com/file/d/1hRiIdWTRZ4Cdtk-awc7zALYMG7Ke1xQx/view?usp=drive_link",
    desc: "4-week training covering job hunt strategies, career readiness, front-end skills, and a final capstone project.",
  },
  {
    id: "aws", title: "Cloud Computing with AWS",
    issuer: "Internshala", tag: "Cloud", art: "cloud",
    img: null,
    link: "https://drive.google.com/file/d/14UZpAx1AKGwwVyx8340VAEyYW-F9amgq/view?usp=sharing",
    desc: "6-week program covering IAM, S3, VPC, EC2, RDS, advanced AWS services, security, billing, and a final project.",
  },
];

const TAG_ACCENT = {
  Frontend:     "#00ffc8",
  Architecture: "#7c6cfc",
  "Full Stack":  "#fc6c8f",
  Career:       "#f5a623",
  Cloud:        "#4ecdc4",
};

/* ── helper: create canvas hook ── */
function useCanvas(draw) {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const resize = () => { cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight; };
    resize();
    let tick = 0; let raf;
    const loop = () => { draw(ctx, cvs.width, cvs.height, tick); tick++; raf = requestAnimationFrame(loop); };
    loop();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [draw]);
  return ref;
}

/* ── ART: React — spinning atom + component tree ── */
function ArtReact({ accent }) {
  const draw = React.useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H * 0.42;
    [0, Math.PI / 3, (2 * Math.PI) / 3].forEach((base, oi) => {
      const rx = 50, ry = 17;
      ctx.save(); ctx.translate(cx, cy);
      ctx.rotate(base + t * 0.014 * (oi % 2 === 0 ? 1 : -1));
      ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = accent; ctx.globalAlpha = 0.12; ctx.lineWidth = 1; ctx.stroke();
      const ea = t * 0.055 * (oi % 2 === 0 ? 1 : -1);
      const ex = Math.cos(ea) * rx, ey = Math.sin(ea) * ry;
      for (let tr = 1; tr <= 5; tr++) {
        const ta = ea - tr * 0.11 * (oi % 2 === 0 ? 1 : -1);
        ctx.globalAlpha = 0.1 * (1 - tr / 6); ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(Math.cos(ta) * rx, Math.sin(ta) * ry, 3, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 0.9; ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(ex, ey, 3.5, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    });
    const p = 1 + Math.sin(t * 0.05) * 0.2;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 13 * p);
    g.addColorStop(0, accent + "cc"); g.addColorStop(1, accent + "00");
    ctx.globalAlpha = 1; ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, 13 * p, 0, Math.PI * 2); ctx.fill();
    // component tree
    const bx = cx - 36, by = cy + 36;
    [[bx,by,bx-22,by+17],[bx,by,bx+22,by+17],[bx-22,by+17,bx-32,by+31],[bx-22,by+17,bx-12,by+31],[bx+22,by+17,bx+12,by+31],[bx+22,by+17,bx+32,by+31]]
      .forEach(([x1,y1,x2,y2]) => { ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.strokeStyle=accent; ctx.globalAlpha=0.16; ctx.lineWidth=1; ctx.stroke(); });
    [[bx,by],[bx-22,by+17],[bx+22,by+17],[bx-32,by+31],[bx-12,by+31],[bx+12,by+31],[bx+32,by+31]]
      .forEach(([nx,ny],i) => { ctx.globalAlpha=0.22+Math.sin(t*.04+i)*.08; ctx.fillStyle=accent; ctx.beginPath(); ctx.arc(nx,ny,3,0,Math.PI*2); ctx.fill(); });
    ctx.globalAlpha = 1;
  }, [accent]);
  const ref = useCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ── ART: OOP — class hierarchy ── */
function ArtOOP({ accent }) {
  const draw = React.useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2;
    const nodes = [
      { x:cx,      y:H*.12, label:"Shape",   w:70, h:22 },
      { x:cx-62,   y:H*.42, label:"Circle",  w:60, h:22 },
      { x:cx+62,   y:H*.42, label:"Rect",    w:60, h:22 },
      { x:cx-62,   y:H*.72, label:"draw()",  w:56, h:18 },
      { x:cx+62,   y:H*.72, label:"area()",  w:56, h:18 },
    ];
    [[0,1],[0,2],[1,3],[2,4]].forEach(([a,b]) => {
      const n1=nodes[a], n2=nodes[b];
      ctx.beginPath(); ctx.moveTo(n1.x, n1.y+n1.h/2); ctx.lineTo(n2.x, n2.y-n2.h/2);
      ctx.strokeStyle=accent; ctx.globalAlpha=0.16; ctx.lineWidth=1; ctx.stroke();
      const ang=Math.atan2(n2.y-n1.y,n2.x-n1.x), tx=n2.x, ty=n2.y-n2.h/2;
      ctx.globalAlpha=0.28; ctx.fillStyle=accent;
      ctx.beginPath(); ctx.moveTo(tx,ty);
      ctx.lineTo(tx-6*Math.cos(ang-.4),ty-6*Math.sin(ang-.4));
      ctx.lineTo(tx-6*Math.cos(ang+.4),ty-6*Math.sin(ang+.4));
      ctx.closePath(); ctx.fill();
    });
    nodes.forEach((n,i) => {
      const p=Math.sin(t*.04+i*.8)*.06;
      ctx.globalAlpha=.09+p; ctx.fillStyle=accent;
      ctx.beginPath(); ctx.roundRect(n.x-n.w/2,n.y-n.h/2,n.w,n.h,5); ctx.fill();
      ctx.globalAlpha=.35; ctx.strokeStyle=accent; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(n.x-n.w/2,n.y-n.h/2,n.w,n.h,5); ctx.stroke();
      ctx.globalAlpha=.75; ctx.fillStyle=accent;
      ctx.font=`${i<3?"bold ":""}8px 'DM Sans',monospace`;
      ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.fillText(n.label,n.x,n.y);
    });
    ctx.textAlign="left"; ctx.textBaseline="alphabetic"; ctx.globalAlpha=1;
  }, [accent]);
  const ref = useCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ── ART: Full Stack — layered stack ── */
function ArtStack({ accent }) {
  const draw = React.useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const layers=[
      {label:"Frontend  (React)",depth:0},
      {label:"Backend   (Java)", depth:1},
      {label:"Database  (NoSQL)",  depth:2},
     { label: "Infra     (Cloud)",    depth: 3 },
    ];
    const lW=W*.6, lH=21, gap=28;
    const sy=H/2-(layers.length*(lH+gap))/2+8;
    layers.forEach((l,i) => {
      const x=(W-lW)/2+l.depth*5, y=sy+i*(lH+gap);
      const fl=Math.sin(t*.035+i*.9)*3;
      ctx.globalAlpha=.06; ctx.fillStyle=accent;
      ctx.beginPath(); ctx.roundRect(x+4,y+fl+4,lW,lH,6); ctx.fill();
      ctx.globalAlpha=.07+(layers.length-i)*.04; ctx.fillStyle=accent;
      ctx.beginPath(); ctx.roundRect(x,y+fl,lW,lH,6); ctx.fill();
      ctx.globalAlpha=.28-i*.03; ctx.strokeStyle=accent; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(x,y+fl,lW,lH,6); ctx.stroke();
      const sx=((t*1.5+i*25)%(lW+30))-15;
      ctx.globalAlpha=.07; ctx.fillStyle="#fff";
      ctx.beginPath(); ctx.roundRect(x+sx,y+fl,10,lH,6); ctx.fill();
      ctx.globalAlpha=.7; ctx.fillStyle=accent;
      ctx.font="bold 7.5px 'DM Sans',monospace";
      ctx.textAlign="left"; ctx.textBaseline="middle";
      ctx.fillText(l.label,x+10,y+fl+lH/2);
      ctx.globalAlpha=.5+Math.sin(t*.06+i)*.3;
      ctx.beginPath(); ctx.arc(x+lW-10,y+fl+lH/2,3,0,Math.PI*2); ctx.fill();
      if(i<layers.length-1){
        const nx=(W-lW)/2+layers[i+1].depth*5, ny=sy+(i+1)*(lH+gap);
        ctx.globalAlpha=.08; ctx.beginPath();
        ctx.moveTo(x+lW/2,y+fl+lH);
        ctx.lineTo(nx+lW/2,ny+Math.sin(t*.035+(i+1)*.9)*3);
        ctx.strokeStyle=accent; ctx.lineWidth=1; ctx.stroke();
      }
    });
    ctx.textAlign="left"; ctx.textBaseline="alphabetic"; ctx.globalAlpha=1;
  }, [accent]);
  const ref = useCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ── ART: Career — animated roadmap ── */
function ArtCareer({ accent }) {
  const draw = React.useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const steps=[
      {label:"Job Hunt",     pct:.14},
      {label:"Build Skills", pct:.38},
      {label:"Frontend",     pct:.62},
      {label:"Final Project",pct:.86},
    ];
    const y=H/2, x0=W*.1, x1=W*.9;
    ctx.beginPath(); ctx.moveTo(x0,y); ctx.lineTo(x1,y);
    ctx.strokeStyle=accent; ctx.globalAlpha=.1; ctx.lineWidth=3; ctx.stroke();
    const fp=.5+Math.sin(t*.022)*.5;
    ctx.beginPath(); ctx.moveTo(x0,y); ctx.lineTo(x0+(x1-x0)*fp,y);
    ctx.strokeStyle=accent; ctx.globalAlpha=.45; ctx.lineWidth=3; ctx.stroke();
    steps.forEach((s,i) => {
      const sx=x0+(x1-x0)*s.pct, done=fp>s.pct, p=Math.sin(t*.05+i)*2;
      ctx.beginPath(); ctx.arc(sx,y,9+(done?p:0),0,Math.PI*2);
      ctx.strokeStyle=accent; ctx.globalAlpha=done?.4:.1; ctx.lineWidth=1; ctx.stroke();
      ctx.beginPath(); ctx.arc(sx,y,5,0,Math.PI*2);
      ctx.fillStyle=accent; ctx.globalAlpha=done?.9:.2; ctx.fill();
      const above=i%2===0;
      ctx.globalAlpha=done?.75:.22; ctx.fillStyle=accent;
      ctx.font="bold 7px 'DM Sans',sans-serif";
      ctx.textAlign="center"; ctx.textBaseline=above?"bottom":"top";
      ctx.fillText(s.label,sx,y+(above?-14:14));
      ctx.globalAlpha=done?.38:.1; ctx.font="6px 'DM Sans',sans-serif";
      ctx.textBaseline=above?"top":"bottom";
      ctx.fillText(`W${i+1}`,sx,y+(above?14:-14));
    });
    const cx2=x0+(x1-x0)*fp;
    ctx.globalAlpha=.9; ctx.fillStyle=accent;
    ctx.beginPath(); ctx.arc(cx2,y,5,0,Math.PI*2); ctx.fill();
    const g=ctx.createRadialGradient(cx2,y,0,cx2,y,14);
    g.addColorStop(0,accent+"66"); g.addColorStop(1,accent+"00");
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx2,y,14,0,Math.PI*2); ctx.fill();
    ctx.textAlign="left"; ctx.textBaseline="alphabetic"; ctx.globalAlpha=1;
  }, [accent]);
  const ref = useCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

/* ── ART: Cloud — AWS services constellation ── */
function ArtCloud({ accent }) {
  const draw = React.useCallback((ctx, W, H, t) => {
    ctx.clearRect(0, 0, W, H);
    const cx=W/2, cy=H/2+4;
    const svcs=[
      {label:"EC2", angle:0,            r:54},
      {label:"S3",  angle:Math.PI/2,    r:54},
      {label:"VPC", angle:Math.PI,      r:54},
      {label:"RDS", angle:3*Math.PI/2,  r:54},
      {label:"CF",  angle:Math.PI/4,    r:76},
      {label:"LB",  angle:3*Math.PI/4,  r:76},
      {label:"SG",  angle:5*Math.PI/4,  r:76},
    ];
    svcs.forEach((s,i) => {
      const ang=s.angle+t*.008*(i%2===0?1:-.6);
      const px=cx+Math.cos(ang)*s.r, py=cy+Math.sin(ang)*s.r;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(px,py);
      ctx.strokeStyle=accent; ctx.globalAlpha=.08; ctx.lineWidth=1; ctx.stroke();
      const p=1+Math.sin(t*.05+i)*.1;
      ctx.globalAlpha=.1*p; ctx.fillStyle=accent;
      ctx.beginPath(); ctx.roundRect(px-14,py-8,28,16,4); ctx.fill();
      ctx.globalAlpha=.32; ctx.strokeStyle=accent; ctx.lineWidth=.8;
      ctx.beginPath(); ctx.roundRect(px-14,py-8,28,16,4); ctx.stroke();
      ctx.globalAlpha=.72; ctx.fillStyle=accent;
      ctx.font="bold 7px 'DM Sans',monospace";
      ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.fillText(s.label,px,py);
    });
    const cp=1+Math.sin(t*.04)*.15;
    const g=ctx.createRadialGradient(cx,cy,0,cx,cy,20*cp);
    g.addColorStop(0,accent+"55"); g.addColorStop(1,accent+"00");
    ctx.globalAlpha=1; ctx.fillStyle=g;
    ctx.beginPath(); ctx.arc(cx,cy,20*cp,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=.92; ctx.fillStyle=accent;
    ctx.font="bold 8px 'DM Sans',monospace";
    ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.fillText("IAM",cx,cy);
    ctx.textAlign="left"; ctx.textBaseline="alphabetic"; ctx.globalAlpha=1;
  }, [accent]);
  const ref = useCanvas(draw);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }} />;
}

const ART_MAP = { react:ArtReact, oop:ArtOOP, stack:ArtStack, career:ArtCareer, cloud:ArtCloud };

/* ── MAIN ── */
export default function Certificate() {
  const [modal, setModal] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".ngCe-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("ng-in"); obs.unobserve(e.target); } }),
      { threshold: .07 }
    );
    cards.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = e => { if (e.key === "Escape") setModal(null); };
    if (modal) { document.addEventListener("keydown", fn); document.body.style.overflow = "hidden"; }
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <>
      <style>{`
        .ngCe {
          background:var(--bg-0); padding:100px 3rem;
          position:relative; overflow:hidden; transition:background .4s ease;
        }
        .ngCe::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngCe-inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
        .ngCe-hdr   { margin-bottom:60px; }
        .ngCe-strip { display:flex; gap:32px; margin-top:18px; }
        .ngCe-stat  { display:flex; flex-direction:column; }
        .ngCe-sn {
          font-family:'Syne',sans-serif; font-size:1.55rem;
          font-weight:800; color:var(--acc); line-height:1;
        }
        .ngCe-sl {
          font-family:'DM Sans',sans-serif; font-size:.62rem; font-weight:500;
          letter-spacing:.12em; text-transform:uppercase; color:var(--tx-3); margin-top:3px;
        }

        .ngCe-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(285px,1fr)); gap:18px;
        }
        .ngCe-card {
          opacity:0; transform:translateY(22px) scale(.975);
          transition:opacity .5s ease, transform .5s ease;
        }
        .ngCe-card:nth-child(2){transition-delay:.07s}
        .ngCe-card:nth-child(3){transition-delay:.14s}
        .ngCe-card:nth-child(4){transition-delay:.21s}
        .ngCe-card:nth-child(5){transition-delay:.28s}
        .ngCe-card.ng-in{ opacity:1; transform:none; }

        .ngCe-ci {
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:16px; overflow:hidden;
          transition:border-color .4s, transform .4s, box-shadow .3s;
          position:relative; cursor:default;
        }
        .ngCe-ci.clickable { cursor:pointer; }
        .ngCe-ci:hover { transform:translateY(-6px); box-shadow:var(--sh-h); }
        .ngCe-ci::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:var(--card-acc, var(--acc));
          transform:scaleX(0); transform-origin:left; transition:transform .45s ease;
        }
        .ngCe-ci:hover::after { transform:scaleX(1); }

        /* art */
        .ngCe-art {
          position:relative; height:160px; overflow:hidden; background:var(--bg-tag);
        }
        .ngCe-art-bg {
          position:absolute; inset:0; pointer-events:none;
          opacity:.55; transition:opacity .5s ease;
        }
        .ngCe-ci:hover .ngCe-art-bg { opacity:1; }
        .ngCe-art-fade {
          position:absolute; bottom:0; left:0; right:0; height:44px;
          background:linear-gradient(0deg,var(--bg-card),transparent);
          pointer-events:none; z-index:2;
        }
        .ngCe-zoom {
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%) scale(.8);
          width:38px; height:38px; background:var(--acc-bg);
          border:1px solid var(--bdr-acc); border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          opacity:0; color:var(--acc); font-size:.85rem;
          transition:opacity .3s, transform .3s; z-index:3;
        }
        .ngCe-ci:hover .ngCe-zoom { opacity:1; transform:translate(-50%,-50%) scale(1); }

        /* body */
        .ngCe-body { padding:16px 18px 18px; }
        .ngCe-meta { display:flex; align-items:center; justify-content:space-between; margin-bottom:7px; }
        .ngCe-issuer {
          font-family:'DM Sans',sans-serif; font-size:.62rem;
          font-weight:600; letter-spacing:.1em; text-transform:uppercase;
        }
        .ngCe-tag {
          padding:2px 9px; background:var(--bg-tag); border:1px solid var(--bdr-acc);
          border-radius:20px; font-family:'DM Sans',sans-serif;
          font-size:.57rem; letter-spacing:.05em;
        }
        .ngCe-title {
          font-family:'Syne',sans-serif; font-size:.9rem;
          font-weight:700; color:var(--tx-1); margin-bottom:5px; line-height:1.3;
        }
        .ngCe-desc {
          font-family:'DM Sans',sans-serif; font-size:.73rem;
          line-height:1.62; color:var(--tx-2); font-weight:300; margin-bottom:13px;
        }
        .ngCe-foot { display:flex; gap:7px; }
        .ngCe-lnk {
          display:inline-flex; align-items:center; gap:4px; padding:6px 13px;
          border-radius:6px; font-family:'DM Sans',sans-serif; font-size:.63rem;
          font-weight:500; letter-spacing:.07em; text-transform:uppercase;
          text-decoration:none; background:var(--bg-tag); transition:all .3s ease;
        }
        .ngCe-lnk:hover { background:var(--acc-bg); }
        .ngCe-viewbtn {
          display:inline-flex; align-items:center; gap:4px; padding:6px 13px;
          border:1px solid var(--bdr); border-radius:6px;
          font-family:'DM Sans',sans-serif; font-size:.63rem;
          font-weight:500; letter-spacing:.07em; text-transform:uppercase;
          color:var(--tx-3); background:transparent; cursor:pointer; transition:all .3s ease;
        }
        .ngCe-viewbtn:hover { border-color:var(--bdr-h); color:var(--tx-1); }

        /* modal */
        .ngCe-modal {
          position:fixed; inset:0; background:rgba(0,0,0,.9);
          backdrop-filter:blur(16px); z-index:9999;
          display:flex; align-items:center; justify-content:center;
          padding:2rem; animation:ngMF .22s ease;
        }
        @keyframes ngMF { from{opacity:0} to{opacity:1} }
        .ngCe-mWrap {
          position:relative; max-width:880px; width:100%;
          animation:ngMS .3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes ngMS { from{transform:scale(.88)} to{transform:scale(1)} }
        .ngCe-mWrap img {
          width:100%; height:auto; max-height:88vh;
          object-fit:contain; border-radius:12px; display:block;
        }
        .ngCe-mClose {
          position:absolute; top:-13px; right:-13px; width:34px; height:34px;
          background:var(--bg-nav); border:1px solid var(--bdr); border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:var(--tx-3); font-size:.9rem; transition:all .3s ease;
        }
        .ngCe-mClose:hover { border-color:var(--bdr-h); color:var(--acc); background:var(--acc-bg); }

        @media(max-width:768px){
          .ngCe{ padding:80px 1.5rem; }
          .ngCe-grid{ grid-template-columns:1fr 1fr; }
          .ngCe-strip{ gap:20px; }
        }
        @media(max-width:480px){ .ngCe-grid{ grid-template-columns:1fr; } }
      `}</style>

      <section className="ngCe" ref={ref}>
        <div className="ngCe-inner">
          <div className="ngCe-hdr">
            <span className="ng-lbl">Credentials</span>
            <h2 className="ng-hd">My Certificates</h2>
            <div className="ngCe-strip">
              <div className="ngCe-stat"><span className="ngCe-sn">5</span><span className="ngCe-sl">Total</span></div>
              <div className="ngCe-stat"><span className="ngCe-sn">3</span><span className="ngCe-sl">Platforms</span></div>
              <div className="ngCe-stat"><span className="ngCe-sn">10+</span><span className="ngCe-sl">Weeks trained</span></div>
            </div>
          </div>

          <div className="ngCe-grid">
            {CERTS.map(c => {
              const acc = TAG_ACCENT[c.tag] || "var(--acc)";
              const ArtComp = ART_MAP[c.art];
              return (
                <div key={c.id} className="ngCe-card">
                  <div
                    className={`ngCe-ci${c.img ? " clickable" : ""}`}
                    style={{ "--card-acc": acc, borderColor: `${acc}28` }}
                    onClick={() => c.img && setModal(c.img)}
                  >
                    <div className="ngCe-art">
                      <div
                        className="ngCe-art-bg"
                        style={{ background:`radial-gradient(ellipse at 55% 45%, ${acc}1c 0%, transparent 72%)` }}
                      />
                      {ArtComp && <ArtComp accent={acc} />}
                      {c.img && <div className="ngCe-zoom">⤢</div>}
                      <div className="ngCe-art-fade" />
                    </div>

                    <div className="ngCe-body">
                      <div className="ngCe-meta">
                        <span className="ngCe-issuer" style={{ color: acc }}>{c.issuer}</span>
                        <span className="ngCe-tag" style={{ borderColor:`${acc}44`, color: acc }}>{c.tag}</span>
                      </div>
                      <div className="ngCe-title">{c.title}</div>
                      <div className="ngCe-desc">{c.desc}</div>
                      <div className="ngCe-foot" onClick={e => e.stopPropagation()}>
                        {c.link ? (
                          <a
                            href={c.link} target="_blank" rel="noopener noreferrer"
                            className="ngCe-lnk"
                            style={{ border:`1px solid ${acc}55`, color: acc }}
                          >
                            Verify ↗
                          </a>
                        ) : (
                          <button className="ngCe-viewbtn" onClick={() => setModal(c.img)}>
                            View Full
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {modal && (
        <div className="ngCe-modal" onClick={() => setModal(null)}>
          <div className="ngCe-mWrap" onClick={e => e.stopPropagation()}>
            <img src={modal} alt="Certificate full view" />
            <button className="ngCe-mClose" onClick={() => setModal(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}