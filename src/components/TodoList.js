import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const removeTodo = (idx) => {
    setTodos(todos => todos.filter((_, index) => idx !== index));
  };

  const updateTodo = (idx, newTask) => {
    const updatedTodos = todos.map((todo, index) => {
      if (idx === index) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }; 

return (
  <div>
    <NewTodoForm addTodo={addTodo} />
    {todos.map((todo, idx) => (
      <Todo 
        key={idx} 
        idx={idx} 
        task={todo.task} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo} 
      />
    ))}
  </div>
)};
 
export default TodoList;
