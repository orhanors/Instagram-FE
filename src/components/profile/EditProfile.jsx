import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Profile.scss";

const EditProfile = (props) => {
  const [show, setShow] = useState(props.showModal);
  const [userImg, setUserImg] = useState(null);

  let [username, setUsername] = useState(props.user.username);
  let [name, setName] = useState(props.user.name);
  let [surname, setSurname] = useState(props.user.surname);
  let [email, setEmail] = useState(props.user.email);

  let user = {
      username,
      name,
      surname,
      email
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateUserIMG(e) {
    setUserImg(e.target.files[0])
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="message-btn">
        <strong>Edit profile</strong>
      </Button>
    {console.log("/////////////////////////////////", props.user, "///////////////////////////////////////")}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <p>Username</p>
            <input value={username} onChange={(e) => setUsername(e.currentTarget.value)}></input>
            <p>Name</p>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)}></input>
            <p>Surname</p>
            <input value={surname} onChange={(e) => setSurname(e.currentTarget.value)}></input>
            <p>Email</p>
            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
            <p>Change profile picture</p>
            <input type='file' id='user-image' onChange={(e) => updateUserIMG(e)} />
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

export default EditProfile;