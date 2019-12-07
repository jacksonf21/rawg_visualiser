import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

export default function Watchlist({ menuToggle, selectWatchlist, watchlistClass, watchlistToggle, watchlistData }) {

  const watchlistReset = () => {
    watchlistToggle()
    menuToggle()
  };

  const watchlistIds = watchlistData.map(watchlist => {
    return watchlist.id
  });

  const watchlists = watchlistData.map((watchlist, index) => {
    return (<div onClick={() => selectWatchlist(watchlistIds[index])}>{watchlist.watchlist_name}</div>)
  });

  return (
    <section className={watchlistClass}>
      <CloseIcon onClick={() => watchlistReset()}/>
      
      {watchlistData.length !== 0 ? (
        <>{watchlists}</>
      ) : (
        <div>No Watchlists Found!</div>
      )}
    </section>
  )
}