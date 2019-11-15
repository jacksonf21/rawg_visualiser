import React from 'react';

const classNames = require('classnames');

export default function Category({ categoryIndex, renderRawgApiData }) {
  
  const gameHeaderNav = classNames('game-header__nav', {
    'game-header__nav--year': categoryIndex === 0,
    'game-header__nav--this-month': categoryIndex === 1,
    'game-header__nav--next-month': categoryIndex === 2
  });

  return (
    <nav className={gameHeaderNav}>
        
      <div className='year' onClick={() => renderRawgApiData('http://localhost:8000')}>Annual</div>
      <div className='this-month' onClick={() => renderRawgApiData('http://localhost:8000/this-month')}>Month</div>
      <div className='next-month' onClick={() => renderRawgApiData('http://localhost:8000/upcoming-month')}>Upcoming</div>
  
    </nav>
  )
}
