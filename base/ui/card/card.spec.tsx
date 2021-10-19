import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card';

describe('render card', () => {
  it('should render the card and its content', () => {
    const { container } = render(<Card header={<div>The header</div>}><div>The content</div></Card>);
    expect(container.innerHTML.includes('<div>The header</div>')).toBeTruthy();
    expect(container.innerHTML.includes('<div>The content</div>')).toBeTruthy();
  });

  it('should only render the card content', () => {
    const { container } = render(<Card><div>The content</div></Card>);
    expect(container.innerHTML.includes('<div>The content</div>')).toBeTruthy();
  });
});
