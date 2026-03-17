import React, { useRef, useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const CONTACTS = [
  { icon:<FaEnvelope />, label:"Email",    val:"nabajitghosh225@gmail.com", href:"mailto:nabajitghosh225@gmail.com" },
  { icon:<FaPhone />,    label:"Phone",    val:"+91 8837337805",            href:"tel:+918837337805" },
  { icon:<FaLinkedin />, label:"LinkedIn", val:"linkedin.com/in/nabajit-ghosh", href:"https://linkedin.com/in/nabajit-ghosh", ext:true },
  { icon:<FaGithub />,   label:"GitHub",   val:"github.com/njg37",          href:"https://github.com/njg37", ext:true },
];

export default function Contact() {
  const ref    = useRef(null);
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ng-in"); obs.disconnect(); } },
      { threshold:.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const submit = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      const r = await fetch("https://formspree.io/f/xdkowbjq", {
        method:"POST", body:new FormData(e.target),
        headers:{ Accept:"application/json" },
      });
      if (r.ok) { setSent(true); e.target.reset(); }
    } catch {}
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .ngCo {
          background:var(--bg-1); padding:100px 3rem 64px;
          position:relative; overflow:hidden;
          transition:background .4s ease;
        }
        .ngCo::before {
          content:''; position:absolute; top:0;left:0;right:0; height:1px;
          background:var(--sep); pointer-events:none;
        }
        .ngCo-glow {
          position:absolute; bottom:-180px; left:-180px;
          width:560px; height:560px;
          background:radial-gradient(circle,var(--acc-bg) 0%,transparent 70%);
          pointer-events:none;
        }
        .ngCo-inner {
          max-width:1100px; margin:0 auto; position:relative; z-index:1;
          opacity:0; transform:translateY(20px);
          transition:opacity .55s ease, transform .55s ease;
        }
        .ngCo-inner.ng-in { opacity:1; transform:none; }

        .ngCo-hdr { margin-bottom:60px; }
        .ngCo-sub {
          font-family:'DM Sans',sans-serif; font-size:.88rem;
          color:var(--tx-3); font-weight:300; margin-top:10px;
        }

        .ngCo-grid {
          display:grid; grid-template-columns:1fr 1fr; gap:44px;
        }

        /* form */
        .ngCo-form { display:flex; flex-direction:column; gap:12px; }
        .ngCo-inp, .ngCo-ta {
          width:100%; background:var(--bg-input);
          border:1px solid var(--inp-bdr); border-radius:10px;
          padding:13px 17px; font-family:'DM Sans',sans-serif;
          font-size:.87rem; color:var(--inp-tx); outline:none;
          transition:border-color .3s,background .3s;
          box-sizing:border-box;
        }
        .ngCo-inp::placeholder,.ngCo-ta::placeholder { color:var(--inp-ph); }
        .ngCo-inp:focus,.ngCo-ta:focus {
          border-color:var(--inp-bdr-f); background:var(--bg-card);
        }
        .ngCo-ta { height:135px; resize:none; }
        .ngCo-submit {
          padding:13px 26px; background:var(--btn-bg); color:var(--btn-tx);
          font-family:'Syne',sans-serif; font-size:.8rem; font-weight:700;
          letter-spacing:.06em; text-transform:uppercase; border:none;
          border-radius:8px; cursor:pointer;
          transition:all .3s ease; display:flex;
          align-items:center; justify-content:center; gap:8px;
          position:relative; overflow:hidden;
        }
        .ngCo-submit::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,.18);
          transform:translateX(-100%) skewX(-15deg);
          transition:transform .4s ease;
        }
        .ngCo-submit:hover::before { transform:translateX(150%) skewX(-15deg); }
        .ngCo-submit:hover { box-shadow:var(--sh-acc); transform:translateY(-2px); }
        .ngCo-submit:disabled { opacity:.6; cursor:not-allowed; transform:none; }
        .ngCo-ok {
          display:flex; align-items:center; gap:9px;
          padding:13px 17px; background:var(--acc-bg);
          border:1px solid var(--bdr-acc); border-radius:10px;
          font-family:'DM Sans',sans-serif; font-size:.84rem; color:var(--acc);
        }

        /* contact items */
        .ngCo-right { display:flex; flex-direction:column; gap:11px; }
        .ngCo-item {
          display:flex; align-items:center; gap:15px;
          padding:16px 18px; background:var(--bg-card);
          border:1px solid var(--bdr); border-radius:12px;
          text-decoration:none;
          transition:border-color .3s,background .3s,transform .3s,box-shadow .3s;
        }
        .ngCo-item:hover {
          border-color:var(--bdr-h); background:var(--bg-card-h);
          transform:translateX(5px); box-shadow:var(--sh);
        }
        .ngCo-ico {
          width:40px; height:40px; background:var(--bg-icon);
          border:1px solid var(--bdr-acc); border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-size:.95rem; color:var(--acc-d); flex-shrink:0;
          transition:all .3s ease;
        }
        .ngCo-item:hover .ngCo-ico { background:var(--acc-bg); color:var(--acc); transform:scale(1.06); }
        .ngCo-lbl {
          font-family:'DM Sans',sans-serif; font-size:.6rem;
          font-weight:600; letter-spacing:.12em; text-transform:uppercase;
          color:var(--tx-3); margin-bottom:1px;
        }
        .ngCo-val {
          font-family:'DM Sans',sans-serif; font-size:.84rem;
          color:var(--tx-2); transition:color .3s;
        }
        .ngCo-item:hover .ngCo-val { color:var(--tx-1); }

        /* map */
        .ngCo-map {
          margin-top:52px; border-radius:16px; overflow:hidden;
          border:1px solid var(--bdr);
          filter:var(--map-f); transition:filter .5s ease;
        }
        .ngCo-map:hover { filter:var(--map-fh); }

        /* footer */
        .ngCo-foot {
          text-align:center; padding-top:44px; margin-top:44px;
          border-top:1px solid var(--div);
          font-family:'DM Sans',sans-serif; font-size:.7rem;
          color:var(--tx-4); letter-spacing:.08em;
        }
        .ngCo-foot span { color:var(--acc-s); }

        @media(max-width:768px){
          .ngCo{ padding:80px 1.5rem 48px; }
          .ngCo-grid{ grid-template-columns:1fr; gap:28px; }
        }
      `}</style>

      <section className="ngCo">
        <div className="ngCo-glow" />
        <div className="ngCo-inner" ref={ref}>
          <div className="ngCo-hdr">
            <span className="ng-lbl">Get In Touch</span>
            <h2 className="ng-hd">Contact Me</h2>
            <p className="ngCo-sub">Open to opportunities — let's build something together.</p>
          </div>

          <div className="ngCo-grid">
            {/* form */}
            <form className="ngCo-form" onSubmit={submit}>
              <input  type="text"  name="name"    placeholder="Your Name"    required className="ngCo-inp" />
              <input  type="email" name="email"   placeholder="Your Email"   required className="ngCo-inp" />
              <textarea           name="message" placeholder="Your Message" required className="ngCo-ta" />
              {sent
                ? <div className="ngCo-ok">✓ Message sent! I'll get back to you soon.</div>
                : <button type="submit" className="ngCo-submit" disabled={loading}>
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
              }
            </form>

            {/* contacts */}
            <div className="ngCo-right">
              {CONTACTS.map((c,i) => (
                <a key={i} href={c.href}
                   target={c.ext?"_blank":undefined}
                   rel={c.ext?"noopener noreferrer":undefined}
                   className="ngCo-item">
                  <div className="ngCo-ico">{c.icon}</div>
                  <div>
                    <div className="ngCo-lbl">{c.label}</div>
                    <div className="ngCo-val">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="ngCo-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112056.18914532768!2d76.9611885!3d28.4575238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18c7a002ff3d%3A0x7d5913d2f3d6d567!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691059831720!5m2!1sen!2sin"
              title="Location" width="100%" height="250"
              style={{ border:0, display:"block" }}
              allowFullScreen loading="lazy"
            />
          </div>

          <div className="ngCo-foot">
            Designed &amp; Built by <span>Nabajit Ghosh</span> · {new Date().getFullYear()}
          </div>
        </div>
      </section>
    </>
  );
}