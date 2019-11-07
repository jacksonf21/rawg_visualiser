import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import Content from './components/Content.component';
import Navbar from './components/navbar.component';
import './stylesheets/app.css';

import reducer, { NEXT_GAME, SET_SELECT, SET_GAME, PREVIOUS_GAME, SET_CATEGORY_DATA, TOGGLE_MENU } from './helper/reducer'

import GameHeader from './components/GameHeader.component';
import Category from './components/Category.component';
import GameBody from './components/GameBody.component';

import { menuClassName, overlayClassName } from './helper/helper';
import Menu from './components/Menu.component';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    game: [],
    select: null,
    category: null,
    menu: 0,
    search: 0
  });

  const gamesAPIdata = (url) => {
    Axios.get(url)
      .then(res => {
        dispatch({ type: SET_GAME, value: res.data })
        dispatch({ type: SET_SELECT, value: 0 });
        dispatch({ type: SET_CATEGORY_DATA, value: url})
      })
  };

  useEffect(() => gamesAPIdata('http://localhost:8000'),[]);

  const nextGame = () => dispatch({ type: NEXT_GAME, value: state.select });
  const previousGame = () => dispatch({ type: PREVIOUS_GAME, value: state.select });
  const menuToggle = () => dispatch({ type: TOGGLE_MENU, value: state.menu })

  const gameHeader = (
    <GameHeader games={state.game} nextGame={nextGame} previousGame={previousGame} select={state.select} />
  );

  const category = (
    <Category category={state.category} gamesAPIdata={gamesAPIdata} />
  );

  const gameBody = (
    <GameBody games={state.game} select={state.select} />
  );

  const overlayClass = overlayClassName(state.menu);
  const menuClass = menuClassName(state.menu);

  return (
    <div className="App">
      <div className={overlayClass} onClick={() => menuToggle()}/>
      <Menu menuClass={menuClass}/>
      <Navbar menuToggle={menuToggle} />
      <Content
        gameHeader={gameHeader}
        category={category}
        gameBody={gameBody}
      />
    </div>
  );
}

export default App;
