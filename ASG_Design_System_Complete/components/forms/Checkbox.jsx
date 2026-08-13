import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Checkbox
   Square check, brass when selected. Optional description. */

const CSS = `
.asg-check{display:inline-flex;align-items:flex-start;gap:11px;cursor:pointer;font-family:var(--font-body);}
.asg-check--disabled{opacity:.5;cursor:not-allowed;}
.asg-check input{position:absolute;opacity:0;width:0;height:0;}
.asg-check__box{
  width:20px;height:20px;flex:none;margin-top:1px;border-radius:var(--radius-xs);
  border:1px solid var(--border-strong);background:var(--surface-inset);color:var(--text-on-brass);
  display:flex;align-items:center;justify-content:center;
  transition:background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);
}
.asg-check__box svg{opacity:0;transition:opacity var(--dur-fast);}
.asg-check:hover .asg-check__box{border-color:var(--asg-brass);}
.asg-check input:checked + .asg-check__box{background:var(--asg-brass);border-color:var(--asg-brass);}
.asg-check input:checked + .asg-check__box svg{opacity:1;}
.asg-check input:focus-visible + .asg-check__box{box-shadow:var(--focus-ring-shadow);}
.asg-check__text{display:flex;flex-direction:column;gap:2px;}
.asg-check__label{font-size:15px;color:var(--text-primary);line-height:1.4;}
.asg-check__desc{font-size:13px;color:var(--text-muted);line-height:1.45;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "checkbox");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Checkbox({ label, description, disabled = false, className = "", ...rest }) {
  inject();
  return (
    <label className={["asg-check", disabled && "asg-check--disabled", className].filter(Boolean).join(" ")}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="asg-check__box"><Icon name="check" size={14} strokeWidth={2.6} /></span>
      {(label || description) && (
        <span className="asg-check__text">
          {label && <span className="asg-check__label">{label}</span>}
          {description && <span className="asg-check__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
