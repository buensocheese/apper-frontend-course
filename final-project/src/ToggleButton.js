import React from 'react';

const ToggleButton = ({ onClick }) => {
  return (
    <button className='toggle-button' onClick={onClick}>
      Toggle
    </button>
  );
};

export default ToggleButton;