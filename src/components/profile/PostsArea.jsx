import React, { useState } from "react";
import "./Profile.scss";
import { Container, Row, Col } from "react-bootstrap";
import PostCart from "../postCart/PostCart";
import { MdGridOn } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";

const PostsArea = () => {
  const [activeItem, setActiveItem] = useState("POSTS");

  return (
    <Container className="container">
      <hr />
      <Row className="items-container">
        <div className="active-item" onClick={() => setActiveItem("POSTS")}>
          <MdGridOn /> <p>POSTS</p>
        </div>
        <div className="item" onClick={() => setActiveItem("IGTV")}>
          <FiMonitor />
          <p>IGTV</p>
        </div>
        <div className="item" onClick={() => setActiveItem("SAVED")}>
          <BiBookmark /> <p>SAVED</p>
        </div>
        <div className="item" onClick={() => setActiveItem("TAGGED")}>
          <BiUserPin />
          <p>TAGGED</p>
        </div>
      </Row>

      <Row className="imgs-container">
          <PostCart />
          <PostCart />
          <PostCart />
          <PostCart />
          <PostCart />
          <PostCart />
      </Row>
    </Container>
  );
};

export default PostsArea;
