import React from "react";

/* African Safari Group — Value-Prop Bar
   Four columns on Charcoal directly under the hero: Current Special,
   Book Direct, Plan With a Consultant, Expert Support. Labels are 12px
   tracked-caps brass (brand decision — never 10px). Option 4 template. */

const CSS = `
.asg-props{background:var(--asg-charcoal);color:var(--asg-warm-ivory);}
.asg-props__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:repeat(4,1fr);}
.asg-prop{padding:24px 26px 24px 0;margin-right:26px;border-right:1px solid rgba(255,255,255,.08);}
.asg-prop:last-child{border-right:none;margin-right:0;}
.asg-prop__k{font-family:var(--font-body);font-size:12px;letter-spacing:.125em;text-transform:uppercase;color:var(--asg-brass);font-weight:var(--fw-semibold);margin:0 0 6px;}
.asg-prop__t{font-family:var(--font-body);font-size:13.5px;color:#FFFFFF;font-weight:var(--fw-medium);margin:0 0 4px;}
.asg-prop__d{font-family:var(--font-body);font-size:11.5px;color:var(--asg-bone);line-height:1.55;margin:0;}
@media(max-width:1000px){.asg-props__in{grid-template-columns:1fr 1fr;}.asg-prop{border-right:none;margin-right:0;border-bottom:1px solid rgba(255,255,255,.08);}}
@media(max-width:640px){.asg-props__in{grid-template-columns:1fr;}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "valueprops");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function ValuePropBar({ items = [], className = "", ...rest }) {
  inject();
  return (
    <div className={["asg-props", className].filter(Boolean).join(" ")} {...rest}>
      <div className="asg-props__in">
        {items.map((it) => (
          <div key={it.k} className="asg-prop">
            <p className="asg-prop__k">{it.k}</p>
            <p className="asg-prop__t">{it.t}</p>
            <p className="asg-prop__d">{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
