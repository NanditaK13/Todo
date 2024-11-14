// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', task: '' });
  const [showPopup, setShowPopup] = useState(false); // For showing confirmation
  const [deleteIndex, setDeleteIndex] = useState(null); // Track which item to delete

  const addTodo = (newTodo) => {
    if (editingIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editingIndex ? newTodo : todo
      );
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }
    setFormData({ name: '', email: '', task: '' });
  };

  const confirmDelete = (index) => {
    setDeleteIndex(index);
    setShowPopup(true); // Show popup
  };

  const deleteTodo = () => {
    const updatedTodos = todos.filter((_, i) => i !== deleteIndex);
    setTodos(updatedTodos);
    setShowPopup(false); // Hide popup after deletion
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setShowPopup(false); // Hide popup without deleting
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setFormData(todos[index]);
  };

  return (
    <div className="App">
      <div className="form-section">
        <h2>{editingIndex === null ? 'Add New Todo' : 'Edit Todo'}</h2>
        <TodoForm
          addTodo={addTodo}
          formData={formData}
          setFormData={setFormData}
          editingIndex={editingIndex}
        />
      </div>
      <div className="list-section">
        <h2>Your Todo List</h2>
        {todos.length > 0 ? (
          <div className="todo-table-container">
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
                    <td>{todo.name}</td>
                    <td>{todo.email}</td>
                    <td>{todo.task}</td>
                    <td>
                      <button className="edit-btn" onClick={() => editTodo(index)}>Edit</button>
                      <button onClick={() => confirmDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-todos">No todos added yet. Start by adding a new task!</p>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Are you sure you want to delete?</h3>
            <button className="confirm-btn" onClick={deleteTodo}>Yes</button>
            <button className="cancel-btn" onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
