import React, { useEffect, useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import axios from "axios";
import "./css/CustomerTable.css";

const getStatusBadge = (status) => {
  const statusColors = {
    Active: "success",
    Inactive: "warning",
    Dormant: "secondary",
    Overdue: "info",
  };
  return <Badge bg={statusColors[status] || "primary"}>{status}</Badge>;
};

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const apiBaseUrl = "http://customermanagementbackend.test/api/customers";

  const fetchCustomers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(apiBaseUrl, {
        params: {
          page,
          page_size: pageSize,
        },
      });
      const { data, total_pages } = response.data;
      setCustomers(data);
      setTotalPages(total_pages);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Loading...</p>
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
              {customers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>
                    {customer.firstname} {customer.lastname}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.telephone}</td>
                  <td>{getStatusBadge(customer.status || "Active")}</td>
                  <td>{customer.joined_at || "N/A"}</td>
                  <td>
                    <ThreeDots size={10} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </>
      )}
    </div>
  );
};

export default CustomerTable;
