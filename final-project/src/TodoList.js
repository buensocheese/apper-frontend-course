import React from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
  return (
    <div className='todo'>
      <h1 className='header-todo'>What is the task for today?</h1>
      <TodoForm/>
    </div>
  );
};

export default TodoList;