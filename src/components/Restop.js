import React, { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";


function Restop({ opHour }) {
    // console.log(opHour)
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      <Button className="btn " variant="dark" onClick={handleShow}>
        Restaurant Operating Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Weekly Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            opHour?
            <ListGroup>
              <ListGroup.Item>Monday : {opHour.Monday}</ListGroup.Item>
              <ListGroup.Item>Tuesday : {opHour.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday : {opHour.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday : {opHour.Thursday}</ListGroup.Item>
              <ListGroup.Item>Friday : {opHour.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday : {opHour.Saturday}</ListGroup.Item>
              <ListGroup.Item>Sunday : {opHour.Sunday}</ListGroup.Item>
            </ListGroup>
            :""
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Restop;
