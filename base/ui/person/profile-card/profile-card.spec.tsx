import React from 'react';
import { render } from '@testing-library/react';
import { ProfileCard } from './profile-card';

describe('render card', () => {
  it('should render the card and its content', () => {
    const { container } = render(<ProfileCard title="A title"><div>Child</div></ProfileCard>);
    expect(container.innerHTML.includes('A title')).toBeTruthy();
    expect(container.innerHTML.includes('<div>Child</div>')).toBeTruthy();
  });

  it('should only render the card content', () => {
    const { container } = render(<ProfileCard><div>Child</div></ProfileCard>);
    expect(container.innerHTML.includes('<div>Child</div>')).toBeTruthy();
  });
});
