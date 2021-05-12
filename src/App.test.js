import { render, screen } from '@testing-library/react';
import App from './App';

test('renders re-seña title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Re-seña!/i);
  expect(titleElement).toBeInTheDocument();
});
