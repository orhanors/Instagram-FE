import React, {useState} from 'react'
import './newpost.scss'
import {Button, Modal, FormControl} from 'react-bootstrap'
import backend from "../../helpers/client"

export default function NewPost(props) {
    const [show, setShow] = useState(false);
    const [file, setFile] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleFile = (e) =>{
        let file = e.target.files
        setFile(file)
        console.log(e.target.files, "$$$$")
        console.log(e.target.files[0], "$$$$")
    } 

    const handleUpload =async (e) =>{
        try {
            console.log(file, "______fileeeeeeeeeeeeeeeeeeeeee")

            let formData = new FormData();

            formData.append('image', file)

            const response = await backend({ url: "/posts/me",method:"post",data:formData });
            console.log(response, "responnssssss")
        } catch (error) {
            
        }
    }

    return (
        <div className="mb-4 newpost-container p-2 py-3">
            <Button className="newpost-button btn-secondary text-secondary d-flex justify-content-start align-items-center" onClick={handleShow}>
            <i className="far fa-edit grey-text mr-1" style={{fontSize: "1.2rem"}}></i>
                Start a post
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <Button type="file" className="newpost-button btn-secondary text-secondary mb-4"> Choose an item to post</Button> */}
            <input type="file" multiple onChange={(e) => handleFile(e)}/>
            <button onClick={(e)=>handleUpload(e)}>upload</button>
            <FormControl placeholder="Write a description" className="post-description" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}