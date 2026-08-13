import * as React from "react";

/** Hero booking sidebar: ivory card, From-price, dual CTAs, assurance note. */
export interface PriceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Formatted price, e.g. "R 18,200" or "€354". */
  from: string;
  /** Price unit suffix. Default "pp / night". */
  unit?: string;
  /** Primary CTA label. Default "Start Planning / Enquire". */
  primaryLabel?: string;
  onPrimary?: () => void;
  /** Secondary CTA label; omit to render a single CTA. */
  secondaryLabel?: string;
  onSecondary?: () => void;
  /** Assurance line under the CTAs. Default "No payment required · we reply within 24 hours". Pass "" to hide. */
  note?: string;
}

export function PriceCard(props: PriceCardProps): JSX.Element;
