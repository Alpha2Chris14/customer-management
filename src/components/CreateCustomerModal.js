import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const CreateCustomerModal = ({ show, onHide, onCustomerCreated }) => {
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    bvn: "",
    dob: "",
    residential_address: "",
    state: "",
    bankcode: "",
    accountnumber: "",
    company_id: "3", // Set company_id to 3 by default
    email: "",
    city: "",
    country: "",
    id_card: "",
    voters_card: "",
    drivers_licence: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleCreateCustomer = async () => {
    try {
      await axios.post(
        "http://customermanagementbackend.test/api/customers",
        customer
      );
      onCustomerCreated(); // Trigger customer list update
      onHide(); // Close the modal
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

          {/* Additional Fields */}
          <Form.Group className="mb-3">
            <Form.Label>BVN</Form.Label>
            <Form.Control
              type="text"
              name="bvn"
              value={customer.bvn}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={customer.dob}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Residential Address</Form.Label>
            <Form.Control
              type="text"
              name="residential_address"
              value={customer.residential_address}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={customer.state}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bank Code</Form.Label>
            <Form.Control
              type="text"
              name="bankcode"
              value={customer.bankcode}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              name="accountnumber"
              value={customer.accountnumber}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={customer.city}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={customer.country}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ID Card Number</Form.Label>
            <Form.Control
              type="text"
              name="id_card"
              value={customer.id_card}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Voters Card Number</Form.Label>
            <Form.Control
              type="text"
              name="voters_card"
              value={customer.voters_card}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Driver's Licence Number</Form.Label>
            <Form.Control
              type="text"
              name="drivers_licence"
              value={customer.drivers_licence}
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
