import * as React from "react";

/** Filter / attribute chip. Pill shape, optional dot and removable close. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a leading brass dot. */
  dot?: boolean;
  /** Selected (brass) state — use for active filters. */
  selected?: boolean;
  /** When provided, renders a close button; called on remove. */
  onRemove?: (e: React.MouseEvent) => void;
  /** When provided, the chip is interactive (hover + pointer). */
  onClick?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): JSX.Element;
