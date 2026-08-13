import React from "react";
import { Icon } from "./Icon.jsx";

/* African Safari Group — IconButton
   A square, icon-only control. Same restraint as Button. */

const CSS = `
.asg-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  background:transparent;border:1px solid transparent;color:var(--text-body);
  border-radius:var(--radius-sm);cursor:pointer;flex:none;
  transition:background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);
  -webkit-tap-highlight-color:transparent;
}
.asg-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring-shadow);}
.asg-iconbtn[disabled]{opacity:.42;cursor:not-allowed;pointer-events:none;}
.asg-iconbtn--sm{width:34px;height:34px;}
.asg-iconbtn--md{width:42px;height:42px;}
.asg-iconbtn--lg{width:50px;height:50px;}
.asg-iconbtn--ghost:hover{background:var(--asg-ivory-a08);color:var(--text-primary);}
.asg-iconbtn--outline{border-color:var(--border-strong);}
.asg-iconbtn--outline:hover{border-color:var(--asg-brass);color:var(--accent-hover);}
.asg-iconbtn--solid{background:var(--asg-brass);color:var(--text-on-brass);border-color:var(--asg-brass);}
.asg-iconbtn--solid:hover{background:var(--asg-brass-400);border-color:var(--asg-brass-400);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "iconbutton");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function IconButton({ icon, label, variant = "ghost", size = "md", className = "", ...rest }) {
  inject();
  const iconSize = size === "lg" ? 22 : size === "sm" ? 16 : 19;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={["asg-iconbtn", `asg-iconbtn--${variant}`, `asg-iconbtn--${size}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
