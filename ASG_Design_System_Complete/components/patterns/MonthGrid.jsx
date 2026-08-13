import React from "react";

/* African Safari Group — Month Season Grid
   Twelve cells, one per month, colour-coded by season quality.
   Peak = brass + white · Good = sand + ink · Fair = bone + ink.
   Month names 13.5px semibold; sub-labels 9.5px tracked caps. */

export const DEFAULT_MONTHS = [
  { m: "Jan", s: "Green summer", level: "good" },
  { m: "Feb", s: "Lush, warm", level: "good" },
  { m: "Mar", s: "Newborn game", level: "good" },
  { m: "Apr", s: "Shoulder", level: "fair" },
  { m: "May", s: "Dry, prime", level: "peak" },
  { m: "Jun", s: "Peak viewing", level: "peak" },
  { m: "Jul", s: "Peak viewing", level: "peak" },
  { m: "Aug", s: "Peak viewing", level: "peak" },
  { m: "Sep", s: "Dry, prime", level: "peak" },
  { m: "Oct", s: "Green returns", level: "good" },
  { m: "Nov", s: "Warm, lush", level: "good" },
  { m: "Dec", s: "Busy holidays", level: "good" },
];

const CSS = `
.asg-months{display:grid;grid-template-columns:repeat(12,1fr);gap:8px;}
.asg-month{border-radius:var(--radius-sm);padding:14px 6px 12px;text-align:center;}
.asg-month__m{font-family:var(--font-body);font-weight:var(--fw-semibold);font-size:13.5px;letter-spacing:.5px;line-height:1;}
.asg-month__s{font-family:var(--font-body);font-size:9.5px;letter-spacing:.5px;text-transform:uppercase;margin-top:5px;opacity:.95;line-height:1.4;}
.asg-month--peak{background:var(--asg-brass);color:#FFFFFF;}
.asg-month--good{background:var(--asg-heritage-sand);color:var(--asg-ink);}
.asg-month--fair{background:var(--asg-bone);color:var(--asg-ink);}
.asg-months__legend{display:flex;gap:22px;margin-top:20px;font-family:var(--font-body);font-size:11px;color:var(--text-muted);align-items:center;flex-wrap:wrap;}
.asg-months__legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:7px;vertical-align:-1px;}
@media(max-width:1000px){.asg-months{grid-template-columns:repeat(6,1fr);}}
@media(max-width:640px){.asg-months{grid-template-columns:repeat(3,1fr);}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "monthgrid");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function MonthGrid({ months = DEFAULT_MONTHS, legend = true, className = "", ...rest }) {
  inject();
  return (
    <div className={className} {...rest}>
      <div className="asg-months">
        {months.map((mo) => (
          <div key={mo.m} className={`asg-month asg-month--${mo.level}`}>
            <div className="asg-month__m">{mo.m}</div>
            {mo.s && <div className="asg-month__s">{mo.s}</div>}
          </div>
        ))}
      </div>
      {legend && (
        <div className="asg-months__legend">
          <span><i style={{ background: "var(--asg-brass)" }} />Peak</span>
          <span><i style={{ background: "var(--asg-heritage-sand)" }} />Good</span>
          <span><i style={{ background: "var(--asg-bone)" }} />Fair</span>
        </div>
      )}
    </div>
  );
}
