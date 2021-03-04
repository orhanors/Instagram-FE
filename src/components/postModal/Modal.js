import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Row, Col, FormControl } from "react-bootstrap";
import "./Modal.scss";
import "../posts/Posts.jsx";
import { AiOutlineHeart } from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/ti";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 0px;
  z-index: 100;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 95.6%;
  border-radius: 0px 0 0 0px;
  background: #000;
  z-index: 100;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  z-index: 100;

  p {
    margin-bottom: 1rem;
  }

  
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
`;

export const Modal = ({ showModal, setShowModal,data }) => {
  const modalRef = useRef();

  let[newShow, setNewShow] = useState(true);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
      setNewShow(false);
      setShowModal(false);
      if (modalRef.current === e.target) {
        setNewShow(false);
        setShowModal(false);
      }
    };

  // const closeModal = (e) => {
  //   setShowModal(false);
  //   if (modalRef.current === e.target) {
  //     setShowModal(false);
  //   }
  // };

  // const closeModal = useCallback(
  //   (e) => {
  //     setShowModal(false);
  //     console.log('show from closeModal: ', showModal);
  //   }, [setShowModal, showModal]
  // );

  // useEffect(() => {
  //   document.addEventListener("click", closeModal);
  //   return () => document.removeEventListener("click", closeModal);
  // }, [closeModal]);

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("keyboard event is: ", e);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {(showModal && newShow) ? (
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <Row>
                <Col xs={8}>
                  <ModalImg src={data.image} alt="camera" />
                </Col>
                <Col xs={4}>
                  <ModalContent>
                    <>
                      <div className="user-info">
                        <img src="http://placehold.it/100x100" />
                        <p>
                          <strong>{data.user.username}</strong>
                        </p>
                      
                      </div>
                      {data.description &&
                       <div className="user-info ml-5">
                       <img src={data.user.image} />
                       
                       <p>
                         <strong>{data.user.username}</strong>
                         <span className="comment-content">{data.description}</span>
                        
                       </p>
                       <hr />
                     </div>
                      }
                      
                     
                      <div className="display-comment">
                      {data && data.comments.map((comment)=>{
                            return(
                              <div className="user-info">
                              <img src={data.user.image} />
                              
                              <p>
                                <strong>{comment.user.username}</strong>
                                <span className="comment-content">{comment.content}</span>
                                <AiOutlineHeart className="comment-heart" />
                                <TiDeleteOutline className="comment-delete" />
                              </p>
                              <hr />
                            </div>
                            )
                          })}
                      
                      </div>
                      <hr />
                      <div className="leave-comment">
                        <div className="icons">
                          <Row>
                            <Col xs={9}>
                              <svg
                                className="mr-4"
                                aria-label="Like"
                                fill="#262626"
                                height="20"
                                viewBox="0 0 48 48"
                                width="20"
                              >
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                              </svg>
                              <svg
                                className="mr-4"
                                aria-label="Comment"
                                fill="#262626"
                                height="20"
                                viewBox="0 0 48 48"
                                width="20"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                              <svg
                                aria-label="Share Post"
                                fill="#262626"
                                height="20"
                                viewBox="0 0 48 48"
                                width="20"
                              >
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                              </svg>
                            </Col>
                            <Col xs={2}>
                              <svg
                                aria-label="Save"
                                class="_8-yf5 ml-5 "
                                fill="#262626"
                                height="20"
                                viewBox="0 0 48 48"
                                width="20"
                              >
                                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                              </svg>
                            </Col>
                          </Row>
                          <Row>
                            <p className="num-of-likes">
                              <strong>{data.likes.length} likes</strong>
                            </p>
                            <p className="day-ago">5 days ago</p>
                          </Row>
                        </div>
                      <div className="add-comment">
                        <div className="footer d-flex align-items-center justify-content-between px-3 pb-2">
                          <div className="d-flex align-items-center">
                            <svg
                              aria-label="Emoji"
                              class="_8-yf5 "
                              fill="#262626"
                              height="24"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                            </svg>
                            <FormControl
                              placeholder="Add a comment"
                              className="comment"
                            />
                          </div>
                          <button className="comment-button">Post</button>
                        </div>
                      </div>
                      </div>
                    </>
                  </ModalContent>
                  <CloseModalButton aria-label="Close modal" onClick={closeModal}/>
                </Col>
              </Row>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
