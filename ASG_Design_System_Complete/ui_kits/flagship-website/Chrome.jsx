/* African Safari Group — Flagship Website · Shared chrome (Header + Footer + SubNav) */
const { Logo, Button, Icon, IconButton } = window.DesignSystem_e5ff94;
const AccreditationRow = window.DesignSystem_e5ff94.AccreditationRow || (() => null);
const Drawer = window.DesignSystem_e5ff94.Drawer || (() => null);
const ICON_BASE = "../../assets/logos/";

const chromeCss = `
.site-header{position:sticky;top:0;z-index:120;background:rgba(14,12,10,.82);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--border-subtle);transition:transform .28s var(--ease-standard);}
.site-header.nav-hidden{transform:translateY(-100%);}
.site-header__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px;}
.site-nav{display:flex;align-items:center;gap:30px;}
.site-nav a{font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--text-body);cursor:pointer;transition:color var(--dur-fast);}
.site-nav a:hover,.site-nav a.is-active{color:var(--text-primary);}
.site-header__cta{display:flex;align-items:center;gap:14px;}
.site-logo{cursor:pointer;display:inline-flex;}
.site-burger{display:none;}
@media (max-width:900px){
  .site-nav{display:none;}
  .site-burger{display:inline-flex;}
  .site-header__cta .site-cta-desktop{display:none;}
}
.site-drawer-links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;}
.site-drawer-links a{display:block;padding:15px 0;font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--text-body);border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:color var(--dur-fast);}
.site-drawer-links a:hover,.site-drawer-links a.is-active{color:var(--text-primary);}
.site-drawer-contact{margin:20px 0 0;font-family:var(--font-body);font-size:13px;line-height:1.8;color:var(--text-muted);}

/* Sub-nav — sticky section bar; takes the top from the header (nav handoff) and
   runs a scrollspy: the brass underline follows the section in view. */
.subnav{position:sticky;top:0;z-index:110;background:rgba(14,12,10,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--border-subtle);}
.subnav__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);display:flex;align-items:center;gap:28px;height:56px;overflow-x:auto;}
.subnav__in a{font-family:var(--font-body);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);white-space:nowrap;padding:4px 0;border-bottom:2px solid transparent;cursor:pointer;transition:color var(--dur-fast);}
.subnav__in a:hover,.subnav__in a.active{color:var(--accent);border-bottom-color:var(--asg-brass);}
.subnav__cta{margin-left:auto;flex:none;}

.site-footer{background:var(--asg-ink-900);border-top:1px solid var(--border-subtle);}
.site-footer__in{max-width:var(--container-wide);margin:0 auto;padding:64px var(--gutter) 40px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;}
.site-footer h5{font-family:var(--font-body);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-muted);margin:0 0 18px;}
.site-footer ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}
.site-footer a{font-family:var(--font-body);font-size:14px;color:var(--text-body);cursor:pointer;transition:color var(--dur-fast);}
.site-footer a:hover{color:var(--accent-hover);}
.site-footer__brand p{font-family:var(--font-body);font-size:13.5px;line-height:1.7;color:var(--text-muted);max-width:34ch;margin:18px 0 0;}
.site-footer__bar{max-width:var(--container-wide);margin:0 auto;padding:22px var(--gutter);border-top:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between;gap:16px;}
.site-footer__bar span{font-family:var(--font-body);font-size:12px;color:var(--text-faint);letter-spacing:.04em;}
.site-footer__social{display:flex;gap:10px;}
.site-footer__accred{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter) 30px;}
@media (max-width:900px){.site-footer__in{grid-template-columns:1fr 1fr;}}
`;
(function(){ const s=document.createElement('style'); s.textContent=chromeCss; document.head.appendChild(s); })();

const NAV = ["Destinations", "Experiences", "Accommodation", "About"];

/* Nav handoff + scrollspy. Sections are matched by id — items carry real ids
   only (never bare "#": those must stay out of the spy or querySelector throws). */
function SubNav({ items, ctaLabel = "Plan My Safari", onCta }) {
  const [active, setActive] = React.useState(items[0] && items[0].id);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const header = () => document.querySelector(".site-header");
    const onScroll = () => {
      const h = header();
      const el = ref.current;
      if (h && el) {
        const headerH = h.offsetHeight;
        if (el.getBoundingClientRect().top <= headerH + 1) h.classList.add("nav-hidden");
        else h.classList.remove("nav-hidden");
      }
      let current = items[0] && items[0].id;
      for (const it of items) {
        const sec = document.getElementById(it.id);
        if (sec && sec.getBoundingClientRect().top - 90 <= 0) current = it.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      const h = header();
      if (h) h.classList.remove("nav-hidden");
    };
  }, [items]);
  const jump = (id) => (e) => {
    e.preventDefault();
    const sec = document.getElementById(id);
    if (sec) window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };
  return (
    <div className="subnav" ref={ref}>
      <div className="subnav__in">
        {items.map((it) => (
          <a key={it.id} className={active === it.id ? "active" : ""} onClick={jump(it.id)}>{it.label}</a>
        ))}
        {onCta && <span className="subnav__cta"><Button size="sm" onClick={onCta}>{ctaLabel}</Button></span>}
      </div>
    </div>
  );
}

function Header({ route, go, theme }) {
  const logoTone = theme === "light" ? "ink" : "white";
  const [menuOpen, setMenuOpen] = React.useState(false);
  const goClose = (r) => { setMenuOpen(false); go(r); };
  return (
    <header className="site-header">
      <div className="site-header__in">
        <span className="site-logo" onClick={() => go("home")}>
          <Logo variant="horizontal" tone={logoTone} size={38} iconBase={ICON_BASE} />
        </span>
        <nav className="site-nav">
          {NAV.map((n) => (
            <a key={n} className={route === "reserve" && n === "Destinations" ? "is-active" : ""} onClick={() => go("reserve")}>{n}</a>
          ))}
        </nav>
        <div className="site-header__cta">
          <span className="site-cta-desktop"><Button variant="primary" size="sm" onClick={() => go("enquire")}>Plan My Safari</Button></span>
          <span className="site-burger"><IconButton icon="menu" label="Menu" variant="ghost" onClick={() => setMenuOpen(true)} /></span>
        </div>
      </div>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu"
        footer={<Button variant="primary" style={{width:'100%'}} onClick={() => goClose("enquire")}>Plan My Safari</Button>}>
        <ul className="site-drawer-links">
          {NAV.map((n) => (
            <li key={n}><a className={route === "reserve" && n === "Destinations" ? "is-active" : ""} onClick={() => goClose("reserve")}>{n}</a></li>
          ))}
        </ul>
        <p className="site-drawer-contact">+27 21 200 5960<br/>bookings@africansafarigroup.com</p>
      </Drawer>
    </header>
  );
}

function Footer({ go, theme }) {
  const logoTone = theme === "light" ? "ink" : "white";
  return (
    <React.Fragment>
      <footer className="site-footer">
        <div className="site-footer__in">
          <div className="site-footer__brand">
            <Logo variant="stacked" tone={logoTone} size={52} iconBase={ICON_BASE} />
            <p>Tailor-made five-star safaris across Southern &amp; East Africa, designed by specialists who have stayed at every lodge they recommend.</p>
          </div>
          <div>
            <h5>Destinations</h5>
            <ul>
              <li><a onClick={() => go("reserve")}>Sabi Sand</a></li>
              <li><a onClick={() => go("reserve")}>Amakhala</a></li>
              <li><a onClick={() => go("reserve")}>Madikwe</a></li>
              <li><a onClick={() => go("reserve")}>Serengeti</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a>About us</a></li>
              <li><a>Our specialists</a></li>
              <li><a>Responsible travel</a></li>
              <li><a>Journal</a></li>
            </ul>
          </div>
          <div>
            <h5>Speak to us</h5>
            <ul>
              <li><a>+27 21 200 5960</a></li>
              <li><a>bookings@africansafarigroup.com</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__accred">
          <AccreditationRow
            pills={["Cape Town Tourism", "SATSA", "ATTA Corporate", "TripAdvisor Certificate of Excellence"]}
            reviews={["TripAdvisor · 1,000+ reviews", "Feedback Company · 1,000+ reviews", "Google · 400+ reviews"]}
          />
        </div>
        <div className="site-footer__bar">
          <span>© 2026 African Safari Group. All rights reserved.</span>
          <div className="site-footer__social">
            <span style={{color:'var(--text-muted)'}}><Icon name="globe" size={18} /></span>
            <span style={{color:'var(--text-muted)'}}><Icon name="mail" size={18} /></span>
            <span style={{color:'var(--text-muted)'}}><Icon name="phone" size={18} /></span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

Object.assign(window, { Header, Footer, SubNav, ICON_BASE });
