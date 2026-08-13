import React from "react";

/* African Safari Group — Avatar
   Specialist / guest portrait. Image or initials, optional brass ring. */

const CSS = `
.asg-avatar{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  border-radius:50%;overflow:hidden;background:var(--asg-charcoal-500);
  color:var(--text-primary);font-family:var(--font-body);font-weight:var(--fw-medium);
  letter-spacing:.02em;text-transform:uppercase;user-select:none;
}
.asg-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.asg-avatar--ring{box-shadow:0 0 0 1px var(--surface-base),0 0 0 2px var(--asg-brass);}
.asg-avatar--xs{width:28px;height:28px;font-size:11px;}
.asg-avatar--sm{width:36px;height:36px;font-size:13px;}
.asg-avatar--md{width:48px;height:48px;font-size:16px;}
.asg-avatar--lg{width:64px;height:64px;font-size:21px;}
.asg-avatar--xl{width:88px;height:88px;font-size:28px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "avatar");
  s.textContent = CSS;
  document.head.appendChild(s);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("");
}

export function Avatar({ src, name = "", size = "md", ring = false, className = "", ...rest }) {
  inject();
  return (
    <span
      className={["asg-avatar", `asg-avatar--${size}`, ring && "asg-avatar--ring", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={name || "avatar"}
      {...rest}
    >
      {src ? <img src={src} alt={name} /> : <span>{initials(name)}</span>}
    </span>
  );
}
