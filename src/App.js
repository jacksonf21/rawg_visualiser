import React, { useEffect, useReducer } from 'react';
import Firebase, { FirebaseContext } from './components/Firebase';
import Axios from 'axios';
import Content from './components/Content.component';
import Navbar from './components/Navbar.component';
import './stylesheets/app.css';

import reducer, { INCREASE_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA_INDEX, SET_RAWG_GAMES_DATA, DECREASE_RAWG_GAMES_DATA_INDEX, SET_CATEGORY_INDEX, TOGGLE_MENU, TOGGLE_SEARCH, SET_NAVIGATION_ARROWS, SET_SEARCH_FIELDS, TOGGLE_SIGN_UP, TOGGLE_SIGN_IN } from './helper/reducer'

import GameHeader from './components/GameHeader.component';
import Category from './components/Category.component';
import GameBody from './components/GameBody.component';

import { templateClassName } from './helper/customClassnames';
import Menu from './components/Menu.component';
import Search from './components/Search.component';
import SignUp from './components/SignUp.component';
import SignIn from './components/SignIn.component';

function App() {

  //rawg is the 3rd party API
  const [state, dispatch] = useReducer(reducer, {
    rawgGameData: [],
    rawgGameDataIndex: null,
    categoryIndex: null,
    menu: 0,
    search: 0,
    signUp: 0,
    signIn: 0,
    navigationArrows: null,
    searchFields: []
  });

  useEffect(() => renderRawgApiData('http://localhost:8000'), []);

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
  dispatch({ type: TOGGLE_SEARCH, value: state.search });   
  
  const signUpToggle = () => 
  dispatch({ type: TOGGLE_SIGN_UP, value: state.signUp});

  const signInToggle = () => 
  dispatch({ type: TOGGLE_SIGN_IN, value: state.signIn});

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
      <FirebaseContext.Consumer>
        {firebase => 
          <Menu 
            firebase={firebase} 
            menuClass={menuClass} 
            signUpToggle={signUpToggle} 
            menuToggle={menuToggle} 
            signInToggle={signInToggle} 
          />
        }
      </FirebaseContext.Consumer>
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
      {state.signUp === 1 && (
        <FirebaseContext.Consumer>
          {firebase => <SignUp firebase={firebase} signUpToggle={signUpToggle}/>}
        </FirebaseContext.Consumer>
      )}
      {state.signIn === 1 && (
        <FirebaseContext.Consumer>
          {firebase => <SignIn firebase={firebase} signInToggle={signInToggle}/>}
        </FirebaseContext.Consumer>
      )}
    </div>
  );
}

export default App;
