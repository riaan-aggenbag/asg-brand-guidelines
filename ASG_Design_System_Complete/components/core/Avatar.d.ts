import * as React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/** Specialist / guest portrait. Falls back to initials from `name`. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. If omitted, initials of `name` are shown. */
  src?: string;
  /** Full name — used for initials and the aria-label. */
  name?: string;
  /** Size. Default "md". */
  size?: AvatarSize;
  /** Add a brass ring. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
