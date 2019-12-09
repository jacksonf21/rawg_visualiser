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
    watchlistClassNames[entry.watchlist_id] ? 
    watchlistClassNames[entry.watchlist_id].push(entry.rawg_id) : 
    watchlistClassNames[entry.watchlist_id] = [entry.rawg_id] 
  })

  const watchlistIds = Object.keys(watchlistClassNames);
  
  const booleanClassNames = watchlistIds.map(id => {
    return watchlistClassNames[id].some(rawgIds => rawgIds === gameId)
  })

  return booleanClassNames.map(bool => bool ? 'add-watchlist-hidden' : 'add-watchlist-visible')

};

module.exports = { getUniqueWatchlist, getWatchlistClassNames }