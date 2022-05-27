import './login.css';
import loginImg from './assets/login-display.png';
// import axios from 'axios';
import { Link } from "react-router-dom";
// import {
// 	useRef
// } from 'react';

export default function Login() {
	// const param1 = useRef();
	// const param2 = useRef();

	// const handleClick = (e) => {
	// 	e.preventDefault();
	// 	let res = axios({
	// 		method: 'post',
	// 		url: 'http://localhost:3000/api/auth/login',
	// 		data: {
	// 			email: param1.current["value"],
	// 			password: param2.current["value"]
	// 		}
	// 	});

	// 	console.log(res)
	// }
	return ( 
	<div>
		<div className= "login-container">
			<div className= "login-wrapper">
				<div className= "login-wrapper-design">
					<img src= {
						loginImg
					}
					alt= "login"
					id= "login-image" 
					/>
				</div>
				<div className= "login-input-container">
					<form className= "login-input-wrapper"
					// onSubmit= {handleClick}
					>
						<h2 className= "login-header"> Sign In </h2> 
						<input placeholder= "Email"
							type= "email"
							className= "login-input"
							minLength= "6"
							// ref= {param1}
							required 
						/>
						<input placeholder= "Password"
							type= "password"
							className= "login-input"
							// ref= {param2}
							required 
						/>
							<div className = "button-container">
								<Link to="/register">
									<button className= "login-register-button">Sign Up Here</button> 
								</Link>
								<Link to="/">
									<button className= "login-button"> Sign in </button> 
								</Link>
							</div> 
					</form> 
				</div> 
				</div> 
			</div> 
		</div>
	)
}
