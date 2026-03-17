import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext";

const NAV = [
  { to: "home",        icon: "fa-house-user",        label: "Home" },
  { to: "about",       icon: "fa-address-card",       label: "About" },
  { to: "experience",  icon: "fa-briefcase",          label: "Experience" },
  { to: "education",   icon: "fa-graduation-cap",     label: "Education" },
  { to: "projects",    icon: "fa-folder-open",        label: "Projects" },
  { to: "skills",      icon: "fa-brain",              label: "Skills" },
  { to: "certificate", icon: "fa-certificate",        label: "Certificates" },
  { to: "contact",     icon: "fa-envelope-open-text", label: "Contact" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        .ngH {
          position:fixed; top:0; right:0; height:100vh; width:64px;
          background:var(--bg-nav);
          backdrop-filter:blur(20px);
          border-left:1px solid var(--bdr);
          display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          z-index:1000;
          transition:background .4s ease, border-color .4s ease;
        }
        .ngH-prog {
          position:absolute; left:0; top:0; width:2px;
          background:linear-gradient(180deg,var(--acc),var(--acc-s));
          border-radius:0 2px 2px 0;
          transition:height .1s linear;
        }
        .ngH-nav {
          display:flex; flex-direction:column; gap:4px;
          width:100%; padding:0 8px;
        }
        .ngH-lnk {
          position:relative; display:flex; align-items:center;
          justify-content:center; width:48px; height:48px;
          border-radius:13px; cursor:pointer; text-decoration:none;
          color:var(--tx-3); border:1px solid transparent;
          transition:color .3s,background .3s,border-color .3s,transform .3s;
        }
        .ngH-lnk:hover,.ngH-lnk.on {
          color:var(--acc); background:var(--acc-bg);
          border-color:var(--bdr-acc); transform:translateX(-3px);
        }
        .ngH-lnk i { font-size:.95rem; transition:transform .3s; }
        .ngH-lnk:hover i { transform:scale(1.15); }
        .ngH-dot {
          position:absolute; top:9px; right:9px;
          width:4px; height:4px; border-radius:50%;
          background:var(--acc); opacity:0; transition:opacity .3s;
        }
        .ngH-lnk.on .ngH-dot { opacity:1; }
        .ngH-tip {
          position:absolute; right:58px; top:50%;
          transform:translateY(-50%) translateX(6px);
          background:var(--bg-nav); color:var(--acc);
          border:1px solid var(--bdr-acc);
          padding:5px 12px; border-radius:7px;
          font-family:'DM Sans',sans-serif; font-size:.68rem;
          font-weight:500; letter-spacing:.1em; text-transform:uppercase;
          white-space:nowrap; opacity:0; visibility:hidden; pointer-events:none;
          transition:opacity .2s,transform .2s,visibility .2s;
          backdrop-filter:blur(12px);
        }
        .ngH-lnk:hover .ngH-tip {
          opacity:1; visibility:visible;
          transform:translateY(-50%) translateX(0);
        }
        .ngH-toggle {
          margin-top:18px; width:40px; height:40px;
          border-radius:12px;
          background:var(--bg-card); border:1px solid var(--bdr);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:var(--tx-3); font-size:.88rem;
          flex-shrink:0;
          transition:all .35s cubic-bezier(.34,1.56,.64,1);
        }
        .ngH-toggle:hover {
          background:var(--acc-bg); border-color:var(--bdr-h);
          color:var(--acc); transform:rotate(22deg) scale(1.1);
        }
        /* mobile */
        @media(max-width:768px){
          .ngH {
            top:0; right:0; left:0; height:52px; width:100%;
            flex-direction:row; justify-content:center;
            border-left:none; border-bottom:1px solid var(--bdr);
          }
          .ngH-prog {
            left:0; top:auto; bottom:0;
            width:100%!important; height:2px!important;
            background:linear-gradient(90deg,var(--acc),var(--acc-s));
          }
          .ngH-nav { flex-direction:row; gap:2px; padding:0 6px; }
          .ngH-lnk { width:36px; height:36px; border-radius:10px; }
          .ngH-lnk:hover { transform:translateY(-2px); }
          .ngH-tip { display:none; }
          .ngH-toggle { margin-top:0; margin-left:6px; width:34px; height:34px; }
        }
      `}</style>

      <header className="ngH">
        <div className="ngH-prog" style={{ height: `${pct}%` }} />
        <nav className="ngH-nav">
          {NAV.map((n) => (
            <Link
              key={n.to} to={n.to} smooth duration={700} spy
              onSetActive={() => setActive(n.to)}
              className={`ngH-lnk${active === n.to ? " on" : ""}`}
            >
              <i className={`fas ${n.icon}`} />
              <span className="ngH-dot" />
              <span className="ngH-tip">{n.label}</span>
            </Link>
          ))}
        </nav>
        <button
          className="ngH-toggle" onClick={toggle}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
        </button>
      </header>
    </>
  );
}