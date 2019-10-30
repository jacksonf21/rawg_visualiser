import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './components/Content.component';
import './App.css';

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
    if (select === state.length) return;
    setSelect(select => select + 1);
  };

  const previousGame = () => {
    if (select === 0) return;
    setSelect(select => select - 1);
  };

  return (
    <div className="App">
      <Header
        select={select}
        games={state}
        nextGame={nextGame}
        previousGame={previousGame}
      />
    </div>
  );
}

export default App;
