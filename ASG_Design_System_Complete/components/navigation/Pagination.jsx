import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Pagination
   Page navigation with prev/next and numbered controls (with ellipsis). */

const CSS = `
.asg-pager{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-numeric);}
.asg-pager__btn{
  min-width:38px;height:38px;padding:0 10px;display:inline-flex;align-items:center;justify-content:center;
  background:transparent;border:1px solid transparent;border-radius:var(--radius-xs);
  color:var(--text-body);font-size:14px;font-weight:var(--fw-medium);cursor:pointer;
  transition:color var(--dur-fast),border-color var(--dur-fast),background var(--dur-fast);
}
.asg-pager__btn:hover:not(:disabled){border-color:var(--asg-brass);color:var(--text-primary);}
.asg-pager__btn:disabled{opacity:.35;cursor:not-allowed;}
.asg-pager__btn--active{background:var(--asg-brass);border-color:var(--asg-brass);color:var(--text-on-brass);}
.asg-pager__btn--active:hover{color:var(--text-on-brass);}
.asg-pager__gap{min-width:24px;text-align:center;color:var(--text-faint);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "pagination");
  s.textContent = CSS;
  document.head.appendChild(s);
}

function range(total, current) {
  const pages = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= current - 1 && p <= current + 1)) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  return pages;
}

export function Pagination({ page = 1, total = 1, onChange, className = "", ...rest }) {
  inject();
  const go = (p) => { if (p >= 1 && p <= total && p !== page) onChange && onChange(p); };
  return (
    <nav className={["asg-pager", className].filter(Boolean).join(" ")} aria-label="Pagination" {...rest}>
      <button type="button" className="asg-pager__btn" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous"><Icon name="chevron-left" size={18} /></button>
      {range(total, page).map((p, i) =>
        p === "…"
          ? <span key={`g${i}`} className="asg-pager__gap">…</span>
          : <button key={p} type="button" className={["asg-pager__btn", p === page && "asg-pager__btn--active"].filter(Boolean).join(" ")} aria-current={p === page ? "page" : undefined} onClick={() => go(p)}>{p}</button>
      )}
      <button type="button" className="asg-pager__btn" onClick={() => go(page + 1)} disabled={page >= total} aria-label="Next"><Icon name="chevron-right" size={18} /></button>
    </nav>
  );
}
