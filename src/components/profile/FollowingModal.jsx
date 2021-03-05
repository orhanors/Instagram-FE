import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Profile.scss";
import backend from "../../helpers/client";
import { useHistory } from "react-router-dom";

const FollowingModal = (props) => {
  const [show, setShow] = useState(props.showModal);

  const handleShow = () => setShow(true);

  const handleClose = () => {
      setShow(false);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           following
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

export default FollowingModal;