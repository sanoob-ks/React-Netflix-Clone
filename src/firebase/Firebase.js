import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDy4FF0M94GFhuX94p2EvbvbFOtpT3fNwc",
    authDomain: "netflix-project-de277.firebaseapp.com",
    projectId: "netflix-project-de277",
    storageBucket: "netflix-project-de277.appspot.com",
    messagingSenderId: "560192091036",
    appId: "1:560192091036:web:91193456a495f3c7fbce59",
    measurementId: "G-QCFR4NW40H"
  };
const Firebase=initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(Firebase);

  
export  {auth,db};