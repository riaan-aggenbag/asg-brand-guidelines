import * as React from "react";

/** Hairline rule, the short brass rule-line, or a centred tracked-caps label. */
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** "horizontal" (default) or "vertical". */
  orientation?: "horizontal" | "vertical";
  /** Render the short 56px brass rule-line instead of a full-width hairline. */
  brass?: boolean;
  /** Centre the brass rule-line. */
  center?: boolean;
  /** Centred tracked-caps label flanked by hairlines. */
  label?: string;
}

export function Divider(props: DividerProps): JSX.Element;
