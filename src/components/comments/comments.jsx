import React, { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import "./comments.scss";
function Comments({ comment }) {
	return (

		//true ? ( 1==2 ? (console.log()) : (console.log())) : (console.log())

		<div className='comment-container'>
			<>
				{comment.length===0 &&
					<div></div>
				}
				{comment.length < 2 ? (
					<div className='user-info'>
						<img src={comment[0]?.user.image} />

						<p>
							<strong>{comment[0]?.user.username}</strong>
							<span className='comment-content'>
								{comment[0]?.content}
							</span>
							<AiOutlineHeart className='comment-heart' />
							<TiDeleteOutline className='comment-delete' />
						</p>
						<hr />
					</div>
				) : (
					<>
						<div className='user-info'>
							<img src={comment[0]?.user.image} />

							<p>
								<strong>{comment[0]?.user.username}</strong>
								<span className='comment-content'>
									{comment[0]?.content}
								</span>
								<AiOutlineHeart className='comment-heart' />
								<TiDeleteOutline className='comment-delete' />
							</p>
							<hr />
						</div>
						<div className='user-info'>
							<img src={comment[1]?.user.image} />

							<p>
								<strong>{comment[1]?.user.username}</strong>
								<span className='comment-content'>
									{comment[1]?.content}
								</span>
								<AiOutlineHeart className='comment-heart' />
								<TiDeleteOutline className='comment-delete' />
							</p>
							<hr />
						</div>
					</>
				)}
			</>
		</div>
	);
}

export default Comments;
