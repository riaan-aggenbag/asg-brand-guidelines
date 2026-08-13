import * as React from "react";
import { IconName } from "../core/Icon";

export interface TabItem { id: string; label: string; icon?: IconName; }

/** Underline tabs with a brass active indicator. Controlled or uncontrolled. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: TabItem[];
  /** Controlled active id. */
  value?: string;
  /** Initial active id (uncontrolled). */
  defaultValue?: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
