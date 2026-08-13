import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Input
   Text field with label, optional leading icon, hint and error. Inset dark
   surface, hairline border, brass focus ring. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__wrap{position:relative;display:flex;align-items:center;}
.asg-field__icon{position:absolute;left:14px;color:var(--text-muted);pointer-events:none;display:flex;}
.asg-input{
  width:100%;font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 14px;line-height:1.4;outline:none;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-input::placeholder{color:var(--text-faint);}
.asg-input--icon{padding-left:42px;}
.asg-input:hover{border-color:var(--asg-charcoal-500);}
.asg-input:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-input:disabled{opacity:.5;cursor:not-allowed;}
.asg-field--error .asg-input{border-color:var(--danger);}
.asg-field--error .asg-input:focus{box-shadow:0 0 0 3px rgba(181,82,74,.32);}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "input");
  s.textContent = CSS;
  document.head.appendChild(s);
}

let _id = 0;
export function Input({ label, hint, error, icon, required = false, id, className = "", ...rest }) {
  inject();
  const fid = id || `asg-in-${++_id}`;
  return (
    <div className={["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")}>
      {label && <label className="asg-field__label" htmlFor={fid}>{label}{required && <span className="req">*</span>}</label>}
      <div className="asg-field__wrap">
        {icon && <span className="asg-field__icon"><Icon name={icon} size={18} /></span>}
        <input id={fid} className={["asg-input", icon && "asg-input--icon"].filter(Boolean).join(" ")} aria-invalid={!!error} {...rest} />
      </div>
      {(error || hint) && <span className={["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")}>{error || hint}</span>}
    </div>
  );
}
