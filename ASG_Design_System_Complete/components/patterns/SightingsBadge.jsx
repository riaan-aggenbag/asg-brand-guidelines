import React from "react";

/* African Safari Group — Sightings Status Badge
   Plain-probability wildlife language is a voice feature: sightings are
   stated honestly, never promised. Four fixed levels from the Option 4
   templates. Labels are 12px semibold — the white-on-brass minimum. */

const LEVELS = {
  most:  { cls: "most",  label: "Most drives" },
  very:  { cls: "very",  label: "Very often" },
  often: { cls: "often", label: "Often" },
  rare:  { cls: "rare",  label: "Rarely · elusive" },
};

const CSS = `
.asg-sighting{display:inline-flex;align-items:center;font-family:var(--font-body);font-size:12px;font-weight:var(--fw-semibold);letter-spacing:.02em;line-height:1;padding:7px 14px;border-radius:var(--radius-pill);white-space:nowrap;border:1px solid transparent;}
.asg-sighting--most{background:var(--asg-badge-green);color:#FFFFFF;}
.asg-sighting--very{background:var(--asg-brass);color:#FFFFFF;}
.asg-sighting--often{background:var(--asg-heritage-sand);color:var(--asg-ink);}
.asg-sighting--rare{background:var(--asg-charcoal);color:#FFFFFF;border-color:rgba(255,255,255,.14);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "sighting");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function SightingsBadge({ level = "often", children, className = "", ...rest }) {
  inject();
  const lv = LEVELS[level] || LEVELS.often;
  return (
    <span className={["asg-sighting", `asg-sighting--${lv.cls}`, className].filter(Boolean).join(" ")} {...rest}>
      {children || lv.label}
    </span>
  );
}
