import React from "react";

/* African Safari Group — Textarea
   Multi-line field. Shares the Input field shell. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
.asg-textarea{
  width:100%;font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 14px;line-height:1.6;outline:none;resize:vertical;min-height:108px;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-textarea::placeholder{color:var(--text-faint);}
.asg-textarea:hover{border-color:var(--asg-charcoal-500);}
.asg-textarea:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-textarea:disabled{opacity:.5;cursor:not-allowed;}
.asg-field--error .asg-textarea{border-color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "textarea");
  s.textContent = CSS;
  document.head.appendChild(s);
}

let _id = 0;
export function Textarea({ label, hint, error, required = false, id, className = "", rows = 4, ...rest }) {
  inject();
  const fid = id || `asg-ta-${++_id}`;
  return (
    <div className={["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")}>
      {label && <label className="asg-field__label" htmlFor={fid}>{label}{required && <span className="req">*</span>}</label>}
      <textarea id={fid} className="asg-textarea" rows={rows} aria-invalid={!!error} {...rest} />
      {(error || hint) && <span className={["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")}>{error || hint}</span>}
    </div>
  );
}
