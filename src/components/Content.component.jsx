import React from 'react';
import '../stylesheets/content.css';

export default function Header({ gameHeaderComponent, categoryComponent, gameBodyComponent }) {
  
  return (
    <div className='game-body'>
      <header className='game-header'>
        {gameHeaderComponent}
        <div className='game-header__divider'><br></br></div>
        {categoryComponent}
      </header>
        {gameBodyComponent}
    </div>
  );
};