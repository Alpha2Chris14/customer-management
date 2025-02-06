import React, { useEffect, useState } from "react";
import { Table, Badge, Pagination, Spinner, Dropdown } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import axios from "axios";
import TableHeader from "./TableHeader";
import CustomerHeader from "./CustomerHeader";
import CreateCustomerModal from "./CreateCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import { format } from "date-fns";
import "./css/CustomerTable.css";
import DashboardCards from "./DashboardCards";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const apiBaseUrl = "http://customermanagementbackend.test/api/customers";

  const fetchCustomers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(apiBaseUrl, {
        params: {
          page,
          page_size: pageSize,
          search_text: searchText,
        },
      });

      const { data, total } = response.data;
      setCustomers(data);
      setTotalRows(total);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage, pageSize, searchText]);

  const handleSearchChange = (value) => {
    setSearchText(value);
    setCurrentPage(1); // Reset pagination for new search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCustomerCreated = () => {
    fetchCustomers(currentPage);
  };

  const totalPages = Math.ceil(totalRows / pageSize);

  const handleAddNewCustomer = () => {
    setShowCreateModal(true);
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  // Get badge style based on status
  const getBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "badge-active";
      case "inactive":
        return "badge-inactive";
      case "dormant":
        return "badge-dormant";
      case "overdue":
        return "badge-overdue";
      default:
        return "badge-secondary"; // Default Bootstrap badge color
    }
  };
  return (
    <div className="container">
      <CustomerHeader onAddNewCustomer={handleAddNewCustomer} />
      <DashboardCards />
      <TableHeader onSearch={handleSearchChange} />
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Status</th>
                <th>Joined at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    {customer.firstname} {customer.lastname}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.telephone}</td>
                  <td>
                    <Badge className={getBadgeClass(customer.status)} pill>
                      {customer.status}
                    </Badge>
                  </td>
                  <td>
                    {customer.created_at
                      ? format(
                          new Date(customer.created_at),
                          "MMM dd, yyyy, h:mm:ss a zzz"
                        )
                      : "N/A"}
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <ThreeDotsVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleEditCustomer(customer)}
                        >
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </>
      )}
      <CreateCustomerModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onCustomerCreated={handleCustomerCreated}
      />

      {selectedCustomer && (
        <EditCustomerModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          customer={selectedCustomer}
          refreshCustomers={fetchCustomers}
        />
      )}
    </div>
  );
};

export default CustomerTable;
