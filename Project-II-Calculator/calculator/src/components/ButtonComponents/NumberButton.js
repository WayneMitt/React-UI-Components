import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
      <div className='NumberButton'>
          <button class='clear'>clear</button>
          <button class='number'>9</button>
          <button class='number'>8</button>
          <button class='number'>7</button>
          <button class='number'>6</button>
          <button class='number'>5</button>
          <button class='number'>4</button>
          <button class='number'>3</button>
          <button class='number'>2</button>
          <button class='number'>1</button>
          <button class='zero'>0</button>
      </div>
    );
  };

export default NumberButton;