import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileArea from '../../components/profile/PostsArea';
import Footer from '../../components/footer/Footer';

function Profile(props) {
	return(
		<div>
			<ProfileInfo/>
			<ProfileArea/>
			<Footer/>
		</div>
	);
}

export default Profile;
