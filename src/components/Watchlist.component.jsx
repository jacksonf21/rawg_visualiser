import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

export default function Watchlist({ menuToggle, watchlistClass, watchlistToggle, watchlistData }) {

  const watchlistReset = () => {
    watchlistToggle()
    menuToggle()
  };

  console.log(watchlistData)

  const watchlists = watchlistData.map(watchlist => {
    return (<div>{watchlist.name}</div>)
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