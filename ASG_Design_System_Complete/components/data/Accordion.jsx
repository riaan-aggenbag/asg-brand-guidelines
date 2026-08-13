import React from "react";
import { Icon } from "../core/Icon.jsx";

/* African Safari Group — Accordion
   Expandable rows with a brass chevron. Single or multiple open. */

const CSS = `
.asg-acc{display:flex;flex-direction:column;border-top:1px solid var(--border-default);}
.asg-acc__item{border-bottom:1px solid var(--border-default);}
.asg-acc__head{
  width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:0;cursor:pointer;text-align:left;padding:18px 2px;
  font-family:var(--font-serif);font-size:18px;font-weight:var(--fw-medium);color:var(--text-primary);
  transition:color var(--dur-fast);
}
.asg-acc__head:hover{color:var(--accent-hover);}
.asg-acc__chev{flex:none;color:var(--accent);transition:transform var(--dur-base) var(--ease-standard);}
.asg-acc__item--open .asg-acc__chev{transform:rotate(180deg);}
.asg-acc__panel{overflow:hidden;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--dur-base) var(--ease-standard);}
.asg-acc__item--open .asg-acc__panel{grid-template-rows:1fr;}
.asg-acc__panel-inner{min-height:0;overflow:hidden;}
.asg-acc__content{padding:0 2px 20px;font-family:var(--font-body);font-size:14px;line-height:1.65;color:var(--text-body);max-width:64ch;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "accordion");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = "", ...rest }) {
  inject();
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div className={["asg-acc", className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={["asg-acc__item", isOpen && "asg-acc__item--open"].filter(Boolean).join(" ")}>
            <button type="button" className="asg-acc__head" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span>{it.title}</span>
              <span className="asg-acc__chev"><Icon name="chevron-down" size={20} /></span>
            </button>
            <div className="asg-acc__panel">
              <div className="asg-acc__panel-inner">
                <div className="asg-acc__content">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
