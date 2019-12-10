export const SET_RAWG_GAMES_DATA = 'SET_RAWG_GAMES_DATA';
export const SET_RAWG_GAMES_DATA_INDEX = 'SET_RAWG_GAMES_DATA_INDEX';
export const SET_CATEGORY_INDEX = 'SET_CATEGORY_INDEX';
export const INCREASE_RAWG_GAMES_DATA_INDEX = 'INCREASE_RAWG_GAMES_DATA_INDEX';
export const DECREASE_RAWG_GAMES_DATA_INDEX = 'DECREASE_RAWG_GAMES_DATA_INDEX';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const SET_NAVIGATION_ARROWS = 'SET_NAVIGATION_ARROWS';
export const SET_SEARCH_FIELDS = 'SET_SEARCH_FIELDS';
export const TOGGLE_SIGN_UP = 'TOGGLE_SIGN_UP';
export const TOGGLE_SIGN_IN = 'TOGGLE_SIGN_IN';
export const TOGGLE_WATCHLISTS = 'TOGGLE_WATCHLISTS';
export const SET_WATCHLIST_DATA = 'SET_WATCHLIST_DATA';
export const TOGGLE_ADD_WATCHLIST = 'TOGGLE_ADD_WATCHLIST';

const { API_URL } = require('../constants/url')

export default function reducer(state, action) {
  switch (action.type) {
    case SET_RAWG_GAMES_DATA:
      return {
        ...state, rawgGameData: action.value
      }

    case SET_CATEGORY_INDEX: 
      let category;

      action.value === API_URL
      ? category = 0 :
      action.value === `${API_URL}/this-month`
      ? category = 1 : 
      action.value === `${API_URL}/upcoming-month`
      ? category = 2 : category = null;

      return {
        ...state, categoryIndex: category
      }
    
    case SET_RAWG_GAMES_DATA_INDEX:
      return {
        ...state, rawgGameDataIndex: action.value
      }

    case INCREASE_RAWG_GAMES_DATA_INDEX:
      if (action.value === state.rawgGameData.length - 1) return { ...state };
      const selectedValue = action.value + 1;
      
      return {
        ...state, rawgGameDataIndex: selectedValue
      }

    case DECREASE_RAWG_GAMES_DATA_INDEX:
      if (action.value === 0) return { ...state };
      const selectedValuePrev = action.value - 1;
        
      return {
        ...state, rawgGameDataIndex: selectedValuePrev
      }

    case TOGGLE_MENU:
      if (action.value === 0) return { ...state, menu: 1 }
      else return { ...state, menu: 0 }

    case TOGGLE_SEARCH:
      if (action.value === 0) return { ...state, search: 1 }
      else return { ...state, search: 0 }

    case TOGGLE_SIGN_UP:
      if (action.value === 0) return { ...state, signUp: 1 }
      else return { ...state, signUp: 0 }

    case TOGGLE_SIGN_IN:
      if (action.value === 0) return { ...state, signIn: 1 }
      else return { ...state, signIn: 0 }

    case TOGGLE_WATCHLISTS:
      if (action.value === 0) return { ...state, watchlist: 1 }
      else return { ...state, watchlist: 0 }

    case TOGGLE_ADD_WATCHLIST:
      if (action.value === 0) return { ...state, addWatchlist: 1 }
      else return { ...state, addWatchlist: 0 }

    case SET_NAVIGATION_ARROWS:
      if (action.value === 1) return { ...state, navigationArrows: 0 }
      else return { ...state, navigationArrows: 1 }

    case SET_SEARCH_FIELDS:
      return {
        ...state, searchFields: action.value
      }
    
    case SET_WATCHLIST_DATA:
      return {
        ...state, watchlistData: action.value
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

