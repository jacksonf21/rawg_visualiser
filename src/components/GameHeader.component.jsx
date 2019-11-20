import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export default function GameHeader({ rawgGameData, nextGame, previousGame, rawgGameDataIndex, navigationArrows }) {

  const topTwenty = rawgGameData.map(game => {
    return (
      <div className='game-header__container__title' data-testid='game-header'>{game.name}</div>
    );
  });

  return (
    <header className='game-header__container'>
      {navigationArrows === 1 && (
        <div className='game-header__container--previous' onClick={() => previousGame()}>
          <ArrowLeftIcon />
        </div>
      )}
      {topTwenty[rawgGameDataIndex]}
      {navigationArrows === 1 && (
        <div className='game-header__container--next' onClick={() => nextGame()}>
          <ArrowRightIcon />
        </div>  
      )}  
    </header>
  )
}
