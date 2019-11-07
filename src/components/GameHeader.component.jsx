import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export default function GameHeader({ games, nextGame, previousGame, select }) {

  const topTwenty = games.map(game => {
    return (
      <div className='game-header__container__title'>{game.name}</div>
    );
  });

  return (
    <main className='game-header__container'>
      <div className='game-header__container--previous' onClick={() => previousGame()}>
        <ArrowLeftIcon />
      </div>
        {topTwenty[select]}
      <div className='game-header__container--next' onClick={() => nextGame()}>
        <ArrowRightIcon />
      </div>  
    </main>
  )
}
