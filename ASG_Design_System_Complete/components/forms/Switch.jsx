import React from "react";

/* African Safari Group — Switch
   Toggle for settings. Brass track when on. */

const CSS = `
.asg-switch{display:inline-flex;align-items:center;gap:12px;cursor:pointer;font-family:var(--font-body);}
.asg-switch--disabled{opacity:.5;cursor:not-allowed;}
.asg-switch input{position:absolute;opacity:0;width:0;height:0;}
.asg-switch__track{
  width:42px;height:24px;flex:none;border-radius:var(--radius-pill);
  background:var(--asg-charcoal-500);border:1px solid var(--border-strong);position:relative;
  transition:background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard);
}
.asg-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:var(--text-body);transition:transform var(--dur-base) var(--ease-standard),background var(--dur-base);}
.asg-switch input:checked + .asg-switch__track{background:var(--asg-brass);border-color:var(--asg-brass);}
.asg-switch input:checked + .asg-switch__track::after{transform:translateX(18px);background:var(--asg-ink);}
.asg-switch input:focus-visible + .asg-switch__track{box-shadow:var(--focus-ring-shadow);}
.asg-switch__label{font-size:15px;color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "switch");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Switch({ label, disabled = false, className = "", ...rest }) {
  inject();
  return (
    <label className={["asg-switch", disabled && "asg-switch--disabled", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="asg-switch__track" />
      {label && <span className="asg-switch__label">{label}</span>}
    </label>
  );
}
