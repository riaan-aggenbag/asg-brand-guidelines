import * as React from "react";
import { IconName } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Primary action control. Brass fill is the single signal — one primary CTA
 * per view. Labels are tracked uppercase Poppins (except `link`).
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: ButtonVariant;
  /** Size. Default "md". */
  size?: ButtonSize;
  /** Leading icon name. */
  icon?: IconName;
  /** Trailing icon name (e.g. "arrow-right"). */
  iconRight?: IconName;
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Show a spinner and disable. */
  loading?: boolean;
  /** Adjust outline/ghost colours for an ivory ground. */
  onLight?: boolean;
  /** Render as another element/component (e.g. "a"). */
  as?: any;
  /** When set (or as="a"), renders an anchor. */
  href?: string;
}

export function Button(props: ButtonProps): JSX.Element;
