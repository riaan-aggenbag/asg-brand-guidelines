/* Flagship — Editorial (blend) · Pages B: Reserve, Lodge, About, Enquiry */
const { Button, Badge, Card, Stat, Tabs, Tag, Accordion, Avatar, Divider,
        Input, Textarea, Select, Checkbox, Toast, Icon } = window.DesignSystem_e5ff94;
const { PhotoSlot } = window;

/* ---------------- RESERVE (Sabi Sand) ---------------- */
const RSV_LODGES = [
  { eyebrow: "Founders Camp", title: "Londolozi", desc: "Founders-suite privacy on the Sand River.", price: "R 18,200", tag: "Leopards" },
  { eyebrow: "Family Camp", title: "Lion Sands", desc: "Treehouse sleep-outs and a wide river frontage.", price: "R 15,600", tag: "Families" },
  { eyebrow: "Tented", title: "Cheetah Plains", desc: "Solar-run, contemporary, fully private villas.", price: "R 22,900", tag: "Exclusive-use" },
];

function EdReserve({ go }) {
  const [tab, setTab] = React.useState("overview");
  const [filter, setFilter] = React.useState("All lodges");
  const filters = ["All lodges", "Leopards", "Families", "Exclusive-use"];
  return (
    <main>
      <section className="hero hero--mid">
        <PhotoSlot label="Reserve hero — wide environmental shot of Sabi Sand" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("destinations")}>Destinations</a><span className="sep">/</span><span>Sabi Sand</span></div>
          <h1>Sabi Sand Game Reserve</h1>
          <div className="hero__meta">
            <Badge variant="solid">Big Five</Badge>
            <Badge variant="neutral" dot>Open all year</Badge>
            <Badge variant="neutral">Unfenced · bordering Kruger</Badge>
          </div>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in">
          <div style={{marginBottom:'34px'}}>
            <Tabs value={tab} onChange={setTab} tabs={[
              {id:"overview",label:"Overview"},
              {id:"lodges",label:"Lodges",icon:"map-pin"},
              {id:"season",label:"Best Season",icon:"calendar"},
              {id:"getting",label:"Getting There"},
            ]} />
          </div>
          <div className="article">
            <div className="prose">
              <span className="eyebrow">The reserve</span>
              <h3 style={{marginTop:'10px'}}>Where leopards are relaxed around vehicles.</h3>
              <p>Sabi Sand shares an unfenced boundary with Kruger, so game moves freely while the traversing rights stay private — a handful of vehicles to a sighting, not a queue. Decades of respectful viewing have made its leopards the most relaxed on the continent.</p>
              <p>We hold space across the reserve's founding lodges. Three nights is our standard recommendation: enough for the unhurried mornings and the one sighting you will talk about for years.</p>
            </div>
            <aside className="aside">
              <h4>At a glance</h4>
              <div className="aside__row"><span className="ic"><Icon name="map-pin" size={20} strokeWidth={1.6} /></span><div><b>Mpumalanga, South Africa</b><span>Greater Kruger, western edge</span></div></div>
              <div className="aside__row"><span className="ic"><Icon name="calendar" size={20} strokeWidth={1.6} /></span><div><b>May – September</b><span>Best dry-season game viewing</span></div></div>
              <div className="aside__row"><span className="ic"><Icon name="binoculars" size={20} strokeWidth={1.6} /></span><div><b>Big Five · Leopard</b><span>Highest sighting density in Africa</span></div></div>
              <div style={{marginTop:'20px'}}><Button variant="primary" fullWidth onClick={() => go("enquire")}>Enquire about Sabi Sand</Button></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="band band--dark band--tight">
        <div className="band__in">
          <div className="statsrow">
            <Stat value="98%" label="trips with a leopard sighting" center />
            <Stat value="6–7" label="lodges we place guests in" center />
            <Stat value="3 nights" label="recommended stay" brass={false} center />
          </div>
        </div>
      </section>

      <section className="band band--white" data-theme="light">
        <div className="band__in">
          <div className="sec-head" style={{marginBottom:'24px'}}>
            <span className="eyebrow">The lodges</span>
            <h2>Where you will stay.</h2>
          </div>
          <div className="filters">
            {filters.map(f => <Tag key={f} selected={filter===f} onClick={() => setFilter(f)}>{f}</Tag>)}
          </div>
          <div className="grid-3">
            {RSV_LODGES.filter(l => filter==="All lodges" || l.tag===filter).map(l => (
              <Card key={l.title} href="#" onClick={(e)=>{e.preventDefault();go("lodge");}}
                imageSlot="Lodge photography" badge={<Badge variant="neutral">{l.tag}</Badge>}
                eyebrow={l.eyebrow} title={l.title}
                footer={<><div className="asg-card__price"><b>{l.price}</b><span>pp / night</span></div><Button size="sm" variant="secondary" onLight>View lodge</Button></>}>
                <p className="asg-card__desc">{l.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- LODGE (Londolozi) ---------------- */
function EdLodge({ go }) {
  return (
    <main>
      <section className="hero hero--short">
        <PhotoSlot label="Lodge hero — suite & deck over the Sand River" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("reserve")}>Sabi Sand</a><span className="sep">/</span><span>Londolozi Founders Camp</span></div>
          <h1>Londolozi Founders Camp</h1>
        </div>
      </section>

      <section className="band band--ivory band--tight" data-theme="light">
        <div className="band__in">
          <div className="gallery">
            <PhotoSlot className="g0" label="Suite & deck" />
            <PhotoSlot label="The Sand River" />
            <PhotoSlot label="Dining" />
            <PhotoSlot label="Game drive" />
            <PhotoSlot label="Pool" />
          </div>
        </div>
      </section>

      <section className="band band--white" data-theme="light" style={{paddingTop:'40px'}}>
        <div className="band__in">
          <div className="article">
            <div className="prose">
              <span className="eyebrow">Sabi Sand · Founders Camp</span>
              <h3 style={{marginTop:'10px'}}>Ten suites along the Sand River.</h3>
              <p>Londolozi all but invented the relaxed-leopard sighting. Founders Camp is its most private address — ten suites along the Sand River, each with a plunge pool and a deck that looks straight into the riverine bush.</p>
              <p>Mornings begin before light with your ranger and tracker; afternoons end with a sundowner where the herds come to drink. Between drives, the camp is yours: unhurried, quiet, and entirely without schedule.</p>
              <div className="statsrow" style={{justifyContent:'flex-start',gap:'48px',margin:'30px 0 8px'}}>
                <Stat value="10" label="riverside suites" />
                <Stat value="2" label="game drives daily" />
                <Stat value="98%" label="leopard sightings" brass={false} />
              </div>
            </div>
            <aside className="rate">
              <div className="rate__price"><b>R 18,200</b><span>pp / night sharing</span></div>
              <div style={{height:'16px'}}></div>
              <div className="rate__line"><span>Your dates</span><span>14–17 Oct 2026</span></div>
              <div className="rate__line"><span>Guests</span><span>2 adults</span></div>
              <div className="rate__line"><span>3 nights, full board</span><span>R 109,200</span></div>
              <div className="rate__note"><span className="ic"><Icon name="info" size={16} /></span>Real rates, real availability — a specialist confirms before you commit.</div>
              <div style={{marginTop:'20px'}}><Button variant="primary" fullWidth onClick={() => go("enquire")}>Enquire about these dates</Button></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in band__in--text">
          <div className="sec-head"><span className="eyebrow">Good to know</span><h2>The detail.</h2></div>
          <Accordion defaultOpen={[0]} items={[
            {title:"What's included", content:"All game drives with a private ranger and tracker, all meals, house wines and spirits, laundry, conservation levies and transfers within the reserve."},
            {title:"Best time to visit", content:"May to September for dry-season game viewing; November to March for lush landscapes, newborn game and dramatic skies."},
            {title:"Getting there", content:"A 90-minute light-aircraft flight from Johannesburg to the reserve's private airstrip, then a 20-minute transfer."},
            {title:"Children & families", content:"Children of all ages are welcome; private family vehicles and a dedicated ranger can be arranged on request."},
          ]} />
        </div>
      </section>
    </main>
  );
}

/* ---------------- ABOUT ---------------- */
const ABOUT_VALUES = [
  { icon: "compass", h: "First-hand knowledge", p: "We recommend only what we have seen, slept in, and stood beside." },
  { icon: "leaf", h: "Responsible by default", p: "Conservation record before marketing budget, every time." },
  { icon: "users", h: "One specialist per journey", p: "A single person owns your trip from first call to homecoming." },
];

function EdAbout({ go }) {
  return (
    <main>
      <section className="hero hero--mid">
        <PhotoSlot label="About hero — the team in-field, or a defining landscape" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("home")}>Home</a><span className="sep">/</span><span>About</span></div>
          <h1>We are the specialists you'd hope to find.</h1>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in band__in--text">
          <div className="prose" style={{margin:'0 auto',textAlign:'center'}}>
            <span className="eyebrow">Our story</span>
            <h3 style={{marginTop:'12px'}}>Built by people who live in the bush.</h3>
            <p style={{margin:'0 auto'}}>African Safari Group began with a simple frustration: the gap between how safaris are sold and how they are actually experienced. We set out to close it — with specialists who have spent years in-field, and a promise to speak plainly. Specific over superlative. A person, not a funnel.</p>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in">
          <div className="sec-head sec-head--center"><span className="eyebrow">What we hold to</span><h2>Three commitments.</h2></div>
          <div className="grid-3">
            {ABOUT_VALUES.map(v => (
              <div className="tile" key={v.h} style={{alignItems:'center',textAlign:'center'}}>
                <span className="tile__ic"><Icon name={v.icon} size={28} strokeWidth={1.5} /></span>
                <h4>{v.h}</h4><p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--sand" data-theme="light">
        <div className="band__in">
          <div className="sec-head sec-head--center"><span className="eyebrow">By the numbers</span><h2>A record, not a pitch.</h2></div>
          <div className="statsrow">
            <Stat value="14 yrs" label="average specialist experience" center />
            <Stat value="2,000+" label="journeys designed" center />
            <Stat value="96%" label="guests who return or refer" center />
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'44px'}}>
            <Button variant="primary" size="lg" onClick={() => go("enquire")} iconRight="arrow-right">Plan your safari with us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- ENQUIRY ---------------- */
function EdEnquire({ go }) {
  const [sent, setSent] = React.useState(false);
  return (
    <main>
      <section className="hero hero--short">
        <PhotoSlot label="Enquiry hero — a warm, inviting camp at dusk" />
        <div className="hero__in">
          <span className="eyebrow">Plan my safari</span>
          <h1>Let's start with a conversation.</h1>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in">
          <div className="enq">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'clamp(1.8rem,1.4rem+1.4vw,2.4rem)',color:'var(--text-primary)',margin:'12px 0 0',lineHeight:1.14,letterSpacing:'-.01em'}}>A specialist, not a call centre.</h2>
              <p style={{fontFamily:'var(--font-body)',fontSize:'16px',lineHeight:1.7,color:'var(--text-body)',maxWidth:'44ch',margin:'16px 0 0'}}>Tell us who is travelling and roughly when. A specialist will reply within the hour with a considered first shortlist.</p>
              <div className="enq__steps">
                <div className="enq__step"><span className="n">1</span><div><b>We listen</b><span>Your dates, your party, the kind of trip you have in mind.</span></div></div>
                <div className="enq__step"><span className="n">2</span><div><b>We shortlist</b><span>Three or four lodges we know first-hand, with real rates and availability.</span></div></div>
                <div className="enq__step"><span className="n">3</span><div><b>We hold &amp; refine</b><span>We hold space while we tailor the itinerary with you, end to end.</span></div></div>
              </div>
            </div>

            <form className="enq__form" onSubmit={(e)=>{e.preventDefault();setSent(true);}}>
              <h3>Your enquiry</h3>
              <div className="enq__row"><Input label="First name" placeholder="Sarah" required /><Input label="Last name" placeholder="Kruger" required /></div>
              <div className="enq__field"><Input label="Email" type="email" icon="mail" placeholder="you@example.com" required /></div>
              <div className="enq__row"><Input label="Phone" icon="phone" placeholder="+27 …" /><Select label="Reserve of interest" placeholder="Open to suggestions" options={["Sabi Sand","Amakhala","Madikwe","Serengeti","Not sure yet"]} /></div>
              <div className="enq__row"><Input label="Approx. travel dates" icon="calendar" placeholder="October 2026" /><Select label="Guests" options={[{value:"2",label:"2 adults"},{value:"4",label:"4 adults"},{value:"family",label:"Family with children"}]} /></div>
              <div className="enq__field"><Textarea label="Anything else?" rows={3} placeholder="First safari, special occasion, must-see species…" /></div>
              <div className="enq__field"><Checkbox label="Malaria-free reserves only" /></div>
              <Button type="submit" variant="primary" size="lg" fullWidth iconRight="arrow-right">Send my enquiry</Button>
            </form>
          </div>
        </div>
      </section>

      {sent && (
        <div style={{position:'fixed',right:'24px',bottom:'74px',zIndex:1200}}>
          <Toast variant="success" title="Enquiry received" onClose={() => setSent(false)}>Thandi will reply within the hour. Check your inbox for a confirmation.</Toast>
        </div>
      )}
    </main>
  );
}

Object.assign(window, { EdReserve, EdLodge, EdAbout, EdEnquire });
