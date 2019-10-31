import React from 'react';
import Visualiser from './Visualiser.component';
import ComparitiveVisualiser from './ComparitiveVisualiser.component';
import '../stylesheets/content.css';

export default function Header({ nextGame, previousGame, games, select, gamesAPIdata }) {
  const topTwenty = games.map(game => {
    return (
      <div className='game-header__container__title'>{game.name}</div>
    );
  });
  
  const rating = games.map(game => {
    return (
      <div>
        <div className='game-rating'>{game.rating}</div>
        <div className='game-count'>{game.ratingsCount}</div>
      </div>
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
  });

  return (
    <div className='game-body'>
      <header className='game-header'>
        <main className='game-header__container'>
          <div className='game-header__container--previous'onClick={() => previousGame()}>
            B
          </div>

          {topTwenty[select]}

          <div className='game-header__container--next'onClick={() => nextGame()}>
            F
          </div>
          
        </main>
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
      {rating[select]}
      {visualPiece[select]}
      <ComparitiveVisualiser 
        topTwenty={topTwenty}
      />
    </div>
  );
};