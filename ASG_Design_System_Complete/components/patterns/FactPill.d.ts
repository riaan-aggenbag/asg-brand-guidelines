import * as React from "react";

/** Frosted stat badge for hero imagery — translucent fill, backdrop blur, brass ✦ prefix. */
export interface FactPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pill text, e.g. "Big Five" or "9,000 hectares". */
  children?: React.ReactNode;
  /** Show the brass ✦ prefix glyph. Default true. */
  glyph?: boolean;
}

export function FactPill(props: FactPillProps): JSX.Element;
