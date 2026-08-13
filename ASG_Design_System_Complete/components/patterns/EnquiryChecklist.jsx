import React from "react";

/* African Safari Group — Direct-Enquiry Checklist
   Two-column reasons-to-book-direct list with brass check circles.
   Sits in the "Why enquire direct" panel. Option 4 template. */

const CSS = `
.asg-checklist{display:grid;grid-template-columns:1fr 1fr;gap:14px 40px;}
.asg-checklist--1{grid-template-columns:1fr;}
.asg-check-item{display:flex;gap:12px;font-family:var(--font-body);font-size:13.5px;color:var(--text-body);align-items:flex-start;line-height:1.5;}
.asg-check-item::before{content:'\\2713';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--asg-brass);color:#FFFFFF;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:1px;}
@media(max-width:640px){.asg-checklist{grid-template-columns:1fr;}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "checklist");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function EnquiryChecklist({ items = [], columns = 2, className = "", ...rest }) {
  inject();
  return (
    <div className={["asg-checklist", columns === 1 && "asg-checklist--1", className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it, i) => <div key={i} className="asg-check-item">{it}</div>)}
    </div>
  );
}
