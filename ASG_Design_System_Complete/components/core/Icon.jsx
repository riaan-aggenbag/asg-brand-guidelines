import React from "react";

/* African Safari Group — Icon
   Thin-stroke line icons (Lucide geometry, 24px grid, 1.75 stroke by default).
   The brand book defines no icon system; Lucide is the chosen substitute for its
   restrained, editorial line weight. Currency/numerals are typographic, not icons.
   Icons inherit `color` via currentColor; default size 20px. */

const PATHS = {
  "arrow-right": "M5 12h14 M13 6l6 6-6 6",
  "arrow-left": "M19 12H5 M11 18l-6-6 6-6",
  "arrow-up-right": "M7 17 17 7 M7 7h10v10",
  "chevron-right": "M9 6l6 6-6 6",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-down": "M6 9l6 6 6-6",
  "chevron-up": "M6 15l6-6 6 6",
  "menu": "M4 6h16 M4 12h16 M4 18h16",
  "close": "M6 6l12 12 M18 6 6 18",
  "check": "M5 12.5 10 17.5 19.5 7",
  "search": "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.3-4.3",
  "plus": "M12 5v14 M5 12h14",
  "minus": "M5 12h14",
  "star": "M12 3.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L12 17.1 6.75 19.75l1-5.85L3.5 9.7l5.9-.9Z",
  "map-pin": "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  "calendar": "M7 3v4 M17 3v4 M4 9h16 M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  "user": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4.5 20a7.5 7.5 0 0 1 15 0",
  "users": "M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M2.5 20a6.5 6.5 0 0 1 13 0 M17 4.2a4 4 0 0 1 0 7.6 M21.5 20a6.5 6.5 0 0 0-4-6",
  "phone": "M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z",
  "mail": "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3.5 6.5 12 13l8.5-6.5",
  "globe": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3.5 12h17 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  "compass": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M15.5 8.5l-2 5-5 2 2-5Z",
  "heart": "M12 20S4 14.5 4 8.8A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 8 2.8C20 14.5 12 20 12 20Z",
  "filter": "M3 5h18l-7 8v5l-4 2v-7Z",
  "sliders": "M4 7h10 M18 7h2 M4 12h2 M10 12h10 M4 17h7 M15 17h5 M14 5v4 M6 10v4 M11 15v4",
  "info": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 11v5 M12 7.6h.01",
  "alert": "M12 3 2.5 20h19L12 3Z M12 9.5v5 M12 17.6h.01",
  "moon": "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z",
  "sun": "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 2v2 M12 20v2 M4 12H2 M22 12h-2 M5 5l1.5 1.5 M17.5 17.5 19 19 M19 5l-1.5 1.5 M6.5 17.5 5 19",
  "binoculars": "M6 4h3v3H6Z M15 4h3v3h-3Z M9 7h6 M7.5 7 5 18a2.5 2.5 0 0 0 5 .5L11 9 M16.5 7 19 18a2.5 2.5 0 0 1-5 .5L13 9",
  "leaf": "M5 19c0-8 6-14 15-14 0 9-6 15-14 15 0-4 3-8 8-9",
  "play": "M7 4.5 19 12 7 19.5Z",
  "external": "M14 4h6v6 M20 4l-9 9 M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5",
  "download": "M12 3v12 M7 11l5 5 5-5 M4 20h16",
  "clock": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2",
};

export function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style, className, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  const segments = d.split(" M").map((s, i) => (i === 0 ? s : "M" + s));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ display: "inline-block", flex: "none", verticalAlign: "middle", ...style }}
      {...rest}
    >
      {segments.map((seg, i) => <path key={i} d={seg} />)}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(PATHS);
