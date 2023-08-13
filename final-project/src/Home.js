import React from 'react';
import Timer from './TimerAnimation';
import TodoList from './TodoList';

const Home = () => {
  return (
    <div className='home-page'>
      <TodoList />
      <Timer />
    </div>
  );
};

export default Home;