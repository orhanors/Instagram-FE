import React, { useEffect } from "react";
import "./home.scss";
import Feed from "../../components/feed/Feed";
import Posts from "../../components/post/Posts";
import SideBar from "../../components/sidebar/SideBar";

function Home(props) {
	return (
		<div className='container'>
			<div className='d-flex'>
				<Feed />
				<div className='col-4 mt-5'>
					<SideBar />
				</div>
			</div>
			<Posts />
		</div>
	);
}

export default Home;
