import * as React from "react";

/** Reasons-to-enquire-direct list with brass check circles. */
export interface EnquiryChecklistProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Checklist lines, e.g. "Lodge's contracted rate — no markup". */
  items: React.ReactNode[];
  /** 2 (default) or 1 column. */
  columns?: 1 | 2;
}

export function EnquiryChecklist(props: EnquiryChecklistProps): JSX.Element;
