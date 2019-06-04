import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
      <div className='ActionButton'>
          <button class='action'>%</button>
          <button class='action'>*</button>
          <button class='action'>-</button>
          <button class='action'>+</button>
          <button class='action'>=</button>
      </div>
    );
  };

export default ActionButton;