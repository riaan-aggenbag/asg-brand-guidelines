import React from "react";

/* African Safari Group — Logo
   The fixed crest (image asset) plus a typographic wordmark. Sub-brands change
   ONLY the wordmark beneath the same icon. Pass `iconSrc` with the correct
   relative path to the crest PNG for where this is mounted. */

const CSS = `
.asg-logo{display:inline-flex;align-items:center;gap:14px;line-height:1;}
.asg-logo--stacked{flex-direction:column;gap:12px;text-align:center;}
.asg-logo__icon{display:block;flex:none;}
.asg-logo__wm{display:flex;flex-direction:column;gap:5px;}
.asg-logo--stacked .asg-logo__wm{align-items:center;}
.asg-logo__name{font-family:var(--font-serif);font-weight:var(--fw-medium);color:var(--text-primary);letter-spacing:.12em;line-height:1;white-space:nowrap;}
.asg-logo__sub{display:flex;align-items:center;gap:9px;width:100%;}
.asg-logo--stacked .asg-logo__sub{justify-content:center;}
.asg-logo__sub span{font-family:var(--font-body);color:var(--text-body);letter-spacing:.32em;white-space:nowrap;}
.asg-logo__sub i{flex:1;height:1px;background:var(--asg-brass);min-width:16px;}
.asg-logo--stacked .asg-logo__sub i:first-child{display:block;}
.asg-logo--tone-ink .asg-logo__name{color:var(--text-primary-ink);}
.asg-logo--tone-ink .asg-logo__sub span{color:var(--text-body-ink);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "logo");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const TONE_FILE = { white: "asg-icon-white.png", ink: "asg-icon-ink.png", brass: "asg-icon-brass.png", sand: "asg-icon-sand.png" };

export function Logo({
  variant = "horizontal",
  tone = "white",
  name = "AFRICAN SAFARI",
  sub = "GROUP",
  size = 44,
  iconSrc,
  iconBase = "assets/logos/",
  className = "",
  ...rest
}) {
  inject();
  const src = iconSrc || `${iconBase}${TONE_FILE[tone] || TONE_FILE.white}`;
  const nameSize = Math.round(size * 0.42);
  const subSize = Math.max(8, Math.round(size * 0.21));
  if (variant === "icon") {
    return <img src={src} alt={name} height={size} className={["asg-logo__icon", className].filter(Boolean).join(" ")} {...rest} />;
  }
  return (
    <span className={["asg-logo", `asg-logo--${variant}`, `asg-logo--tone-${tone}`, className].filter(Boolean).join(" ")} {...rest}>
      <img src={src} alt="" height={size} className="asg-logo__icon" />
      <span className="asg-logo__wm">
        <span className="asg-logo__name" style={{ fontSize: nameSize }}>{name}</span>
        <span className="asg-logo__sub" style={{ fontSize: subSize }}>
          {variant === "stacked" && <i />}
          <span>{sub}</span>
          <i />
        </span>
      </span>
    </span>
  );
}
