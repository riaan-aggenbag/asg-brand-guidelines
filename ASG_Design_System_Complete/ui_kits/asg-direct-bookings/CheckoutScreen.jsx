/* ASG Direct Bookings · Checkout */
const { Button, Input, Select, Checkbox, Divider, Icon } = window.DesignSystem_e5ff94;

const coCss = `
.sbn-co{max-width:1100px;margin:0 auto;padding:36px 28px 90px;display:grid;grid-template-columns:1fr 360px;gap:40px;align-items:start;}
@media (max-width:900px){.sbn-co{grid-template-columns:1fr;}}
.sbn-co h1{font-family:var(--font-serif);font-weight:500;font-size:30px;color:var(--text-primary);margin:0 0 26px;}
.sbn-co__card{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:28px;margin-bottom:18px;}
.sbn-co__card h3{font-family:var(--font-body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-muted);margin:0 0 18px;display:flex;align-items:center;gap:9px;}
.sbn-co__card h3 .ic{color:var(--accent);}
.sbn-co__row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.sbn-co__field{margin-bottom:14px;}
.sbn-pay{display:flex;align-items:center;gap:8px;font-family:var(--font-body);font-size:12px;color:var(--text-muted);margin-top:14px;}
.sbn-pay .ic{color:var(--success);}
.sbn-sum{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:24px;position:sticky;top:88px;}
.sbn-sum__prop{display:flex;gap:12px;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--border-subtle);margin-bottom:16px;}
.sbn-sum__prop .ph{width:64px;height:54px;border-radius:var(--radius-sm);overflow:hidden;flex:none;}
.sbn-sum__prop b{font-family:var(--font-serif);font-weight:500;font-size:16px;color:var(--text-primary);display:block;}
.sbn-sum__prop span{font-family:var(--font-body);font-size:12px;color:var(--text-muted);}
.sbn-line{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:9px 0;}
.sbn-line span:last-child{font-family:var(--font-numeric);color:var(--text-primary);white-space:nowrap;}
.sbn-line--total{border-top:1px solid var(--border-subtle);margin-top:8px;padding-top:14px;}
.sbn-line--total b{font-family:var(--font-numeric);font-weight:600;font-size:20px;color:var(--text-primary);}
`;
(function(){ const s=document.createElement('style'); s.textContent=coCss; document.head.appendChild(s); })();

function CheckoutScreen({ go }) {
  return (
    <div className="sbn-co">
      <form onSubmit={(e)=>{e.preventDefault();go("confirm");}}>
        <h1>Complete your booking</h1>

        <div className="sbn-co__card">
          <h3><span className="ic"><Icon name="user" size={16} /></span>Lead guest</h3>
          <div className="sbn-co__row">
            <Input label="First name" placeholder="Sarah" required />
            <Input label="Last name" placeholder="Kruger" required />
          </div>
          <div className="sbn-co__field"><Input label="Email" type="email" icon="mail" placeholder="you@example.com" required /></div>
          <div className="sbn-co__row">
            <Input label="Phone" icon="phone" placeholder="+27 …" required />
            <Select label="Nationality" placeholder="Select" options={["South Africa","United Kingdom","United States","Germany","Other"]} />
          </div>
        </div>

        <div className="sbn-co__card">
          <h3><span className="ic"><Icon name="globe" size={16} /></span>Arrival</h3>
          <div className="sbn-co__row">
            <Input label="Arrival airport" placeholder="Johannesburg (JNB)" />
            <Input label="Flight no. (optional)" placeholder="SA 234" />
          </div>
          <Checkbox label="I'd like ASG Direct Bookings to arrange light-aircraft transfers" />
        </div>

        <div className="sbn-co__card">
          <h3><span className="ic"><Icon name="info" size={16} /></span>Payment</h3>
          <div className="sbn-co__field"><Input label="Cardholder name" placeholder="Name on card" required /></div>
          <div className="sbn-co__field"><Input label="Card number" placeholder="4242 4242 4242 4242" required /></div>
          <div className="sbn-co__row">
            <Input label="Expiry" placeholder="MM / YY" required />
            <Input label="CVC" placeholder="123" required />
          </div>
          <div className="sbn-pay"><span className="ic"><Icon name="check" size={15} strokeWidth={2.4} /></span>Secured by ASG · 30% deposit today, balance due 60 days before travel</div>
        </div>
      </form>

      <aside className="sbn-sum">
        <div className="sbn-sum__prop">
          <div className="ph"><SbnPhoto label="" style={{height:'100%'}} /></div>
          <div><b>Londolozi Founders Camp</b><span>Riverside Suite · Sabi Sand</span></div>
        </div>
        <div className="sbn-line"><span>14–17 Oct 2026</span><span>3 nights</span></div>
        <div className="sbn-line"><span>R 18,200 × 3</span><span>R 54,600</span></div>
        <div className="sbn-line"><span>Conservation levy</span><span>R 1,200</span></div>
        <div className="sbn-line"><span>Booking fee</span><span>R 0</span></div>
        <div className="sbn-line sbn-line--total"><span><b>Total</b></span><b>R 55,800</b></div>
        <div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--text-muted)',margin:'6px 0 0',textAlign:'right'}}>Deposit today · R 16,740</div>
        <Divider />
        <Button variant="primary" size="lg" fullWidth iconRight="arrow-right" onClick={() => go("confirm")}>Pay deposit &amp; confirm</Button>
      </aside>
    </div>
  );
}

Object.assign(window, { CheckoutScreen });
