import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Drawer
   Slide-in panel over a dark scrim, for mobile navigation and filters.
   Controlled via `open`. Slides from `side` ("right" | "left" | "bottom").
   Closes on backdrop click and Escape. Ink surface, hairline border —
   the mobile home of anything that lives in a sidebar or nav on desktop. */

const CSS = `
.asg-drawer__backdrop{
  position:fixed;inset:0;z-index:var(--z-modal);
  background:var(--asg-ink-a60);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);
  animation:asg-drw-fade var(--dur-base) var(--ease-standard);
}
@keyframes asg-drw-fade{from{opacity:0}to{opacity:1}}
.asg-drawer{
  position:fixed;z-index:calc(var(--z-modal) + 1);
  background:var(--surface-overlay);
  display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);
}
.asg-drawer--right{top:0;right:0;bottom:0;width:min(360px,88vw);border-left:1px solid var(--border-default);animation:asg-drw-right var(--dur-base) var(--ease-entrance);}
.asg-drawer--left{top:0;left:0;bottom:0;width:min(360px,88vw);border-right:1px solid var(--border-default);animation:asg-drw-left var(--dur-base) var(--ease-entrance);}
.asg-drawer--bottom{left:0;right:0;bottom:0;max-height:86vh;border-top:1px solid var(--border-default);border-radius:var(--radius-lg) var(--radius-lg) 0 0;animation:asg-drw-up var(--dur-base) var(--ease-entrance);}
@keyframes asg-drw-right{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}
@keyframes asg-drw-left{from{transform:translateX(-24px);opacity:0}to{transform:none;opacity:1}}
@keyframes asg-drw-up{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}
.asg-drawer__head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;border-bottom:1px solid var(--border-subtle);}
.asg-drawer__title{font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--text-muted);margin:0;}
.asg-drawer__x{flex:none;background:none;border:0;color:var(--text-muted);cursor:pointer;padding:4px;display:flex;margin-left:auto;}
.asg-drawer__x:hover{color:var(--text-primary);}
.asg-drawer__body{flex:1;overflow:auto;padding:22px;}
.asg-drawer__footer{flex:none;padding:18px 22px;border-top:1px solid var(--border-subtle);display:flex;flex-direction:column;gap:10px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "drawer");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Drawer({ open, onClose, title, side = "right", children, footer, className = "", ...rest }) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <React.Fragment>
      <div className="asg-drawer__backdrop" onClick={onClose}></div>
      <div className={["asg-drawer", "asg-drawer--" + side, className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" {...rest}>
        <div className="asg-drawer__head">
          {title && <h2 className="asg-drawer__title">{title}</h2>}
          <button type="button" className="asg-drawer__x" aria-label="Close" onClick={onClose}><Icon name="close" size={20} /></button>
        </div>
        <div className="asg-drawer__body">{children}</div>
        {footer && <div className="asg-drawer__footer">{footer}</div>}
      </div>
    </React.Fragment>
  );
}
