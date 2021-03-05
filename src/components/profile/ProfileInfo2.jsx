import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import EditProfile from "./EditProfile";
import EditPicture from "./EditPicture";
import { IoIosSettings } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import backend from "../../helpers/client";
import { withRouter } from "react-router-dom";
import { getSearchedUser, removeSearchedUser } from "../../store/searchedUser";
function ProfileInfo2(props) {
	const dispatch = useDispatch();
	let [me, setMe] = useState(false);
	let [following2, setFollowing2] = useState([]);
	let [openModal, setOpenModal] = useState(false);
	let [openImageModal, setOpenImageModal] = useState(false);
	let [users, setUsers] = useState([]);
	let [following, setFollowing] = useState(false);
	let [allPosts, setAllPosts] = useState([]);
	let [followers, setFollowers] = useState([]);
	let [path, setPath] = useState("");

	const [fetch, setFetch] = useState(true);
	const loggedInUser = useSelector((state) => state.user.data);
	const currentUser = useSelector((state) => state.searchedUser.data);
	const { loading } = useSelector((state) => state.searchedUser);
	const follow = async () => {
		const username = props.match.params.user;
		const response = await backend({
			url: `/users/follow/${currentUser._id}`,
			method: "post",
			data: currentUser,
		});
		setFollowing(true);
		dispatch(getSearchedUser(username));
		console.log("✅✅✅", followers);
	};

	const unfollow = async () => {
		const username = props.match.params.user;
		const response = await backend({
			url: `/users/unfollow/${currentUser._id}`,
			method: "delete",
		});
		setFollowing(false);
		dispatch(getSearchedUser(username));
		console.log("❌❌❌ss", response.data);
	};
	const getUsersPosts = async (id) => {
		let allPosts = await backend({ url: `/posts/all/${id}` });
		console.log("all posts of this user: ", allPosts.data);
		setAllPosts(allPosts.data);
	};
	const handlePageState = async () => {
		const username = props.match.params.user;
		dispatch(getSearchedUser(username));

		if (loggedInUser.username === props.match.params.user) {
			setMe(true);
			setFollowers(loggedInUser.followers);
			setFollowing2(loggedInUser.following);
			await getUsersPosts(loggedInUser._id);
		} else {
			setMe(false);
			setFollowers(currentUser.followers);
			setFollowing2(currentUser.following);
			await getUsersPosts(currentUser._id);
		}
	};
	useEffect(() => {
		getUsersPosts(currentUser._id);
	}, [allPosts]);

	useEffect(() => {
		if (currentUser.username !== props.match.params.user) {
			handlePageState();
		}
	}, [props.match.params.user]);

	return (
		<Container className='container'>
			{currentUser && (
				<Row>
					<Col xs={11} md={3}>
						{me ? (
							<img
								alt='usr'
								src={loggedInUser?.image}
								className='profile-img'
								onClick={() => setOpenImageModal(true)}
								user={loggedInUser}
							/>
						) : (
							<img
								alt='usr'
								src={currentUser?.image}
								className='profile-img'
							/>
						)}
					</Col>
					<Col xs={11} md={8} mt-4>
						<Row className='firstRow'>
							<p className='username'>
								{currentUser && currentUser.username}
							</p>
							{me && (
								<>
									<EditProfile
										showModal={openModal}
										className='editProfie-btn'
										onClick={() => setOpenModal(true)}
										user={currentUser}
									/>
									<EditPicture showModal={openImageModal} />
									<IoIosSettings className='settings-btn' />
								</>
							)}
							{following
								? !me && (
										<div className='following-btns'>
											<button className='message-btn'>
												Message
											</button>
											<button
												className='following'
												onClick={unfollow}>
												<FaUserCheck />
											</button>
											<button className='sugested'>
												<IoMdArrowDropdown />
											</button>
											<HiDotsHorizontal />
										</div>
								  )
								: !me && (
										<div className='follow-btns'>
											<button
												className='follow-btn'
												onClick={follow}>
												Follow
											</button>
											<button className='more'>
												<IoMdArrowDropdown />
											</button>
											<HiDotsHorizontal />
										</div>
								  )}
						</Row>
						<Row className='firstRow'>
							<p>
								<strong>{allPosts.length}</strong> posts
							</p>
							<p>
								<strong>
									{currentUser?.followers?.length}
								</strong>{" "}
								followers
							</p>
							<p>
								<strong>
									{currentUser?.following?.length}
								</strong>{" "}
								following
							</p>
						</Row>
						<Row className='firstRow'>
							<p>
								<strong>
									{currentUser[0] && currentUser[0].name}
								</strong>
							</p>
						</Row>
					</Col>
				</Row>
			)}
		</Container>
	);
}

export default withRouter(ProfileInfo2);
