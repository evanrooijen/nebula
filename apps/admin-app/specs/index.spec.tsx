import React from 'react';
import { render } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Index from '../pages/index';

jest.mock('next-auth/react');

describe('Index', () => {
  it('should render successfully', () => {
    (useSession as jest.Mock).mockReturnValueOnce([null, false]);
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
