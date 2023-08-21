import React, { useState } from 'react'; 

function Todo({ task, idx, removeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateTodo(idx, editTask);
  };

  const handleInputChange = (e) => {
    setEditTask(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editTask} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {task}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(idx)}>X</button>
        </>
      )}
    </div>
  );
}

export default Todo;
