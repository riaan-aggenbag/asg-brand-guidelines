import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Alert / Callout
   Inline message block. Warm, restrained tones; a left brass keyline for emphasis. */

const CSS = `
.asg-alert{
  display:flex;gap:13px;align-items:flex-start;
  padding:15px 17px;border-radius:var(--radius-sm);
  border:1px solid var(--border-default);background:var(--surface-raised);
  font-family:var(--font-body);position:relative;overflow:hidden;
}
.asg-alert::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);}
.asg-alert__icon{flex:none;margin-top:1px;}
.asg-alert__body{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1;}
.asg-alert__title{font-size:14px;font-weight:var(--fw-semibold);color:var(--text-primary);line-height:1.4;}
.asg-alert__text{font-size:13px;color:var(--text-body);line-height:1.55;}
.asg-alert__x{flex:none;background:none;border:0;padding:2px;color:var(--text-muted);cursor:pointer;display:flex;}
.asg-alert__x:hover{color:var(--text-primary);}
.asg-alert--brass::before{background:var(--accent);} .asg-alert--brass .asg-alert__icon{color:var(--accent);}
.asg-alert--info::before{background:var(--info);} .asg-alert--info .asg-alert__icon{color:var(--info);}
.asg-alert--success::before{background:var(--success);} .asg-alert--success .asg-alert__icon{color:var(--success);}
.asg-alert--warning::before{background:var(--warning);} .asg-alert--warning .asg-alert__icon{color:var(--warning);}
.asg-alert--danger::before{background:var(--danger);} .asg-alert--danger .asg-alert__icon{color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "alert");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const ICONS = { brass: "info", info: "info", success: "check", warning: "alert", danger: "alert" };

export function Alert({ variant = "info", title, children, icon, onClose, className = "", ...rest }) {
  inject();
  const ic = icon || ICONS[variant] || "info";
  return (
    <div className={["asg-alert", `asg-alert--${variant}`, className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="asg-alert__icon"><Icon name={ic} size={19} /></span>
      <div className="asg-alert__body">
        {title && <span className="asg-alert__title">{title}</span>}
        {children && <span className="asg-alert__text">{children}</span>}
      </div>
      {onClose && <button type="button" className="asg-alert__x" aria-label="Dismiss" onClick={onClose}><Icon name="close" size={16} /></button>}
    </div>
  );
}
