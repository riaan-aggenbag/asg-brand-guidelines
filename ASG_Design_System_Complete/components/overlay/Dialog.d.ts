import * as React from "react";

/** Modal dialog over a dark scrim. Closes on backdrop click and Escape. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the dialog is shown. */
  open: boolean;
  onClose?: () => void;
  /** Serif title. */
  title?: string;
  /** Footer action row (e.g. Buttons). */
  footer?: React.ReactNode;
}

export function Dialog(props: DialogProps): JSX.Element;
