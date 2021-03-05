import React, { useEffect, useState } from "react";
import "./posts.scss";
import { FormControl, Button } from "react-bootstrap";
import { getNewsFeedPosts } from "../../api/posts";
import { addComment } from "../../api/comments";
import { Modal } from "../postModal/Modal";
import PostLoader from "../../loaders/PostLoader";
import { useSelector } from "react-redux";

import Comments from "../comments/comments";

import Likes from "../likes/Likes";

export default function Posts() {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");

  //const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRedHeart, setShowRedHeart] = useState(false);
  const { refresh } = useSelector((state) => state);
  const { data } = useSelector((state) => state.user);
  const openModal = () => {
    //setShowModal((prev) => !prev);
    setShowModal(true);
  };
  const addNewComment = async (postId) => {
    try {
      const res = await addComment(postId, content);
      const myarray = [1, 2, 3];
      console.log(myarray.length);
      if (res) {
        setShowComments(!showComments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [allposts, setAllPosts] = useState([]);
  useEffect(async () => {
    // let changeLike=allposts.map((post)=> post.likes.map((like)=>like))
    let poz = false;
    let neg = false;
    let newArray;

    const res = await getNewsFeedPosts();
    setLoading(false);
    setAllPosts(res);
  }, [showComments, refresh]);
  //const [marginLeft, setMarginLeft] = useState(0);
  const showContent = (post) => {
    return (
      <>
        {allposts?.map((post, key) => {
          return (
            <div className="container-post mb-5" key={key}>
              <div className="d-flex justify-content-between align-items-center mx-3 my-2">
                <div className="header d-flex ">
                  <img
                    className="post-header-img mr-3"
                    src={post?.user?.image}
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <h6>{post?.user?.username}</h6>
                    <small>Bramall Lane</small>
                  </div>
                </div>
                <button className="d-flex justify-content-center align-center">
                  <svg
                    aria-label="More options"
                    class="_8-yf5 "
                    fill="#262626"
                    height="16"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <circle
                      clip-rule="evenodd"
                      cx="8"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="24"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="40"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                  </svg>
                </button>
              </div>
              <img className="post-img" src={post.image} alt="" />

              <div className="d-flex justify-content-between px-3 py-3">
                <div className="d-flex">
                  {post.likes.length > 0 ? (
                    <Likes mypostId={post._id} myid={post.likes} />
                  ) : (
                    <Likes mypostId={post._id} />
                  )}

                  <svg
                    className="mr-4"
                    aria-label="Comment"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="mr-4"
                    aria-label="Share Post"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>

                <svg
                  aria-label="Save"
                  class="_8-yf5 "
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              </div>
              {post.likes.length ===0 ? "" :<div
                className="ml-3 mb-2"
                style={{
                  fontSize: "15px"
                }}
              >
                Liked by{console.log(post.likes[0], "my liiiiiiiiiiiikeeeees")}{" "}
                {post.likes.length}
              </div>}
              {post?.comments?.length > 0 && (
                <>
                  <span>
                    <div
                      onClick={openModal}
                      className="ml-3 view-comments"
                      style={{
                        fontSize: "15px",
                        color: "gray",
                      }}
                    >
                      View all {post?.comments?.length} comments
                    </div>
                    <Modal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      data={post}
                    />
                  </span>
                  <Comments comment={post.comments} />
                </>
              )}

              <div className="footer d-flex align-items-center justify-content-between px-3  py-1 border-top">
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
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <button
                  className="comment-button"
                  onClick={() => addNewComment(post._id)}
                >
                  Post
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return <div>{loading ? <PostLoader /> : showContent()}</div>;
}
