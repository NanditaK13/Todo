// src/components/TodoList.js
import React from 'react';

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <div className="todo-table-container">
      {todos.length === 0 ? (
        <div className="no-todos">No Todos Available. Please add some!</div>
      ) : (
        <table className="todo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td 
                style={{
                  padding: '12px',
                  borderBottom: '1px solid #f0f0f0',
                  maxWidth: '50px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={todo.name}>{todo.name}</td>
                <td title={todo.email}>{todo.email}</td>
                <td title={todo.task}>{todo.task}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(index)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => onDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
