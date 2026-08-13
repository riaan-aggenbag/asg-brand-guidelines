import * as React from "react";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls visibility. The drawer renders nothing when false. */
  open: boolean;
  /** Called on backdrop click, Escape, or the close button. */
  onClose?: () => void;
  /** Optional tracked-caps label in the drawer head. */
  title?: React.ReactNode;
  /** Edge the panel slides from. Default "right". */
  side?: "right" | "left" | "bottom";
  /** Panel content. */
  children?: React.ReactNode;
  /** Optional pinned footer (e.g. a primary CTA). */
  footer?: React.ReactNode;
  className?: string;
}

/** Slide-in panel over a dark scrim — mobile navigation, filters, and
 *  anything that lives in a sidebar on desktop. Closes on backdrop click
 *  and Escape. */
export declare function Drawer(props: DrawerProps): React.ReactElement | null;
