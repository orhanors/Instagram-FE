import React, { useState, useEffect } from "react";
import "./notification.scss";
import backend from "../../helpers/client";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Notification(props) {
	const history = useHistory();
	const currentUser = useSelector((state) => state.user.data);
	const [allNotifies, setAllNotfies] = useState([]);
	const [follows, setFollows] = useState([]);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getAllNotifications();
	}, []);

	const getAllNotifications = async () => {
		const response = await backend({ url: "/users/notifications/show" });
		const notifications = response.data;
		setFollows(notifications.follows);
		setPosts(notifications.posts);
		setAllNotfies(
			notifications.posts
				.concat(notifications.follows)
				.sort((a, b) => a.time - b.time)
		);
	};

	const followerNotification = (notify) => {
		const isFollowing = currentUser.following.find(
			(user) => notify.id === user._id
		);
		return (
			<li
				key={notify._id}
				id={notify._id}
				className='d-flex justify-content-between mb-3'>
				<div className='d-flex'>
					<img
						alt='usr'
						className='mr-2'
						src={notify.image}
						style={{
							width: 40,
							height: 40,
							borderRadius: "50%",
						}}
					/>
					<div className='d-flex mt-2 '>
						<strong
							onClick={() => history.push(`/${notify.username}`)}
							className='mr-1'>
							{notify.username}
						</strong>
						<p>started following you</p>
					</div>
				</div>
				<div>
					{isFollowing ? (
						<button className='follow-btn mt-1'>Follow</button>
					) : (
						"following"
					)}
				</div>
			</li>
		);
	};
	return (
		<>
			<div ref={props.popupRef} className='notification-container'>
				<div className='notifications'>
					<ul>
						{allNotifies.map((notify) => {
							return (
								<>
									{notify.like
										? ""
										: followerNotification(notify)}
								</>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Notification;
