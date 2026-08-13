import React from "react";

/* African Safari Group — Card
   The core content unit — a lodge, reserve, or itinerary. Optional media with a
   bottom scrim, a serif title, supporting copy and a meta/footer row. Renders as
   a link when `href` is set, with a quiet lift on hover. */

const CSS = `
.asg-card{
  display:flex;flex-direction:column;background:var(--surface-raised);
  border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;
  text-decoration:none;color:inherit;
  transition:transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard);
}
.asg-card--link{cursor:pointer;}
.asg-card--link:hover{transform:translateY(-3px);border-color:var(--asg-brass-a40);box-shadow:var(--shadow-lg);}
.asg-card__media{position:relative;aspect-ratio:4/3;background:var(--asg-ink-900);overflow:hidden;}
.asg-card__media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform var(--dur-slow) var(--ease-standard);}
.asg-card--link:hover .asg-card__media img{transform:scale(1.04);}
.asg-card__media::after{content:"";position:absolute;inset:0;background:var(--scrim-bottom);opacity:.5;}
.asg-card__media-slot{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--text-faint);font-family:var(--font-body);font-size:12px;letter-spacing:.16em;text-transform:uppercase;}
.asg-card__badge{position:absolute;top:13px;left:13px;z-index:2;}
.asg-card__fav{position:absolute;top:11px;right:11px;z-index:2;}
.asg-card__body{display:flex;flex-direction:column;gap:9px;padding:var(--gap-card);flex:1;}
.asg-card__eyebrow{font-family:var(--font-body);font-size:11px;font-weight:var(--fw-medium);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);}
.asg-card__title{font-family:var(--font-serif);font-weight:var(--fw-medium);font-size:22px;line-height:1.15;color:var(--text-primary);margin:0;}
.asg-card__desc{font-family:var(--font-body);font-size:14px;line-height:1.6;color:var(--text-body);margin:0;}
.asg-card__footer{margin-top:auto;padding-top:14px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px;border-top:1px solid var(--border-subtle);}
.asg-card__price{font-family:var(--font-numeric);}
.asg-card__price b{display:block;font-weight:var(--fw-medium);font-size:18px;color:var(--text-primary);}
.asg-card__price span{font-size:12px;color:var(--text-muted);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "card");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Card({
  image, imageAlt = "", imageSlot, badge, favorite,
  eyebrow, title, children, footer,
  href, className = "", ...rest
}) {
  inject();
  const Tag = href ? "a" : "div";
  const hasMedia = image || imageSlot || badge || favorite;
  return (
    <Tag href={href} className={["asg-card", href && "asg-card--link", className].filter(Boolean).join(" ")} {...rest}>
      {hasMedia && (
        <div className="asg-card__media">
          {image ? <img src={image} alt={imageAlt} /> : <div className="asg-card__media-slot">{imageSlot || "Photography"}</div>}
          {badge && <div className="asg-card__badge">{badge}</div>}
          {favorite && <div className="asg-card__fav">{favorite}</div>}
        </div>
      )}
      <div className="asg-card__body">
        {eyebrow && <span className="asg-card__eyebrow">{eyebrow}</span>}
        {title && <h3 className="asg-card__title">{title}</h3>}
        {children}
        {footer && <div className="asg-card__footer">{footer}</div>}
      </div>
    </Tag>
  );
}
