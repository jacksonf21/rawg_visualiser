import React from 'react';
import Visualiser from './Visualiser.component';
import ComparitiveVisualiser from './ComparitiveVisualiser.component';
import '../stylesheets/content.css';

import PersonIcon from '@material-ui/icons/Person';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const classNames = require('classnames');

export default function Header({ nextGame, previousGame, games, select, gamesAPIdata, category }) {
  
  const topTwenty = games.map(game => {
    return (
      <div className='game-header__container__title'>{game.name}</div>
    );
  });
  
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
      <article>
      <Visualiser
        key={game.name}
        ratings={game.ratings}
      />
    </article>
    );
  });

  const gameHeaderNav = classNames('game-header__nav', {
    'game-header__nav--year': category === 0,
    'game-header__nav--this-month': category === 1,
    'game-header__nav--next-month': category === 2
  });

  return (
    <div className='game-body'>
      <header className='game-header'>

        <main className='game-header__container'>
          <div className='game-header__container--previous'onClick={() => previousGame()}>
            <ArrowLeftIcon />
          </div>
          {topTwenty[select]}
          <div className='game-header__container--next'onClick={() => nextGame()}>
            <ArrowRightIcon />
          </div>  
        </main>

        <div className='game-header__divider'>
          <br></br>
        </div>

        <nav className={gameHeaderNav}>
          <div className='year' onClick={() => gamesAPIdata('http://localhost:8000')}>
            Annual
          </div>
          <div className='this-month' onClick={() => gamesAPIdata('http://localhost:8000/this-month')}>
            Month
          </div>
          <div className='next-month' onClick={() => gamesAPIdata('http://localhost:8000/upcoming-month')}>
            Upcoming
          </div>
        </nav>

      </header>

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
      
      <ComparitiveVisualiser 
        topTwenty={topTwenty}
      />
    </div>
  );
};