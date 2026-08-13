import * as React from "react";

/**
 * The core content unit — a lodge, reserve, or itinerary card.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Media image URL. */
  image?: string;
  imageAlt?: string;
  /** Placeholder label shown when no image (drop your photography here). */
  imageSlot?: React.ReactNode;
  /** Overlay node, top-left (e.g. a <Badge/>). */
  badge?: React.ReactNode;
  /** Overlay node, top-right (e.g. a favourite IconButton). */
  favorite?: React.ReactNode;
  /** Tracked-caps eyebrow (e.g. reserve name). */
  eyebrow?: string;
  /** Serif title. */
  title?: string;
  /** Footer row (price + CTA), pinned to the bottom. */
  footer?: React.ReactNode;
  /** Renders as a link with a hover lift. */
  href?: string;
}

export function Card(props: CardProps): JSX.Element;
