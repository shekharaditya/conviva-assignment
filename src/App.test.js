import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders customer name column', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Customer Name/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders customer id column', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Customer ID/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders customer age column', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Customer Age/i);
  expect(linkElement).toBeInTheDocument();
});

