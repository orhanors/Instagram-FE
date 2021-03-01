import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import React from "react";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home/Home";
import StickyBox from "react-sticky-box";

function App(props) {
	return (
		<div>
			<Router>
				<StickyBox style={{ zIndex: "99" }}>
					<NavBar />
				</StickyBox>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/' exact component={Home} />
			</Router>
		</div>
	);
}

export default App;
