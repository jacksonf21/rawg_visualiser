import React from 'react';
import '../stylesheets/menu.css';

export default function Menu({ menuClass, firebase }) {

  const authenticate = (e) => {
    e.preventDefault()

    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    password.length > 5 ? firebase.signUp(email, password) : console.log('error')

    // firebase.signUp(email, password)
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
        <button onClick={(e) => authenticate(e)}>Enter</button>
      </div>
    </aside>
  )
}