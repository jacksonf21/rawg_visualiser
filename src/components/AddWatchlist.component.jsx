import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Form from './Form.component';
import { FirebaseContext } from './Firebase';

export default function AddWatchlist({ addWatchlistToggle, addWatchlistClass, watchlistData }) {

  const watchlists = watchlistData.map(watchlist => {
    return (<div>{watchlist.name}</div>)
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