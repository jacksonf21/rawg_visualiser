import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Form from './Form.component';
import { FirebaseContext } from './Firebase';
import { getUniqueWatchlist, getWatchlistClassNames } from '../helper/addWatchlist';
import '../stylesheets/addWatchlist.css';

export default function AddWatchlist({ addWatchlistToggle, addWatchlistClass, addToWatchlist, watchlistData, rawgGameDataIndex, rawgGameData, renderWatchlists }) {

  const gameData = rawgGameData[rawgGameDataIndex];
  const watchlistNames = getUniqueWatchlist(watchlistData);

  const watchlistClasses = getWatchlistClassNames(watchlistData, gameData.gameId);

  const watchlistIds = watchlistData.map(watchlist => watchlist.watchlist_id)
  const watchlistUniqueIds = [...new Set(watchlistIds)]

  const watchlists = watchlistNames.map((name, index) => {
    return (
      <>
        <div 
          className={watchlistClasses[index]}
          onClick={() => addToWatchlist(watchlistUniqueIds[index], watchlistClasses[index])}
        >
          {name}
        </div>
      </>
    )
  });

  return (
    <section className={addWatchlistClass}>
      <CloseIcon onClick={() => addWatchlistToggle()}/>
      {watchlistData.length !== 0 ? (
        <ul className='watchlist-carousel'>{watchlists}</ul>
      ) : (
        <div>No Watchlists Found!</div>
      )}
      <footer>
      <FirebaseContext.Consumer>
        {firebase => <Form firebase={firebase} renderWatchlists={renderWatchlists}/> }
      </FirebaseContext.Consumer>
      </footer>
    </section>
  )
}