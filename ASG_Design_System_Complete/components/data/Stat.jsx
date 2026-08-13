import React from "react";

/* African Safari Group — Stat
   A single numeral statistic. Value is always Poppins; serif optional for label. */

const CSS = `
.asg-stat{display:flex;flex-direction:column;gap:4px;}
.asg-stat--center{align-items:center;text-align:center;}
.asg-stat__value{font-family:var(--font-numeric);font-weight:var(--fw-medium);line-height:1;color:var(--accent);font-feature-settings:"tnum" 1;}
.asg-stat__label{font-family:var(--font-body);font-size:13px;color:var(--text-muted);letter-spacing:.02em;}
.asg-stat--plain .asg-stat__value{color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "stat");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const SIZES = { sm: 24, md: 34, lg: 46 };

export function Stat({ value, label, size = "md", brass = true, center = false, className = "", ...rest }) {
  inject();
  const px = SIZES[size] || 34;
  return (
    <div className={["asg-stat", center && "asg-stat--center", !brass && "asg-stat--plain", className].filter(Boolean).join(" ")} {...rest}>
      <span className="asg-stat__value" style={{ fontSize: px }}>{value}</span>
      {label && <span className="asg-stat__label">{label}</span>}
    </div>
  );
}
