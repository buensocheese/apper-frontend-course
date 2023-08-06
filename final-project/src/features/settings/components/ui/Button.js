// timerMode = Pomodoro, Short Break, Long Break
// activeClass = Whether active or not
// buttonFunc = Function of button

// const Button = ({timerMode, activeClass, btnFunc}) => {
//   return (
//     <button className={activeClass} onClick={btnFunc}>{timerMode}</button>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ title, activeClass, btnFunc }) => {
  return (
    <button className={activeClass} onClick={btnFunc}>
      {title}
    </button>
  );
};

export default Button;
