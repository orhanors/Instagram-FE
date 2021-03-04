import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import React, { useEffect } from "react";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home/Home";
import StickyBox from "react-sticky-box";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./customComponents/ProtectedRoute";

import backend from "./helpers/client";
import Message from "./pages/message/Message";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshTrue } from "./store/refresh";
function App(props) {
	const dispatch = useDispatch();
	dispatch(setRefreshTrue());

	const { refresh } = useSelector((state) => state);

	console.log("refresh is: ", refresh);
	const getUsers = async () => {
		const response = await backend({ url: "/users/" });

		console.log("APP response is: ", response.data);
	};

	return (
		<div>
			<Router>
				<StickyBox style={{ zIndex: "99" }}>
					<NavBar />
				</StickyBox>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<ProtectedRoute path='/' exact component={Home} />
				<ProtectedRoute path='/message' exact component={Message} />
				<ProtectedRoute path='/:user' exact component={Profile} />
			</Router>
		</div>
	);
}
export default App;
