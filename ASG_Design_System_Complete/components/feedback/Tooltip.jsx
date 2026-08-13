import React from "react";

/* African Safari Group — Tooltip
   Quiet hover/focus label. Dark overlay chip, four placements. CSS-driven. */

const CSS = `
.asg-tip{position:relative;display:inline-flex;}
.asg-tip__bubble{
  position:absolute;z-index:var(--z-overlay);pointer-events:none;
  background:var(--asg-ink-900);color:var(--text-primary);
  border:1px solid var(--border-default);border-radius:var(--radius-xs);
  font-family:var(--font-body);font-size:12px;line-height:1.4;letter-spacing:.01em;
  padding:7px 10px;white-space:nowrap;box-shadow:var(--shadow-md);
  opacity:0;transform:translate(var(--_tx,0),var(--_ty,4px));
  transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard);
}
.asg-tip:hover .asg-tip__bubble,.asg-tip:focus-within .asg-tip__bubble{opacity:1;transform:translate(var(--_tx,0),var(--_ty2,0));}
.asg-tip--top .asg-tip__bubble{bottom:100%;left:50%;--_tx:-50%;--_ty:4px;--_ty2:-8px;margin-bottom:0;}
.asg-tip--bottom .asg-tip__bubble{top:100%;left:50%;--_tx:-50%;--_ty:-4px;--_ty2:8px;}
.asg-tip--left .asg-tip__bubble{right:100%;top:50%;--_tx:0;--_ty:-50%;margin-right:8px;}
.asg-tip--right .asg-tip__bubble{left:100%;top:50%;--_tx:0;--_ty:-50%;margin-left:8px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tooltip");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tooltip({ label, placement = "top", children, className = "", ...rest }) {
  inject();
  return (
    <span className={["asg-tip", `asg-tip--${placement}`, className].filter(Boolean).join(" ")} {...rest}>
      {children}
      <span className="asg-tip__bubble" role="tooltip">{label}</span>
    </span>
  );
}
