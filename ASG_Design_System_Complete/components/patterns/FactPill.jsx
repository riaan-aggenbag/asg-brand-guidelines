import React from "react";

/* African Safari Group — Fact Pill
   Frosted stat badge for hero imagery: translucent white fill, hairline
   translucent border, backdrop blur, brass ✦ prefix. Never bare text over
   a photo — the pill gives facts a surface. From the Option 4 templates. */

const CSS = `
.asg-factpill{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#FFFFFF;font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.03em;line-height:1;padding:9px 18px;border-radius:var(--radius-pill);white-space:nowrap;}
.asg-factpill::before{content:'\\2726';color:var(--asg-brass);font-size:11px;line-height:1;}
.asg-factpill--noglyph{gap:0;}
.asg-factpill--noglyph::before{content:none;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "factpill");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function FactPill({ children, glyph = true, className = "", ...rest }) {
  inject();
  return (
    <span className={["asg-factpill", !glyph && "asg-factpill--noglyph", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
