import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Breadcrumb
   Quiet wayfinding trail with chevron separators; current page in ivory,
   never a link. The hero variant sits top-left OVER the hero image — no
   background panel: sand links, brass on hover, current page plain text. */

const CSS = `
.asg-crumbs{display:flex;align-items:center;flex-wrap:wrap;gap:7px;font-family:var(--font-body);font-size:13px;}
.asg-crumbs a,.asg-crumbs__item{color:var(--text-muted);text-decoration:none;transition:color var(--dur-fast) var(--ease-standard);}
.asg-crumbs a:hover{color:var(--accent-hover);}
.asg-crumbs__item--current{color:var(--text-primary);font-weight:var(--fw-medium);}
.asg-crumbs__sep{color:var(--text-faint);display:flex;}
.asg-crumbs--hero{font-size:11px;letter-spacing:.13em;text-transform:uppercase;}
.asg-crumbs--hero a,.asg-crumbs--hero .asg-crumbs__item{color:var(--asg-heritage-sand);}
.asg-crumbs--hero a:hover{color:var(--asg-brass);}
.asg-crumbs--hero .asg-crumbs__item--current{color:var(--asg-heritage-sand);font-weight:var(--fw-medium);}
.asg-crumbs--hero .asg-crumbs__sep{color:var(--asg-heritage-sand);opacity:.6;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "breadcrumb");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Breadcrumb({ items = [], hero = false, className = "", ...rest }) {
  inject();
  return (
    <nav className={["asg-crumbs", hero && "asg-crumbs--hero", className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last || !it.href
              ? <span className={["asg-crumbs__item", last && "asg-crumbs__item--current"].filter(Boolean).join(" ")} aria-current={last ? "page" : undefined}>{it.label}</span>
              : <a href={it.href}>{it.label}</a>}
            {!last && <span className="asg-crumbs__sep" aria-hidden="true"><Icon name="chevron-right" size={14} /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
