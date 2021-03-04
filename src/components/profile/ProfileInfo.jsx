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
  let [currentUser, setCurrentUser] = useState({_id: 0});
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

  useEffect(async()=>{
    // (currentUser && currentUser[0]._id) ? getUsersPosts(currentUser[0]._id) : setTimeout(() => {
    //   console.log('This will run after 1 second!')
    //   currentUser[0]._id && getUsersPosts(currentUser[0]._id)
    //   console.log('id of current user: ', currentUser[0]._id)
    // }, 2000)
    try{
    console.log('current user: ', currentUser._id)
    currentUser._id && getUsersPosts(currentUser._id)
    } catch(err){
      console.log(err)
    }
  }, [currentUser])

  const getUsersPosts = async (id) => {
    let allPosts = await backend({url: `/posts/all/${id}`})
    console.log("all posts of this user: ", allPosts.data)
    setAllPosts(allPosts.data);
  }

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
              <p className="username">
                {currentUser && currentUser.username}
              </p>
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
                      <button className="follow-btn">Follow</button>
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
                <strong>{followers}</strong> followers
              </p>
              <p>
                <strong>{following}</strong> following
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
