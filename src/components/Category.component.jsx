import React from 'react';

const classNames = require('classnames');

export default function Category({ category, gamesAPIdata }) {
  
  const gameHeaderNav = classNames('game-header__nav', {
    'game-header__nav--year': category === 0,
    'game-header__nav--this-month': category === 1,
    'game-header__nav--next-month': category === 2
  });

  return (
    <nav className={gameHeaderNav}>
        
    <div className='year' onClick={() => gamesAPIdata('http://localhost:8000')}>Annual</div>
    <div className='this-month' onClick={() => gamesAPIdata('http://localhost:8000/this-month')}>Month</div>
    <div className='next-month' onClick={() => gamesAPIdata('http://localhost:8000/upcoming-month')}>Upcoming</div>
  
  </nav>
  )
}
