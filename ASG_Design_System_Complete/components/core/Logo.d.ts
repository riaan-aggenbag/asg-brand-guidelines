import * as React from "react";

export type LogoVariant = "horizontal" | "stacked" | "icon";
export type LogoTone = "white" | "ink" | "brass" | "sand";

/**
 * The fixed lion crest plus a typographic wordmark. The crest is never redrawn;
 * sub-brands change ONLY `name`/`sub` beneath the same icon.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** Lockup. Default "horizontal" (preferred for nav). */
  variant?: LogoVariant;
  /** Crest + text tone. Default "white" (for dark grounds). */
  tone?: LogoTone;
  /** Serif wordmark line, e.g. "SABI SAND". Default "AFRICAN SAFARI". */
  name?: string;
  /** Tracked sub-line, e.g. "GAME RESERVE". Default "GROUP". */
  sub?: string;
  /** Crest height in px (text scales from this). Default 44. */
  size?: number;
  /** Explicit crest image URL (overrides iconBase + tone). */
  iconSrc?: string;
  /** Base path to the logo assets folder. Default "assets/logos/". */
  iconBase?: string;
}

export function Logo(props: LogoProps): JSX.Element;
