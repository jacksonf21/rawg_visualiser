import React from 'react';
import Axios from 'axios';
const { API_URL } = require('../constants/url')

export default function Form({ firebase, renderWatchlists }) {
  
  const createWatchlist = () => {
    const userId = firebase.uId();
    const watchlistName = document.getElementsByClassName('watchlist-name')[0].value;
    
    Axios.post(`${API_URL}/watchlists/${userId}`, {watchlistName: watchlistName})
    renderWatchlists(`${API_URL}/watchlists`);
  }
  
  return (
    <>
      <button className='watchlist-create' onClick={() => createWatchlist()}>Create</button>
      <input type='text' className='watchlist-name' />
    </>
  )
}