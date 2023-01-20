import React, { useState } from "react";
import "./Signin.css";//change
import {  createUserWithEmailAndPassword} from "firebase/auth";
import {auth,db} from '../../firebase/Firebase'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";


function Signin() { 
    
const [customerEmail, setCustomerEmail] = useState("");
const [customerPassword, setCustomerPassword] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [customerName, setCustomerName] = useState("");
const navigate=useNavigate()


const submit = (e) => {
    //alert("ok")
    e.preventDefault();
    //alert(customerName)
    //alert(customerPassword)
    
    
   createUserWithEmailAndPassword(auth,customerEmail, customerPassword)
  .then((userCredential) => {
    //alert("ok")
    // Signed in 
    const user = userCredential.user;
    user['displayName']=customerName
    addDoc(collection(db, "users"), {
      id:user.uid,
      username: customerName,
      phoneNUmber: customerPhone
      
    });
  }).then(()=>{
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });
   
  
    setCustomerName("");
    setCustomerPassword("");
  };

return (
	<div className="signup">
    <NavBar value={true} />
    <div>
    <div className="signup_box">
    <div className="signup_div">
      <div>
      <h1 className="text_header">SignUP page</h1>
      </div>
	<div className="signup__form">
        
    <input
		type="text"
		placeholder="Name"
		value={customerName}
		onChange={(e) => setCustomerName(e.target.value)}
		/>
    <input
		type="email"
		placeholder="Email"
		value={customerEmail}
		onChange={(e) => setCustomerEmail(e.target.value)}
		/>
    <input
		type="number"
		placeholder="Phone number"
		value={customerPhone}
		onChange={(e) => setCustomerPhone(e.target.value)}
		/>
		<input
		type="password"
		placeholder="Password"
		value={customerPassword}
		onChange={(e) => setCustomerPassword(e.target.value)}
		/>
		<button className="button_signup" onClick={submit}>Sign up</button>
	</div>
	</div>
  <div className="bottom_login_div">
  <p className="text_bottom_1">Already have an account? <button className="login_link_button" onClick={() => navigate('/login')}>Sign  In</button></p>
						
  </div>
  </div>
  </div>
  </div>
);
}

export default Signin;