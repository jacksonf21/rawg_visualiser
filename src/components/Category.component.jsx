import React from 'react';

const { API_URL } = require('../constants/url');
const classNames = require('classnames');

export default function Category({ categoryIndex, renderRawgApiData }) {
  
  const gameHeaderNav = classNames('game-header__nav', {
    'game-header__nav--year': categoryIndex === 0,
    'game-header__nav--this-month': categoryIndex === 1,
    'game-header__nav--next-month': categoryIndex === 2
  });

  return (
    <nav className={gameHeaderNav}>
        
      <div 
        className='year' 
        onClick={() => renderRawgApiData(API_URL)}
      >
        Annual
      </div>
      <div 
        className='this-month' 
        onClick={() => renderRawgApiData(`${API_URL}/this-month`)}
      >
        Month
      </div>
      <div 
        className='next-month' 
        onClick={() => renderRawgApiData(`${API_URL}/upcoming-month`)}
      >
        Upcoming
      </div>
  
    </nav>
  )
}
