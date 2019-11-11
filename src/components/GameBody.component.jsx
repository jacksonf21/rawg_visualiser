import React from 'react';
import Visualiser from './Visualiser.component';
import PersonIcon from '@material-ui/icons/Person';

export default function GameBody({ games, select }) {

  const rating = games.map(game => {
    return (
      <div className='game-main__header'>
        <div className='game-main__header__rating'>{game.rating}</div>
        <div className='game-main__header__count'><PersonIcon />{game.ratingsCount}</div>
      </div>
    );
  });

  const visualPiece = games.map(game => {
    return (
      <div>
        {game.ratings.length !== 0 ? (
          <article>
          <Visualiser
            key={game.name}
            ratings={game.ratings}
          />
         </article>
        ): (<div className='game-no-data'>
          Uh Oh! There doesn't seem to be any reviews yet!
        </div>)}
      </div>
    );
  });

  return (
    <article className='game-main'>
        <div className='game-main__dashboard'>
          {rating[select]}
          {visualPiece[select]}
        </div>

        <footer className='game-main__footer'>
          <div>Add to Watchlist</div>
          <div className='game-main__footer--add-to-watchlist'>+</div>
        </footer>

      </article>
  );
}