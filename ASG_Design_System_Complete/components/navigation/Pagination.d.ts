import * as React from "react";

/** Numbered page navigation with prev/next and ellipsis. */
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** Current page (1-based). */
  page: number;
  /** Total page count. */
  total: number;
  onChange?: (page: number) => void;
}

export function Pagination(props: PaginationProps): JSX.Element;
