import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Content from './components/Content.component';
import './stylesheets/app.css';
import Navbar from './components/navbar.component';

function App() {
  const [state, setState] = useState([]);
  const [select, setSelect] = useState(0);

  const gamesAPIdata = (url) => {
    Axios.get(url)
      .then(res => {
        setState(res.data);
        setSelect(0);
      })
  };

  useEffect(() => {
    gamesAPIdata('http://localhost:8000')
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
      <Navbar />
      <Content
        select={select}
        games={state}
        gamesAPIdata={gamesAPIdata}
        nextGame={nextGame}
        previousGame={previousGame}
      />
    </div>
  );
}

export default App;
