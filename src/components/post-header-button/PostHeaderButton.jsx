import React from "react";
import "./postheaderbutton.scss";

import {Modal, Button} from 'react-bootstrap'

export default function PostHeaderButton({handleShowPostHeaderButton, setShowPosHeaderButton,handleClosePostHeaderButton,showPostHeaderButton}) {
  return (
    <div>
      <Modal show={showPostHeaderButton} onHide={handleClosePostHeaderButton}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePostHeaderButton}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosePostHeaderButton}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
