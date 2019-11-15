import React from 'react';
import '../stylesheets/menu.css';

export default function Menu({ menuClass }) {

  const authenticate = () => {
    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    console.log(email)
    console.log(password)

    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  };

  return (
    <aside className={menuClass}>
      <div className='login-container'>
        <input className='email' type='text' placeholder='email'/>
        <input className='password' type='text' placeholder='password'/>
        <button onClick={() => authenticate()}>Enter</button>
      </div>
    </aside>
  )
}