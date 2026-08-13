import * as React from "react";

export type IconName =
  | "arrow-right" | "arrow-left" | "arrow-up-right"
  | "chevron-right" | "chevron-left" | "chevron-down" | "chevron-up"
  | "menu" | "close" | "check" | "search" | "plus" | "minus" | "star"
  | "map-pin" | "calendar" | "user" | "users" | "phone" | "mail" | "globe"
  | "compass" | "heart" | "filter" | "sliders" | "info" | "alert"
  | "moon" | "sun" | "binoculars" | "leaf" | "play" | "external"
  | "download" | "clock";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon name from the ASG line set (Lucide geometry). */
  name: IconName;
  /** Pixel size (width = height). Default 20. */
  size?: number;
  /** Stroke width. Default 1.75 — keep icons thin and editorial. */
  strokeWidth?: number;
  /** Stroke colour. Defaults to currentColor so icons inherit text colour. */
  color?: string;
}

/** Thin-stroke line icon (Lucide geometry) that inherits currentColor. */
export function Icon(props: IconProps): JSX.Element | null;

/** All available icon names. */
export const ICON_NAMES: IconName[];
