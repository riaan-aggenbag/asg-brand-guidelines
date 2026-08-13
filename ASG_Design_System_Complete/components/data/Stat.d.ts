import * as React from "react";

/** A single numeral statistic (value is always Poppins). */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label?: string;
  /** "sm" | "md" | "lg". Default "md". */
  size?: "sm" | "md" | "lg";
  /** Brass value colour. Default true; false = ivory. */
  brass?: boolean;
  /** Centre-align. */
  center?: boolean;
}

export function Stat(props: StatProps): JSX.Element;
