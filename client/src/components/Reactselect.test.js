import React from 'react';
import { render, screen } from '@testing-library/react';
import Reactselect from './Reactselect';

it('renders welcome message', () => {
  render(<Reactselect />);
//   expect(screen.getByRole('button')).not.toBeDisabled()
  expect(screen.getByText('Welcome to React'));
});