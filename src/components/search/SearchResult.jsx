import React, { useEffect } from "react";
import "./SearchResult.scss";
import { Row, Col } from "react-bootstrap";

const SearchResult = (props) => {
	return (
		<div className='res-container'>
			<Row>
				<Col>
					<img src={props.image} className='img' />
				</Col>
				<Col className='text'>
					<h6 className='h6'>{props.username}</h6>
					<p className='p'>{props.name}</p>
				</Col>
			</Row>
		</div>
	);
};

export default SearchResult;
