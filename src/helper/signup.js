import Axios from 'axios';

export default function signUpDetails() {
  const userInformation = [];
  userInformation.push(document.getElementsByClassName('first_name')[0].value)
  userInformation.push(document.getElementsByClassName('last_name')[0].value)
  userInformation.push(document.getElementsByClassName('email')[0].value)
  
  Axios.post('http://localhost:8000/signup', {userInformation: userInformation} )
    .catch(err => console.log(err))
};
