import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from "@mui/material";

export type ProfileCardProps = {
  /**
   * The card title
   */
  title?: string;

  /**
   * The card content
   */
  children?: ReactNode;
};

export function ProfileCard({ title, children }: ProfileCardProps) {
  return (
    <Card 
      className="base-card profile-card"
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
