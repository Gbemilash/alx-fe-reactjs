import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList.jsx';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Enter todo'), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText('Delete')[0];
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(deleteBtn);
  expect(todoItem).not.toBeInTheDocument();
});
