import React, {useState} from 'react'
import './newpost.scss'
import {Button, Modal, FormControl} from 'react-bootstrap'

export default function NewPost() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button className="newpost-button btn-secondary text-secondary mb-4"> Choose an item to post</Button>
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
