import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from "@mui/material";
import styles from './profile-section.module.scss';

export type ProfileSectionProps = {
  /**
   * The card title
   */
  title?: string;

  /**
   * The card content
   */
  children?: ReactNode;
};

export function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <Card 
      className={`${styles.basecard} ${styles.profilecard}`}
      elevation={0}
    >
      {
        title && <CardHeader title={title} titleTypographyProps={{ fontWeight: 200 }} />
      }
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
