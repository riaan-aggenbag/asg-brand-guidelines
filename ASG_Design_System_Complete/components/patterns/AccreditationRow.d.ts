import * as React from "react";

/** Footer accreditation strip: bordered membership pills + brass-bordered review-count pills. */
export interface AccreditationRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Membership / accreditation names, e.g. "SATSA", "ATTA Corporate". */
  pills?: string[];
  /** Review-count lines, e.g. "TripAdvisor · 1,000+ reviews" — rendered with a brass border. */
  reviews?: string[];
}

export function AccreditationRow(props: AccreditationRowProps): JSX.Element;
