import * as React from "react";

export interface Crumb { label: string; href?: string; }

/** Wayfinding trail with chevron separators. Last item is the current page — plain text, never a link. */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: Crumb[];
  /** Over-hero treatment: tracked-caps sand links, brass hover, no background panel. Sits top-left over the hero image. */
  hero?: boolean;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
