/* ASG Direct Bookings · Confirmation */
const { Button, Divider, Icon, Avatar } = window.DesignSystem_e5ff94;

const cfCss = `
.sbn-cf{max-width:760px;margin:0 auto;padding:72px 28px 100px;text-align:center;}
.sbn-cf__tick{width:64px;height:64px;border-radius:50%;background:var(--asg-brass-a20);border:1px solid var(--asg-brass-a40);color:var(--accent);display:flex;align-items:center;justify-content:center;margin:0 auto 26px;}
.sbn-cf h1{font-family:var(--font-serif);font-weight:500;font-size:clamp(2rem,1.5rem+1.6vw,2.8rem);color:var(--text-primary);margin:0;}
.sbn-cf__lead{font-family:var(--font-body);font-size:16px;line-height:1.65;color:var(--text-body);max-width:48ch;margin:16px auto 0;}
.sbn-cf__ref{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:10px 18px;border:1px solid var(--border-default);border-radius:var(--radius-pill);background:var(--surface-raised);}
.sbn-cf__ref span{font-family:var(--font-body);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted);}
.sbn-cf__ref b{font-family:var(--font-numeric);font-size:14px;color:var(--accent);letter-spacing:.04em;}
.sbn-cf__card{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:28px;margin-top:40px;text-align:left;}
.sbn-cf__card .row{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:11px 0;border-bottom:1px solid var(--border-subtle);}
.sbn-cf__card .row:last-child{border-bottom:0;}
.sbn-cf__card .row span:last-child{color:var(--text-primary);font-family:var(--font-numeric);}
.sbn-cf__specialist{display:flex;gap:16px;align-items:center;text-align:left;background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:22px 24px;margin-top:18px;}
.sbn-cf__specialist b{font-family:var(--font-body);font-size:15px;color:var(--text-primary);font-weight:600;display:block;}
.sbn-cf__specialist span{font-family:var(--font-body);font-size:13px;color:var(--text-muted);line-height:1.5;}
.sbn-cf__actions{display:flex;gap:12px;justify-content:center;margin-top:36px;flex-wrap:wrap;}
`;
(function(){ const s=document.createElement('style'); s.textContent=cfCss; document.head.appendChild(s); })();

function ConfirmScreen({ go }) {
  return (
    <div className="sbn-cf">
      <div className="sbn-cf__tick"><Icon name="check" size={30} strokeWidth={2.2} /></div>
      <h1>You're confirmed.</h1>
      <p className="sbn-cf__lead">Your deposit is paid and your suite is held. A confirmation is on its way to your inbox — and a specialist is already reviewing your trip.</p>
      <div className="sbn-cf__ref"><span>Booking reference</span><b>ASG-LF-72481</b></div>

      <div className="sbn-cf__card">
        <div className="row"><span>Londolozi Founders Camp · Riverside Suite</span><span>Sabi Sand</span></div>
        <div className="row"><span>14 – 17 October 2026 · 2 adults</span><span>3 nights</span></div>
        <div className="row"><span>Deposit paid today</span><span>R 16,740</span></div>
        <div className="row"><span>Balance due 15 Aug 2026</span><span>R 39,060</span></div>
      </div>

      <div className="sbn-cf__specialist">
        <Avatar name="Thandi Mokoena" size="lg" ring />
        <div>
          <b>Thandi Mokoena · Your specialist</b>
          <span>I've stayed at Londolozi a dozen times. I'll email you a few touches to consider before you travel — sundowner spots, the best drive times, what to pack.</span>
        </div>
      </div>

      <div className="sbn-cf__actions">
        <Button variant="primary" icon="download">Download itinerary</Button>
        <Button variant="secondary" onClick={() => go("results")}>Back to search</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ConfirmScreen });
