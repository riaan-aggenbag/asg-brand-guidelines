/* African Safari Group — Flagship Website · Enquiry (consultation-led) */
const { Button, Input, Textarea, Select, Checkbox, Divider, Toast, Icon } = window.DesignSystem_e5ff94;

const enqCss = `
.enq{max-width:var(--container-max);margin:0 auto;padding:72px var(--gutter) 110px;display:grid;grid-template-columns:1fr 1.05fr;gap:64px;align-items:start;}
@media (max-width:900px){.enq{grid-template-columns:1fr;gap:36px;}}
.enq__intro h1{font-size:clamp(2.2rem,1.5rem+2.2vw,3.2rem);margin:14px 0 0;}
.enq__intro p{font-size:16.5px;line-height:1.7;color:var(--text-body);max-width:46ch;margin:20px 0 0;}
.enq__steps{display:flex;flex-direction:column;gap:22px;margin-top:36px;}
.enq__step{display:flex;gap:16px;align-items:flex-start;}
.enq__step .n{flex:none;width:34px;height:34px;border-radius:50%;border:1px solid var(--asg-brass-a40);color:var(--accent);font-family:var(--font-numeric);font-weight:500;display:flex;align-items:center;justify-content:center;font-size:14px;}
.enq__step b{display:block;font-family:var(--font-body);font-size:15px;color:var(--text-primary);font-weight:600;}
.enq__step span{font-family:var(--font-body);font-size:14px;color:var(--text-muted);line-height:1.55;}
.enq__form{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-lg);padding:36px;}
.enq__form h3{font-family:var(--font-serif);font-weight:500;font-size:22px;color:var(--text-primary);margin:0 0 22px;}
.enq__row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.enq__field{margin-bottom:16px;}
.enq__toast{position:fixed;right:24px;bottom:24px;z-index:1200;}
`;
(function(){ const s=document.createElement('style'); s.textContent=enqCss; document.head.appendChild(s); })();

function EnquireScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <main>
      <section className="enq">
        <div className="enq__intro">
          <span className="asg-eyebrow">Plan my safari</span>
          <h1>Let's start with a conversation.</h1>
          <p>Tell us who is travelling and roughly when. A specialist — not a call centre — will reply within the hour with a considered first shortlist.</p>
          <Divider brass />
          <div className="enq__steps">
            <div className="enq__step"><span className="n">1</span><div><b>We listen</b><span>Your dates, your party, the kind of trip you have in mind.</span></div></div>
            <div className="enq__step"><span className="n">2</span><div><b>We shortlist</b><span>Three or four lodges we know first-hand, with real rates and availability.</span></div></div>
            <div className="enq__step"><span className="n">3</span><div><b>We hold &amp; refine</b><span>We hold space while we tailor the itinerary with you, end to end.</span></div></div>
          </div>
        </div>

        <form className="enq__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <h3>Your enquiry</h3>
          <div className="enq__row enq__field">
            <Input label="First name" placeholder="Sarah" required />
            <Input label="Last name" placeholder="Kruger" required />
          </div>
          <div className="enq__field"><Input label="Email" type="email" icon="mail" placeholder="you@example.com" required /></div>
          <div className="enq__row enq__field">
            <Input label="Phone" icon="phone" placeholder="+27 …" />
            <Select label="Reserve of interest" placeholder="Open to suggestions" options={["Sabi Sand","Amakhala","Madikwe","Serengeti","Not sure yet"]} />
          </div>
          <div className="enq__row enq__field">
            <Input label="Approx. travel dates" icon="calendar" placeholder="October 2026" />
            <Select label="Guests" options={[{value:"2",label:"2 adults"},{value:"4",label:"4 adults"},{value:"family",label:"Family with children"}]} />
          </div>
          <div className="enq__field"><Textarea label="Anything else?" rows={3} placeholder="First safari, special occasion, must-see species…" /></div>
          <div className="enq__field"><Checkbox label="Malaria-free reserves only" /></div>
          <Button type="submit" variant="primary" size="lg" fullWidth iconRight="arrow-right">Send my enquiry</Button>
        </form>
      </section>

      {sent && (
        <div className="enq__toast">
          <Toast variant="success" title="Enquiry received" onClose={() => setSent(false)}>Thandi will reply within the hour. Check your inbox for a confirmation.</Toast>
        </div>
      )}
    </main>
  );
}

Object.assign(window, { EnquireScreen });
