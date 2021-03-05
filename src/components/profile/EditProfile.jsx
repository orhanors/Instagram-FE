import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Profile.scss";
import backend from "../../helpers/client";
import { useHistory } from "react-router-dom";

const EditProfile = (props) => {
  const [show, setShow] = useState(props.showModal);
  const [userImg, setUserImg] = useState(null);
  const [submit, setSubmit] = useState(false);

  let [username, setUsername] = useState(props.user.username);
  let [name, setName] = useState(props.user.name);
  let [surname, setSurname] = useState(props.user.surname);
  let [email, setEmail] = useState(props.user.email);
  let [password, setPassword] = useState(props.user.password);
  let history = useHistory();

  let user = {
      username,
      name,
      surname,
      email
  }

  const updateProfile = async() => {
      const response = await backend({
        url: `/users/me/edit`,
        method: "put",
        data: user,
      })
      console.log(response.data)
  }

  function HandleClose() {
      updateProfile();
      setShow(false);
      setSubmit(true);
      history.push(`/${user.username}`);
    }

  const handleShow = () => setShow(true);

  function updateUserIMG(e) {
    setUserImg(e.target.files[0])
  }

  const handleClose = () => {
    updateProfile();
      setShow(false);
      setSubmit(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="message-btn">
        <strong>Edit profile</strong>
      </Button>
    {console.log("/////////////////////////////////", props.user, "///////////////////////////////////////")}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update info</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{"margin": "0 auto"}}>
            <p>Username</p>
            <input value={username} onChange={(e) => setUsername(e.currentTarget.value)}></input>
            <p>Name</p>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)}></input>
            <p>Surname</p>
            <input value={surname} onChange={(e) => setSurname(e.currentTarget.value)}></input>
            <p>Email</p>
            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;