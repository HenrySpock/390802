import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './components/NewTodoForm';

test('renders without crashing', () => {
  render(<NewTodoForm />);
});
