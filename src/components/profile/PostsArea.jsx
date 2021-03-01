import React from 'react';
import "./Profile.scss";
import { Container, Row, Col } from 'react-bootstrap';
import {MdGridOn} from 'react-icons/md';
import {FiMonitor} from 'react-icons/fi';
import {BiBookmark} from 'react-icons/bi';
import {BiUserPin} from 'react-icons/bi';

const PostsArea = () => {
    return (
        <Container className="container">
            <hr />
            <Row className="items-container">
            <div className="item">
                <MdGridOn/> POSTS
            </div>
            <div className="item">
                <FiMonitor/>IGTV
            </div>
            <div className="item">
                <BiBookmark/> SAVED
            </div>
            <div className="item">
                <BiUserPin/>TAGGED
            </div>
            </Row>
            
            <div className="imgs-container">
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            <Col className='post' lg={4}>
                <img src="http://placehold.it/80x100" />
            </Col>
            </div>
        </Container>
    );
};

export default PostsArea;