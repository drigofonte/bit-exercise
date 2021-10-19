import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FeatureProps } from './feature-props';

export function Feature({ label, text, icon }: FeatureProps) {
  return (
    <ListItem>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        secondary={text}
      />
    </ListItem>
  );
}
