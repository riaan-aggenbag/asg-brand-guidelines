import * as React from "react";

export type ToastVariant = "default" | "success" | "danger" | "info";

/** Transient confirmation card. Position it with a fixed wrapper. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title?: string;
  onClose?: () => void;
}

export function Toast(props: ToastProps): JSX.Element;
