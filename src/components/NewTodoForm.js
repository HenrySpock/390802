import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData({ task: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input id="task" name="task" value={formData.task} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
