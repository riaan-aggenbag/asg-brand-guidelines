import * as React from "react";

export type BadgeVariant = "neutral" | "brass" | "solid" | "green" | "success" | "warning" | "danger" | "info";

/** Small status / category marker in tracked caps. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour treatment. Default "neutral". */
  variant?: BadgeVariant;
  /** Show a leading status dot. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
