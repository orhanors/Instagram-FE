import React, { useState } from "react";
import "./postCart.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "../postModal/Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PostCart = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Col className="cart" xs={12} md={6} lg={4} onClick={openModal}>
      <img src={img} id="myImg" />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <span className="overlay-icons" style={{ margin: "0 auto" }}>
        <AiFillHeart className="heart-outline" />
        31
        <FaComment className="play ml-4" />5
      </span>
    </Col>
  );
};

export default PostCart;
