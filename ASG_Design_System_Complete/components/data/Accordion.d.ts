import * as React from "react";

export interface AccordionItem { title: React.ReactNode; content: React.ReactNode; }

/** Expandable rows with a brass chevron. */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow several panels open at once. */
  allowMultiple?: boolean;
  /** Indices open by default. */
  defaultOpen?: number[];
}

export function Accordion(props: AccordionProps): JSX.Element;
