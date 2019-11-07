import React from 'react';
import '../stylesheets/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar({ menuToggle, searchToggle }) {

  return (
    <nav className='game-navbar'>
      <div className='game-navbar__logo'>Title</div>
      <div className='game-navbar__icons'>
        <SearchIcon onClick={() => searchToggle()} />
        <MenuIcon onClick={() => menuToggle()}/>
      </div>
    </nav>
  );
};