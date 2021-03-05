
import backend from "../../helpers/client"


export const addComment = async (postId,content) => {
    const response = await backend({ url: `/comments/${postId}/add`,method:"post",data:{content} });

    return await response.data
    
};

export const deleteComment = async(postId,commentId)=>{
    const response = await backend({url:`/comments/${postId}/${commentId}`,method:"delete"})

    return response
}
export const editComment = async(postId,commentId,content)=>{
    const response = await backend({url:`/comments/${postId}/${commentId}`,method:"put", body:content})

    return response
}