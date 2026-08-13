import React from "react";

/* African Safari Group — Badge
   Small status / category marker. Warm, restrained tones. */

const CSS = `
.asg-badge{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-body);font-weight:var(--fw-medium);
  font-size:11px;letter-spacing:.06em;text-transform:uppercase;line-height:1;
  padding:5px 9px;border-radius:var(--radius-xs);border:1px solid transparent;white-space:nowrap;
}
.asg-badge--solid{background:var(--asg-brass-600);color:var(--text-on-brass);} /* 11px label < 12px min for brass-500 + white — deep brass fill per brand rule */
.asg-badge--green{background:var(--asg-badge-green);color:#FFFFFF;}
.asg-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
.asg-badge--neutral{background:var(--asg-ivory-a08);color:var(--text-body);border-color:var(--border-default);}
.asg-badge--brass{background:var(--asg-brass-a20);color:var(--accent-hover);border-color:var(--asg-brass-a40);}
.asg-badge--success{background:var(--success-bg);color:var(--success);}
.asg-badge--warning{background:var(--warning-bg);color:var(--warning);}
.asg-badge--danger{background:var(--danger-bg);color:var(--danger);}
.asg-badge--info{background:var(--info-bg);color:var(--info);}
/* Solid earth-tone colour range — self-contained fills that read identically
   on light, dark or blended grounds. oklch-harmonised (shared chroma band). */
.asg-badge--sand{background:oklch(0.77 0.055 75);color:var(--asg-ink);}
.asg-badge--gold{background:oklch(0.73 0.10 86);color:var(--asg-ink);}
.asg-badge--clay{background:oklch(0.56 0.10 46);color:#FFFFFF;}
.asg-badge--olive{background:oklch(0.53 0.06 128);color:var(--asg-warm-ivory);}
.asg-badge--moss{background:oklch(0.47 0.055 150);color:var(--asg-warm-ivory);}
.asg-badge--plum{background:oklch(0.51 0.06 22);color:var(--asg-warm-ivory);}
.asg-badge--stone{background:oklch(0.59 0.012 80);color:var(--asg-warm-ivory);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "badge");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Badge({ children, variant = "neutral", dot = false, className = "", ...rest }) {
  inject();
  return (
    <span className={["asg-badge", `asg-badge--${variant}`, className].filter(Boolean).join(" ")} {...rest}>
      {dot && <span className="asg-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
