import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.scss";
import {IoIosSettings} from 'react-icons/io'

const ProfileInfo = () => {
  return (
    <Container className="container">
      <Row>
        <Col xs={3}>
          <img src="http://placehold.it/70x70" className="profile-img" />
        </Col>
        <Col xs={8} mt-4>
          <Row className="firstRow">
            <p className="username">username</p>
            <button className="editProfie-btn">
              <strong>Edit Profile</strong>
            </button>
            <IoIosSettings className='settings-btn'/>
          </Row>
          <Row className='firstRow'>
            <p><strong>5</strong> posts</p>
            <p><strong>110</strong> followers</p>
            <p><strong>100</strong> following</p>
          </Row>
          <Row className="firstRow">
            <p><strong>name</strong></p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
