import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import Content from './components/Content.component';
import Navbar from './components/navbar.component';
import './stylesheets/app.css';

import reducer, { INCREASE_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA, DECREASE_RAWG_GAMES_DATA_INDEX, SET_CATEGORY_INDEX, TOGGLE_MENU, TOGGLE_SEARCH, SET_NAVIGATION_ARROWS, SET_SEARCH_FIELDS } from './helper/reducer'

import GameHeader from './components/GameHeader.component';
import Category from './components/Category.component';
import GameBody from './components/GameBody.component';

import { templateClassName } from './helper/helper';
import Menu from './components/Menu.component';
import Search from './components/Search.component';

function App() {

  //rawg is the 3rd party API
  const [state, dispatch] = useReducer(reducer, {
    rawgGameData: [],
    rawgGameDataIndex: null,
    categoryIndex: null,
    menu: 0,
    search: 0,
    navigationArrows: null,
    searchFields: []
  });

  useEffect(() => renderRawgApiData('http://localhost:8000'),[]);

  const renderRawgApiData = (url) => {
    Axios.get(url)
      .then(res => {
        dispatch({ type: SET_RAWG_GAMES_DATA, value: res.data });
        dispatch({ type: SET_RAWG_GAMES_DATA_INDEX, value: 0 });
        dispatch({ type: SET_CATEGORY_INDEX, value: url });
        dispatch({ type: SET_NAVIGATION_ARROWS, value: res.data.length });
      })
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
  
  const menuToggle = () => 
  dispatch({ type: TOGGLE_MENU, value: state.menu });
   
  const searchToggle = () =>
  dispatch({ type: TOGGLE_SEARCH, value: state.search })   
  
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
      const url = `http://localhost:8000/search/collection/${searchValue}`;
      
      Axios.get(url)
        .then(res => {
          if (searchValue) dispatch({ type: SET_SEARCH_FIELDS, value: res.data })
        })

    }, 1000)
  };

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
      rawgGameData={state.rawgGameData}
      rawgGameDataIndex={state.rawgGameDataIndex} 
    />
  );

  const menuOverlayClass = templateClassName(state.menu, 'menu-overlay', 'menu-overlay--visible');
  const menuClass = templateClassName(state.menu, 'menu', 'menu--visible');
  const searchClass = templateClassName(state.search, 'search', 'search--visible');
  const searchOverlayClass = templateClassName(state.search, 'search-overlay', 'search-overlay--visible');

  return (
    <div className="App">
      <section className={searchOverlayClass} onClick={() => searchToggle()}/>
      <section className={menuOverlayClass} onClick={() => menuToggle()}/>
      <Menu 
        menuClass={menuClass}
      />
      <Search 
        onSearchType={onSearchType} 
        searchClass={searchClass} 
        searchFields={state.searchFields} 
        setSearchData={setSearchData}
      />
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
