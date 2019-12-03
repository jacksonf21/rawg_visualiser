import React from 'react';
import Axios from 'axios';

export default function Form({ firebase }) {
  
  const createWatchlist = () => {
    const userId = firebase.uId();
    const watchlistName = document.getElementsByClassName('watchlist-name')[0].value;
    Axios.post(`http://localhost:8000/watchlists/${userId}`, {watchlistName: watchlistName})
  }
  
  return (
    <>
      <button onClick={() => createWatchlist()}>Create New</button>
      <input type='text' className='watchlist-name' />
    </>
  )
}