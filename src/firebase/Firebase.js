import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
console.log(process.env)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:"netflix-project-de277.firebaseapp.com",
    projectId: "netflix-project-de277",
    storageBucket: "netflix-project-de277.appspot.com",
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID
  };
const Firebase=initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(Firebase);

  
export  {auth,db};