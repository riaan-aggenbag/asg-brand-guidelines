/* Flagship — Editorial (blend) · Pages A: Home, Destinations, Experiences, Accommodation */
const { Button, Badge, Card, Stat, Tag, Avatar, Icon } = window.DesignSystem_e5ff94;
const { PhotoSlot } = window;

/* ---------------- HOME ---------------- */
const HOME_VALUES = [
{ icon: "compass", h: "We know the reserves", p: "Not a directory — we have slept in the beds, met the guides, and watched the light." },
{ icon: "binoculars", h: "Specific over superlative", p: "Sighting odds, seasons and lodges named plainly, so you choose with confidence." },
{ icon: "users", h: "Consultation-led", p: "One specialist, start to finish. A person, never a booking funnel." },
{ icon: "leaf", h: "Quietly responsible", p: "Reserves and lodges chosen for their conservation record, not their marketing." }];

const HOME_RESERVES = [
{ eyebrow: "Sabi Sand · South Africa", title: "The Leopard Capital", desc: "The highest leopard-sighting density in Africa, traversing Kruger's unfenced western edge.", price: "R 18,200", badge: "Big Five", to: "reserve" },
{ eyebrow: "Amakhala · Eastern Cape", title: "Malaria-Free Big Five", desc: "Five reserves, one ecosystem — ideal for families and first safaris.", price: "R 9,400", badge: "Malaria-Free", to: "destinations" },
{ eyebrow: "Serengeti · Tanzania", title: "The Great Migration", desc: "Time your stay to the river crossings; we hold the camps that move with the herds.", price: "R 24,600", badge: "Migration", to: "destinations" }];


function EdHome({ go }) {
  return (
    <main>
      <section className="hero hero--tall">
        <PhotoSlot label="Hero — golden hour, one clear subject, room to breathe" />
        <div className="hero__in hero__in--tall">
          <span className="eyebrow">Tailor-made · Five-star · Southern &amp; East Africa</span>
          <h1>Your Africa,<br /><em>Considered.</em></h1>
          <p className="hero__lead">Safaris designed by specialists who have stayed at every lodge they recommend. We start with a conversation, not a checkout.</p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => go("enquire")}>Plan My Safari</Button>
            <Button variant="secondary" size="lg" onClick={() => go("destinations")}>Explore destinations</Button>
          </div>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in">
          <div className="sec-head">
            <span className="eyebrow">Why African Safari Group</span>
            <h2>The authority, not a booking platform.</h2>
            <hr className="rule" />
          </div>
          <div className="grid-4">
            {HOME_VALUES.map((v) =>
            <div className="tile" key={v.h}>
                <span className="tile__ic"><Icon name={v.icon} size={26} strokeWidth={1.5} /></span>
                <h4>{v.h}</h4><p>{v.p}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="band band--white" data-theme="light">
        <div className="band__in">
          <div className="sec-head">
            <span className="eyebrow">Featured reserves</span>
            <h2>Where the sightings are.</h2>
            <p>A short, curated list — the reserves we return to, season after season.</p>
          </div>
          <div className="grid-3">
            {HOME_RESERVES.map((r) =>
            <Card key={r.title} href="#" onClick={(e) => {e.preventDefault();go(r.to);}}
            imageSlot="Reserve photography" badge={<Badge variant="solid">{r.badge}</Badge>}
            eyebrow={r.eyebrow} title={r.title}
            footer={<><div className="asg-card__price"><b>{r.price}</b><span>from / pp night</span></div><span style={{ color: 'var(--accent)' }}><Icon name="arrow-right" size={20} /></span></>}>
                <p className="asg-card__desc">{r.desc}</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in">
          <div className="feature">
            <div className="feature__media"><PhotoSlot label="Specialist portrait" style={{ position: 'absolute', inset: 0 }} /></div>
            <div className="feature__body">
              <span className="eyebrow">A person, not a funnel</span>
              <h2>One specialist, from first call to final sundowner.</h2>
              <p>Tell us who is travelling and when. Your specialist shortlists lodges, holds space, and stays with your trip the whole way through.</p>
              <div className="feature__who">
                <Avatar name="Thandi Mokoena" size="lg" ring />
                <div><b>Thandi Mokoena</b><span>Senior Safari Specialist · 14 years in-field</span></div>
              </div>
              <div style={{ marginTop: 10 }}><Button variant="primary" onClick={() => go("enquire")}>Start the conversation</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--sand" data-theme="light">
        <div className="band__in">
          <div className="quote">
            <span className="eyebrow">From your specialist briefing</span>
            <p>“Sabi Sand offers the highest leopard-sighting density in Africa. Three nights gives you the best odds.”</p>
          </div>
          <div className="statsrow statsrow--mt">
            <Stat value="40+" label="reserves we know first-hand" center />
            <Stat value="2,000+" label="journeys designed" center />
            <Stat value="1 hour" label="typical reply time" center />
          </div>
        </div>
      </section>
    </main>);

}

/* ---------------- DESTINATIONS ---------------- */
const DESTS = [
{ eyebrow: "South Africa", title: "Sabi Sand", desc: "The leopard capital — unfenced, bordering Kruger.", price: "R 18,200", badge: "Big Five", to: "reserve" },
{ eyebrow: "Eastern Cape", title: "Amakhala", desc: "Malaria-free Big Five, ideal for families.", price: "R 9,400", badge: "Malaria-Free", to: "reserve" },
{ eyebrow: "North West", title: "Madikwe", desc: "Wild dog country on the Kalahari's edge.", price: "R 12,800", badge: "Malaria-Free", to: "reserve" },
{ eyebrow: "Tanzania", title: "Serengeti", desc: "The Great Migration and endless plains.", price: "R 24,600", badge: "Migration", to: "reserve" },
{ eyebrow: "Botswana", title: "Okavango Delta", desc: "Water-based safaris by mokoro and boat.", price: "R 28,400", badge: "Exclusive", to: "reserve" },
{ eyebrow: "Zambia", title: "South Luangwa", desc: "The home of the walking safari.", price: "R 16,900", badge: "Walking", to: "reserve" }];


function EdDestinations({ go }) {
  return (
    <main>
      <section className="hero hero--mid">
        <PhotoSlot label="Destinations hero — sweeping environmental landscape" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("home")}>Home</a><span className="sep">/</span><span>Destinations</span></div>
          <h1>Where we go.</h1>
          <p className="hero__lead">Six countries, one standard. Every destination here is one we know first-hand — chosen for its wildlife, its light, and its lodges.</p>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in">
          <div className="sec-head">
            <span className="eyebrow">Southern &amp; East Africa</span>
            <h2>Choose your ground.</h2>
            <hr className="rule" />
          </div>
          <div className="grid-3">
            {DESTS.map((d) =>
            <Card key={d.title} href="#" onClick={(e) => {e.preventDefault();go(d.to);}}
            imageSlot="Destination photography" badge={<Badge variant="solid">{d.badge}</Badge>}
            eyebrow={d.eyebrow} title={d.title}
            footer={<><div className="asg-card__price"><b>{d.price}</b><span>from / pp night</span></div><span style={{ color: 'var(--accent)' }}><Icon name="arrow-right" size={20} /></span></>}>
                <p className="asg-card__desc">{d.desc}</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in">
          <div className="feature feature--rev">
            <div className="feature__body">
              <span className="eyebrow">Not sure where to start?</span>
              <h2>We'll match the ground to the trip you have in mind.</h2>
              <p>First safari or fifth, malaria-free for the children, migration timing to the week — tell us the shape of the trip and we'll name the right reserve.</p>
              <div style={{ marginTop: 10 }}><Button variant="primary" onClick={() => go("enquire")}>Ask a specialist</Button></div>
            </div>
            <div className="feature__media"><PhotoSlot label="Map / region imagery" style={{ position: 'absolute', inset: 0 }} /></div>
          </div>
        </div>
      </section>

      <section className="band band--sand band--tight" data-theme="light">
        <div className="band__in">
          <div className="statsrow">
            <Stat value="6" label="countries" center />
            <Stat value="40+" label="reserves" center />
            <Stat value="200+" label="lodges &amp; camps" center />
          </div>
        </div>
      </section>
    </main>);

}

/* ---------------- EXPERIENCES ---------------- */
const EXPERIENCES = [
{ icon: "binoculars", title: "Classic Big Five", desc: "Morning and afternoon game drives with a private ranger and tracker." },
{ icon: "leaf", title: "Walking safaris", desc: "On foot with an armed guide — the bush at eye level, tracks and detail." },
{ icon: "compass", title: "The Great Migration", desc: "Timed to the river crossings, in camps that move with the herds." },
{ icon: "users", title: "Family safaris", desc: "Malaria-free reserves, private vehicles, and rangers who love teaching." },
{ icon: "heart", title: "Honeymoons", desc: "Private decks, sleep-outs, and dinners under the stars." },
{ icon: "star", title: "Photographic", desc: "Hides, specialist vehicles, and guides who know the light." }];


function EdExperiences({ go }) {
  return (
    <main>
      <section className="hero hero--mid">
        <PhotoSlot label="Experiences hero — a defining safari moment" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("home")}>Home</a><span className="sep">/</span><span>Experiences</span></div>
          <h1>How you'll experience it.</h1>
          <p className="hero__lead">The same reserves offer very different trips. Start from the experience you want, and we'll build the itinerary around it.</p>
        </div>
      </section>

      <section className="band band--white" data-theme="light">
        <div className="band__in">
          <div className="sec-head">
            <span className="eyebrow">Ways to travel</span>
            <h2>Pick your kind of safari.</h2>
            <hr className="rule" />
          </div>
          <div className="grid-3">
            {EXPERIENCES.map((x) =>
            <div className="tile" key={x.title} style={{ padding: '28px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', background: 'var(--asg-warm-ivory)' }}>
                <span className="tile__ic"><Icon name={x.icon} size={26} strokeWidth={1.5} /></span>
                <h4>{x.title}</h4><p>{x.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in">
          <div className="feature">
            <div className="feature__media"><PhotoSlot label="Signature experience — sundowner / sleep-out" style={{ position: 'absolute', inset: 0 }} /></div>
            <div className="feature__body">
              <span className="eyebrow">Our signature</span>
              <h2>The sleep-out: a night under the whole sky.</h2>
              <p>A private platform, a bedroll, and a guide within call. Dinner at dusk, the Milky Way overhead, and the reserve waking around you at first light.</p>
              <div style={{ marginTop: 10 }}><Button variant="primary" onClick={() => go("enquire")}>Enquire about this</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--sand" data-theme="light">
        <div className="band__in">
          <div className="quote">
            <span className="eyebrow">When to go</span>
            <p>“May to September for dry-season game viewing. November to March for newborn game, lush landscapes, and dramatic skies.”</p>
          </div>
        </div>
      </section>
    </main>);

}

/* ---------------- ACCOMMODATION ---------------- */
const STAYS = [
{ eyebrow: "Sabi Sand", title: "Londolozi Founders Camp", desc: "Founders-suite privacy on the Sand River.", price: "R 18,200", tag: "Relais & Châteaux", to: "lodge" },
{ eyebrow: "Sabi Sand", title: "Cheetah Plains", desc: "Solar-run contemporary private villas.", price: "R 22,900", tag: "Exclusive-use", to: "lodge" },
{ eyebrow: "Amakhala", title: "Hlosi Game Lodge", desc: "Malaria-free Big Five for families.", price: "R 9,400", tag: "Family", to: "lodge" },
{ eyebrow: "Serengeti", title: "Sanctuary Kichakani", desc: "A migration camp that moves with the herds.", price: "R 24,600", tag: "Tented", to: "lodge" },
{ eyebrow: "Okavango", title: "Mombo Camp", desc: "Botswana's legendary predator concession.", price: "R 34,800", tag: "Exclusive", to: "lodge" },
{ eyebrow: "Madikwe", title: "Jamala Royal", desc: "Palatial suites in wild-dog country.", price: "R 14,200", tag: "Malaria-free", to: "lodge" }];


function EdAccommodation({ go }) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Exclusive-use", "Family", "Tented"];
  const list = STAYS.filter((s) => filter === "All" || s.tag === filter || filter === "Exclusive-use" && s.tag === "Exclusive");
  return (
    <main>
      <section className="hero hero--mid">
        <PhotoSlot label="Accommodation hero — an iconic lodge deck at golden hour" />
        <div className="hero__in">
          <div className="hero__crumbs"><a onClick={() => go("home")}>Home</a><span className="sep">/</span><span>Accommodation</span></div>
          <h1>Where you'll stay.</h1>
          <p className="hero__lead">We place guests in lodges and camps we have stayed in ourselves — a considered list, not a directory.</p>
        </div>
      </section>

      <section className="band band--ivory" data-theme="light">
        <div className="band__in">
          <div className="sec-head">
            <span className="eyebrow">Lodges &amp; camps</span>
            <h2>The places we return to.</h2>
          </div>
          <div className="filters">
            {filters.map((f) => <Tag key={f} selected={filter === f} onClick={() => setFilter(f)}>{f}</Tag>)}
          </div>
          <div className="grid-3">
            {list.map((s) =>
            <Card key={s.title} href="#" onClick={(e) => {e.preventDefault();go(s.to);}}
            imageSlot="Lodge photography" badge={<Badge variant="neutral">{s.tag}</Badge>}
            eyebrow={s.eyebrow} title={s.title}
            footer={<><div className="asg-card__price"><b>{s.price}</b><span>pp / night</span></div><Button size="sm" variant="secondary" onLight>View lodge</Button></>}>
                <p className="asg-card__desc">{s.desc}</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="band__in">
          <div className="feature feature--rev">
            <div className="feature__body">
              <span className="eyebrow">Exclusive-use</span>
              <h2>Take the whole camp.</h2>
              <p>For families and celebrations, several of our lodges can be booked on an exclusive-use basis — your own chef, guide, vehicle, and staff.</p>
              <div style={{ marginTop: 10 }}><Button variant="primary" onClick={() => go("enquire")}>Enquire about exclusive-use</Button></div>
            </div>
            <div className="feature__media"><PhotoSlot label="Villa / exclusive-use imagery" style={{ position: 'absolute', inset: 0 }} /></div>
          </div>
        </div>
      </section>
    </main>);

}

Object.assign(window, { EdHome, EdDestinations, EdExperiences, EdAccommodation });