import React, { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

function Comments({ comment }) {
	return (
		<>
			{comment.length < 1 ? (
				<div className='user-info ml-5'>
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
					<div className='user-info ml-5'>
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
					<div className='user-info ml-5'>
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
	);
}

export default Comments;
