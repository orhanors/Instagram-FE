import React, { useEffect, useState } from "react";
import "./message.scss";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import backend from "../../helpers/client";
import { uniqueArray } from "./message.helpers";
import useStateWithCallback, {
	useStateWithCallbackLazy,
} from "../../helpers/useStateWithCallback";
const connOpt = {
	transports: ["websocket"], // socket connectin options
};
let socket = io("http://localhost:3001", connOpt);
function Message(props) {
	const currentUser = useSelector((state) => state.user.data);

	const [chatList, setChatList] = useState([]);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [conversations, setConversations] = useState([]);
	const [receiver, setReceiver] = useState("");
	const [isUserSelected, setIsUserSelected] = useState(false);

	useEffect(() => {
		getConversations();
	}, []);
	useEffect(() => {
		getUsersFromConversations();
	}, [conversations]);
	useEffect(() => {
		if (currentUser._id) {
			socket.emit("startMessaging", { sender: currentUser._id });
			//check if socket is connected

			socket.on("connect", () => {
				console.log("🚀  connected to socket");
			});
		}
		return () => socket.removeAllListeners(); //componentWillUnmount
	}, [currentUser._id]);
	const handleMessage = (e) => {
		const newMessages = [];
		if (e.keyCode === 13) {
			const sender = currentUser._id;
			const msg = message;
			socket.emit("privateMessage", { sender, receiver, msg });
			socket.on("message", (msg) => {
				setMessages([...messages, msg]);
			});
			setMessage("");
		} else {
			setMessage(e.target.value);
		}
	};
	const getConversations = async () => {
		const response = await backend({ url: "/conversations" });
		setConversations(response.data);
	};

	const getUsersFromConversations = async () => {
		const newChatList = [];
		for (let conversation of conversations) {
			let userIds = conversation.name.split("@");
			for (let userId of userIds) {
				if (userId !== currentUser._id) {
					const response = await backend({ url: `/users/${userId}` });
					const newUser = response.data;
					newChatList.push(newUser);
					console.log("new user is: ", newUser);
					setChatList(newChatList);
				}
			}
		}
	};
	const getPreviousMessages = async (receiverId) => {
		const response = await backend({
			url: `/conversations/messages/${receiverId}`,
		});
		setMessages(response.data);
	};
	const startConversation = async (e) => {
		setIsUserSelected(true);
		setReceiver(e.target.id);

		await getPreviousMessages(e.target.id);
		const sender = currentUser._id;
		const receiver = e.target.id;

		if (currentUser._id) {
			socket.emit("joinConversation", {
				sender,
				receiver,
			});
		}
		const response = await backend({
			url: `/conversations/messages/${receiver}`,
		});
		setMessages(response.data);
	};

	const userMessageCard = (user) => {
		return (
			<div
				onClick={startConversation}
				name={user}
				id={user._id}
				className='msg-user-container d-flex flex-row mb-3'>
				<img
					className='user-msg-img'
					alt='user-msg'
					src={user.image}
					style={{
						borderRadius: "50%",
						width: "20%",
						height: "20%",
						marginRight: "4%",
					}}
				/>
				<div className='username-container'>
					<p className='mt-2'>{user.username}</p>
				</div>
			</div>
		);
	};
	return (
		<div className='message-container'>
			<Container>
				<Row>
					<Col md={4}>
						<Row>
							<Col md={12}>
								<div className='message-info'>
									<div>
										<h4
											onClick={getUsersFromConversations}
											className='text-center'>
											{currentUser.username}
										</h4>
										<div></div>
									</div>
								</div>
							</Col>
							<Col md={12}>
								<div className='message-people'>
									{chatList.map((user) => {
										return (
											<div key={user._id}>
												{" "}
												{userMessageCard(user)}
											</div>
										);
									})}
								</div>
							</Col>
						</Row>
					</Col>

					<Col md={8}>
						<Row className='message-right-container'>
							<Col md={12}>
								<div className='message-box'>
									{messages.map((message) => {
										return message.sender ===
											currentUser._id ? (
											<p className='current-user-msg'>
												{message.msg}
											</p>
										) : (
											<p className='other-user-msg'>
												{message.msg}
											</p>
										);
									})}
								</div>
							</Col>
							<Col md={12}>
								<div
									className={
										isUserSelected
											? "message-input-container"
											: "message-input-container d-none"
									}>
									<svg
										aria-label='Emoji'
										className='smiley '
										fill='#262626'
										height='24'
										viewBox='0 0 48 48'
										width='24'>
										<path d='M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z'></path>
										<path d='M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z'></path>
									</svg>

									<input
										type='text'
										value={message}
										onChange={handleMessage}
										onKeyDown={handleMessage}
										className='message-input'
										placeholder='Message....'
									/>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Message;
