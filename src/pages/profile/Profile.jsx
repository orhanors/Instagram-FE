import React from "react";
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
