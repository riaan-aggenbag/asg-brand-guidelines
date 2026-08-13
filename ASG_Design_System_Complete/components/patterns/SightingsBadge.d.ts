import * as React from "react";

export type SightingLevel = "most" | "very" | "often" | "rare";

/** Wildlife sighting-probability badge — honest, never promised. Green / brass / sand / charcoal. */
export interface SightingsBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Probability level: "most" (green, "Most drives") · "very" (brass, "Very often") · "often" (sand + ink text, "Often") · "rare" (charcoal, "Rarely · elusive"). Default "often". */
  level?: SightingLevel;
  /** Custom label; omitting it uses the level's canonical wording. */
  children?: React.ReactNode;
}

export function SightingsBadge(props: SightingsBadgeProps): JSX.Element;
