import React, { useState } from "react";
import { NewPostModal } from "../postModal/newPostModal/NewPostModal";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { useEffect, useCallback } from "react";
import {getPost} from "../../api/posts"

const Singlepost = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [mypost,setMypost] = useState()
    const [refreshComments,setRefreshComments] =useState(false)
    const history = useHistory()
  const openModal = () => {
    //setShowModal((prev) => !prev);
    setShowModal(true);
};
  const getSpecificPost = async()=>{
      if(props.match.params.postId){
          const id = props.match.params.postId
          console.log(id)
        const res = await getPost(id)
        console.log(res)
        setMypost(res)
        console.log(props.match)
         
             setShowModal(true)
      }
  

    
       
   
  }

  useEffect(()=>{
    getSpecificPost()
    console.log(props.match.params)
  },[props.match.params,refreshComments])

  return (
      <>
   {mypost ? (<NewPostModal setShowModal={setShowModal} data={mypost} showModal={true} setRefreshComments={setRefreshComments} refreshComments={refreshComments}/>):(<h4></h4>)}

</>
  );
};

export default withRouter(Singlepost);
