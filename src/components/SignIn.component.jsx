import React, { useState } from 'react';
import '../stylesheets/signin.css';
import CloseIcon from '@material-ui/icons/Close';

export default function SignIn({ firebase, signInToggle }) {
  
  const [alert, setAlert] = useState(0);

  const resetSignInStates = () => {
    signInToggle()
    setAlert(0)
  }

  const authenticate = (e) => {
    e.preventDefault()

    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    firebase.signIn(email, password).catch(err => setAlert(1))
  };
  
  return (
    <main className='sign-in'>
      <form>
        <CloseIcon onClick={() => resetSignInStates()}/>
        <input className='email' type='email' placeholder='Email' required/>
        <input className='password' type='password' placeholder='Password'/>
        <button onClick={(e) => authenticate(e)}>Enter</button>
      </form>
      {alert === 1 && (
        <div>Please check your sign-in details</div>
      )}
    </main>
  );
};