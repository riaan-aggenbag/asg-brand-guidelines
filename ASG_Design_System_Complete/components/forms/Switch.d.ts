import * as React from "react";

/** Toggle switch for settings. Brass track when on. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Switch(props: SwitchProps): JSX.Element;
