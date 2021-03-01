import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/nav-bar/NavBar"
import Home from "./pages/home/Home"
import StickyBox from "react-sticky-box"

function App(props) {
	return <div>
		<StickyBox style={{zIndex: "99"}}>
			<NavBar />

		</StickyBox>
		<div>
			<Home />
		</div>
	</div>;
}

export default App;
