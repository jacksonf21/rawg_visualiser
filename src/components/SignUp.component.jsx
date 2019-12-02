import React, { useState } from 'react';
import '../stylesheets/signup.css';
import CloseIcon from '@material-ui/icons/Close';
import signUpDetails from '../helper/signup'

export default function SignUp({ firebase, signUpToggle }) {

  const [alert, setAlert] = useState(0);

  const resetSignUpStates = () => {
    signUpToggle()
    setAlert(0)
  }

  const authenticate = (e) => {
    e.preventDefault()

    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;

    if (password.length > 5) {
      firebase.signUp(email, password)
        .then(user => {
          signUpDetails()
          signUpToggle()
        })
        .catch(error => setAlert(1))
    }

  };
  
  return (
    <main className='sign-up'>
      <form>
        <CloseIcon onClick={() => resetSignUpStates()}/>
        <input className='first_name' type='text' placeholder='First Name'/>
        <input className='last_name' type='text' placeholder='Last Name'/>
        <input className='email' type='email' placeholder='email' required/>
        <input className='password' type='password' placeholder='password'/>
        <button onClick={(e) => authenticate(e)}>Enter</button>
      </form>
      {alert === 1 && (
        <div>This email has already been taken</div>
      )}

    </main>
  );
};