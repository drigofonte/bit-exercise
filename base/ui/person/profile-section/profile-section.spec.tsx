import React from 'react';
import { render } from '@testing-library/react';
import { ProfileSection } from './profile-section';

describe('render section', () => {
  it('should render the section and its content', () => {
    const { container } = render(<ProfileSection title="A title"><div>Child</div></ProfileSection>);
    expect(container.innerHTML.includes('A title')).toBeTruthy();
    expect(container.innerHTML.includes('<div>Child</div>')).toBeTruthy();
  });

  it('should only render the section content', () => {
    const { container } = render(<ProfileSection><div>Child</div></ProfileSection>);
    expect(container.innerHTML.includes('<div>Child</div>')).toBeTruthy();
  });
});
