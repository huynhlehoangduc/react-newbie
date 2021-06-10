import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-util';
import App from './App';

it('Renders the app title', () => {
  render(<App />)
  expect(screen.getByText(/Hello word/i)).toBeInTheDocument()
})
