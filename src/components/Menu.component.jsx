import React from 'react';
import '../stylesheets/menu.css';

export default function Menu({ firebase, menuClass, signUpToggle, signInToggle, menuToggle }) {

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

  const watchlists = () => {
    
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
            <h4>Watchlists</h4>
            <h4 onClick={() => signOut()}>Sign Out</h4>
          </>
        )}
      </div>
    </aside>
  )
}