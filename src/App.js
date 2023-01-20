import React, { useEffect,useContext } from 'react';
import './App.css';
//import NavBar from './Components/Navbar/NavBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import { AuthContext } from './store/Context';
import {auth} from './firebase/Firebase'
import {onAuthStateChanged} from 'firebase/auth'
import Footer from './Components/footer/Footer';



function App() {
  const {user,setUser}=useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        //console.log("user",user)
        //const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
  return (
    <div className="App">
      
      <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        
      
      
        <Route element={<LoginPage/> } path='/login'/>
        <Route element={<SignupPage/>} path='/signup'/>
        
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App; 
