import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Toast
   Transient confirmation. Dark overlay surface, soft elevation, brass accent. */

const CSS = `
.asg-toast{
  display:flex;gap:12px;align-items:flex-start;width:340px;max-width:88vw;
  padding:14px 15px;border-radius:var(--radius-md);
  background:var(--surface-overlay);border:1px solid var(--border-default);
  box-shadow:var(--shadow-lg);font-family:var(--font-body);
}
.asg-toast__icon{flex:none;margin-top:1px;color:var(--accent);}
.asg-toast--success .asg-toast__icon{color:var(--success);}
.asg-toast--danger .asg-toast__icon{color:var(--danger);}
.asg-toast__body{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0;}
.asg-toast__title{font-size:14px;font-weight:var(--fw-semibold);color:var(--text-primary);line-height:1.4;}
.asg-toast__text{font-size:13px;color:var(--text-body);line-height:1.5;}
.asg-toast__x{flex:none;background:none;border:0;padding:2px;color:var(--text-muted);cursor:pointer;display:flex;}
.asg-toast__x:hover{color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "toast");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const ICONS = { default: "check", success: "check", danger: "alert", info: "info" };

export function Toast({ variant = "default", title, children, onClose, className = "", ...rest }) {
  inject();
  return (
    <div className={["asg-toast", `asg-toast--${variant}`, className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="asg-toast__icon"><Icon name={ICONS[variant] || "check"} size={19} /></span>
      <div className="asg-toast__body">
        {title && <span className="asg-toast__title">{title}</span>}
        {children && <span className="asg-toast__text">{children}</span>}
      </div>
      {onClose && <button type="button" className="asg-toast__x" aria-label="Dismiss" onClick={onClose}><Icon name="close" size={16} /></button>}
    </div>
  );
}
