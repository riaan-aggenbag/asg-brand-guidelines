import * as React from "react";
import { IconName } from "./Icon";

export type IconButtonVariant = "ghost" | "outline" | "solid";
export type IconButtonSize = "sm" | "md" | "lg";

/** Square, icon-only control. Always pass `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name. */
  icon: IconName;
  /** Accessible label (also the tooltip title). */
  label: string;
  /** Visual style. Default "ghost". */
  variant?: IconButtonVariant;
  /** Size. Default "md". */
  size?: IconButtonSize;
}

export function IconButton(props: IconButtonProps): JSX.Element;
