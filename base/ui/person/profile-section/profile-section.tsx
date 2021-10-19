import React, { ReactNode } from 'react';
import { CardHeader } from "@mui/material";
import { Card } from '@drigofonte_org/base.ui.card';
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
  const header = title && <CardHeader title={title} titleTypographyProps={{ fontWeight: 200 }} />;
  return (
    <Card 
      header={header}
      className={styles.profilesection}
    >
      {children}
    </Card>
  );
}
