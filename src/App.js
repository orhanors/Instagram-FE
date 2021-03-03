import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import React,{useEffect,useState} from "react";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home/Home";
import StickyBox from "react-sticky-box";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./customComponents/ProtectedRoute";

import backend from "./helpers/client";
function App(props) {
	const [posts,setPosts] = useState('')
	const getSomething = async () => {
		

		const response = await backend({url:"/posts/all/me/posts",method:"get"})
		setPosts(response.data)
		
		//  const response = await backend({ url: "/users/me",method:"get" });


		// console.log("APP response is: ", response.data);
	};
	useEffect(()=>{
		getSomething()
		console.log("heeeyy")
	  },[])

	return (
		<div>
			<Router>
				<StickyBox style={{ zIndex: "99" }}>
					<NavBar />
				</StickyBox>
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/' exact component={Home} />
				<Route path='/me' component={Profile} exact />
			</Router>
		</div>
	);
}
export default App;
