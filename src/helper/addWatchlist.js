const getUniqueWatchlist = (data) => {
  const watchlists = {};
  
  data.forEach(entry => {
    if (!watchlists[entry.watchlist_name]) {
      watchlists[entry.watchlist_name] = 0;
    }
  });

  return Object.keys(watchlists)
};

const getWatchlistClassNames = (data, gameId) => {
  const watchlistClassNames = {};

  data.forEach(entry => {
    if (!watchlistClassNames[entry.watchlist_name]) {
      if (entry.gameId === gameId) {
        watchlistClassNames[entry.watchlist_name] = 'add-watchlist-hidden';
      } else {
        watchlistClassNames[entry.watchlist_name] = 'add-watchlist-visible'; 
      }
    }
  })

  return Object.values(watchlistClassNames);
};

module.exports = { getUniqueWatchlist, getWatchlistClassNames }