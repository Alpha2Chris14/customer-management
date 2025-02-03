import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import "./css/CustomHeader.css";
const CustomerHeader = () => {
  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col>
          <h2 className="custom-header">Customers</h2>
          <p className="custom-body">Create, edit and manage your customers.</p>
        </Col>
        <Col className="text-end">
          <Button variant="primary" size="lg">
            <PlusCircle className="me-2" />
            Add new customer
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerHeader;
