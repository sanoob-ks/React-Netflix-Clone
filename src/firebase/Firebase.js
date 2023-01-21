import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "netflix-project-de277.firebaseapp.com",
    projectId: "netflix-project-de277",
    storageBucket: "netflix-project-de277.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId:process.env.MEASUREMENT_ID
  };
const Firebase=initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(Firebase);

  
export  {auth,db};