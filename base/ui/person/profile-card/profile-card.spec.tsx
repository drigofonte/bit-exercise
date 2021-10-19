import React from 'react';
import { render } from '@testing-library/react';
import { ProfileCard } from './profile-card';

it('should render with the correct text', () => {
  const { container } = render(<ProfileCard title="A title"><div>Child</div></ProfileCard>);
  expect(container.innerHTML.includes('A title')).toBeTruthy();
  expect(container.innerHTML.includes('<div>Child</div>')).toBeTruthy();
});
