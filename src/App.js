import React, { useEffect, useReducer } from 'react';
import { FirebaseContext } from './components/Firebase';
import Axios from 'axios';
import Content from './components/Content.component';
import Navbar from './components/Navbar.component';
import './stylesheets/app.css';

import reducer, { INCREASE_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA, DECREASE_RAWG_GAMES_DATA_INDEX, SET_CATEGORY_INDEX, TOGGLE_MENU, TOGGLE_SEARCH, SET_NAVIGATION_ARROWS, SET_SEARCH_FIELDS, TOGGLE_SIGN_UP, TOGGLE_SIGN_IN, TOGGLE_WATCHLISTS, SET_WATCHLIST_DATA, TOGGLE_ADD_WATCHLIST } from './helper/reducer'

import GameHeader from './components/GameHeader.component';
import Category from './components/Category.component';
import GameBody from './components/GameBody.component';

import { templateHiddenClass } from './helper/customClassnames';
import Menu from './components/Menu.component';
import Search from './components/Search.component';
import SignUp from './components/SignUp.component';
import SignIn from './components/SignIn.component';
import Watchlist from './components/Watchlist.component';
import AddWatchlist from './components/AddWatchlist.component';

const { API_URL } = require('./constants/url'); 

function App({ firebase }) {

  //RAWG is a 3rd party API
  const [state, dispatch] = useReducer(reducer, {
    rawgGameData: [],
    rawgGameDataIndex: null,
    categoryIndex: null,
    menu: 0,
    search: 0,
    signUp: 0,
    signIn: 0,
    watchlist: 0,
    addWatchlist: 0,
    navigationArrows: null,
    searchFields: [],
    watchlistData: []
  });

  useEffect(() => renderRawgApiData(API_URL), []);

  const renderRawgApiData = (url) => {
    
    Axios
      .get(url)
      .then(res => {
        dispatch({ type: SET_RAWG_GAMES_DATA, value: res.data });
        dispatch({ type: SET_RAWG_GAMES_DATA_INDEX, value: 0 });
        dispatch({ type: SET_CATEGORY_INDEX, value: url });
        dispatch({ type: SET_NAVIGATION_ARROWS, value: res.data.length });
      })
      .catch(err => console.log(err))

  };

  const renderWatchlists = (url) => {
    const id = firebase.uId();

    Axios
      .get(`${url}\\${id}`)
      .then(res => dispatch({ type: SET_WATCHLIST_DATA, value: res.data }))
      .catch(err => console.log(err))

  };

  const addToWatchlist = (watchlistId, status) => {
    if (status === 'add-watchlist-visible') {
      const currentGameData = state.rawgGameData[state.rawgGameDataIndex]; 

      Axios
        .post(`${API_URL}/watchlists/add/${watchlistId}`, currentGameData)
        .then(res => renderWatchlists(`${API_URL}/watchlists/add`))
        .catch(err => console.log(err))

    }
  };

  const selectWatchlist = (watchlistId) => {
    renderRawgApiData(`${API_URL}/watchlists/games/${watchlistId}`)
    dispatch({ type: TOGGLE_WATCHLISTS, value: state.watchlist })
    dispatch({ type: TOGGLE_MENU, value: state.menu })
  };

  const nextGame = () => {
    dispatch({ 
      type: INCREASE_RAWG_GAMES_DATA_INDEX, 
      value: state.rawgGameDataIndex 
    });
  } 
  
  const previousGame = () => {
    dispatch({ 
      type: DECREASE_RAWG_GAMES_DATA_INDEX, 
      value: state.rawgGameDataIndex 
    });
  } 
  
  const menuToggle = () => dispatch({ type: TOGGLE_MENU, value: state.menu });
  const searchToggle = () => dispatch({ type: TOGGLE_SEARCH, value: state.search });   
  const signUpToggle = () => dispatch({ type: TOGGLE_SIGN_UP, value: state.signUp });
  const signInToggle = () => dispatch({ type: TOGGLE_SIGN_IN, value: state.signIn });
  const watchlistToggle = () => dispatch({ type: TOGGLE_WATCHLISTS, value: state.watchlist });

  const addWatchlistToggle = () => {
    if (firebase.currentUser() !== null) {
      dispatch({ type: TOGGLE_ADD_WATCHLIST, value: state.addWatchlist })
      renderWatchlists(`${API_URL}/watchlists/add`)
    } else {
      dispatch({ type: TOGGLE_SIGN_IN, value: state.signIn})
    }
  }

  const setSearchData = (index) => {
    dispatch({ type: SET_RAWG_GAMES_DATA, value: [state.searchFields[index]] });
    dispatch({ type: SET_RAWG_GAMES_DATA_INDEX, value: 0 });
    dispatch({ type: SET_CATEGORY_INDEX, value: null });
    dispatch({ type: SET_NAVIGATION_ARROWS, value: [state.searchFields[index]] });
  };

  //necessary for measuring resetting
  let timeout;

  const onSearchType = (event) => {
    
    const searchValue = event.target.value;
    clearTimeout(timeout)
  
    timeout = setTimeout(() => {
      const url = `${API_URL}/search/collection/${searchValue}`;
      
      Axios
        .get(url)
        .then(res => {
          if (searchValue) dispatch({ type: SET_SEARCH_FIELDS, value: res.data })
        })

    }, 1000)
  };

  const menuClass = templateHiddenClass(state.menu, 'overlay-visible overlay-visible--menu');
  const searchClass = templateHiddenClass(state.search, 'overlay-visible overlay-visible--search');
  const watchlistClass = templateHiddenClass(state.watchlist, 'overlay-visible overlay-visible--watchlist');
  const addWatchlistClass = templateHiddenClass(state.addWatchlist, 'overlay-visible overlay-visible--addWatchlist');
  
  const menuOverlayClass = templateHiddenClass(state.menu, 'menu-overlay--visible');
  const searchOverlayClass = templateHiddenClass(state.search, 'search-overlay--visible');
  const addWatchlistOverlayClass = templateHiddenClass(state.addWatchlist, 'menu-overlay--visible');

  //Decided to pass down these components instead of nesting unused props
  const gameHeaderComponent = (
    <GameHeader 
      rawgGameData={state.rawgGameData}
      nextGame={nextGame} 
      previousGame={previousGame} 
      rawgGameDataIndex={state.rawgGameDataIndex} 
      navigationArrows={state.navigationArrows} 
    />
  );

  const categoryComponent = (
    <Category 
      categoryIndex={state.categoryIndex} 
      renderRawgApiData={renderRawgApiData} 
    />
  );

  const gameBodyComponent = (
    <GameBody
      addWatchlistToggle={addWatchlistToggle} 
      rawgGameData={state.rawgGameData}
      rawgGameDataIndex={state.rawgGameDataIndex}
    />
  );

  return (
    <div className="App">
      <section className={searchOverlayClass} onClick={() => searchToggle()}/>
      <section className={menuOverlayClass} onClick={() => menuToggle()}/>
      <section className={addWatchlistOverlayClass} onClick={() => addWatchlistToggle()}/>
      <FirebaseContext.Consumer>
        {firebase => 
          <>
          <Menu 
            firebase={firebase} 
            menuClass={menuClass} 
            menuToggle={menuToggle} 
            signUpToggle={signUpToggle} 
            signInToggle={signInToggle}
            renderWatchlists={renderWatchlists}
            watchlistToggle={watchlistToggle}
          />
          {state.signUp === 1 && (
            <SignUp firebase={firebase} signUpToggle={signUpToggle}/>
          )}
          {state.signIn === 1 && (
            <SignIn firebase={firebase} signInToggle={signInToggle}/>
          )}
          </>
        }
      </FirebaseContext.Consumer>
      <Search 
        onSearchType={onSearchType} 
        searchClass={searchClass} 
        searchFields={state.searchFields} 
        setSearchData={setSearchData}
      />
      {state.watchlist !== 0 && (
        <Watchlist
          menuToggle={menuToggle}
          selectWatchlist={selectWatchlist}
          watchlistClass={watchlistClass}
          watchlistToggle={watchlistToggle}
          watchlistData={state.watchlistData}
        />
      )}
      {state.addWatchlist !== 0 && (
        <AddWatchlist
          addWatchlistClass={addWatchlistClass}
          addWatchlistToggle={addWatchlistToggle}
          addToWatchlist={addToWatchlist}
          watchlistData={state.watchlistData}
          rawgGameData={state.rawgGameData}
          rawgGameDataIndex={state.rawgGameDataIndex}
        />
      )}
      <Navbar 
        menuToggle={menuToggle}
        searchToggle={searchToggle}
      />
      <Content
        categoryComponent={categoryComponent}
        gameBodyComponent={gameBodyComponent}
        gameHeaderComponent={gameHeaderComponent}
      />
    </div>
  );
}

export default App;
