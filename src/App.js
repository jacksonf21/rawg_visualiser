import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header.component';

function App() {

  const [state, setState] = useState([]);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:8000')
      .then(res => {
        setState(res.data)
      });
  },[]);

  const nextGame = () => {
    setSelect(select => select + 1);
  };

  const topTwenty = state.map(game => {
    return (
      <header>
        <div>{game.name}</div>
        <div>{game.ratingsCount}</div>
        <div>{game.ratings.exceptional}</div>
      </header>
    );
  });

  return (
    <div className="App">
      {topTwenty[select]}
      <Header onClick={nextGame}/>
    </div>
  );
}

export default App;
