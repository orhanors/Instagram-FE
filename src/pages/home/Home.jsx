import React, { useEffect } from "react";
import "./home.scss";
import Feed from "../../components/feed/Feed";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import NewPost from "../../components/newpost/NewPost";
import StickyBox from "react-sticky-box";



function Home(props) {
	return (
		<div className='container'>
			<div className='d-flex'>
			<div className='col-8'>
				<Feed/>
				<NewPost />
				<Posts />
			</div>
				<div className='col-4 mt-4' >
					<SideBar/>
				</div>
			</div>
			
		</div>
	);
}

export default Home;
