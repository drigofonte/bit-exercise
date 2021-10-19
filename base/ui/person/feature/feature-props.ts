import { ReactNode } from "react";

export type FeatureProps = {
  /**
   * The feature label
   */
  label: string;

  /**
   * The feature text
   */
  value: string | number;

  /**
   * Icon
   */
  icon: ReactNode;
};