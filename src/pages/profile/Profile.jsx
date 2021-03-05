import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import ProfileInfo2 from "../../components/profile/ProfileInfo2";
import ProfileArea from "../../components/profile/PostsArea";
import Footer from "../../components/footer/Footer";

function Profile(props) {
	return (
		<div>
			<ProfileInfo2 />
			<ProfileArea />
			<Footer />
		</div>
	);
}

export default Profile;
