import React from 'react';
import Visualiser from './Visualiser.component';
import ComparitiveVisualiser from './ComparitiveVisualiser.component';
import '../stylesheets/content.css';

export default function Header({ nextGame, previousGame, games, select, gamesAPIdata }) {
  const topTwenty = games.map(game => {
    return (
      <main>
        <div className='game-header__title'>{game.name}</div>
        <div className='game-header__rating'>{game.rating}</div>
        <div className='game-header__count'>{game.ratingsCount}</div>
      </main>
    );
  });
  
  const visualPiece = games.map(game => {
    return (
      <article>
      <Visualiser
        ratings={game.ratings}
      />
    </article>
)
  })

  return (
    <div>
      <header className='game-header'>
        {topTwenty[select]}
        
        <div onClick={() => nextGame()}>
          Forward
        </div>
        
        <div onClick={() => previousGame()}>
          Backward
        </div>
        
        <nav className='game-header__nav'>
          <div onClick={() => gamesAPIdata('http://localhost:8000')}>
            THIS YEAR
          </div>
          <div onClick={() => gamesAPIdata('http://localhost:8000/this-month')}>
            THIS MONTH
          </div>
          <div onClick={() => gamesAPIdata('http://localhost:8000/upcoming-month')}>
            NEXT MONTH
          </div>
        </nav>

      </header>

      {visualPiece[select]}
      <ComparitiveVisualiser 
        topTwenty={topTwenty}
      />
    </div>
  );
};