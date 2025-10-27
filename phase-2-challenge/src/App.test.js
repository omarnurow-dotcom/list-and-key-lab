import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders todo app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todo List App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders add todo form', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const buttonElement = screen.getByText(/Add Todo/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders empty todo list message', () => {
  render(<App />);
  const messageElement = screen.getByText(/No todos yet/i);
  expect(messageElement).toBeInTheDocument();
});
