// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDFoMW85a2K4SOk_2KSgjp8kBUMunIHO0k",
    authDomain: "facebook-clone-c6d81.firebaseapp.com",
    // databaseURL: 'https://facebook-clone-c6d81.firebaseio.com',
    projectId: "facebook-clone-c6d81",
    storageBucket: "facebook-clone-c6d81.appspot.com",
    messagingSenderId: "798011024630",
    appId: "1:798011024630:web:6ba2448a015e3588d2f8d7",
    measurementId: "G-1WCDSDVWZN"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        console.log(result)
      }).catch((error)=> {
          console.log(error);
      });
  }

export {auth, provider}
export default db;