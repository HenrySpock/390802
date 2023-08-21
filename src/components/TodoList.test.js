import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './components/TodoList';

test('renders without crashing', () => {
  render(<TodoList />);
});
