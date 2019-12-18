import React from 'react';
import '../stylesheets/menu.css';

const { API_URL } = require('../constants/url');

export default function Menu({ firebase, menuClass, signUpToggle, signInToggle, menuToggle, watchlistToggle, renderWatchlists }) {

  const signedIn = firebase.auth.currentUser; 

  const accessSignUp = () => {
    menuToggle()
    signUpToggle()
  };

  const accessSignIn = () => {
    menuToggle()
    signInToggle()
  };

  const signOut = () => {
    firebase.signOut()
    menuToggle()
  }

  const accessWatchlists = () => {
    watchlistToggle()
    renderWatchlists(`${API_URL}/watchlists/`)
  }

  return (
    <aside className={menuClass}>
      <div className='login-container'>
        {signedIn === null ? (
          <>
            <h4 onClick={() => accessSignUp()}>Sign Up</h4>
            <h4 onClick={() => accessSignIn()}>Sign In</h4>
          </>
        ) : (
          <>
            <h4 onClick={() => accessWatchlists()}>Watchlists</h4>
            <h4 onClick={() => signOut()}>Sign Out</h4>
          </>
        )}
      </div>
    </aside>
  )
}