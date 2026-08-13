/* Flagship — Editorial (blend) · Shared chrome + helpers */
const { Logo, Button, Icon, IconButton } = window.DesignSystem_e5ff94;
const EdDrawer = window.DesignSystem_e5ff94.Drawer || (() => null);
const ED_ICON_BASE = "../../assets/logos/";

function PhotoSlot({ label, style, className = "" }) {
  return (
    <div className={["photo-slot", className].filter(Boolean).join(" ")} style={style}>
      <span className="photo-slot__tag"><span className="dot" />{label}</span>
    </div>
  );
}

const NAV = [
  ["destinations", "Destinations"],
  ["experiences", "Experiences"],
  ["accommodation", "Accommodation"],
  ["about", "About"],
];

function EbNav({ route, go }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const goClose = (r) => { setMenuOpen(false); go(r); };
  return (
    <header className="eb-nav">
      <div className="eb-nav__in">
        <span className="eb-logo" onClick={() => go("home")}>
          <Logo variant="horizontal" tone="white" size={38} iconBase={ED_ICON_BASE} />
        </span>
        <nav className="eb-nav__links">
          {NAV.map(([id, label]) => (
            <a key={id} className={route === id ? "on" : ""} onClick={() => go(id)}>{label}</a>
          ))}
        </nav>
        <span className="eb-nav__actions">
          <span className="eb-cta-desktop"><Button variant="primary" size="sm" onClick={() => go("enquire")}>Plan My Safari</Button></span>
          <span className="eb-burger"><IconButton icon="menu" label="Menu" variant="ghost" onClick={() => setMenuOpen(true)} /></span>
        </span>
      </div>
      <EdDrawer open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu"
        footer={<Button variant="primary" style={{width:'100%'}} onClick={() => goClose("enquire")}>Plan My Safari</Button>}>
        <ul className="eb-drawer-links">
          {NAV.map(([id, label]) => (
            <li key={id}><a className={route === id ? "on" : ""} onClick={() => goClose(id)}>{label}</a></li>
          ))}
        </ul>
        <p className="eb-drawer-contact">+27 21 200 5960<br/>bookings@africansafarigroup.com</p>
      </EdDrawer>
    </header>
  );
}

function EbFooter({ go }) {
  return (
    <footer className="eb-foot">
      <div className="eb-foot__in">
        <div className="eb-foot__brand">
          <Logo variant="stacked" tone="white" size={52} iconBase={ED_ICON_BASE} />
          <p>Tailor-made five-star safaris across Southern &amp; East Africa, designed by specialists who have stayed at every lodge they recommend.</p>
        </div>
        <div><h5>Destinations</h5><ul>
          <li><a onClick={() => go("destinations")}>Sabi Sand</a></li>
          <li><a onClick={() => go("destinations")}>Amakhala</a></li>
          <li><a onClick={() => go("destinations")}>Madikwe</a></li>
          <li><a onClick={() => go("destinations")}>Serengeti</a></li>
        </ul></div>
        <div><h5>Company</h5><ul>
          <li><a onClick={() => go("about")}>About us</a></li>
          <li><a onClick={() => go("about")}>Our specialists</a></li>
          <li><a onClick={() => go("about")}>Responsible travel</a></li>
          <li><a onClick={() => go("experiences")}>Experiences</a></li>
        </ul></div>
        <div><h5>Speak to us</h5><ul>
          <li><a onClick={() => go("enquire")}>+27 21 200 5960</a></li>
          <li><a onClick={() => go("enquire")}>bookings@africansafarigroup.com</a></li>
        </ul></div>
      </div>
      <div className="eb-foot__bar">
        <span>© 2026 African Safari Group. All rights reserved.</span>
        <span style={{color:'var(--text-muted)',display:'inline-flex',gap:10}}><Icon name="globe" size={18} /><Icon name="mail" size={18} /><Icon name="phone" size={18} /></span>
      </div>
    </footer>
  );
}

Object.assign(window, { PhotoSlot, EbNav, EbFooter, ED_ICON_BASE });
