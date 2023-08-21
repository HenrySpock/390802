import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './components/TodoList';

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByLabelText('Task:');
  const button = screen.getByText('Add Todo');

  userEvent.type(input, 'New Task');
  fireEvent.click(button);

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('can edit a todo', () => {
  render(<TodoList />);
  const input = screen.getByLabelText('Task:');
  const addButton = screen.getByText('Add Todo');

  userEvent.type(input, 'Initial Task');
  fireEvent.click(addButton);
  
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);

  const taskInput = screen.getByDisplayValue('Initial Task');
  userEvent.clear(taskInput);
  userEvent.type(taskInput, 'Edited Task');
  const saveButton = screen.getByText('Save');
  fireEvent.click(saveButton);

  expect(screen.getByText('Edited Task')).toBeInTheDocument();
});

test('can delete a todo', () => {
  render(<TodoList />);
  const input = screen.getByLabelText('Task:');
  const addButton = screen.getByText('Add Todo');

  userEvent.type(input, 'Task to be Deleted');
  fireEvent.click(addButton);

  const deleteButton = screen.getByText('X');
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Task to be Deleted')).toBeNull();
});
