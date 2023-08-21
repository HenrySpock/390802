import React from 'react';
import { render } from '@testing-library/react';
import Todo from './components/Todo';

test('renders without crashing', () => {
  render(<Todo task="Test Task" idx={0} />);
});
