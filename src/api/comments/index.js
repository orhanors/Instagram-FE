export const getNewsFeedPosts = async (postId,content) => {
    const response = await backend({ url: `/comments/${postId}/add`,method:"post",body:content });

    return await response.data
    
};