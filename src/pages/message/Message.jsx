import React, { useEffect, useState } from "react";
import "./message.scss";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import io from "socket.io-client";
import { useSelector } from "react-redux";
const connOpt = {
	transports: ["websocket"], // socket connectin options
};
let socket = io("http://localhost:3001", connOpt);
function Message(props) {
	const currentUser = useSelector((state) => state.user.data);

	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [chatList, setChatList] = useState([]);
	const [receiver, setReceiver] = useState("");
	const setInitialChatList = () => {
		const userNames = [];

		for (let follower of currentUser.followers) {
			userNames.push(follower.username);
		}
		setChatList(userNames);
	};
	useEffect(() => {
		socket.on("connect", () => console.log("connected to socket")); //check if socket is connected
		if (currentUser.followers) {
			setInitialChatList();
		}
		return () => socket.removeAllListeners(); //componentWillUnmount
	}, [currentUser]);

	const handleMessage = (e) => {
		if (e.keyCode === 13) {
			console.log("pressed enter");
			socket.emit("sendMessage", message);

			socket.on("message", (data) => {
				console.log("message_received data: ", data);
				const newMessages = [...messages];
				newMessages.push(data);
				setMessages(newMessages);
			});
			setMessage("");
		} else {
			setMessage(e.target.value);
		}
	};
	const startConversation = (e) => {
		socket.emit("leaveRoom", currentUser.username + "@" + receiver);
		setReceiver(e.target.id);

		if (e.target.id === receiver) {
			const roomName = currentUser.username + "@" + receiver;
			socket.emit("join", roomName);
		}
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
										<h4 className='text-center'>
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
											<li
												key={user}
												id={user}
												onClick={startConversation}>
												{user}
											</li>
										);
									})}
									<li id='enith' onClick={startConversation}>
										enith
									</li>
								</div>
							</Col>
						</Row>
					</Col>

					<Col md={8}>
						<Row>
							<Col md={12}>
								<div className='message-box'>
									{messages.map((message) => {
										return <p>{message}</p>;
									})}
								</div>
							</Col>
							<Col md={12}>
								<div className='message-input-container'>
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
										placeholder='Message...'
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
