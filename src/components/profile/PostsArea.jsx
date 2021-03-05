import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { Container, Row, Col } from "react-bootstrap";
import PostCart from "../postCart/PostCart";
import { MdGridOn } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import backend from "../../helpers/client";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import UserPostLoader from "../../loaders/UserPostLoader";

const PostsArea = (props) => {
	const [activeItem, setActiveItem] = useState("POSTS");

	let [users, setUsers] = useState([]);
	let [currentUser, setCurrentUser] = useState({ _id: 0 });
	let [allPosts, setAllPosts] = useState([]);
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		console.log("the user the we choose is: ", props.match.params.user);
		getUsers();
	}, []);

	useEffect(() => getCurrentUser(), [users]);

	useEffect(async () => {
		let current = await getCurrentUser();
		setCurrentUser(current);
	}, [props.match.params.user]);

	useEffect(async () => {
		try {
			console.log("current user: ", currentUser._id);
			currentUser._id && getUsersPosts(currentUser._id);
		} catch (err) {
			console.log(err);
		}
	}, [currentUser]);

	const getUsers = async () => {
		const response = await backend({ url: "/users/" });

		//console.log("users: ", response.data);
		setUsers(response.data);
	};

	const getCurrentUser = async () => {
		let result = users.filter(
			(user) => user.username == props.match.params.user
		);
		//console.log("filtered result: ", result[0]);
		setCurrentUser(result[0]);
		return result;
	};

	const getUsersPosts = async (id) => {
		let allPosts = await backend({ url: `/posts/all/${id}` });
		setLoading(false);
		console.log(
			"😫😫😫😫😫😫😫😫😫😫😫\nall posts of this user: ",
			allPosts.data
		);
		setAllPosts(allPosts.data);
	};

	return (
		<Container className='container'>
			<hr />
			<Row className='items-container'>
				<div
					className='active-item'
					onClick={() => setActiveItem("POSTS")}>
					<MdGridOn /> <p>POSTS</p>
				</div>
				<div className='item' onClick={() => setActiveItem("IGTV")}>
					<FiMonitor />
					<p>IGTV</p>
				</div>
				<div className='item' onClick={() => setActiveItem("SAVED")}>
					<BiBookmark /> <p>SAVED</p>
				</div>
				<div className='item' onClick={() => setActiveItem("TAGGED")}>
					<BiUserPin />
					<p>TAGGED</p>
				</div>
			</Row>

			{loading ? (
				<UserPostLoader />
			) : (
				<Row className='imgs-container'>
					{allPosts.map((post) => {
						return <PostCart img={post.image} post={post} />;
					})}
				</Row>
			)}
		</Container>
	);
};

export default withRouter(PostsArea);
