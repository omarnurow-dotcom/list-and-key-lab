import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My First React Component text', () => {
  render(<App />);
  const headingElement = screen.getByText(/My First React Component/i);
  expect(headingElement).toBeInTheDocument();
});
