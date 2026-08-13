/* African Safari Group — Flagship Website · Lodge detail (Londolozi)
   Option 4 lodge architecture: hero with breadcrumbs + price card, value-prop
   bar, direct-enquiry checklist, sub-nav (nav handoff + scrollspy), gallery,
   rooms, included experiences, best-time band, reviews, book banner,
   "More of the Reserve". */
const { Button, Badge, Dialog, Input, Icon, Breadcrumb } = window.DesignSystem_e5ff94;
const _lgDS = window.DesignSystem_e5ff94;
const FactPill = _lgDS.FactPill || (({children}) => <span>{children}</span>);
const PriceCard = _lgDS.PriceCard || (() => null);
const ValuePropBar = _lgDS.ValuePropBar || (() => null);
const EnquiryChecklist = _lgDS.EnquiryChecklist || (() => null);
const MonthGrid = _lgDS.MonthGrid || (() => null);

const lodgeCss = `
.lg-hero{position:relative;min-height:74vh;display:flex;align-items:flex-end;}
.lg-hero__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 45%;}
.lg-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,12,10,.5) 0%,rgba(14,12,10,.24) 40%,rgba(14,12,10,.9) 100%);}
.lg-hero__crumbs{position:absolute;top:24px;left:0;right:0;z-index:3;}
.lg-hero__crumbs .in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);}
.lg-hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:120px var(--gutter) 54px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;}
.lg-hero__in h1{font-size:clamp(2.4rem,1.6rem+2.8vw,3.5rem);margin:12px 0 0;color:#FFFFFF;}
.lg-hero__meta{display:flex;align-items:center;gap:14px;margin-top:16px;color:var(--asg-ivory-200);font-family:var(--font-body);font-size:13.5px;flex-wrap:wrap;}
.lg-stars{display:inline-flex;gap:2px;position:relative;top:1px;}
.lg-hero__pills{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap;}
section[id],div[id]{scroll-margin-top:72px;}
.lg-section{max-width:var(--container-wide);margin:0 auto;padding:80px var(--gutter);}
.lg-head{max-width:660px;margin-bottom:36px;}
.lg-head h2{font-family:var(--font-serif);font-weight:500;font-size:2rem;margin:10px 0 0;color:var(--text-primary);}
.lg-head p{font-family:var(--font-body);font-weight:300;font-size:15px;line-height:1.75;color:var(--text-body);margin:14px 0 0;max-width:60ch;}
.direct-band{background:var(--surface-raised);border-bottom:1px solid var(--border-subtle);}
.direct-band .in{max-width:var(--container-wide);margin:0 auto;padding:52px var(--gutter);}
.direct-band h2{font-family:var(--font-serif);font-weight:500;font-size:1.6rem;color:var(--text-primary);margin:0 0 8px;}
.direct-band .sub{font-family:var(--font-body);font-weight:300;font-size:14px;color:var(--text-body);margin:0 0 24px;max-width:64ch;line-height:1.7;}
.ov-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:56px;align-items:start;}
@media (max-width:900px){.ov-grid{grid-template-columns:1fr;gap:28px;}}
.ov-grid .prose p{font-size:16.5px;line-height:1.75;color:var(--text-body);max-width:64ch;}
.qf{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:26px 28px;position:sticky;top:90px;}
.qf h3{font-family:var(--font-serif);font-weight:500;font-size:18px;color:var(--text-primary);margin:0 0 10px;}
.qf-row{display:flex;justify-content:space-between;gap:18px;padding:12px 0;border-bottom:1px solid var(--border-subtle);font-family:var(--font-body);font-size:13.5px;}
.qf-row:last-child{border-bottom:none;}
.qf-row .k{color:var(--text-muted);}
.qf-row .v{color:var(--text-primary);font-weight:500;text-align:right;}
.lg-gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:220px 220px;gap:12px;border-radius:var(--radius-md);overflow:hidden;}
.lg-gallery img{width:100%;height:100%;object-fit:cover;display:block;}
.lg-gallery .g0{grid-row:span 2;}
@media (max-width:900px){.lg-gallery{grid-template-columns:1fr 1fr;grid-template-rows:170px 170px 170px;}.lg-gallery .g0{grid-row:span 1;grid-column:span 2;}}
.rooms-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
@media (max-width:900px){.rooms-grid{grid-template-columns:1fr;}}
.room{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;display:flex;flex-direction:column;}
.room .img{height:240px;overflow:hidden;}
.room .img img{width:100%;height:100%;object-fit:cover;display:block;}
.room .body{padding:26px 28px;flex:1;display:flex;flex-direction:column;}
.room h3{font-family:var(--font-serif);font-weight:500;font-size:20px;color:var(--text-primary);margin:0;}
.room .spec{font-family:var(--font-body);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);font-weight:500;margin:6px 0 14px;}
.feat{display:grid;grid-template-columns:1fr 1fr;gap:8px 22px;margin-bottom:20px;flex:1;}
.feat span{font-family:var(--font-body);font-size:12.5px;color:var(--text-body);position:relative;padding-left:16px;}
.feat span::before{content:'\\2713';position:absolute;left:0;color:var(--accent);font-weight:700;}
.room .row{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border-subtle);padding-top:18px;gap:12px;}
.room .pr{font-family:var(--font-serif);font-size:16px;color:var(--text-primary);}
.room .pr span{font-family:var(--font-body);font-size:11px;color:var(--text-muted);}
.list-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 36px;max-width:920px;}
@media (max-width:900px){.list-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:640px){.list-grid{grid-template-columns:1fr;}}
.list-grid span{font-family:var(--font-body);font-size:13.5px;color:var(--text-body);position:relative;padding-left:20px;}
.list-grid span::before{content:'\\2713';position:absolute;left:0;color:var(--accent);font-weight:700;}
.season-band{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle);}
.scards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:40px;}
@media (max-width:900px){.scards{grid-template-columns:1fr;}}
.scard{background:var(--asg-charcoal);border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-md);padding:26px 28px;}
.scard h3{font-family:var(--font-serif);font-weight:500;color:var(--accent);font-size:19px;margin:0 0 4px;}
.scard .when{font-family:var(--font-body);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-quiet);font-weight:500;margin:0 0 12px;}
.scard p{font-family:var(--font-body);font-size:13.5px;color:var(--asg-bone);line-height:1.7;margin:0;}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
@media (max-width:900px){.reviews-grid{grid-template-columns:1fr;}}
.rvcard{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:30px;}
.rvcard .stars{color:var(--accent);letter-spacing:2px;font-size:13px;margin-bottom:16px;}
.rvcard p{font-family:var(--font-serif);font-style:italic;font-size:14.5px;color:var(--text-primary);line-height:1.7;margin:0 0 20px;}
.rvcard .who{font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--text-body);}
.rvcard .who span{color:var(--accent);font-weight:400;}
.banner{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));text-align:center;padding:88px var(--gutter);border-top:1px solid var(--border-subtle);}
.banner h2{font-family:var(--font-serif);font-weight:500;color:#FFFFFF;font-size:2rem;margin:0 0 12px;}
.banner .sub{font-family:var(--font-body);color:var(--asg-bone);font-size:15px;margin:0 0 34px;}
.banner .sub b{color:var(--accent);font-family:var(--font-serif);font-size:19px;font-weight:500;}
.banner .btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:22px;}
.banner .assure{font-family:var(--font-body);color:var(--text-faint);font-size:11.5px;letter-spacing:.05em;}
.banner .assure i{font-style:normal;margin:0 12px;}
.xs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.xs-grid{grid-template-columns:1fr;}}
.xcard{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;cursor:pointer;transition:box-shadow .25s var(--ease-standard),transform .25s var(--ease-standard),border-color .25s;}
.xcard:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--asg-brass-a40);}
.xcard .img{height:170px;overflow:hidden;}
.xcard .img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s var(--ease-standard);}
.xcard:hover .img img{transform:scale(1.05);}
.xcard .body{padding:20px 22px;}
.xcard h4{font-family:var(--font-serif);font-weight:500;font-size:16.5px;color:var(--text-primary);margin:0 0 6px;}
.xcard p{font-family:var(--font-body);font-size:12.5px;color:var(--text-body);line-height:1.6;margin:0 0 12px;}
.xcard .pr{font-family:var(--font-body);font-size:12.5px;color:var(--accent);font-weight:600;}
`;
(function(){ const s=document.createElement('style'); s.textContent=lodgeCss; document.head.appendChild(s); })();

function LgStar() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--asg-brass)" aria-hidden="true"><path d="M12 2l2.94 6.58 7.06.64-5.34 4.75 1.58 6.94L12 17.27 5.76 20.9l1.58-6.94L2 9.22l7.06-.64z"/></svg>;
}

function LodgeScreen({ go }) {
  const [open, setOpen] = React.useState(false);
  const subnav = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "rooms", label: "Rooms" },
    { id: "experiences", label: "Experiences" },
    { id: "lodge-best-time", label: "Best Time" },
    { id: "reviews", label: "Reviews" },
  ];
  return (
    <main>
      <section className="lg-hero">
        <img className="lg-hero__img" src="../../assets/photos/lounge-deck.webp" alt="Londolozi Founders Camp — deck over the Sand River" />
        <div className="lg-hero__crumbs"><div className="in">
          <Breadcrumb hero items={[{label:"Destinations",href:"#destinations"},{label:"Sabi Sand",href:"#sabi-sand"},{label:"Londolozi Founders Camp"}]} />
        </div></div>
        <div className="lg-hero__in">
          <div>
            <span className="asg-eyebrow" style={{color:'var(--accent-quiet)'}}>Sabi Sand · Founders Camp · Big Five</span>
            <h1>Londolozi Founders Camp</h1>
            <div className="lg-hero__meta">
              <span className="lg-stars"><LgStar /><LgStar /><LgStar /><LgStar /><LgStar /></span>
              <span>4.9 · 300+ reviews</span>
              <span>Relais &amp; Châteaux</span>
            </div>
            <div className="lg-hero__pills">
              <FactPill>10 riverside suites</FactPill>
              <FactPill>Private plunge pools</FactPill>
              <FactPill>2 game drives daily</FactPill>
            </div>
          </div>
          <PriceCard from="R 18,200" unit="pp / night" primaryLabel="Enquire About Dates" onPrimary={() => setOpen(true)} secondaryLabel="Plan My Safari" onSecondary={() => go("enquire")} />
        </div>
      </section>

      <ValuePropBar items={[
        { k: "Current Special", t: "Stay 4, Pay 3", d: "A fourth night on us in green season — limited dates, subject to availability." },
        { k: "Book Direct", t: "No markup at quote", d: "You see the lodge's contracted rate — the price we pay is the price you see." },
        { k: "Plan With a Consultant", t: "Reply within 24h", d: "Send your dates and a specialist tailors the stay and confirms space." },
        { k: "Expert Support", t: "Specialists on call", d: "Talk to consultants who have stayed at Londolozi — not a call centre." },
      ]} />

      <div className="direct-band">
        <div className="in">
          <h2>Why enquire direct with ASG</h2>
          <p className="sub">Enquiring connects you to a specialist who knows Founders Camp first-hand — what you see is the lodge's contracted rate, with a reply within 24 hours.</p>
          <EnquiryChecklist items={[
            "Lodge's contracted rate — no markup",
            "Personal advice from safari specialists",
            "A tailored itinerary for your dates",
            "No payment to enquire — reply within 24 hours",
          ]} />
        </div>
      </div>

      <SubNav items={subnav} ctaLabel="Enquire" onCta={() => setOpen(true)} />

      <section className="lg-section" id="overview">
        <div className="ov-grid">
          <div className="prose">
            <span className="asg-eyebrow">Overview</span>
            <h2 style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'2rem',color:'var(--text-primary)',margin:'10px 0 14px'}}>Ten suites along the Sand River.</h2>
            <p>Londolozi all but invented the relaxed-leopard sighting. Founders Camp is its most private address — ten suites along the Sand River, each with a plunge pool and a deck that looks straight into the riverine bush.</p>
            <p>Mornings begin before light with your ranger and tracker; afternoons end with a sundowner where the herds come to drink. Between drives, the camp is yours: unhurried, quiet, and entirely without schedule.</p>
          </div>
          <aside className="qf">
            <h3>Quick facts</h3>
            <div className="qf-row"><span className="k">Children</span><span className="v">All ages · family vehicles</span></div>
            <div className="qf-row"><span className="k">Getting there</span><span className="v">90 min · Johannesburg</span></div>
            <div className="qf-row"><span className="k">Setting</span><span className="v">Private Sand River frontage</span></div>
            <div className="qf-row"><span className="k">Wildlife</span><span className="v">Big Five · Leopard</span></div>
            <div className="qf-row"><span className="k">Board</span><span className="v">All-inclusive, house cellar</span></div>
          </aside>
        </div>
      </section>

      <section className="lg-section" id="gallery" style={{paddingTop:0}}>
        <div className="lg-head">
          <span className="asg-eyebrow">Gallery</span>
          <h2>A look around the camp.</h2>
        </div>
        <div className="lg-gallery">
          <div className="g0"><img src="../../assets/photos/suite.webp" alt="Founders suite and deck" /></div>
          <div><img src="../../assets/photos/bed.webp" alt="Suite bedroom" /></div>
          <div><img src="../../assets/photos/lounge.webp" alt="Camp lounge" /></div>
          <div><img src="../../assets/photos/boma.webp" alt="Boma dinner under the stars" /></div>
          <div><img src="../../assets/photos/jamala-1.jpg" alt="Evening view from the deck" /></div>
        </div>
      </section>

      <section className="lg-section" id="rooms" style={{paddingTop:0}}>
        <div className="lg-head">
          <span className="asg-eyebrow">Rooms &amp; suites</span>
          <h2>Where you will stay.</h2>
        </div>
        <div className="rooms-grid">
          <div className="room">
            <div className="img"><img src="../../assets/photos/suite-lounge.webp" alt="Founders Suite" /></div>
            <div className="body">
              <h3>Founders Suite</h3>
              <p className="spec">Sleeps 2 · River-facing</p>
              <div className="feat">
                <span>Private plunge pool</span><span>Deck into the bush</span>
                <span>King or twin beds</span><span>Indoor–outdoor shower</span>
              </div>
              <div className="row">
                <div className="pr">From R 18,200 <span>pp / night</span></div>
                <Button size="sm" onClick={() => setOpen(true)}>Enquire</Button>
              </div>
            </div>
          </div>
          <div className="room">
            <div className="img"><img src="../../assets/photos/jamala-2.jpg" alt="Family Suite" /></div>
            <div className="body">
              <h3>Family Suite</h3>
              <p className="spec">Sleeps 4 · Interleading</p>
              <div className="feat">
                <span>Two en-suite rooms</span><span>Shared river deck</span>
                <span>Private family vehicle</span><span>Dedicated ranger on request</span>
              </div>
              <div className="row">
                <div className="pr">From R 24,600 <span>pp / night</span></div>
                <Button size="sm" onClick={() => setOpen(true)}>Enquire</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg-section" id="experiences" style={{paddingTop:0}}>
        <div className="lg-head">
          <span className="asg-eyebrow">Experiences · Included</span>
          <h2>Things to do.</h2>
          <p>Expert-guided game drives are the centrepiece; everything below is included in your stay.</p>
        </div>
        <div className="list-grid">
          <span>Big Five game drives</span><span>Guided bush walks</span><span>Sundowner stops</span>
          <span>Birdwatching</span><span>Boma dinners</span><span>Stargazing with a guide</span>
          <span>All meals &amp; house cellar</span><span>Laundry &amp; conservation levies</span><span>Transfers within the reserve</span>
        </div>
      </section>

      <section className="season-band" id="lodge-best-time">
        <div className="lg-section" style={{paddingTop:72,paddingBottom:72}}>
          <div className="lg-head">
            <span className="asg-eyebrow">Best time to visit</span>
            <h2 style={{color:'#FFFFFF'}}>When to go.</h2>
            <p style={{color:'var(--asg-bone)'}}>Game viewing rewards year-round; the dry winter months are peak for sightings.</p>
          </div>
          <div className="scards">
            <div className="scard">
              <h3>Dry Winter</h3>
              <p className="when">May – September</p>
              <p>Animals gather at the Sand River, the bush thins out and viewing is at its best. Clear days of 8–26&nbsp;°C (46–79&nbsp;°F), minimal rain, cold early mornings.</p>
            </div>
            <div className="scard">
              <h3>Green Summer</h3>
              <p className="when">October – March</p>
              <p>Lush landscapes, newborn animals and migratory birds. Warm days of 20–32&nbsp;°C (68–90&nbsp;°F) with dramatic afternoon skies.</p>
            </div>
          </div>
          <MonthGrid />
        </div>
      </section>

      <section className="lg-section" id="reviews">
        <div className="lg-head">
          <span className="asg-eyebrow">Reviews</span>
          <h2>4.9 / 5 · 300+ guest reviews.</h2>
        </div>
        <div className="reviews-grid">
          <div className="rvcard">
            <div className="stars">★★★★★</div>
            <p>“Roxanne was our reservations specialist and she has been nothing short of fantastic.”</p>
            <div className="who">Ally Brown <span>· TripAdvisor</span></div>
          </div>
          <div className="rvcard">
            <div className="stars">★★★★★</div>
            <p>“If I could give David 10 stars I would. So easy to book, great location and accommodation.”</p>
            <div className="who">Chessie McHugh <span>· Google</span></div>
          </div>
          <div className="rvcard">
            <div className="stars">★★★★★</div>
            <p>“Outstanding help from James throughout. Seamless from quote to arrival.”</p>
            <div className="who">ASG guest <span>· Feedback Company</span></div>
          </div>
        </div>
      </section>

      <section className="banner">
        <h2>Ready to plan Londolozi?</h2>
        <p className="sub">From <b>R 18,200</b> pp / night · ★ 4.9 · 300+ reviews</p>
        <div className="btns">
          <Button variant="primary" size="lg" onClick={() => setOpen(true)}>Enquire About Dates</Button>
          <Button variant="secondary" size="lg" onClick={() => go("reserve")}>Explore the Reserve</Button>
        </div>
        <p className="assure">No booking fee<i>·</i>No payment to enquire<i>·</i>Expert support</p>
      </section>

      <section className="lg-section">
        <div className="lg-head">
          <span className="asg-eyebrow">More of the Reserve</span>
          <h2>Other lodges in Sabi Sand.</h2>
        </div>
        <div className="xs-grid">
          <div className="xcard" onClick={() => go("reserve")}>
            <div className="img"><img src="../../assets/photos/lounge.webp" alt="Lion Sands" /></div>
            <div className="body"><h4>Lion Sands</h4><p>Treehouse sleep-outs and a wide river frontage — the family favourite.</p><div className="pr">From R 15,600 pp / night →</div></div>
          </div>
          <div className="xcard" onClick={() => go("reserve")}>
            <div className="img"><img src="../../assets/photos/boma.webp" alt="Cheetah Plains" /></div>
            <div className="body"><h4>Cheetah Plains</h4><p>Solar-run, contemporary, fully private villas with your own vehicle.</p><div className="pr">From R 22,900 pp / night →</div></div>
          </div>
          <div className="xcard" onClick={() => go("reserve")}>
            <div className="img"><img src="../../assets/photos/kopano-top.webp" alt="Sabi Sabi Earth Lodge" /></div>
            <div className="body"><h4>Sabi Sabi Earth Lodge</h4><p>Sculpted into the earth — the reserve's quietest architectural statement.</p><div className="pr">From R 21,400 pp / night →</div></div>
          </div>
        </div>
      </section>

      <Dialog open={open} onClose={() => setOpen(false)} title="Enquire about Londolozi"
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => setOpen(false)}>Send enquiry</Button></>}>
        <p style={{marginTop:0}}>A specialist who has stayed at Londolozi will reply within 24 hours — no call centre, no quote cycle, no payment to enquire.</p>
        <div style={{display:'flex',flexDirection:'column',gap:14,marginTop:16}}>
          <Input label="Full name" placeholder="Sarah Kruger" />
          <Input label="Email" type="email" placeholder="you@example.com" />
        </div>
      </Dialog>
    </main>
  );
}

Object.assign(window, { LodgeScreen });
