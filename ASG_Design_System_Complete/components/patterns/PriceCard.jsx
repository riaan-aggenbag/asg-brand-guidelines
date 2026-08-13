import React from "react";
import { Button } from "../core/Button.jsx";

/* African Safari Group — Price Card
   Hero booking sidebar: warm-ivory card floated over the hero photograph,
   From-price (the one serif numeral moment), dual CTAs, and the
   no-payment-required assurance line. From the Option 4 lodge template. */

const CSS = `
.asg-pricecard{background:var(--asg-warm-ivory);border-radius:var(--radius-md);padding:26px 28px;min-width:300px;max-width:340px;box-shadow:0 30px 60px rgba(8,6,4,.40);}
.asg-pricecard__from{font-family:var(--font-body);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--asg-brass-600);font-weight:var(--fw-semibold);}
.asg-pricecard__amount{font-family:var(--font-serif);font-weight:500;font-size:30px;color:var(--asg-ink);margin:4px 0 16px;line-height:1.15;}
.asg-pricecard__amount span{font-family:var(--font-body);font-weight:var(--fw-regular);font-size:13px;color:var(--asg-soft-charcoal);}
.asg-pricecard__ctas{display:flex;flex-direction:column;gap:10px;}
.asg-pricecard__note{font-family:var(--font-body);font-size:10.5px;color:var(--asg-soft-charcoal);opacity:.78;text-align:center;margin:12px 0 0;line-height:1.5;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "pricecard");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function PriceCard({
  from,
  unit = "pp / night",
  primaryLabel = "Start Planning / Enquire",
  onPrimary,
  secondaryLabel,
  onSecondary,
  note = "No payment required · we reply within 24 hours",
  className = "",
  ...rest
}) {
  inject();
  return (
    <div className={["asg-pricecard", className].filter(Boolean).join(" ")} {...rest}>
      <div className="asg-pricecard__from">From</div>
      <div className="asg-pricecard__amount">{from} <span>{unit}</span></div>
      <div className="asg-pricecard__ctas">
        <Button variant="primary" fullWidth onClick={onPrimary}>{primaryLabel}</Button>
        {secondaryLabel && <Button variant="secondary" onLight fullWidth onClick={onSecondary}>{secondaryLabel}</Button>}
      </div>
      {note && <p className="asg-pricecard__note">{note}</p>}
    </div>
  );
}
