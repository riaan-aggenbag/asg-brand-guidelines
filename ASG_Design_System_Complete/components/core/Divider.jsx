import React from "react";

/* African Safari Group — Divider
   Hairline rule, or the signature short brass rule-line. Optional centred label. */

const CSS = `
.asg-divider{border:0;height:1px;background:var(--border-default);width:100%;margin:0;}
.asg-divider--vertical{height:auto;width:1px;align-self:stretch;min-height:1em;}
.asg-rule-line{display:inline-block;width:56px;height:2px;background:var(--asg-brass);border:0;}
.asg-rule-line--center{display:block;margin-inline:auto;}
.asg-divider-label{display:flex;align-items:center;gap:16px;width:100%;}
.asg-divider-label::before,.asg-divider-label::after{content:"";flex:1;height:1px;background:var(--border-default);}
.asg-divider-label__txt{font-family:var(--font-body);font-size:11px;font-weight:var(--fw-medium);letter-spacing:.22em;text-transform:uppercase;color:var(--text-muted);white-space:nowrap;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "divider");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Divider({ orientation = "horizontal", brass = false, center = false, label, className = "", ...rest }) {
  inject();
  if (label) {
    return (
      <div className={["asg-divider-label", className].filter(Boolean).join(" ")} {...rest}>
        <span className="asg-divider-label__txt">{label}</span>
      </div>
    );
  }
  if (brass) {
    return <hr className={["asg-rule-line", center && "asg-rule-line--center", className].filter(Boolean).join(" ")} {...rest} />;
  }
  return (
    <hr
      className={["asg-divider", orientation === "vertical" && "asg-divider--vertical", className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
