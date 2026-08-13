import * as React from "react";

export type MonthLevel = "peak" | "good" | "fair";

export interface MonthCell {
  /** Month name, e.g. "Jan". */
  m: string;
  /** Sub-label, e.g. "Peak viewing" — 9.5px tracked caps. */
  s?: string;
  /** Season quality: peak (brass + white) · good (sand + ink) · fair (bone + ink). */
  level: MonthLevel;
}

/** 12-cell best-time-to-visit grid with built-in Peak/Good/Fair legend. */
export interface MonthGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Twelve cells. Defaults to a dry-winter-peak Southern Africa pattern. */
  months?: MonthCell[];
  /** Show the legend row. Default true. */
  legend?: boolean;
}

export function MonthGrid(props: MonthGridProps): JSX.Element;
