import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import React,{useEffect} from "react";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home/Home";
import StickyBox from "react-sticky-box";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./customComponents/ProtectedRoute";

import backend from "./helpers/client";
import Message from "./pages/message/Message";
function App(props) {

	




	const getUsers = async () => {
		const response = await backend({ url: "/users/" });

		console.log("APP response is: ", response.data);
	};

	useEffect(()=>getUsers(), [])


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
				<ProtectedRoute path='/me' component={Profile} exact />
			</Router>
		</div>
	);
}
export default App;
