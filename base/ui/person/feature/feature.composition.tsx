import React from 'react';
import { Feature } from './feature';
import { FeatureProps } from './feature-props';

// Icons
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';

export const AgeFeature = ({ value = '0' }: Partial<FeatureProps>) => (
  <Feature label="Age" value={value} icon={<CakeOutlinedIcon />} />
);

export const HairColourFeature = ({ value = 'pink' }: Partial<FeatureProps>) => (
  <Feature label="Hair colour" value={value} icon={<PaletteOutlinedIcon />} />
);

export const HeightFeature = ({ value = '10' }: Partial<FeatureProps>) => (
  <Feature label="Height" value={value} icon={<HeightOutlinedIcon />} />
);

export const WeightFeature = ({ value = '15' }: Partial<FeatureProps>) => (
  <Feature label="Weight" value={value} icon={<MonitorWeightOutlinedIcon />} />
);
