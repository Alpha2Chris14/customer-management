import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const CreateCustomerModal = ({ show, onHide, onCustomerCreated }) => {
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleCreateCustomer = async () => {
    try {
      await axios.post("http://localhost:8000/api/customers", customer);
      onCustomerCreated();
      onHide();
    } catch (error) {
      console.error("Error creating customer", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={customer.firstname}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={customer.lastname}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type="text"
              name="telephone"
              value={customer.telephone}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateCustomer}>
          Save Customer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCustomerModal;
