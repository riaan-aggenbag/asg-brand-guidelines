import React from "react";

/* African Safari Group — Accreditation Footer Row
   Bordered pills for memberships / accreditations, plus brass-bordered
   review-count pills (TripAdvisor, Feedback Company, Google). Sits above
   the footer's bottom bar on the ink ground. Option 4 template. */

const CSS = `
.asg-accred{display:flex;flex-wrap:wrap;gap:10px;font-family:var(--font-body);}
.asg-accred__pill{border:1px solid var(--border-default);color:var(--text-body);font-size:11px;line-height:1;padding:8px 14px;border-radius:var(--radius-pill);display:inline-flex;align-items:center;}
.asg-accred__pill--review{border-color:var(--asg-brass-a40);color:var(--accent-quiet);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "accred");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function AccreditationRow({ pills = [], reviews = [], className = "", ...rest }) {
  inject();
  return (
    <div className={["asg-accred", className].filter(Boolean).join(" ")} {...rest}>
      {pills.map((p) => <span key={p} className="asg-accred__pill">{p}</span>)}
      {reviews.map((r) => <span key={r} className="asg-accred__pill asg-accred__pill--review">{r}</span>)}
    </div>
  );
}
