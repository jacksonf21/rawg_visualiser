import React from 'react';
import '../stylesheets/menu.css';

export default function Menu({ menuClass, signUpToggle, menuToggle }) {

  const accessSignUp = () => {
    menuToggle()
    signUpToggle()
  };

  return (
    <aside className={menuClass}>
      <div className='login-container'>
        <h4 onClick={() => accessSignUp()}>Sign Up</h4>
      </div>
    </aside>
  )
}