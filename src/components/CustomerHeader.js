import React from "react";
import { Container, Row, Col, SplitButton, Dropdown } from "react-bootstrap";
import { PersonPlus } from "react-bootstrap-icons";
import "./css/CustomHeader.css";

const CustomerHeader = ({ onAddNewCustomer }) => {
  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col>
          <h2 className="custom-header">Customers</h2>
          <p className="custom-body">Create, edit and manage your customers.</p>
        </Col>
        <Col className="text-end">
          <SplitButton
            variant="primary"
            title={
              <>
                <PersonPlus className="me-2" />
                Add new customer
              </>
            }
            id="dropdown-custom-1"
            onClick={onAddNewCustomer} // Trigger the modal
          >
            <Dropdown.Item href="#">Action 1</Dropdown.Item>
            <Dropdown.Item href="#">Action 2</Dropdown.Item>
          </SplitButton>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerHeader;
