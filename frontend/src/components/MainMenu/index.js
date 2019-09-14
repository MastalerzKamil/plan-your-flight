import React from 'react';
import './index.css';

function MainMenu() {
  return (
    <div className='MainMenu'>
      <div>
        <text>LOT </text>
      </div>
      <div className='topnav'>
        <a className='active' href='#home'>
          Home
        </a>
        <a href='#news'>News</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
      </div>
    </div>
  );
}

export default MainMenu;
