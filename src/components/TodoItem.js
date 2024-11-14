import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <p><strong>Name:</strong> {todo.name}</p>
      <p><strong>Email:</strong> {todo.email}</p>
      <p><strong>Task:</strong> {todo.task}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
