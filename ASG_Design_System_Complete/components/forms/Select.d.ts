import * as React from "react";

export interface SelectOption { value: string; label: string; }

/** Native select styled to match Input, with a brass chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Disabled first option used as a prompt. */
  placeholder?: string;
  /** Options as strings or {value,label}. Alternatively pass <option> children. */
  options?: Array<string | SelectOption>;
}

export function Select(props: SelectProps): JSX.Element;
