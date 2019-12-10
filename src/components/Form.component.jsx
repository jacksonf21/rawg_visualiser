import React from 'react';
import Axios from 'axios';
const { API_URL } = require('../constants/url')

export default function Form({ firebase }) {
  
  const createWatchlist = () => {
    const userId = firebase.uId();
    const watchlistName = document.getElementsByClassName('watchlist-name')[0].value;

    Axios.post(`${API_URL}/watchlists/${userId}`, {watchlistName: watchlistName})
  }
  
  return (
    <>
      <button onClick={() => createWatchlist()}>Create New</button>
      <input type='text' className='watchlist-name' />
    </>
  )
}