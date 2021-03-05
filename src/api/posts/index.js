import backend from "../../helpers/client"
import React from 'react'

// =========================POST ROUTES=========================================
// we will have the route to post http://localhost:3001/api/posts/me ----> to post a image the formdata is "image" POST

// first of all you ned FORMDATA  image 

// http://localhost:3001/api/posts/all/me/posts this route will give back all your posts and your following posts  GET 


//http://localhost:3001/api/posts/:postId to delete a post   DELETE 

// http://localhost:3001/api/posts/:postId to edit a post or add description in the post  the property name is description:"what a funny photo"


// the last part is to like and unline route http://localhost:3001/api/posts/:postId/like   POST = works for like and unlike same route


// =============== comments routes ===============================

// http://localhost:3001/api/comments/:postId/add  - to add a comments property name is content:"a super hot comment"

//http://localhost:3001/api/comments/:postId  - to get the comments of that post 

//http://localhost:3001/api/comments/:postId   

// i havent finished delete and edit comments

export const getNewsFeedPosts = async () => {
    const response = await backend({ url: "/posts/all/me/posts",method:"get" });

    return await response.data
    
};

export const getPost = async(postId)=>{
    const response = await backend({url:`/posts/${postId}`})
    return await response.data}
export const likeordis = async(postId)=>{
    const response = await backend({url:`/posts/${postId}/like`,method:"post"})
    return await response
}
