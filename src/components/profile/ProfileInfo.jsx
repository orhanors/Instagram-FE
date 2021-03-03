import React, { useState } from "react";
import {useSelector} from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.scss";
import { IoIosSettings } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from 'react-icons/hi';
import backend from "../../helpers/client";
import {withRouter} from 'react-router-dom';
import { useEffect } from "react";

const ProfileInfo = (props) => {

  let [me, setMe] = useState(false);
  let [following, setFollowing] = useState(false);
  let [users, setUsers] = useState([]);
  let [currentUser, setCurrentUser] = useState(null);
  let [noOfPosts, setNoOfPosts] = useState(0);

  const loggedInUser = useSelector((state) => state.user.data);
  //console.log('current user: ',currentUser)

  useEffect(()=>{
    console.log('the user the we choose is: ', props.match.params.user)
    getUsers();
  }, [])

  useEffect(()=>
  getCurrentUser(), [users])

  useEffect(()=>setCurrentUser(getCurrentUser), [props.match.params.user])

  const getUsers = async () => {
    const response = await backend({ url: "/users/" });

    console.log("users: ", response.data);
    setUsers(response.data);
  };

  const getCurrentUser = async () => {
		let result = users.filter(user => user.username == props.match.params.user)
      console.log('filtered result: ', result)
      setCurrentUser(result);
      return result;
	};

  return (
    <Container className="container">
    {currentUser && 
      <Row>
        <Col xs={11} md={3}>
          <img src={currentUser[0] && currentUser[0].image} className="profile-img" />
        </Col>
        <Col xs={11} md={8} mt-4>
          <Row className="firstRow">
            <p className="username">{currentUser[0] && currentUser[0].username}</p>
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
              <strong>{currentUser[0] && currentUser[0].name}</strong>
            </p>
          </Row>
        </Col>
      </Row>}
    </Container>
  );
};

export default withRouter(ProfileInfo);
