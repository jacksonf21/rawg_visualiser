import Axios from 'axios';
const { API_URL } = require('../constants/url');

export default function signUpDetails(uid) {
  const userInformation = [];
  userInformation.push(document.getElementsByClassName('first_name')[0].value)
  userInformation.push(document.getElementsByClassName('last_name')[0].value)
  userInformation.push(document.getElementsByClassName('email')[0].value)
  userInformation.push(uid)
  
  Axios.post(`${API_URL}/signup`, {userInformation: userInformation} )
    .catch(err => console.log(err))
};
