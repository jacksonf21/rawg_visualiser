import React from 'react';
import Visualiser from './Visualiser.component';

export default function Header({ nextGame, previousGame, games, select }) {
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
      {topTwenty[select]}
      <div onClick={() => nextGame()}>
        Forward
      </div>
      <div onClick={() => previousGame()}>
        Backward
      </div>
    </div>
  );
};