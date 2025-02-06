import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import { FilterSquare, Gear, Download } from "react-bootstrap-icons";
import { SearchIcon } from "lucide-react";
import "./css/CustomHeader.css";

const TableHeader = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (range) => {
    setSelectedRange(range);
    onFilter({ range, status: selectedStatus });
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setSelectedStatus(status);
    onFilter({ range: selectedRange, status });
  };

  return (
    <Container>
      <Row className="align-items-center mb-3 mt-5">
        <Col>
          <div className="search-bod">
            <SearchIcon size={24} color="#BBBBCB" />
            <input
              type="text"
              className="form-control"
              placeholder="Search customer details"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </Col>
        <Col className="text-end separator">
          <DropdownButton
            id="filter-dropdown"
            title={
              <>
                <FilterSquare className="me-2" /> Filter
              </>
            }
            variant="outline-secondary"
            className="btn-mod"
          >
            <Dropdown.Header>Filter by Days</Dropdown.Header>
            <Dropdown.Item onClick={() => handleFilterChange("7_days")}>
              Past 7 Days
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("30_days")}>
              Past 30 Days
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("3_months")}>
              Past 3 Months
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("custom_range")}>
              Custom Range
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Header>Filter by Status</Dropdown.Header>
            <Form.Control
              as="select"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </Form.Control>
          </DropdownButton>

          <Button variant="outline-secondary" className="btn-mod">
            <Gear className="me-2" />
            Edit Columns
          </Button>
          <Button variant="outline-secondary" className="btn-mod btn-sec">
            <Download className="me-2" />
            Export.csv
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TableHeader;
