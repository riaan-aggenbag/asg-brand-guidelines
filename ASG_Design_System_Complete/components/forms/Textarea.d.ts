import * as React from "react";

/** Multi-line text field with label, hint and error. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
