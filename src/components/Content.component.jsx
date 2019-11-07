import React from 'react';
import '../stylesheets/content.css';

export default function Header({ gameHeader, category, gameBody }) {
  
  return (
    <div className='game-body'>
      <header className='game-header'>
        {gameHeader}
        <div className='game-header__divider'><br></br></div>
        {category}
      </header>
        {gameBody}
    </div>
  );
};