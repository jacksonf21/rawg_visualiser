import React from 'react';
import Visualiser from './Visualiser.component';
import ComparitiveVisualiser from './ComparitiveVisualiser.component';

export default function Header({ nextGame, previousGame, games, select, gamesAPIdata }) {
  const topTwenty = games.map(game => {
    return (
      <main>
        <header>
          <div>{game.name}</div>
          <div>{game.rating}</div>
          <div>{game.ratingsCount}</div>
        </header>
        <article>
          <Visualiser
            ratings={game.ratings}
          />
        </article>
      </main>
    );
  });
  
  return (
    <div>
      <div>
        {topTwenty[select]}
        <div onClick={() => nextGame()}>
          Forward
        </div>
        <div onClick={() => previousGame()}>
          Backward
        </div>
      </div>
      <ComparitiveVisualiser 
        topTwenty={topTwenty}
      />
      <div onClick={() => gamesAPIdata('http://localhost:8000')}>
        THIS YEAR
      </div>
      <div onClick={() => gamesAPIdata('http://localhost:8000/this-month')}>
        THIS MONTH
      </div>
      <div onClick={() => gamesAPIdata('http://localhost:8000/upcoming-month')}>
        NEXT MONTH
      </div>
    </div>
  );
};