import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Dialog
   Modal over a dark scrim. Title, body, and a footer action row. Controlled
   via `open`. Closes on backdrop click and Escape. */

const CSS = `
.asg-dialog__backdrop{
  position:fixed;inset:0;z-index:var(--z-modal);
  background:var(--asg-ink-a60);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);
  display:flex;align-items:center;justify-content:center;padding:24px;
  animation:asg-dlg-fade var(--dur-base) var(--ease-standard);
}
@keyframes asg-dlg-fade{from{opacity:0}to{opacity:1}}
.asg-dialog{
  width:100%;max-width:520px;max-height:90vh;overflow:auto;
  background:var(--surface-overlay);border:1px solid var(--border-default);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);
  animation:asg-dlg-rise var(--dur-base) var(--ease-entrance);
}
@keyframes asg-dlg-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.asg-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 0;}
.asg-dialog__title{font-family:var(--font-serif);font-size:24px;font-weight:var(--fw-medium);color:var(--text-primary);margin:0;line-height:1.2;}
.asg-dialog__x{flex:none;background:none;border:0;color:var(--text-muted);cursor:pointer;padding:4px;display:flex;}
.asg-dialog__x:hover{color:var(--text-primary);}
.asg-dialog__body{padding:14px 24px 4px;font-family:var(--font-body);font-size:15px;line-height:1.65;color:var(--text-body);}
.asg-dialog__footer{display:flex;justify-content:flex-end;gap:12px;padding:20px 24px 24px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "dialog");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Dialog({ open, onClose, title, children, footer, className = "", ...rest }) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="asg-dialog__backdrop" onClick={onClose}>
      <div className={["asg-dialog", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} {...rest}>
        <div className="asg-dialog__head">
          {title && <h2 className="asg-dialog__title">{title}</h2>}
          <button type="button" className="asg-dialog__x" aria-label="Close" onClick={onClose}><Icon name="close" size={20} /></button>
        </div>
        <div className="asg-dialog__body">{children}</div>
        {footer && <div className="asg-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
