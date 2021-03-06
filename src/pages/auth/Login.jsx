import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";
import OAuth from "./OAuth";
import "./auth.scss";

import logo_text from "../../assets/inst_logo_text.png";
import { Row, Col } from "react-bootstrap";
import { isAuthUser } from "../../helpers/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, login } from "../../store/user";
function Login(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.user);

	useEffect(() => {
		if (isAuthUser()) {
			history.push("/");
		}
	}, []);
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrorMsg("");
	};
	const [errorMsg, setErrorMsg] = useState("");

	const { username, password } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isEmpty(username) || isEmpty(password)) {
			setErrorMsg("All fields are required");
		} else {
			let { username, password } = formData;
			let body = { username, password };
			dispatch(login(body));

			setTimeout(() => {
				dispatch(getUserProfile());
				history.push("/");
			}, 1000);
		}
	};

	const showSignupForm = () => {
		return (
			<div className='container'>
				<div className='row'>
					<input
						onChange={handleFormChange}
						value={username}
						name='username'
						className='auth-input col-md-12 mb-3 '
						type='text'
						placeholder='Username'
					/>

					<input
						onChange={handleFormChange}
						value={password}
						name='password'
						className='auth-input col-md-12 mb-3 '
						type='password'
						placeholder='Password'
					/>

					<input
						onClick={handleSubmit}
						className='auth-input submit-btn col-md-12 mb-3 '
						type='submit'
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
				Don't have an account? <Link to='/signup'>Sign up</Link>
			</div>
		</div>
	);
}

export default Login;
