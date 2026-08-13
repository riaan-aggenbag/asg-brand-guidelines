import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Select
   Native select styled to match Input, with a brass chevron. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
.asg-select-wrap{position:relative;display:flex;align-items:center;}
.asg-select-wrap__chev{position:absolute;right:14px;color:var(--text-muted);pointer-events:none;display:flex;}
.asg-select{
  appearance:none;-webkit-appearance:none;width:100%;
  font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 42px 12px 14px;line-height:1.4;outline:none;cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-select:hover{border-color:var(--asg-charcoal-500);}
.asg-select:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-select:disabled{opacity:.5;cursor:not-allowed;}
.asg-select option{background:var(--asg-charcoal);color:var(--text-primary);}
.asg-field--error .asg-select{border-color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "select");
  s.textContent = CSS;
  document.head.appendChild(s);
}

let _id = 0;
export function Select({ label, hint, error, required = false, placeholder, options, children, id, className = "", ...rest }) {
  inject();
  const fid = id || `asg-sel-${++_id}`;
  return (
    <div className={["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")}>
      {label && <label className="asg-field__label" htmlFor={fid}>{label}{required && <span className="req">*</span>}</label>}
      <div className="asg-select-wrap">
        <select id={fid} className="asg-select" aria-invalid={!!error} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options
            ? options.map((o) => {
                const val = typeof o === "string" ? o : o.value;
                const lab = typeof o === "string" ? o : o.label;
                return <option key={val} value={val}>{lab}</option>;
              })
            : children}
        </select>
        <span className="asg-select-wrap__chev"><Icon name="chevron-down" size={18} /></span>
      </div>
      {(error || hint) && <span className={["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")}>{error || hint}</span>}
    </div>
  );
}
