import React, { useEffect, useRef } from "react";
import { FaCertificate } from "react-icons/fa";

const EXP = [
  {
    title: "Web Development Intern",
    company: "ApexPlanet Software Pvt Ltd",
    duration: "Aug 2024 – Sep 2024",
    details: [
      "Developed and implemented user authentication with roles and permissions (admin/user) using PHP and MySQL.",
      "Enhanced profile management features, including file upload and API integration for real-time data.",
      "Collaborated on front-end improvements and ensured responsive design across devices.",
      "Conducted thorough testing and prepared documentation for seamless project deployment.",
    ],
    cert: "https://drive.google.com/file/d/1rlD6u3iUD9rDg1RPnONtEpVCv3CJNSuZ/view?usp=sharing",
  },
  {
    title: "Web Development Intern",
    company: "CodeSpeedy",
    duration: "Jul 2024 – Aug 2024",
    details: [
      "Developed high-quality, original tutorials on JavaScript and CSS topics.",
      "Worked as a web developer with WordPress.",
      "Ensured all content was tested and compliant with strict non-copying policies.",
      "Delivered top-tier work with effective team communication.",
    ],
    cert: "https://drive.google.com/file/d/1Qtl9eHAnuE6DQQqgli3q0hdabOUhUcro/view?usp=sharing",
  },
];

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".ngEx-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("ng-in"); obs.unobserve(e.target); } }),
      { threshold:.12 }
    );
    cards.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ngEx {
          background:var(--bg-0); padding:100px 3rem;
          position:relative; overflow:hidden;
          transition:background .4s ease;
        }
        .ngEx::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        /* big ghost text */
        .ngEx-ghost {
          position:absolute; font-family:'Syne',sans-serif;
          font-size:18vw; font-weight:800; color:var(--ghost-tx);
          top:50%; left:50%; transform:translate(-50%,-50%);
          pointer-events:none; white-space:nowrap; user-select:none;
        }
        .ngEx-inner { max-width:900px; margin:0 auto; position:relative; z-index:1; }
        .ngEx-hdr { margin-bottom:60px; }

        /* timeline */
        .ngEx-tl { position:relative; padding-left:40px; }
        .ngEx-tl::before {
          content:''; position:absolute; left:0; top:10px; bottom:10px;
          width:1px; background:linear-gradient(180deg,var(--acc),var(--acc-bg));
        }
        .ngEx-card {
          position:relative; margin-bottom:52px;
          opacity:0; transform:translateY(28px);
          transition:opacity .58s ease, transform .58s ease;
        }
        .ngEx-card:nth-child(2) { transition-delay:.14s; }
        .ngEx-card.ng-in { opacity:1; transform:none; }
        .ngEx-card::before {
          content:''; position:absolute; left:-46px; top:24px;
          width:12px; height:12px; border-radius:50%;
          background:var(--acc); border:3px solid var(--bg-0);
          box-shadow:0 0 0 1px var(--acc),0 0 14px var(--acc-glow);
        }
        .ngEx-ci {
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:16px; padding:30px 34px;
          transition:border-color .4s,background .4s,transform .3s,box-shadow .3s;
          position:relative; overflow:hidden;
        }
        .ngEx-ci::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:linear-gradient(90deg,transparent,var(--acc-s),transparent);
          transform:scaleX(0); transition:transform .4s ease;
        }
        .ngEx-card:hover .ngEx-ci {
          border-color:var(--bdr-h); background:var(--bg-card-h);
          transform:translateX(6px); box-shadow:var(--sh);
        }
        .ngEx-card:hover .ngEx-ci::before { transform:scaleX(1); }

        .ngEx-meta {
          display:flex; align-items:flex-start;
          justify-content:space-between; flex-wrap:wrap; gap:10px;
          margin-bottom:18px;
        }
        .ngEx-role {
          font-family:'Syne',sans-serif; font-size:1.25rem;
          font-weight:700; color:var(--tx-1); line-height:1.2;
        }
        .ngEx-co {
          font-family:'DM Sans',sans-serif; font-size:.83rem;
          color:var(--acc); font-weight:500; margin-top:4px;
        }
        .ngEx-dur {
          font-family:'DM Sans',sans-serif; font-size:.68rem;
          color:var(--tx-3); letter-spacing:.08em; text-transform:uppercase;
          background:var(--bg-card); border:1px solid var(--bdr);
          border-radius:20px; padding:5px 13px; white-space:nowrap;
        }
        .ngEx-div { height:1px; background:var(--div); margin-bottom:18px; }
        .ngEx-ul {
          list-style:none; padding:0; margin:0 0 22px;
          display:flex; flex-direction:column; gap:9px;
        }
        .ngEx-ul li {
          font-family:'DM Sans',sans-serif; font-size:.86rem;
          line-height:1.7; color:var(--tx-2); font-weight:300;
          padding-left:18px; position:relative;
        }
        .ngEx-ul li::before {
          content:'→'; position:absolute; left:0;
          color:var(--acc-s); font-size:.74rem; top:3px;
        }
        .ngEx-cbtn {
          display:inline-flex; align-items:center; gap:7px;
          padding:8px 18px; border:1px solid var(--bdr-acc);
          border-radius:6px; font-family:'DM Sans',sans-serif;
          font-size:.72rem; font-weight:500; letter-spacing:.06em;
          text-transform:uppercase; color:var(--acc-d);
          text-decoration:none; background:var(--bg-tag);
          transition:all .3s ease;
        }
        .ngEx-cbtn:hover {
          background:var(--acc-bg); border-color:var(--bdr-h);
          color:var(--acc); transform:translateY(-2px);
          box-shadow:var(--sh-acc);
        }
        @media(max-width:768px){
          .ngEx{ padding:80px 1.5rem; }
          .ngEx-ci{ padding:22px 18px; }
          .ngEx-meta{ flex-direction:column; }
        }
      `}</style>

      <section className="ngEx" ref={ref}>
        <div className="ngEx-ghost">EXP</div>
        <div className="ngEx-inner">
          <div className="ngEx-hdr">
            <span className="ng-lbl">Career Path</span>
            <h2 className="ng-hd">My Experience</h2>
          </div>
          <div className="ngEx-tl">
            {EXP.map((e, i) => (
              <div key={i} className="ngEx-card">
                <div className="ngEx-ci">
                  <div className="ngEx-meta">
                    <div>
                      <div className="ngEx-role">{e.title}</div>
                      <div className="ngEx-co">{e.company}</div>
                    </div>
                    <div className="ngEx-dur">{e.duration}</div>
                  </div>
                  <div className="ngEx-div" />
                  <ul className="ngEx-ul">
                    {e.details.map((d,j) => <li key={j}>{d}</li>)}
                  </ul>
                  <a href={e.cert} target="_blank" rel="noopener noreferrer" className="ngEx-cbtn">
                    <FaCertificate size={11} /> View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}