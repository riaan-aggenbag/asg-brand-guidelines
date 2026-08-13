import React from "react";
import { Icon } from "./Icon.jsx";

/* African Safari Group — Tag / Chip
   Filter or attribute chip. Optional leading dot and removable close. */

const CSS = `
.asg-tag{
  display:inline-flex;align-items:center;gap:.5em;
  font-family:var(--font-body);font-size:13px;font-weight:var(--fw-regular);
  line-height:1;padding:7px 12px;border-radius:var(--radius-pill);
  background:transparent;border:1px solid var(--border-strong);color:var(--text-body);
  transition:border-color var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),background var(--dur-fast) var(--ease-standard);
}
.asg-tag--interactive{cursor:pointer;}
.asg-tag--interactive:hover{border-color:var(--asg-brass);color:var(--text-primary);}
.asg-tag--selected{background:var(--asg-brass-a20);border-color:var(--asg-brass);color:var(--accent-hover);}
/* Opaque pastel colour range — self-contained, legible on light/dark/blended */
.asg-tag--sand{background:oklch(0.90 0.03 75);color:oklch(0.42 0.05 60);border-color:transparent;}
.asg-tag--gold{background:oklch(0.91 0.045 88);color:oklch(0.45 0.07 78);border-color:transparent;}
.asg-tag--clay{background:oklch(0.89 0.045 46);color:oklch(0.45 0.09 42);border-color:transparent;}
.asg-tag--olive{background:oklch(0.91 0.035 128);color:oklch(0.42 0.06 135);border-color:transparent;}
.asg-tag--moss{background:oklch(0.90 0.035 150);color:oklch(0.40 0.06 155);border-color:transparent;}
.asg-tag--plum{background:oklch(0.90 0.03 22);color:oklch(0.44 0.06 20);border-color:transparent;}
.asg-tag--stone{background:oklch(0.90 0.008 80);color:oklch(0.42 0.01 80);border-color:transparent;}
.asg-tag__dot{width:7px;height:7px;border-radius:50%;background:var(--accent);flex:none;}
.asg-tag__x{display:inline-flex;margin-right:-3px;opacity:.7;cursor:pointer;background:none;border:0;padding:0;color:inherit;}
.asg-tag__x:hover{opacity:1;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tag");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tag({ children, dot = false, selected = false, color, onRemove, onClick, className = "", ...rest }) {
  inject();
  const interactive = !!onClick;
  return (
    <span
      className={["asg-tag", interactive && "asg-tag--interactive", selected && "asg-tag--selected", color && `asg-tag--${color}`, className].filter(Boolean).join(" ")}
      onClick={onClick}
      {...rest}
    >
      {dot && <span className="asg-tag__dot" aria-hidden="true" />}
      {children}
      {onRemove && (
        <button type="button" className="asg-tag__x" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <Icon name="close" size={13} strokeWidth={2} />
        </button>
      )}
    </span>
  );
}
