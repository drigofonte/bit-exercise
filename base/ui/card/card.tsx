import React, { ReactNode } from 'react';
import { Card as MUICard, CardContent } from "@mui/material";
import styles from './card.module.scss';

export type CardProps = {
  /**
   * The card header
   */
  header?: ReactNode

  /**
   * The card content
   */
  children?: ReactNode

  /**
   * A class name to concatenate to the base card class
   */
  className?: string
};

export function Card({ header, children, className = '' }: CardProps) {
  return (
    <MUICard 
      className={`${styles.basecard} ${className}`}
      elevation={0}
    >
      {header}
      <CardContent>
        {children}
      </CardContent>
    </MUICard>
  );
}
