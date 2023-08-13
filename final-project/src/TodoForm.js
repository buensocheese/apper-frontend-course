import React, { useState, useEffect } from 'react';

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const saveToLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = { text: inputText, checked: false };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
    setInputText('');
  };

  const handleCheckTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
          placeholder="Enter a task..."
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheckTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;