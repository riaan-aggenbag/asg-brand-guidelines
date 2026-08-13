/* African Safari Group — Flagship Website · Reserve detail (Sabi Sand)
   Option 4 page architecture: breadcrumbs over the hero, frosted fact pills,
   sub-nav with nav handoff + scrollspy, wildlife sightings honesty, dark
   best-time band with the month season grid, getting-there steps. */
const { Button, Badge, Card, Stat, Breadcrumb, Tag, Icon } = window.DesignSystem_e5ff94;
const _rsvDS = window.DesignSystem_e5ff94;
const FactPill = _rsvDS.FactPill || (({children}) => <span>{children}</span>);
const SightingsBadge = _rsvDS.SightingsBadge || (() => null);
const MonthGrid = _rsvDS.MonthGrid || (() => null);

const reserveCss = `
.rsv-hero{position:relative;min-height:64vh;display:flex;align-items:flex-end;}
.rsv-hero__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 55%;}
.rsv-hero::after{content:"";position:absolute;inset:0;background:var(--scrim-bottom);}
.rsv-hero__crumbs{position:absolute;top:24px;left:0;right:0;z-index:3;}
.rsv-hero__crumbs .in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);}
.rsv-hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:110px var(--gutter) 52px;}
.rsv-hero__in h1{font-size:clamp(2.6rem,1.6rem+3.4vw,4rem);margin:14px 0 0;color:#FFFFFF;}
.rsv-hero__lede{font-family:var(--font-body);font-weight:300;font-size:16px;line-height:1.7;color:var(--asg-ivory-200);max-width:56ch;margin:18px 0 0;}
.rsv-hero__meta{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap;}
.rsv-hero__ctas{display:flex;gap:14px;margin-top:32px;flex-wrap:wrap;}
.section{max-width:var(--container-wide);margin:0 auto;padding:80px var(--gutter);}
section[id]{scroll-margin-top:72px;}
.rsv-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:56px;align-items:start;}
@media (max-width:900px){.rsv-grid{grid-template-columns:1fr;gap:32px;}}
.rsv-prose p{font-size:16.5px;line-height:1.75;color:var(--text-body);max-width:64ch;}
.rsv-prose h2{font-family:var(--font-serif);font-weight:500;font-size:clamp(1.7rem,1.3rem+1.2vw,2.1rem);color:var(--text-primary);margin:10px 0 14px;}
.rsv-photo{border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-md);}
.rsv-photo img{width:100%;height:460px;object-fit:cover;display:block;}
.statsrow2{display:flex;gap:54px;flex-wrap:wrap;margin:8px 0 0;}
.sec-head{max-width:660px;margin-bottom:36px;}
.sec-head h2{font-family:var(--font-serif);font-weight:500;font-size:2rem;margin:10px 0 0;color:var(--text-primary);}
.sec-head p{font-family:var(--font-body);font-weight:300;font-size:15px;line-height:1.75;color:var(--text-body);margin:14px 0 0;max-width:60ch;}
.wild-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 56px;max-width:820px;}
@media (max-width:700px){.wild-grid{grid-template-columns:1fr;}}
.wild-row{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:13px 0;border-bottom:1px solid var(--border-subtle);}
.wild-row span{font-family:var(--font-body);font-size:14px;color:var(--text-body);}
.lodges{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.lodges{grid-template-columns:1fr;}}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px;}
.season-band{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle);}
.scards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:40px;}
@media (max-width:900px){.scards{grid-template-columns:1fr;}}
.scard{background:var(--asg-charcoal);border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-md);padding:26px 28px;}
.scard h3{font-family:var(--font-serif);font-weight:500;color:var(--accent);font-size:19px;margin:0 0 4px;}
.scard .when{font-family:var(--font-body);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-quiet);font-weight:500;margin:0 0 12px;}
.scard p{font-family:var(--font-body);font-size:13.5px;color:var(--asg-bone);line-height:1.7;margin:0;}
.steps{display:grid;gap:26px;margin-top:8px;max-width:560px;}
.step{display:flex;gap:20px;align-items:flex-start;}
.step .num{flex:none;width:40px;height:40px;border-radius:50%;background:var(--asg-brass);color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:17px;}
.step h3{font-family:var(--font-body);font-weight:600;font-size:16px;color:var(--text-primary);margin:0 0 6px;}
.step p{font-family:var(--font-body);font-size:13.5px;color:var(--text-body);line-height:1.65;margin:0;}
`;
(function(){ const s=document.createElement('style'); s.textContent=reserveCss; document.head.appendChild(s); })();

const LODGES = [
  { eyebrow: "Founders Camp", title: "Londolozi", desc: "Founders-suite privacy on the Sand River.", price: "R 18,200", tag: "Leopards", img: "../../assets/photos/suite.webp" },
  { eyebrow: "Family Camp", title: "Lion Sands", desc: "Treehouse sleep-outs and a wide river frontage.", price: "R 15,600", tag: "Families", img: "../../assets/photos/lounge.webp" },
  { eyebrow: "Tented", title: "Cheetah Plains", desc: "Solar-run, contemporary, fully private villas.", price: "R 22,900", tag: "Exclusive-use", img: "../../assets/photos/boma.webp" },
];

const SIGHTINGS = [
  { sp: "Leopard", level: "most" },
  { sp: "Elephant", level: "very" },
  { sp: "Lion", level: "very" },
  { sp: "Buffalo", level: "often" },
  { sp: "Rhino", level: "often" },
  { sp: "Wild dog", level: "rare" },
];

function ReserveScreen({ go }) {
  const [filter, setFilter] = React.useState("All lodges");
  const filters = ["All lodges", "Leopards", "Families", "Exclusive-use"];
  const subnav = [
    { id: "overview", label: "Overview" },
    { id: "wildlife", label: "Wildlife" },
    { id: "lodges", label: "Lodges" },
    { id: "best-time", label: "Best Time" },
    { id: "getting-there", label: "Getting There" },
  ];
  return (
    <main>
      <section className="rsv-hero">
        <img className="rsv-hero__img" src="../../assets/photos/vista.jpg" alt="Sabi Sand — wide environmental view at golden hour" />
        <div className="rsv-hero__crumbs"><div className="in">
          <Breadcrumb hero items={[{label:"Destinations",href:"#destinations"},{label:"South Africa",href:"#south-africa"},{label:"Sabi Sand"}]} />
        </div></div>
        <div className="rsv-hero__in">
          <span className="asg-eyebrow" style={{color:'var(--accent-quiet)'}}>Mpumalanga, South Africa · Greater Kruger</span>
          <h1>Sabi Sand Game Reserve</h1>
          <p className="rsv-hero__lede">Unfenced with Kruger, privately traversed — a handful of vehicles to a sighting, and the most relaxed leopards on the continent.</p>
          <div className="rsv-hero__meta">
            <FactPill>Big Five</FactPill>
            <FactPill>65,000 hectares</FactPill>
            <FactPill>Unfenced with Kruger</FactPill>
            <FactPill>Open all year</FactPill>
          </div>
          <div className="rsv-hero__ctas">
            <Button variant="primary" size="lg" onClick={() => go("enquire")}>Plan My Safari</Button>
            <Button variant="secondary" size="lg" onClick={() => { const s=document.getElementById('lodges'); if(s) window.scrollTo({top:s.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'}); }}>Explore the Lodges</Button>
          </div>
        </div>
      </section>

      <SubNav items={subnav} onCta={() => go("enquire")} />

      <section className="section" id="overview">
        <div className="rsv-grid">
          <div className="rsv-prose">
            <span className="asg-eyebrow">The reserve</span>
            <h2>Where leopards are relaxed around vehicles.</h2>
            <p>Sabi Sand shares an unfenced boundary with Kruger, so game moves freely while the traversing rights stay private — a handful of vehicles to a sighting, not a queue. Decades of respectful viewing have made its leopards the most relaxed on the continent.</p>
            <p>We hold space across the reserve's founding lodges. Three nights is our standard recommendation: enough for the unhurried mornings and the one sighting you will talk about for years.</p>
            <div className="statsrow2">
              <Stat value="98%" label="trips with a leopard sighting" />
              <Stat value="6–7" label="lodges we place guests in" />
              <Stat value="3 nights" label="recommended stay" brass={false} />
            </div>
          </div>
          <div className="rsv-photo"><img src="../../assets/photos/kopano-top.webp" alt="Lodge deck over the bushveld" /></div>
        </div>
      </section>

      <section className="section" id="wildlife" style={{paddingTop:0}}>
        <div className="sec-head">
          <span className="asg-eyebrow">Wildlife</span>
          <h2>What you are likely to see.</h2>
          <p>Stated honestly — sighting odds by species, from decades of drive records. Never promised.</p>
        </div>
        <div className="wild-grid">
          {SIGHTINGS.map((w) => (
            <div key={w.sp} className="wild-row"><span>{w.sp}</span><SightingsBadge level={w.level} /></div>
          ))}
        </div>
      </section>

      <section className="section" id="lodges" style={{paddingTop:0}}>
        <div className="sec-head" style={{marginBottom:24}}>
          <span className="asg-eyebrow">The lodges</span>
          <h2>Where you will stay.</h2>
        </div>
        <div className="filters">
          {filters.map((f) => <Tag key={f} selected={filter===f} onClick={() => setFilter(f)}>{f}</Tag>)}
        </div>
        <div className="lodges">
          {LODGES.filter(l => filter==="All lodges" || l.tag===filter).map((l) => (
            <Card key={l.title} href="#" onClick={(e)=>{e.preventDefault();go("lodge");}}
              image={l.img} imageAlt={l.title}
              badge={<Badge variant="neutral">{l.tag}</Badge>}
              eyebrow={l.eyebrow} title={l.title}
              footer={<><div className="asg-card__price"><b>{l.price}</b><span>pp / night</span></div><Button size="sm" variant="secondary">View lodge</Button></>}>
              <p className="asg-card__desc">{l.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="season-band" id="best-time">
        <div className="section" style={{paddingTop:72,paddingBottom:72}}>
          <div className="sec-head">
            <span className="asg-eyebrow">Best time to visit</span>
            <h2 style={{color:'#FFFFFF'}}>When to go.</h2>
            <p style={{color:'var(--asg-bone)'}}>Game viewing rewards year-round. Dry winter is peak for sightings; green summer brings lush scenery and newborn game.</p>
          </div>
          <div className="scards">
            <div className="scard">
              <h3>Dry Winter</h3>
              <p className="when">May – September</p>
              <p>Animals gather at water, the bush thins out and viewing is at its best. Clear days of 8–26&nbsp;°C (46–79&nbsp;°F), minimal rain, cold early mornings. Peak game viewing.</p>
            </div>
            <div className="scard">
              <h3>Green Summer</h3>
              <p className="when">October – March</p>
              <p>Lush landscapes, newborn animals and migratory birds. Warm days of 20–32&nbsp;°C (68–90&nbsp;°F), with dramatic afternoon skies and busier school-holiday periods.</p>
            </div>
          </div>
          <MonthGrid />
        </div>
      </section>

      <section className="section" id="getting-there">
        <div className="rsv-grid">
          <div>
            <span className="asg-eyebrow">Getting there</span>
            <h2 style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'2rem',color:'var(--text-primary)',margin:'10px 0 26px'}}>Ninety minutes from Johannesburg.</h2>
            <div className="steps">
              <div className="step"><span className="num">1</span><div><h3>Fly to the reserve</h3><p>A 90-minute light-aircraft flight from Johannesburg lands at the reserve's private airstrip. We book it with your stay.</p></div></div>
              <div className="step"><span className="num">2</span><div><h3>Meet your ranger</h3><p>Your lodge collects you from the strip — a 20-minute transfer that usually doubles as your first game drive.</p></div></div>
              <div className="step"><span className="num">3</span><div><h3>Settle in by lunch</h3><p>Arrive mid-morning, lunch on the deck, and be on your first full drive by late afternoon.</p></div></div>
            </div>
          </div>
          <div className="rsv-photo"><img src="../../assets/photos/lounge-deck.webp" alt="Arrival deck at the lodge" /></div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { ReserveScreen });
