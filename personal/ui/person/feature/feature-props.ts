import { ReactNode } from "react";

export type FeatureProps = {
  /**
   * The feature label
   */
  label: string;

  /**
   * The feature text
   */
  text: string;

  /**
   * Icon
   */
  icon: ReactNode;
};