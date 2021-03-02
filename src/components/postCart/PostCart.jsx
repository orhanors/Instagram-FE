import React from "react";
import "./postCart.scss";
import {AiFillHeart} from 'react-icons/ai';
import {FaComment} from 'react-icons/fa';
import {Col} from 'react-bootstrap';

const PostCart = () => {
  return (
    <Col className="cart" xs={12} md={6} lg={4}>
      <img src="http://placehold.it/50x50" />
      <span className="overlay-icons" style={{ margin: "0 auto" }}>
        <AiFillHeart className="heart-outline" />31
        <FaComment className="play ml-4" />5
      </span>
    </Col>
  );
};

export default PostCart;
