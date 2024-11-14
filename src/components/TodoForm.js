// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, formData, setFormData, editingIndex }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.task) {
      newErrors.task = "Task is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if there are validation errors
    }

    addTodo(formData);
  };

  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(formData); // Pre-populate the form with the selected Todo item for editing
    }
  }, [editingIndex, formData, setFormData]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}

      <input
        type="text"
        name="task"
        value={formData.task}
        placeholder="Enter Task"
        onChange={handleChange}
      />
      {errors.task && <p className="error-message">{errors.task}</p>}

      <button type="submit">{editingIndex === null ? 'Add Todo' : 'Update Todo'}</button>
    </form>
  );
};

export default TodoForm;
