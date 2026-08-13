import * as React from "react";

/** Minimal brass ring loader. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "sm" | "md" | "lg" or a pixel number. Default "md". */
  size?: "sm" | "md" | "lg" | number;
  /** Accessible label. Default "Loading". */
  label?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element;
