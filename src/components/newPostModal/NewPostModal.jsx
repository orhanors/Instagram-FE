import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./newpostmodal.scss";

export function NewPostModal({show, setShow, handleClose, handleShow}) {
  
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} className="post-modal-container">
        <Modal.Body className='post-modal-body'>
            <div className="d-flex ">
                <div>
                    <img id='post-modal-img' src="https://instagram.fcia2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/154326572_436092584171365_6244345194605840570_n.jpg?tp=1&_nc_ht=instagram.fcia2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=OrZpI0UqbC0AX8XBwz7&oh=04f728f864c5c38b273be3e53ec7b702&oe=6069DC36" alt=""/>
                </div>
                <div>
                    <div>
                        <img src="https://instagram.fcia2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/130968278_729028117966751_1944380588990848786_n.jpg?tp=1&_nc_ht=instagram.fcia2-2.fna.fbcdn.net&_nc_ohc=gKBvP6ESY9IAX86Vv-U&oh=5d16def13e498d40d3257d75285eeb45&oe=606A688C" alt=""/>
                        <h6>premierlegue</h6>
                    </div>

                </div>

            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
