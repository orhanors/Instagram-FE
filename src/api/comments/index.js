
import backend from "../../helpers/client"


export const addComment = async (postId,content) => {
    const response = await backend({ url: `/comments/${postId}/add`,method:"post",data:content });

    return await response.data
    
};