import React from 'react';
import '../stylesheets/signin.css';
import CloseIcon from '@material-ui/icons/Close';

export default function SignIn({ firebase, signInToggle }) {
  
  const authenticate = (e) => {
    e.preventDefault()

    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    firebase.signIn(email, password)
  };
  
  return (
    <main className='sign-in'>
      <form>
        <CloseIcon onClick={() => signInToggle()}/>
        <input className='email' type='email' placeholder='Email' required/>
        <input className='password' type='password' placeholder='Password'/>
        <button onClick={(e) => authenticate(e)}>Enter</button>
      </form>
    </main>
  );
};