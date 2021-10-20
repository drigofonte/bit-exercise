import React, { ForwardedRef, ReactNode, RefObject } from 'react';
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
  ref?: any | null
};

export function Card({ header, children, className = '', sx = {}, ref = null }: CardProps) {
  React.createRef()
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
