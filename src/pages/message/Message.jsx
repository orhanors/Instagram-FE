import React from "react";
import "./message.scss";
import { Container, Row, Col, FormControl } from "react-bootstrap";
function Message(props) {
	return (
		<div className='message-container'>
			<Container>
				<Row>
					<Col md={4}>
						<Row>
							<Col md={12}>
								<div className='message-info'></div>
							</Col>
							<Col md={12}>
								<div className='message-people'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit.
								</div>
							</Col>
						</Row>
					</Col>

					<Col md={8}>
						<Row>
							<Col md={12}>
								<div className='message-box'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit. Lorem
									ipsum, dolor sit amet consectetur
									adipisicing elit. Necessitatibus, saepe
									maiores adipisci accusantium corporis
									exercitationem, soluta ea id nisi at minima
									aspernatur iusto tempora! Quidem similique
									quod non sit consectetur. Lorem ipsum, dolor
									sit amet consectetur adipisicing elit.
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
