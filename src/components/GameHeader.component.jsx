import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export default function GameHeader({ games, nextGame, previousGame, select, arrows }) {

  //IMPLEMENT LOGIC CHECKER HERE FOR 20 OR 1 IF 1 MAKE ARROWS DISAPPEAR BELOW 
  const topTwenty = games.map(game => {
    return (
      <div className='game-header__container__title'>{game.name}</div>
    );
  });

  return (
    <main className='game-header__container'>
      {arrows === 1 && (
        <div className='game-header__container--previous' onClick={() => previousGame()}>
          <ArrowLeftIcon />
        </div>
      )}
      {topTwenty[select]}
      {arrows === 1 && (
        <div className='game-header__container--next' onClick={() => nextGame()}>
          <ArrowRightIcon />
        </div>  
      )}  
    </main>
  )
}
