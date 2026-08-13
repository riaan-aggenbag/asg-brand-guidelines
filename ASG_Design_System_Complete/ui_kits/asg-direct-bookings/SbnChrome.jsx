/* ASG Direct Bookings · Shared chrome + helpers */
const { Logo, Button, IconButton, Badge, Icon } = window.DesignSystem_e5ff94;
const SBN_ICON_BASE = "../../assets/logos/";

const sbnCss = `
.sbn-photo{position:relative;background:radial-gradient(120% 90% at 65% 15%, #241f19 0%, #171411 58%, #0e0c0a 100%);overflow:hidden;display:flex;align-items:center;justify-content:center;}
.sbn-photo::before{content:"";position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,rgba(168,121,75,.05) 0 2px,transparent 2px 9px);opacity:.5;}
.sbn-photo__t{position:relative;font-family:var(--font-body);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);}

.sbn-header{position:sticky;top:0;z-index:120;background:rgba(14,12,10,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--border-subtle);}
.sbn-header__in{max-width:1320px;margin:0 auto;padding:0 28px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:20px;}
.sbn-logo{cursor:pointer;display:inline-flex;}
.sbn-header__right{display:flex;align-items:center;gap:18px;}
.sbn-trust{display:flex;align-items:center;gap:7px;font-family:var(--font-body);font-size:12px;color:var(--text-muted);}
.sbn-trust .ic{color:var(--accent);}

.sbn-steps{display:flex;align-items:center;gap:0;}
.sbn-step{display:flex;align-items:center;gap:9px;font-family:var(--font-body);font-size:12px;letter-spacing:.04em;color:var(--text-faint);}
.sbn-step .n{width:24px;height:24px;border-radius:50%;border:1px solid var(--border-strong);display:flex;align-items:center;justify-content:center;font-family:var(--font-numeric);font-size:12px;}
.sbn-step--done{color:var(--text-body);} .sbn-step--done .n{border-color:var(--asg-brass);background:var(--asg-brass);color:var(--text-on-brass);}
.sbn-step--active{color:var(--text-primary);} .sbn-step--active .n{border-color:var(--asg-brass);color:var(--accent);}
.sbn-steps__line{width:34px;height:1px;background:var(--border-strong);margin:0 12px;}
.sbn-steps-mini{display:none;align-items:center;gap:9px;font-family:var(--font-body);font-size:12px;letter-spacing:.04em;color:var(--text-body);}
.sbn-steps-mini .n{width:24px;height:24px;border-radius:50%;border:1px solid var(--asg-brass);display:flex;align-items:center;justify-content:center;font-family:var(--font-numeric);font-size:12px;color:var(--accent);}
@media (max-width:820px){.sbn-steps{display:none;}.sbn-steps-mini{display:flex;}}
@media (max-width:640px){.sbn-trust{display:none;}}
`;
(function(){ const s=document.createElement('style'); s.textContent=sbnCss; document.head.appendChild(s); })();

function SbnPhoto({ label = "Photo", style, className = "" }) {
  return <div className={["sbn-photo", className].filter(Boolean).join(" ")} style={style}><span className="sbn-photo__t">{label}</span></div>;
}

function SbnHeader({ step, go, theme }) {
  const logoTone = theme === "light" ? "ink" : "white";
  const steps = [["Search","results"],["Property","property"],["Checkout","checkout"],["Confirmed","confirm"]];
  const idx = { results:0, property:1, checkout:2, confirm:3 }[step] ?? 0;
  return (
    <header className="sbn-header">
      <div className="sbn-header__in">
        <span className="sbn-logo" onClick={() => go("results")}>
          <Logo variant="horizontal" tone={logoTone} name="ASG DIRECT" sub="BOOKINGS" size={34} iconBase={SBN_ICON_BASE} />
        </span>
        {step !== "confirm" && (
          <React.Fragment>
            <div className="sbn-steps">
              {steps.slice(0,3).map(([label],i) => (
                <React.Fragment key={label}>
                  {i>0 && <span className="sbn-steps__line" />}
                  <span className={["sbn-step", i<idx&&"sbn-step--done", i===idx&&"sbn-step--active"].filter(Boolean).join(" ")}>
                    <span className="n">{i<idx ? <Icon name="check" size={13} strokeWidth={2.4} /> : i+1}</span>{label}
                  </span>
                </React.Fragment>
              ))}
            </div>
            <span className="sbn-steps-mini"><span className="n">{Math.min(idx,2)+1}</span>of 3 · {steps[Math.min(idx,2)][0]}</span>
          </React.Fragment>
        )}
        <div className="sbn-header__right">
          <span className="sbn-trust"><span className="ic"><Icon name="info" size={15} /></span>No markup at checkout</span>
          <IconButton icon="user" label="Account" variant="outline" size="sm" />
        </div>
      </div>
    </header>
  );
}

function SbnFooter() {
  return (
    <footer style={{borderTop:'1px solid var(--border-subtle)',background:'var(--asg-ink-900)'}}>
      <div style={{maxWidth:1320,margin:'0 auto',padding:'26px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <span style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--text-faint)'}}>Part of African Safari Group · Real rates, real availability</span>
        <span style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--text-faint)',display:'inline-flex',gap:7,alignItems:'center'}}><Icon name="globe" size={15} color="var(--accent)" /> Secure booking · ASG</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SbnHeader, SbnFooter, SbnPhoto, SBN_ICON_BASE });
