import React from 'react';
import { render } from '@testing-library/react';
import { AgeFeature, HairColourFeature, HeightFeature, WeightFeature } from './feature.composition';
import { Feature } from './feature';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';

describe('render component', () => {
  it('should render the feature component', () => {
    const { getByText } = render(<Feature label="A feature" value={1} icon={<MonitorWeightOutlinedIcon />} />);
    const rendered = getByText('A feature');
    expect(rendered).toBeTruthy();
    expect(rendered.parentElement.textContent.includes('1')).toBeTruthy();
  });
});

describe('render composition feature values', () => {
  it('should render the age feature', () => {
    const { getByText } = render(<AgeFeature value="1" />);
    const rendered = getByText('1');
    expect(rendered).toBeTruthy();
  });

  it('should render the hair colour feature', () => {
    const { getByText } = render(<HairColourFeature value="pink" />);
    const rendered = getByText('pink');
    expect(rendered).toBeTruthy();
  });

  it('should render the height feature', () => {
    const { getByText } = render(<HeightFeature value="10" />);
    const rendered = getByText('10');
    expect(rendered).toBeTruthy();
  });

  it('should render the weight feature', () => {
    const { getByText } = render(<WeightFeature value="15" />);
    const rendered = getByText('15');
    expect(rendered).toBeTruthy();
  });
});