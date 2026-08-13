import * as React from "react";

export interface ValueProp {
  /** Tracked-caps brass label, e.g. "Book Direct" — 12px, never smaller. */
  k: string;
  /** Bold white line, e.g. "Best rate guaranteed". */
  t: string;
  /** Supporting sentence. */
  d: string;
}

/** Four-column value-proposition bar on Charcoal, straight under the hero. */
export interface ValuePropBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Usually exactly four items. */
  items: ValueProp[];
}

export function ValuePropBar(props: ValuePropBarProps): JSX.Element;
