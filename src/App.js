import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import React from "react";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home/Home";
import StickyBox from "react-sticky-box";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./customComponents/ProtectedRoute";

function App(props) {
	return (
		<div>
			<Router>
				<StickyBox style={{ zIndex: "99" }}>
					<NavBar />
				</StickyBox>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<ProtectedRoute path='/' exact component={Home} />
				<ProtectedRoute path='/me' component={Profile} exact />
			</Router>
		</div>
	);
}
export default App;
