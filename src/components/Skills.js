import React, { useEffect, useRef } from "react";
import {
  FaPython,FaJava,FaPhp,FaReact,FaNodeJs,FaGithub,
  FaHtml5,FaCss3Alt,FaJsSquare,FaRobot,FaBrain,FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,SiNextdotjs,SiMongodb,SiMysql,SiPostman,
  SiVisualstudiocode,SiIntellijidea,SiGithubpages,SiRender,
} from "react-icons/si";

const DATA = [
  { cat:"Languages", skills:[
    {n:"Python",     i:<FaPython />,         d:"Used for DSA and problem-solving."},
    {n:"Java",       i:<FaJava />,           d:"Basic knowledge; learned for LLD."},
    {n:"PHP",        i:<FaPhp />,            d:"Internship backend development."},
    {n:"HTML",       i:<FaHtml5 />,          d:"Core frontend language."},
    {n:"CSS",        i:<FaCss3Alt />,        d:"Used for styling web pages."},
    {n:"JavaScript", i:<FaJsSquare />,       d:"Used in multiple projects."},
    {n:"TypeScript", i:<SiTypescript />,     d:"Used in one Next.js project."},
  ]},
  { cat:"Frontend", skills:[
    {n:"ReactJS",    i:<FaReact />,          d:"Main frontend library."},
    {n:"Next.js",    i:<SiNextdotjs />,      d:"Used with TypeScript."},
  ]},
  { cat:"Backend", skills:[
    {n:"Node.js",    i:<FaNodeJs />,         d:"Used in MERN stack projects."},
    {n:"Express.js", i:<FaNodeJs />,         d:"Used in MERN stack projects."},
    {n:"PHP",        i:<FaPhp />,            d:"Internship backend."},
  ]},
  { cat:"Databases", skills:[
    {n:"MongoDB",    i:<SiMongodb />,        d:"Used in MERN stack projects."},
    {n:"MySQL",      i:<SiMysql />,          d:"Internship CRUD operations."},
  ]},
  { cat:"Tools", skills:[
    {n:"Git & GitHub",   i:<FaGithub />,         d:"Version control and repos."},
    {n:"Postman",        i:<SiPostman />,        d:"API testing and debugging."},
    {n:"VS Code",        i:<SiVisualstudiocode />,d:"Primary code editor."},
    {n:"IntelliJ IDEA",  i:<SiIntellijidea />,   d:"Java development."},
    {n:"GitHub Pages",   i:<SiGithubpages />,    d:"Frontend deployments."},
    {n:"Render",         i:<SiRender />,         d:"Backend deployment."},
  ]},
  { cat:"Exploring", skills:[
    {n:"Prompt Eng.",    i:<FaTerminal />,  d:"Crafting prompts for AI."},
    {n:"Generative AI",  i:<FaBrain />,     d:"Currently exploring."},
    {n:"AI Web Apps",    i:<FaRobot />,     d:"Integrating AI in web apps."},
  ]},
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const rows = ref.current?.querySelectorAll(".ngSk-cat");
    if (!rows) return;
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("ng-in"); obs.unobserve(e.target); } }),
      { threshold:.1 }
    );
    rows.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ngSk {
          background:var(--bg-1); padding:100px 3rem;
          position:relative; overflow:hidden;
          transition:background .4s ease;
        }
        .ngSk::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngSk-inner { max-width:1100px; margin:0 auto; position:relative; z-index:1; }
        .ngSk-hdr { margin-bottom:60px; }

        .ngSk-cat {
          margin-bottom:44px;
          opacity:0; transform:translateY(18px);
          transition:opacity .5s ease, transform .5s ease;
        }
        .ngSk-cat.ng-in { opacity:1; transform:none; }
        .ngSk-cat:nth-child(2){transition-delay:.06s}
        .ngSk-cat:nth-child(3){transition-delay:.12s}
        .ngSk-cat:nth-child(4){transition-delay:.18s}
        .ngSk-cat:nth-child(5){transition-delay:.24s}
        .ngSk-cat:nth-child(6){transition-delay:.30s}

        .ngSk-catHdr {
          display:flex; align-items:center; gap:14px; margin-bottom:18px;
        }
        .ngSk-catTitle {
          font-family:'DM Sans',sans-serif; font-size:.63rem;
          font-weight:600; letter-spacing:.2em; text-transform:uppercase;
          color:var(--tx-3); white-space:nowrap;
        }
        .ngSk-catLine { flex:1; height:1px; background:var(--div); }

        .ngSk-list { display:flex; flex-wrap:wrap; gap:9px; }

        .ngSk-chip {
          display:flex; align-items:center; gap:9px; padding:10px 16px;
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:10px; cursor:default;
          transition:all .3s cubic-bezier(.4,0,.2,1); position:relative; overflow:hidden;
        }
        .ngSk-chip::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,var(--acc-bg),transparent);
          opacity:0; transition:opacity .3s ease;
        }
        .ngSk-chip:hover {
          border-color:var(--bdr-h); background:var(--bg-card-h);
          transform:translateY(-3px); box-shadow:var(--sh);
        }
        .ngSk-chip:hover::before { opacity:1; }

        .ngSk-icon {
          font-size:1.1rem; color:var(--acc-d);
          transition:color .3s,transform .3s; position:relative; z-index:1;
        }
        .ngSk-chip:hover .ngSk-icon { color:var(--acc); transform:scale(1.15); }

        .ngSk-txt { position:relative; z-index:1; }
        .ngSk-name {
          font-family:'DM Sans',sans-serif; font-size:.82rem;
          font-weight:500; color:var(--tx-2); display:block; white-space:nowrap;
          transition:color .3s;
        }
        .ngSk-chip:hover .ngSk-name { color:var(--tx-1); }
        .ngSk-desc {
          font-family:'DM Sans',sans-serif; font-size:.64rem;
          color:var(--tx-3); font-weight:300; display:block;
          margin-top:1px; white-space:nowrap; transition:color .3s;
        }
        .ngSk-chip:hover .ngSk-desc { color:var(--acc-s); }

        @media(max-width:768px){
          .ngSk{ padding:80px 1.5rem; }
          .ngSk-desc{ display:none; }
          .ngSk-chip{ padding:8px 13px; }
        }
      `}</style>

      <section className="ngSk" ref={ref}>
        <div className="ngSk-inner">
          <div className="ngSk-hdr">
            <span className="ng-lbl">Technical Expertise</span>
            <h2 className="ng-hd">My Skills</h2>
          </div>
          {DATA.map((cat,i) => (
            <div key={i} className="ngSk-cat">
              <div className="ngSk-catHdr">
                <span className="ngSk-catTitle">{cat.cat}</span>
                <div className="ngSk-catLine" />
              </div>
              <div className="ngSk-list">
                {cat.skills.map((s,j) => (
                  <div key={j} className="ngSk-chip">
                    <span className="ngSk-icon">{s.i}</span>
                    <div className="ngSk-txt">
                      <span className="ngSk-name">{s.n}</span>
                      <span className="ngSk-desc">{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}