import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/user";

function UserInfoNavbar(props) {
	const currentUser = useSelector((state) => state.user.data);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout());
		props.setShowFalse();
	};
	return (
		<>
			<div ref={props.popupRef} className='nav-popup-container'>
				<ul>
					<Row>
						<Col md={12}>
							<li
								className='d-flex pt-2'
								onClick={() => {
									props.setShowFalse();
									history.push(`/${currentUser?.username}`);
								}}>
								<svg
									aria-label='Profile'
									className='li-icons mr-2 mt-1'
									fill='#262626'
									height={16}
									viewBox='0 0 32 32'
									width={16}>
									<path d='M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z' />
								</svg>
								<p>Profile</p>
							</li>
						</Col>
						<Col md={12}>
							<li
								className='d-flex pt-2'
								onClick={() => {
									props.setShowFalse();
									history.push(`/${currentUser?.username}`);
								}}>
								<svg
									aria-label='Saved'
									className='li-icons mr-2 mt-1'
									fill='#262626'
									height={16}
									viewBox='0 0 32 32'
									width={16}>
									<path d='M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z' />
								</svg>
								<p>Saved</p>
							</li>
						</Col>
						<Col md={12}>
							<li className='d-flex pt-2'>
								<svg
									aria-label='Settings'
									className='li-icons mr-2 mt-1'
									fill='#262626'
									height={16}
									viewBox='0 0 32 32'
									width={16}>
									<path d='M31.2 13.4l-1.4-.7c-.1 0-.2-.1-.2-.2v-.2c-.3-1.1-.7-2.1-1.3-3.1v-.1l-.2-.1v-.3l.5-1.5c.2-.5 0-1.1-.4-1.5l-1.9-1.9c-.4-.4-1-.5-1.5-.4l-1.5.5H23l-.1-.1h-.1c-1-.5-2-1-3.1-1.3h-.2c-.1 0-.1-.1-.2-.2L18.6.9c-.2-.5-.7-.9-1.2-.9h-2.7c-.5 0-1 .3-1.3.8l-.7 1.4c0 .1-.1.2-.2.2h-.2c-1.1.3-2.1.7-3.1 1.3h-.1l-.1.2h-.3l-1.5-.5c-.5-.2-1.1 0-1.5.4L3.8 5.7c-.4.4-.5 1-.4 1.5l.5 1.5v.5c-.5 1-1 2-1.3 3.1v.2c0 .1-.1.1-.2.2l-1.4.7c-.6.2-1 .7-1 1.2v2.7c0 .5.3 1 .8 1.3l1.4.7c.1 0 .2.1.2.2v.2c.3 1.1.7 2.1 1.3 3.1v.1l.2.1v.3l-.5 1.5c-.2.5 0 1.1.4 1.5l1.9 1.9c.3.3.6.4 1 .4.2 0 .3 0 .5-.1l1.5-.5H9l.1.1h.1c1 .5 2 1 3.1 1.3h.2c.1 0 .1.1.2.2l.7 1.4c.2.5.7.8 1.3.8h2.7c.5 0 1-.3 1.3-.8l.7-1.4c0-.1.1-.2.2-.2h.2c1.1-.3 2.1-.7 3.1-1.3h.1l.1-.1h.3l1.5.5c.1 0 .3.1.5.1.4 0 .7-.1 1-.4l1.9-1.9c.4-.4.5-1 .4-1.5l-.5-1.5V23l.1-.1v-.1c.5-1 1-2 1.3-3.1v-.2c0-.1.1-.1.2-.2l1.4-.7c.5-.2.8-.7.8-1.3v-2.7c0-.5-.4-1-.8-1.2zM16 27.1c-6.1 0-11.1-5-11.1-11.1S9.9 4.9 16 4.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z' />
								</svg>
								<p>Settings</p>
							</li>
						</Col>
						<hr />
						<Col md={12}>
							<li className='d-flex pt-2' onClick={handleLogout}>
								<p>Logout</p>
							</li>
						</Col>
					</Row>
				</ul>
			</div>
		</>
	);
}

export default UserInfoNavbar;
