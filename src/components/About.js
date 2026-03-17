import React, { useEffect, useRef } from "react";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import njg from "../images/photo.png";

const STATS = [
  { n:"2+",  l:"Internships" },
  { n:"6+",  l:"Projects" },
  { n:"8.12",l:"CGPA" },
  { n:"7+",  l:"Certificates" },
];
const TAGS = ["MERN Stack","React.js","Node.js","MongoDB","Python DSA","Java LLD","PHP"];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ng-in"); obs.disconnect(); } },
      { threshold:.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ngAb {
          min-height:100vh; background:var(--bg-1);
          display:flex; align-items:center;
          padding:100px 3rem; position:relative; overflow:hidden;
          transition:background .4s ease;
        }
        .ngAb::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngAb-inner {
          max-width:1100px; margin:0 auto; width:100%;
          display:grid; grid-template-columns:1fr 1.55fr; gap:72px; align-items:center;
        }
        /* left col */
        .ngAb-imgC {
          opacity:0; transform:translateX(-28px) scale(.98);
          transition:opacity .65s ease, transform .65s ease;
        }
        .ngAb-inner.ng-in .ngAb-imgC { opacity:1; transform:none; }
        .ngAb-frame {
          border-radius:20px; overflow:hidden; position:relative;
        }
        .ngAb-frame::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,var(--acc-bg),transparent 60%);
          z-index:1; pointer-events:none; border-radius:20px;
        }
        .ngAb-frame img {
          width:100%; height:420px; object-fit:cover; display:block;
          border-radius:20px; filter:var(--img-f);
          transition:filter .5s ease, transform .5s ease;
        }
        .ngAb-frame:hover img { filter:var(--img-fh); transform:scale(1.02); }
        /* corner brackets */
        .ngAb-br {
          position:absolute; width:52px; height:52px;
          border-color:var(--acc); border-style:solid; border-width:0;
        }
        .ngAb-tl { top:-7px;left:-7px; border-top-width:2px; border-left-width:2px; border-radius:5px 0 0 0; }
        .ngAb-br2{ bottom:-7px;right:-7px; border-bottom-width:2px; border-right-width:2px; border-radius:0 0 5px 0; }

        /* stats strip */
        .ngAb-stats {
          display:grid; grid-template-columns:1fr 1fr;
          gap:10px; margin-top:20px;
        }
        .ngAb-stat {
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:12px; padding:14px; text-align:center;
          transition:border-color .3s, background .3s, box-shadow .3s;
        }
        .ngAb-stat:hover {
          border-color:var(--bdr-h); background:var(--bg-card-h);
          box-shadow:var(--sh);
        }
        .ngAb-sn {
          font-family:'Syne',sans-serif; font-size:1.55rem;
          font-weight:800; color:var(--acc); line-height:1;
        }
        .ngAb-sl {
          font-family:'DM Sans',sans-serif; font-size:.63rem;
          color:var(--tx-3); letter-spacing:.12em; text-transform:uppercase;
          margin-top:3px;
        }
        /* right col */
        .ngAb-txtC {
          opacity:0; transform:translateX(28px) scale(.98);
          transition:opacity .65s .15s ease, transform .65s .15s ease;
        }
        .ngAb-inner.ng-in .ngAb-txtC { opacity:1; transform:none; }
        .ngAb-bio {
          font-family:'DM Sans',sans-serif; font-size:.93rem;
          line-height:1.85; color:var(--tx-2); font-weight:300;
          margin-bottom:32px;
          border-left:2px solid var(--acc-s); padding-left:20px;
        }
        .ngAb-bio strong { color:var(--tx-1); font-weight:500; }
        .ngAb-tags { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:32px; }
        .ngAb-tag {
          padding:5px 13px; border:1px solid var(--bdr-acc);
          border-radius:4px; font-family:'DM Sans',sans-serif;
          font-size:.68rem; font-weight:500; color:var(--acc-d);
          letter-spacing:.06em; text-transform:uppercase;
          background:var(--bg-tag);
          transition:all .3s ease;
        }
        .ngAb-tag:hover { background:var(--acc-bg); color:var(--acc); border-color:var(--acc-s); }
        .ngAb-actions { display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
        .ngAb-dl {
          display:inline-flex; align-items:center; gap:9px;
          padding:13px 24px; background:var(--btn-bg); color:var(--btn-tx);
          font-family:'Syne',sans-serif; font-size:.78rem; font-weight:700;
          letter-spacing:.05em; text-transform:uppercase; border-radius:7px;
          text-decoration:none; transition:all .3s ease;
          position:relative; overflow:hidden;
        }
        .ngAb-dl::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,.18);
          transform:translateX(-100%) skewX(-15deg);
          transition:transform .4s ease;
        }
        .ngAb-dl:hover::before { transform:translateX(150%) skewX(-15deg); }
        .ngAb-dl:hover { box-shadow:var(--sh-acc); transform:translateY(-2px); }
        .ngAb-socials { display:flex; gap:9px; }
        .ngAb-si {
          width:40px; height:40px; display:flex; align-items:center;
          justify-content:center; border:1px solid var(--bdr);
          border-radius:8px; color:var(--tx-3); font-size:.95rem;
          text-decoration:none; transition:all .3s ease;
        }
        .ngAb-si:hover {
          border-color:var(--bdr-h); color:var(--acc);
          background:var(--acc-bg); transform:translateY(-3px);
        }

        @media(max-width:900px){
          .ngAb-inner { grid-template-columns:1fr; gap:36px; }
          .ngAb-frame img { height:280px; }
          .ngAb { padding:80px 1.5rem; }
        }
      `}</style>

      <section className="ngAb">
        <div className="ngAb-inner ng-rv" ref={ref}>
          {/* left */}
          <div className="ngAb-imgC">
            <div className="ngAb-frame">
              <img src={njg} alt="Nabajit Ghosh" />
              <div className="ngAb-br ngAb-tl" />
              <div className="ngAb-br ngAb-br2" />
            </div>
            <div className="ngAb-stats">
              {STATS.map(s => (
                <div key={s.l} className="ngAb-stat">
                  <div className="ngAb-sn">{s.n}</div>
                  <div className="ngAb-sl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="ngAb-txtC">
            <span className="ng-lbl">Who I Am</span>
            <h2 className="ng-hd" style={{ marginBottom:"28px" }}>About Me</h2>
            <p className="ngAb-bio">
              Hi, I'm <strong>Nabajit Ghosh</strong> — a Software Developer skilled in building
              responsive and dynamic web applications using the <strong>MERN stack</strong>. I also
              work with <strong>Python</strong> for DSA, and have a foundational understanding of
              Java and low-level design concepts. I enjoy learning new technologies and solving
              real-world problems through code.
            </p>
            <div className="ngAb-tags">
              {TAGS.map(t => <span key={t} className="ngAb-tag">{t}</span>)}
            </div>
            <div className="ngAb-actions">
              <a
                href="https://drive.google.com/file/d/1Ri4qDqNSeaxhqIrolkxeqa_u0Oc5-Omb/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="ngAb-dl"
              >
                <FaDownload size={12} /> Download Resume
              </a>
              <div className="ngAb-socials">
                {[
                  { h:"https://linkedin.com/in/nabajit-ghosh", i:<FaLinkedin /> },
                  { h:"https://github.com/njg37",              i:<FaGithub /> },
                  { h:"mailto:nabajitghosh225@gmail.com",      i:<FaEnvelope /> },
                ].map((s,i) => (
                  <a key={i} href={s.h} target={s.h.startsWith("http")?"_blank":undefined}
                     rel="noopener noreferrer" className="ngAb-si">{s.i}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}