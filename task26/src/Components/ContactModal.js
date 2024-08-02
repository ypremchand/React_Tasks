import React from "react";
import { Modal, Button } from "react-bootstrap";

const ContactModal = ({ show, handleClose, submittedData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submitted Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submittedData ? (
          <div>
            <h5>Email:</h5>
            <p>{submittedData.email}</p>
            <h5>Contact Number:</h5>
            <p>{submittedData.contact}</p>
            <h5>Address:</h5>
            <p>{submittedData.address}</p>
          </div>
        ) : (
          <p>No data submitted</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
