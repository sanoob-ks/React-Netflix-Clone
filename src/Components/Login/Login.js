import React, { useState } from "react";
import "./Login.css";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../Components/Navbar/NavBar'

function Login() {
	const [customerName, setCustomerName] = useState("");
	const [customerPassword, setCustomerPassword] = useState("");
	const navigate = useNavigate()

	const submit = (e) => {
		e.preventDefault();
		//const auth = getAuth();
		signInWithEmailAndPassword(auth, customerName, customerPassword)
			.then(() => {
				// Signed in 
				navigate('/')
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage)
			});

		setCustomerName("");
		setCustomerPassword("");
	};

	return (
		<div className="login" >
			<NavBar value={true} />
			<div >
				<div className="login_box">
					<div className="login_div">
						<div>
						<h1 className="text_header">Sign In</h1>
						</div>
						<div className="Login__form">
							<input
								type="email"
								placeholder="Email"
								value={customerName}
								onChange={(e) => setCustomerName(e.target.value)}
							/>
							<input
								className="password"
								type="password"
								placeholder="Password"
								value={customerPassword}
								onChange={(e) => setCustomerPassword(e.target.value)}
							/>
							<button className="button_signin" onClick={submit}>Sign In</button>
						</div>
					</div>
					<div className="bottom_signup_div">
						<p className="text_bottom_1">New to Netflix? <button className="signup_link_button" onClick={() => navigate('/signup')}>Sing up now</button></p>
						<div className="bottom_para_div" >
							<p className="text_bottom_2">This page is protected by Google reCAPTCHA to  </p>
							<p className="text_bottom_3"><span className="text_bottom_3_span">ensure you're not a bot.</span><button className="learn_more_button">Learn more</button></p>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
