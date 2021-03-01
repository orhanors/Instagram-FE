import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";
import OAuth from "./OAuth";
import "./auth.scss";

import logo_text from "../../assets/inst_logo_text.png";
import { Row, Col } from "react-bootstrap";
function Signup(props) {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		surname: "",
		username: "",
		password: "",
		password2: "",
	});

	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const { email, name, surname, username, password, password2 } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			isEmpty(email) ||
			isEmpty(name) ||
			isEmpty(surname) ||
			isEmpty(username) ||
			isEmpty(password) ||
			isEmpty(password2)
		) {
			setErrorMsg("All fields are required");
		} else if (!isEmail(email)) {
			setErrorMsg("Invalid email format");
		} else if (!equals(password, password2)) {
			setErrorMsg("Passwords are not same");
		} else {
			let { username, name, surname, email, password } = formData;
			let body = { username, name, surname, email, password };

			//TODO handle Signup
		}
	};

	const showSignupForm = () => {
		return (
			<div className='container'>
				<div className='row'>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Name'
					/>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Surname'
					/>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Username'
					/>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Email'
					/>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Password'
					/>
					<input
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Confirm Password'
					/>

					<input
						className='auth-input submit-btn col-md-12 mb-3 '
						type='submit'
						placeholder='Confirm Password'
					/>
				</div>
			</div>
		);
	};
	return (
		<div className='auth-container container justify-content-center'>
			<div className='auth-box'>
				<Row>
					<Col md={12}>
						<div className='d-flex justify-content-center'>
							<img
								src={logo_text}
								alt='logo'
								style={{ width: "60%", marginBottom: "1rem" }}
							/>
						</div>
					</Col>
					<Col md={12}>
						<p className='text-center'>
							Sign up to see photos and videos from your friends.
						</p>
					</Col>
					<Col md={12}>
						<OAuth />
					</Col>

					<Col md={12}>
						<div className='d-flex flex-row mb-2'>
							<hr />
							<small className='or'>OR</small>
							<hr />
						</div>
					</Col>
					<Col md={12}>{showSignupForm()}</Col>

					<Col md={12}>
						<small className='terms'>
							By signing up, you agree to our{" "}
							<strong>Terms</strong> ,{" "}
							<strong>Data Policy</strong>
							and <strong>Cookies Policy </strong>.
						</small>
					</Col>
				</Row>
			</div>

			<div className='redirect-box text-center'>
				Have an account? <Link to='/login'>Log in</Link>
			</div>
		</div>
	);
}

export default Signup;
