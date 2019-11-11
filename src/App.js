import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import Content from './components/Content.component';
import Navbar from './components/navbar.component';
import './stylesheets/app.css';

import reducer, { NEXT_GAME, SET_SELECT, SET_GAME, PREVIOUS_GAME, SET_CATEGORY_DATA, TOGGLE_MENU, TOGGLE_SEARCH, SET_ARROWS, SET_SEARCH_TEXT } from './helper/reducer'

import GameHeader from './components/GameHeader.component';
import Category from './components/Category.component';
import GameBody from './components/GameBody.component';

import { templateClassName } from './helper/helper';
import Menu from './components/Menu.component';
import Search from './components/Search.component';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    game: [],
    select: null,
    category: null,
    menu: 0,
    search: 0,
    arrows: null,
    searchText: null
  });

  const gamesAPIdata = (url) => {
    Axios.get(url)
      .then(res => {
        dispatch({ type: SET_GAME, value: res.data })
        dispatch({ type: SET_SELECT, value: 0 });
        dispatch({ type: SET_CATEGORY_DATA, value: url })
        dispatch({ type: SET_ARROWS, value: res.data })
      })
  };

  useEffect(() => gamesAPIdata('http://localhost:8000'),[]);

  const nextGame = () => dispatch({ type: NEXT_GAME, value: state.select });
  const previousGame = () => dispatch({ type: PREVIOUS_GAME, value: state.select });
  const menuToggle = () => dispatch({ type: TOGGLE_MENU, value: state.menu });
  const searchToggle = () => dispatch({ type: TOGGLE_SEARCH, value: state.search })
  
  //necessary for measuring resetting
  let timeout;

  const onSearchType = (e) => {
    const searchValue = e.target.value;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      const url = `http://localhost:8000/search/${searchValue}`;
      gamesAPIdata(url);
      //THIS MAY NOT BE NECESSARY
      dispatch({ type: SET_SEARCH_TEXT, value: searchValue });
    }, 1000)
  };

  
  const gameHeader = (
    <GameHeader games={state.game} nextGame={nextGame} previousGame={previousGame} select={state.select} arrows={state.arrows} />
  );

  const category = (
    <Category category={state.category} gamesAPIdata={gamesAPIdata} />
  );

  const gameBody = (
    <GameBody games={state.game} select={state.select} />
  );

  const menuOverlayClass = templateClassName(state.menu, 'menu-overlay', 'menu-overlay--visible');
  const menuClass = templateClassName(state.menu, 'menu', 'menu--visible');
  const searchClass = templateClassName(state.search, 'search', 'search--visible');
  const searchOverlayClass = templateClassName(state.search, 'search-overlay', 'search-overlay--visible');

  return (
    <div className="App">
      <div className={searchOverlayClass} onClick={() => searchToggle()}/>
      <div className={menuOverlayClass} onClick={() => menuToggle()}/>
      <Menu menuClass={menuClass}/>
      <Search searchClass={searchClass} onSearchType={onSearchType}/>
      <Navbar menuToggle={menuToggle} searchToggle={searchToggle}/>
      <Content
        gameHeader={gameHeader}
        category={category}
        gameBody={gameBody}
      />
    </div>
  );
}

export default App;
