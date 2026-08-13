/* ASG Direct Bookings · Property — pick dates & room, then checkout */
const { Button, Badge, Stat, Divider, Icon } = window.DesignSystem_e5ff94;

const propCss = `
.sbn-prop2{max-width:1320px;margin:0 auto;padding:24px 28px 80px;}
.sbn-prop2__gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:150px 150px;gap:8px;border-radius:var(--radius-md);overflow:hidden;}
.sbn-prop2__gallery .sbn-photo{border-radius:0;}
.sbn-prop2__gallery .g0{grid-row:span 2;}
.sbn-prop2__head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin:26px 0 0;flex-wrap:wrap;}
.sbn-prop2__head h1{font-family:var(--font-serif);font-weight:500;font-size:34px;color:var(--text-primary);margin:8px 0 0;}
.sbn-prop2__head .meta{display:flex;gap:16px;color:var(--text-muted);font-family:var(--font-body);font-size:13px;margin-top:10px;}
.sbn-prop2__head .meta span{display:inline-flex;align-items:center;gap:6px;}
.sbn-prop2__grid{display:grid;grid-template-columns:1fr 360px;gap:40px;align-items:start;margin-top:36px;}
@media (max-width:900px){.sbn-prop2__grid{grid-template-columns:1fr;}}
.sbn-dates{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap;}
.sbn-date{flex:1;min-width:130px;padding:12px 15px;border:1px solid var(--border-strong);border-radius:var(--radius-xs);background:var(--surface-inset);cursor:pointer;}
.sbn-date span{font-family:var(--font-body);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);}
.sbn-date b{font-family:var(--font-numeric);font-size:15px;color:var(--text-primary);display:block;margin-top:3px;}
.sbn-rooms{display:flex;flex-direction:column;gap:14px;}
.sbn-room{display:grid;grid-template-columns:130px 1fr auto;gap:18px;padding:16px;border:1px solid var(--border-default);border-radius:var(--radius-md);background:var(--surface-raised);align-items:center;transition:border-color var(--dur-fast);}
.sbn-room--sel{border-color:var(--asg-brass);box-shadow:inset 0 0 0 1px var(--asg-brass);}
.sbn-room__media{height:90px;border-radius:var(--radius-sm);overflow:hidden;}
.sbn-room h4{font-family:var(--font-serif);font-weight:500;font-size:18px;color:var(--text-primary);margin:0 0 4px;}
.sbn-room p{font-family:var(--font-body);font-size:13px;color:var(--text-muted);margin:0;}
.sbn-room__rate{text-align:right;}
.sbn-room__rate b{font-family:var(--font-numeric);font-weight:500;font-size:20px;color:var(--text-primary);display:block;}
.sbn-room__rate span{font-family:var(--font-body);font-size:11px;color:var(--text-muted);}
.sbn-summary{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:24px;position:sticky;top:88px;}
.sbn-summary h3{font-family:var(--font-serif);font-weight:500;font-size:20px;color:var(--text-primary);margin:0 0 4px;}
.sbn-summary__sub{font-family:var(--font-body);font-size:13px;color:var(--text-muted);margin:0 0 18px;}
.sbn-line{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:10px 0;border-bottom:1px solid var(--border-subtle);}
.sbn-line span:last-child{font-family:var(--font-numeric);color:var(--text-primary);white-space:nowrap;}
.sbn-line--total{border-bottom:0;padding-top:16px;}
.sbn-line--total b{font-family:var(--font-numeric);font-weight:600;font-size:20px;color:var(--text-primary);}
.sbn-note{display:flex;gap:8px;align-items:flex-start;margin:14px 0 0;color:var(--text-muted);font-family:var(--font-body);font-size:12px;line-height:1.5;}
.sbn-note .ic{color:var(--accent);flex:none;margin-top:1px;}
`;
(function () {const s = document.createElement('style');s.textContent = propCss;document.head.appendChild(s);})();

const ROOMS = [
{ id: "suite", h: "Riverside Suite", p: "Private plunge pool · river deck · 75m²", rate: 18200 },
{ id: "founders", h: "Founders Suite", p: "Two bedrooms · private chef · 140m²", rate: 26400 }];


function PropertyScreen({ go }) {
  const [room, setRoom] = React.useState("suite");
  const nights = 3;
  const rate = ROOMS.find((r) => r.id === room).rate;
  const sub = rate * nights;
  const levy = 1200;
  return (
    <div className="sbn-prop2">
      <div className="sbn-prop2__gallery">
        <SbnPhoto className="g0" label="Suite & deck" />
        <SbnPhoto label="River" />
        <SbnPhoto label="Dining" />
        <SbnPhoto label="Drive" />
        <SbnPhoto label="Pool" />
      </div>
      <div className="sbn-prop2__head">
        <div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>Sabi Sand · Founders Camp</span>
          <h1>Londolozi Founders Camp</h1>
          <div className="meta">
            <span><Icon name="star" size={15} color="var(--accent)" /> 5.0 · Relais &amp; Châteaux</span>
            <span><Icon name="map-pin" size={15} /> Private Sand River frontage</span>
            <span><Icon name="check" size={15} color="var(--success)" /> Free cancellation to 30 days</span>
          </div>
        </div>
        <Badge variant="solid">Big Five</Badge>
      </div>

      <div className="sbn-prop2__grid">
        <div>
          <div className="sbn-dates">
            <div className="sbn-date"><span>Check in</span><b>Wed 14 Oct</b></div>
            <div className="sbn-date"><span>Check out</span><b>Sat 17 Oct</b></div>
            <div className="sbn-date"><span>Guests</span><b>2 adults</b></div>
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 22, color: 'var(--text-primary)', margin: '0 0 14px' }}>Choose your suite</h3>
          <div className="sbn-rooms">
            {ROOMS.map((r) =>
            <div key={r.id} className={["sbn-room", room === r.id && "sbn-room--sel"].filter(Boolean).join(" ")}>
                <div className="sbn-room__media"><SbnPhoto label="Suite" style={{ height: '100%' }} /></div>
                <div><h4>{r.h}</h4><p>{r.p}</p></div>
                <div className="sbn-room__rate">
                  <b>R {r.rate.toLocaleString()}</b><span>pp / night</span>
                  <div style={{ marginTop: 10 }}>
                    <Button size="sm" variant={room === r.id ? "primary" : "secondary"} onClick={() => setRoom(r.id)}>{room === r.id ? "Selected" : "Select"}</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="sbn-summary">
          <h3>Your stay</h3>
          <p className="sbn-summary__sub">3 nights · 2 adults · full board</p>
          <div className="sbn-line"><span>R {rate.toLocaleString()} × {nights} nights</span><span>R {sub.toLocaleString()}</span></div>
          <div className="sbn-line"><span>Conservation levy</span><span>R {levy.toLocaleString()}</span></div>
          <div className="sbn-line"><span>Booking fee</span><span>R 0</span></div>
          <div className="sbn-line sbn-line--total"><span><b>Total</b></span><b>R {(sub + levy).toLocaleString()}</b></div>
          <div className="sbn-note"><span className="ic"><Icon name="info" size={15} /></span>The rate you see is the rate you pay — no markup added at checkout.</div>
          <div style={{ marginTop: 18 }}><Button variant="primary" size="lg" fullWidth iconRight="arrow-right" onClick={() => go("checkout")}>Continue to checkout</Button></div>
        </aside>
      </div>
    </div>);

}

Object.assign(window, { PropertyScreen });