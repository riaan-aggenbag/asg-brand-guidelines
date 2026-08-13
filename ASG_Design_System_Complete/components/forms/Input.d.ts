import * as React from "react";
import { IconName } from "../core/Icon";

/** Single-line text field with label, optional leading icon, hint and error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label. */
  label?: string;
  /** Helper text shown below (hidden when `error` is set). */
  hint?: string;
  /** Error message — turns the field red. */
  error?: string;
  /** Leading icon name. */
  icon?: IconName;
  /** Show a brass required asterisk. */
  required?: boolean;
}

export function Input(props: InputProps): JSX.Element;
