import React from "react";

/* African Safari Group — Radio
   Round selector, brass dot when chosen. Pair with name to group. */

const CSS = `
.asg-radio{display:inline-flex;align-items:flex-start;gap:11px;cursor:pointer;font-family:var(--font-body);}
.asg-radio--disabled{opacity:.5;cursor:not-allowed;}
.asg-radio input{position:absolute;opacity:0;width:0;height:0;}
.asg-radio__dot{
  width:20px;height:20px;flex:none;margin-top:1px;border-radius:50%;
  border:1px solid var(--border-strong);background:var(--surface-inset);
  display:flex;align-items:center;justify-content:center;
  transition:border-color var(--dur-fast) var(--ease-standard);
}
.asg-radio__dot::after{content:"";width:9px;height:9px;border-radius:50%;background:var(--asg-brass);transform:scale(0);transition:transform var(--dur-fast) var(--ease-standard);}
.asg-radio:hover .asg-radio__dot{border-color:var(--asg-brass);}
.asg-radio input:checked + .asg-radio__dot{border-color:var(--asg-brass);}
.asg-radio input:checked + .asg-radio__dot::after{transform:scale(1);}
.asg-radio input:focus-visible + .asg-radio__dot{box-shadow:var(--focus-ring-shadow);}
.asg-radio__text{display:flex;flex-direction:column;gap:2px;}
.asg-radio__label{font-size:15px;color:var(--text-primary);line-height:1.4;}
.asg-radio__desc{font-size:13px;color:var(--text-muted);line-height:1.45;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "radio");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Radio({ label, description, disabled = false, className = "", ...rest }) {
  inject();
  return (
    <label className={["asg-radio", disabled && "asg-radio--disabled", className].filter(Boolean).join(" ")}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="asg-radio__dot" />
      {(label || description) && (
        <span className="asg-radio__text">
          {label && <span className="asg-radio__label">{label}</span>}
          {description && <span className="asg-radio__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
