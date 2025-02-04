import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { PersonPlus, Search } from "react-bootstrap-icons";
import { SearchIcon } from "lucide-react";
import "./css/CustomHeader.css";
const TableHeader = () => {
  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col>
          <div class="search-box">
            <SearchIcon size={24} color="#BBBBCB" />
            <input
              type="text"
              class="form-control"
              placeholder="Search customer details"
            />
          </div>
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
          >
            <Dropdown.Item href="#">Action 1</Dropdown.Item>
            <Dropdown.Item href="#">Action 2</Dropdown.Item>
          </SplitButton>
        </Col>
      </Row>
    </Container>
  );
};

export default TableHeader;
