import React, { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import "./comments.scss";
function Comments({ comment }) {
  return (
    <div className="comment-container px-3 my-2 m-0">
      <>
        {comment.length < 1 ? (
          <div className="user-info my-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img src={comment[0]?.user.image} className="mr-2" />
                <strong className="mr-2">{comment[0]?.user.username}</strong>
                <span className="comment-content">{comment[0]?.content}</span>
              </div>
              <div>
                <AiOutlineHeart className="comment-heart" />
                <TiDeleteOutline className="comment-delete" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="user-info my-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <strong className="mr-2">{comment[0]?.user.username}</strong>
                  <span className="comment-content">{comment[0]?.content}</span>
                </div>
                <div>
                  <AiOutlineHeart className="comment-heart" />
                  <TiDeleteOutline className="comment-delete" />
                </div>
              </div>
            </div>
            {comment[1] ? <div className="user-info my-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <strong className="mr-2">{comment[1]?.user.username}</strong>
                  <span className="comment-content">{comment[1]?.content}</span>
                </div>
                <div>
                  <AiOutlineHeart className="comment-heart" />
                  <TiDeleteOutline className="comment-delete" />
                </div>
              </div>
            </div>
			: ""}
          </>
        )}
        <small
          style={{
            color: "gray",
          }}
        >
          16 HOURS AGO
        </small>
      </>
    </div>
  );
}

export default Comments;
