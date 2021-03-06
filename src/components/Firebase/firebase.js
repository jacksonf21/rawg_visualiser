import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }

  signUp = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
  signOut = () => this.auth.signOut()
  uId = () => this.auth.currentUser.uid
  currentUser = () => this.auth.currentUser
}

export default Firebase;