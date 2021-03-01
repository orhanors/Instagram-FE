import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileArea from '../../components/profile/PostsArea';

function Profile(props) {
	return(
		<div>
			<ProfileInfo/>
			<ProfileArea/>
		</div>
	);
}

export default Profile;
