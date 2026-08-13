import * as React from "react";

export type AlertVariant = "brass" | "info" | "success" | "warning" | "danger";

/** Inline message block with a left keyline, icon, optional title and dismiss. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour treatment. Default "info". */
  variant?: AlertVariant;
  /** Bold title line. */
  title?: string;
  /** Override the leading icon. */
  icon?: import("../core/Icon").IconName;
  /** When set, shows a dismiss button. */
  onClose?: () => void;
}

export function Alert(props: AlertProps): JSX.Element;
