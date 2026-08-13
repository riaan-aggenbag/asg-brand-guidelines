import React from "react";
import { Icon } from "./Icon.jsx";

/* African Safari Group — Button
   Tracked-caps Poppins label, near-square corners, brass used as the single
   signal. Primary = brass fill with WHITE label (brand rule) — labels are
   min 12px semibold tracked caps so white holds up on brass; smaller text on
   brass uses the deep brass-600 fill instead. Secondary = hairline outline;
   ghost = quiet; link = inline brass. No bounce — colour transitions only. */

const CSS = `
.asg-btn{
  --_bg:transparent;--_fg:var(--text-primary);--_bd:transparent;
  display:inline-flex;align-items:center;justify-content:center;gap:.6em;
  font-family:var(--font-body);font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-button);text-transform:uppercase;
  border:1px solid var(--_bd);background:var(--_bg);color:var(--_fg);
  border-radius:var(--radius-sm);cursor:pointer;text-decoration:none;
  white-space:nowrap;line-height:1;transition:background var(--dur-fast) var(--ease-standard),
  color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),opacity var(--dur-fast);
  -webkit-tap-highlight-color:transparent;
}
.asg-btn:focus-visible{outline:none;box-shadow:var(--focus-ring-shadow);}
.asg-btn--sm{font-size:12px;padding:9px 16px;}
.asg-btn--md{font-size:12px;padding:13px 24px;}
.asg-btn--lg{font-size:13px;padding:17px 34px;}
.asg-btn--full{width:100%;}
/* loading — keep full-strength colour so the label stays readable */
.asg-btn--loading{cursor:default;pointer-events:none;}
/* primary — brass fill */
.asg-btn--primary{--_bg:var(--asg-brass);--_fg:var(--text-on-brass);--_bd:var(--asg-brass);}
.asg-btn--primary:hover{--_bg:var(--asg-brass-400);--_bd:var(--asg-brass-400);}
.asg-btn--primary:active{--_bg:var(--asg-brass-600);--_bd:var(--asg-brass-600);}
/* secondary — hairline outline */
.asg-btn--secondary{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-strong);}
.asg-btn--secondary:hover{--_bd:var(--asg-brass);--_fg:var(--accent-hover);}
.asg-btn--secondary:active{--_bd:var(--asg-brass-600);}
/* ghost — quiet */
.asg-btn--ghost{--_bg:transparent;--_fg:var(--text-body);--_bd:transparent;}
.asg-btn--ghost:hover{--_fg:var(--text-primary);--_bg:var(--asg-ivory-a08);}
/* link — inline brass */
.asg-btn--link{--_bg:transparent;--_fg:var(--accent);--_bd:transparent;padding-left:0;padding-right:0;letter-spacing:.04em;text-transform:none;}
.asg-btn--link:hover{--_fg:var(--accent-hover);}
/* on ivory ground */
.asg-on-ivory .asg-btn--secondary,.asg-btn--secondary.asg-btn--on-light{--_fg:var(--text-primary-ink);--_bd:var(--asg-bone);}
.asg-on-ivory .asg-btn--ghost,.asg-btn--ghost.asg-btn--on-light{--_fg:var(--text-body-ink);}
.asg-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:asg-btn-spin .7s linear infinite;}
@keyframes asg-btn-spin{to{transform:rotate(360deg)}}
/* disabled — defined last so it overrides every variant's colours; a legible
   muted fill (dark charcoal + light text), never a low-opacity wash */
.asg-btn--disabled,.asg-btn--disabled:hover,.asg-btn--disabled:active{--_bg:var(--asg-soft-charcoal);--_fg:#CFC7BB;--_bd:var(--asg-soft-charcoal);cursor:not-allowed;pointer-events:none;box-shadow:none;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "button");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  onLight = false,
  as,
  href,
  className = "",
  ...rest
}) {
  inject();
  const Tag = as || (href ? "a" : "button");
  const cls = [
    "asg-btn",
    `asg-btn--${variant}`,
    `asg-btn--${size}`,
    fullWidth && "asg-btn--full",
    loading && "asg-btn--loading",
    (disabled && !loading) && "asg-btn--disabled",
    onLight && "asg-btn--on-light",
    className,
  ].filter(Boolean).join(" ");
  const iconSize = size === "lg" ? 18 : size === "sm" ? 14 : 16;
  return (
    <Tag
      className={cls}
      href={href}
      disabled={Tag === "button" ? (disabled || loading) : undefined}
      aria-disabled={disabled || loading || undefined}
      {...rest}
    >
      {loading && <span className="asg-btn__spin" aria-hidden="true" />}
      {!loading && icon && <Icon name={icon} size={iconSize} strokeWidth={2} />}
      {children && <span>{children}</span>}
      {!loading && iconRight && <Icon name={iconRight} size={iconSize} strokeWidth={2} />}
    </Tag>
  );
}
