import React from "react";

/* African Safari Group — Spinner
   Minimal brass ring loader. */

const CSS = `
.asg-spinner{display:inline-block;border-radius:50%;border-style:solid;border-color:var(--border-default);border-top-color:var(--accent);animation:asg-spin .8s linear infinite;}
@keyframes asg-spin{to{transform:rotate(360deg)}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "spinner");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const SIZES = { sm: 16, md: 24, lg: 36 };

export function Spinner({ size = "md", className = "", style, label = "Loading", ...rest }) {
  inject();
  const px = typeof size === "number" ? size : (SIZES[size] || 24);
  const bw = Math.max(2, Math.round(px / 11));
  return (
    <span
      className={["asg-spinner", className].filter(Boolean).join(" ")}
      role="status"
      aria-label={label}
      style={{ width: px, height: px, borderWidth: bw, ...style }}
      {...rest}
    />
  );
}
