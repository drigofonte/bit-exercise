import React, { ReactNode, RefObject } from 'react';
import { Card as MUICard, CardContent, Theme } from "@mui/material";
import styles from './card.module.scss';
import { SxProps } from '@mui/system';

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

  /**
   * Material UI sx property values
   */
  sx?: SxProps<Theme>

  /**
   * Material UI ref property
   */
  ref?: RefObject<HTMLDivElement>
};

export function Card({ header, children, className = '', sx = {}, ref = undefined }: CardProps) {
  return (
    <MUICard 
      className={`${styles.basecard} ${className}`}
      elevation={0}
      sx={sx}
      ref={ref}
    >
      {header}
      <CardContent>
        {children}
      </CardContent>
    </MUICard>
  );
}
