import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Profile.scss";
import backend from "../../helpers/client";
import { useHistory } from "react-router-dom";

const FollowersModal = (props) => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false)

  useEffect(()=> setShow(props.show), [])

  const handleShow = () => setShow(true);

  const handleClose = () => {
      setHide(true);
      setShow(false)
  }

  return (
    <>
      
      <Modal show={props.show && !hide} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           followers
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
    </>
  );
}

export default FollowersModal;