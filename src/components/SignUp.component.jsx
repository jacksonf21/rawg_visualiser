import React from 'react';
import '../stylesheets/signup.css';
import CloseIcon from '@material-ui/icons/Close';

export default function SignUp({ firebase, signUpToggle }) {
  
  const authenticate = (e) => {
    e.preventDefault()

    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    password.length > 5 ? firebase.signUp(email, password) : console.log('error')
  };
  
  return (
    <main className='sign-up'>
      <form>
        <CloseIcon onClick={() => signUpToggle()}/>
        <input className='email' type='email' placeholder='email' required/>
        <input className='password' type='password' placeholder='password'/>
        <button onClick={(e) => authenticate(e)}>Enter</button>
      </form>
    </main>
  );
};