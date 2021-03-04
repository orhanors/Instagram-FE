import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.scss";
import { IoIosSettings } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import backend from "../../helpers/client";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const ProfileInfo = (props) => {
  let [me, setMe] = useState(false);
  let [following, setFollowing] = useState(false);
  let [users, setUsers] = useState([]);
  let [currentUser, setCurrentUser] = useState({ _id: 0 });
  let [allPosts, setAllPosts] = useState([]);
  let [followers, setFollowers] = useState(0);
  let [following2, setFollowing2] = useState(0);

  const loggedInUser = useSelector((state) => state.user.data);
  //console.log('current user: ',currentUser)

  useEffect(() => {
    console.log("the user the we choose is: ", props.match.params.user);
    getUsers();
  }, []);

  //   function user() {
  //     if(currentUser[0]._id) {
  //       getUsersPosts(currentUser[0]._id)
  //     } else {
  //       user();
  //     }
  // }

  useEffect(async()=>{
    try{
    let current = await getCurrentUser();
    console.log("current: ", current[0].username, "\nloggedin: ", loggedInUser.username)
    if(current[0].username == loggedInUser.username){
      setMe(true)
    } else {
      setMe(false)
    }
    
    
    //console.log("loggedInUser.following: ", loggedInUser.following)
    if(followers.includes(loggedInUser._id)){
      setFollowing(true);
      console.log('following')
    } else {
      setFollowing(false);
      console.log('!following: ', followers, ".......", loggedInUser._id)
    }
    // if(loggedInUser.following.includes(current[0]._id)){
    //   console.log('following2: ', loggedInUser.following, 'currentUser: ', current[0]._id)
    //   setFollowing(true)
    // } else {
    //   setFollowing(false)
    //   console.log('ELSE:following2: ', loggedInUser.following, 'currentUser: ', current[0]._id)
    // }
  } catch(err){
    console.log(err)
  }
  })

  useEffect(() => getCurrentUser(), [users]);

  useEffect(async () => {
    setCurrentUser(getCurrentUser);
  }, [props.match.params.user]);

  const getUsers = async () => {
    const response = await backend({ url: "/users/" });

    console.log("users: ", response.data);
    setUsers(response.data);
  };

  const getCurrentUser = async () => {
    let result = users.filter(
      (user) => user.username == props.match.params.user
    );
    console.log("filtered result: ", result[0]);
    setCurrentUser(result[0]);
    return result;
  };

  const follow = async() => {
    const response = await backend({ url: `/users/follow/${currentUser._id}`,method:"post", data:currentUser });
    setFollowing(true)
    console.log(response.data);
  }

  useEffect(async () => {
    try {
      console.log("current user: ", currentUser._id);
      currentUser._id && getUsersPosts(currentUser._id);
      setFollowers(currentUser.followers);
      setFollowing2(currentUser.following);
    } catch (err) {
      console.log(err);
    }
  }, [currentUser]);

  const getUsersPosts = async (id) => {
    let allPosts = await backend({ url: `/posts/all/${id}` });
    console.log("all posts of this user: ", allPosts.data);
    setAllPosts(allPosts.data);
  };

  return (
    <Container className="container">
      {currentUser && (
        <Row>
          <Col xs={11} md={3}>
            <img
              src={currentUser && currentUser.image}
              className="profile-img"
            />
          </Col>
          <Col xs={11} md={8} mt-4>
            <Row className="firstRow">
              <p className="username">{currentUser && currentUser.username}</p>
              {me && (
                <>
                  <button className="editProfie-btn">
                    <strong>Edit Profile</strong>
                  </button>
                  <IoIosSettings className="settings-btn" />
                </>
              )}
              {following
                ? !me && (
                    <div className="following-btns">
                      <button className="message-btn">Message</button>
                      <button className="following">
                        <FaUserCheck />
                      </button>
                      <button className="sugested">
                        <IoMdArrowDropdown />
                      </button>
                      <HiDotsHorizontal />
                    </div>
                  )
                : !me && (
                    <div className="follow-btns">
                      <button className="follow-btn" onClick={follow}>Follow</button>
                      <button className="more">
                        <IoMdArrowDropdown />
                      </button>
                      <HiDotsHorizontal />
                    </div>
                  )}
            </Row>
            <Row className="firstRow">
              <p>
                <strong>{allPosts && allPosts.length}</strong> posts
              </p>
              <p>
                <strong>{followers && followers.length}</strong> followers
              </p>
              <p>
                <strong>{following2 && following2.length}</strong> following
              </p>
            </Row>
            <Row className="firstRow">
              <p>
                <strong>{currentUser[0] && currentUser[0].name}</strong>
              </p>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default withRouter(ProfileInfo);
