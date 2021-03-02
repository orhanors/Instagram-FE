import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.scss";
import { IoIosSettings } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from 'react-icons/hi'

const ProfileInfo = () => {
  let [me, setMe] = useState(false);
  let [following, setFollowing] = useState(false);

  return (
    <Container className="container">
      <Row>
        <Col xs={11} md={3}>
          <img src="http://placehold.it/70x70" className="profile-img" />
        </Col>
        <Col xs={11} md={8} mt-4>
          <Row className="firstRow">
            <p className="username">username</p>
            {me && (
              <>
                <button className="editProfie-btn">
                  <strong>Edit Profile</strong>
                </button>
                <IoIosSettings className="settings-btn" />
              </>
            )}
            {(following ) ? ( !me &&
              <div className="following-btns">
                <button className="message-btn">Message</button>
                <button className="following">
                  <FaUserCheck />
                </button>
                <button className="sugested">
                  <IoMdArrowDropdown />
                </button>
                <HiDotsHorizontal/>
              </div>
            ) : (
              !me && <div className="follow-btns">
                <button className="follow-btn">Follow</button>
                <button className="more">
                  <IoMdArrowDropdown />
                </button>
                <HiDotsHorizontal/>
              </div>
            )}
            
          </Row>
          <Row className="firstRow">
            <p>
              <strong>5</strong> posts
            </p>
            <p>
              <strong>110</strong> followers
            </p>
            <p>
              <strong>100</strong> following
            </p>
          </Row>
          <Row className="firstRow">
            <p>
              <strong>name</strong>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
