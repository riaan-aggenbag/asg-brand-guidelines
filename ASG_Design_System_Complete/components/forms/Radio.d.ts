import * as React from "react";

/** Radio selector with optional label and description. Group via shared `name`. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export function Radio(props: RadioProps): JSX.Element;
