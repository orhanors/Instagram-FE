import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
function App(props) {
	return (
		<div>
			<Router>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
			</Router>
		</div>
	);
}

export default App;
