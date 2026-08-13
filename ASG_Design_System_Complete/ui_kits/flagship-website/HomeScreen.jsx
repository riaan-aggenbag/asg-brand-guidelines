/* African Safari Group — Flagship Website · Home */
const { Button, Badge, Card, Stat, Divider, Icon } = window.DesignSystem_e5ff94;

const homeCss = `
.photo-slot{position:relative;background:
  radial-gradient(120% 90% at 70% 10%, #241f19 0%, #171411 55%, #0e0c0a 100%);
  overflow:hidden;display:flex;align-items:center;justify-content:center;}
.photo-slot::before{content:"";position:absolute;inset:0;background-image:
  repeating-linear-gradient(135deg, rgba(168,121,75,.05) 0 2px, transparent 2px 9px);opacity:.5;}
.photo-slot__tag{position:relative;font-family:var(--font-body);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--text-faint);display:flex;align-items:center;gap:9px;}
.photo-slot__tag .dot{width:5px;height:5px;border-radius:50%;background:var(--asg-brass);opacity:.6;}

.hero{position:relative;min-height:82vh;display:flex;align-items:flex-end;}
.hero .photo-slot{position:absolute;inset:0;}
.hero::after{content:"";position:absolute;inset:0;background:var(--scrim-full);}
.hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:0 var(--gutter) 88px;}
.hero__eyebrow{color:var(--accent);}
.hero h1{font-size:clamp(2.8rem,1.6rem+4.4vw,4.6rem);line-height:1.02;letter-spacing:-.015em;max-width:16ch;margin:18px 0 0;}
.hero h1 em{font-style:italic;color:var(--asg-heritage-sand);}
.hero__lead{margin:22px 0 30px;font-size:19px;line-height:1.5;color:var(--text-body);max-width:52ch;}
.hero__cta{display:flex;gap:14px;flex-wrap:wrap;}
.hero__scroll{position:absolute;bottom:30px;right:var(--gutter);z-index:2;display:flex;align-items:center;gap:9px;color:var(--text-muted);font-family:var(--font-body);font-size:11px;letter-spacing:.18em;text-transform:uppercase;}

.section{max-width:var(--container-wide);margin:0 auto;padding:96px var(--gutter);}
.section--text{max-width:var(--container-max);}
.sec-head{display:flex;flex-direction:column;gap:14px;margin-bottom:46px;}
.sec-head .asg-eyebrow{color:var(--accent);}
.sec-head h2{font-size:clamp(2rem,1.4rem+2vw,3rem);margin:0;max-width:20ch;}
.sec-head p{margin:0;color:var(--text-body);font-size:16px;max-width:60ch;}

.values{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border-subtle);border:1px solid var(--border-subtle);border-radius:var(--radius-md);overflow:hidden;}
.value{background:var(--surface-base);padding:34px 28px;display:flex;flex-direction:column;gap:14px;}
.value__ic{color:var(--accent);}
.value h4{font-family:var(--font-serif);font-weight:500;font-size:21px;color:var(--text-primary);margin:0;}
.value p{font-size:14px;line-height:1.6;color:var(--text-muted);margin:0;}
@media (max-width:900px){.values{grid-template-columns:1fr 1fr;}}

.reserves{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.reserves{grid-template-columns:1fr;}}

.hm-band{position:relative;background:var(--asg-charcoal);border-radius:var(--radius-lg);overflow:hidden;display:grid;grid-template-columns:1.1fr 1fr;}
.hm-band__slot{min-height:380px;}
.hm-band__body{padding:64px;display:flex;flex-direction:column;justify-content:center;gap:18px;}
.hm-band__body h2{font-size:34px;margin:0;max-width:18ch;}
.hm-band__body p{margin:0;color:var(--text-body);font-size:16px;line-height:1.65;max-width:46ch;}
.hm-band__specialist{display:flex;align-items:center;gap:14px;margin-top:8px;}
.hm-band__specialist .av{width:52px;height:52px;border-radius:50%;background:var(--asg-charcoal-500);}
.hm-band__specialist b{display:block;font-family:var(--font-body);font-size:14px;color:var(--text-primary);font-weight:600;}
.hm-band__specialist span{font-family:var(--font-body);font-size:13px;color:var(--text-muted);}
@media (max-width:900px){.hm-band{grid-template-columns:1fr;}.hm-band__body{padding:40px;}}

.quote{text-align:center;max-width:var(--container-text);margin:0 auto;padding:110px var(--gutter);}
.quote p{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.7rem,1.2rem+1.6vw,2.4rem);line-height:1.34;color:var(--text-primary);margin:0;}
.quote cite{display:block;margin-top:26px;font-style:normal;font-family:var(--font-body);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted);}
.statsrow{display:flex;justify-content:center;gap:64px;flex-wrap:wrap;padding-bottom:30px;}
`;
(function(){ const s=document.createElement('style'); s.textContent=homeCss; document.head.appendChild(s); })();

function PhotoSlot({ label = "Photography", style, className = "" }) {
  return (
    <div className={["photo-slot", className].filter(Boolean).join(" ")} style={style}>
      <span className="photo-slot__tag"><span className="dot" />{label}</span>
    </div>
  );
}

const VALUES = [
  { icon: "compass", h: "We know the reserves", p: "Not a directory — we have slept in the beds, met the guides, and watched the light." },
  { icon: "binoculars", h: "Specific over superlative", p: "Sighting odds, seasons and lodges named plainly, so you choose with confidence." },
  { icon: "users", h: "Consultation-led", p: "One specialist, start to finish. A person, never a booking funnel." },
  { icon: "leaf", h: "Quietly responsible", p: "Reserves and lodges chosen for their conservation record, not their marketing." },
];

const RESERVES = [
  { eyebrow: "Sabi Sand · South Africa", title: "The Leopard Capital", desc: "The highest leopard-sighting density in Africa, traversing Kruger's unfenced western edge.", price: "R 18,200", badge: "Big Five" },
  { eyebrow: "Amakhala · Eastern Cape", title: "Malaria-Free Big Five", desc: "Five reserves, one ecosystem — ideal for families and first safaris.", price: "R 9,400", badge: "Malaria-Free" },
  { eyebrow: "Serengeti · Tanzania", title: "The Great Migration", desc: "Time your stay to the river crossings; we hold the camps that move with the herds.", price: "R 24,600", badge: "Migration" },
];

function HomeScreen({ go }) {
  return (
    <main>
      <section className="hero">
        <PhotoSlot label="Hero — golden hour, one clear subject, room to breathe" />
        <div className="hero__in">
          <span className="asg-eyebrow hero__eyebrow">Tailor-made · Five-star · Southern &amp; East Africa</span>
          <h1>Your Africa,<br /><em>Considered.</em></h1>
          <p className="hero__lead">Safaris designed by specialists who have stayed at every lodge they recommend. We start with a conversation, not a checkout.</p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => go("enquire")}>Plan My Safari</Button>
            <Button variant="secondary" size="lg" onClick={() => go("reserve")}>Explore reserves</Button>
          </div>
        </div>
        <div className="hero__scroll"><Icon name="chevron-down" size={16} />Scroll</div>
      </section>

      <section className="section">
        <div className="sec-head">
          <span className="asg-eyebrow">Why African Safari Group</span>
          <h2>The authority, not a booking platform.</h2>
        </div>
        <div className="values">
          {VALUES.map((v) => (
            <div className="value" key={v.h}>
              <span className="value__ic"><Icon name={v.icon} size={26} strokeWidth={1.5} /></span>
              <h4>{v.h}</h4>
              <p>{v.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="sec-head">
          <span className="asg-eyebrow">Featured reserves</span>
          <h2>Where the sightings are.</h2>
          <p>A short, curated list — the reserves we return to, season after season.</p>
        </div>
        <div className="reserves">
          {RESERVES.map((r) => (
            <Card key={r.title} href="#" onClick={(e) => { e.preventDefault(); go("reserve"); }}
              imageSlot="Reserve photography"
              badge={<Badge variant="solid">{r.badge}</Badge>}
              eyebrow={r.eyebrow} title={r.title}
              footer={<><div className="asg-card__price"><b>{r.price}</b><span>from / pp night</span></div><span style={{color:'var(--accent)'}}><Icon name="arrow-right" size={20} /></span></>}>
              <p className="asg-card__desc">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="hm-band">
          <PhotoSlot className="hm-band__slot" label="Specialist portrait" />
          <div className="hm-band__body">
            <span className="asg-eyebrow">A person, not a funnel</span>
            <h2>One specialist, from first call to final sundowner.</h2>
            <p>Tell us who is travelling and when. Your specialist shortlists lodges, holds space, and stays with your trip the whole way through.</p>
            <div className="hm-band__specialist">
              <div className="av"></div>
              <div><b>Thandi Mokoena</b><span>Senior Safari Specialist · 14 years in-field</span></div>
            </div>
            <div style={{marginTop:10}}><Button variant="primary" onClick={() => go("enquire")}>Start the conversation</Button></div>
          </div>
        </div>
      </section>

      <section className="quote">
        <Divider brass center />
        <p style={{marginTop:34}}>“Sabi Sand offers the highest leopard-sighting density in Africa. Three nights gives you the best odds.”</p>
        <cite>From your specialist briefing</cite>
      </section>

      <section className="statsrow">
        <Stat value="40+" label="reserves we know first-hand" center />
        <Stat value="2,000+" label="journeys designed" center />
        <Stat value="1 hour" label="typical reply time" center />
      </section>
    </main>
  );
}

Object.assign(window, { HomeScreen, PhotoSlot });
