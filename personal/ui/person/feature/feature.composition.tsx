import React from 'react';
import { Feature } from './feature';
import { FeatureProps } from './feature-props';

// Icons
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';

export const AgeFeature = ({ text = '0' }: Partial<FeatureProps>) => (
  <Feature label="Age" text={text} icon={<CakeOutlinedIcon />} />
);

export const HairColourFeature = ({ text = 'pink' }: Partial<FeatureProps>) => (
  <Feature label="Hair colour" text={text} icon={<PaletteOutlinedIcon />} />
);

export const HeightFeature = ({ text = '10' }: Partial<FeatureProps>) => (
  <Feature label="Height" text={text} icon={<HeightOutlinedIcon />} />
);

export const WeightFeature = ({ text = '15' }: Partial<FeatureProps>) => (
  <Feature label="Weight" text={text} icon={<MonitorWeightOutlinedIcon />} />
);
