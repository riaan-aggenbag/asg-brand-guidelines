import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Tabs
   Underline tabs with a brass active indicator. Controlled or uncontrolled. */

const CSS = `
.asg-tabs{display:flex;gap:0;border-bottom:1px solid var(--border-default);}
.asg-tab{
  display:inline-flex;align-items:center;gap:8px;background:none;border:0;cursor:pointer;
  font-family:var(--font-body);font-size:13px;font-weight:var(--fw-medium);letter-spacing:.04em;
  color:var(--text-muted);padding:13px 18px;position:relative;white-space:nowrap;
  transition:color var(--dur-fast) var(--ease-standard);
}
.asg-tab:first-child{padding-left:0;}
.asg-tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform var(--dur-base) var(--ease-standard);}
.asg-tab:first-child::after{left:0;}
.asg-tab:hover{color:var(--text-body);}
.asg-tab--active{color:var(--text-primary);}
.asg-tab--active::after{transform:scaleX(1);}
.asg-tab:focus-visible{outline:none;color:var(--text-primary);}
.asg-tab:focus-visible::after{transform:scaleX(1);background:var(--asg-brass-400);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tabs");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tabs({ tabs = [], value, defaultValue, onChange, className = "", ...rest }) {
  inject();
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };
  return (
    <div className={["asg-tabs", className].filter(Boolean).join(" ")} role="tablist" {...rest}>
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={active === t.id}
          className={["asg-tab", active === t.id && "asg-tab--active"].filter(Boolean).join(" ")}
          onClick={() => select(t.id)}
        >
          {t.icon && <Icon name={t.icon} size={16} />}
          {t.label}
        </button>
      ))}
    </div>
  );
}
