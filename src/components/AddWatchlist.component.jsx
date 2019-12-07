import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Form from './Form.component';
import { FirebaseContext } from './Firebase';
import { getUniqueWatchlist, getWatchlistClassNames } from '../helper/addWatchlist';
import '../stylesheets/addWatchlist.css';

export default function AddWatchlist({ addWatchlistToggle, addWatchlistClass, watchlistData, rawgGameDataIndex, rawgGameData }) {

  const watchlistNames = getUniqueWatchlist(watchlistData);

  const watchlistClasses = getWatchlistClassNames(watchlistData, rawgGameData[rawgGameDataIndex].gameId);

  const watchlistIds = watchlistData.map(watchlist => {
    return watchlist.id
  });


  //CHECK IF THE CLICK DOES NOT FIRE FOR HIDDEN 
  const addToWatchlist = (watchlistId) => {
    console.log('fire')
  };

  const watchlists = watchlistNames.map((name, index) => {
    return (
      <div 
        className={watchlistClasses[index]}
        onClick={() => addToWatchlist()}
      >
        {name}
      </div>
    )
  });

  return (
    <section className={addWatchlistClass}>
      <CloseIcon onClick={() => addWatchlistToggle()}/>
      {watchlistData.length !== 0 ? (
        <>{watchlists}</>
      ) : (
        <div>No Watchlists Found!</div>
      )}
      <footer>
      <FirebaseContext.Consumer>
        {firebase => <Form firebase={firebase}/> }
      </FirebaseContext.Consumer>
      </footer>
    </section>
  )
}