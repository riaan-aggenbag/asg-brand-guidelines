import * as React from "react";

/** Quiet hover/focus label. Wrap the trigger as children. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** Placement. Default "top". */
  placement?: "top" | "bottom" | "left" | "right";
}

export function Tooltip(props: TooltipProps): JSX.Element;
