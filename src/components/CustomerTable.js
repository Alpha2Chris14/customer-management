// src/components/CustomerTable.js
import React from "react";
import { Table, Badge } from "react-bootstrap";

const CustomerTable = () => {
  const customers = [
    {
      name: "Jesulademi Ajimosun",
      email: "jesulademi.ajimosun@princepsfinance.com",
      phone: "+2348188336863",
      status: "Active",
      joined: "Aug 29, 2024, 3:52:12 PM GMT",
    },
    {
      name: "Jesulademi Ajimosun",
      email: "jesulademi.ajimosun@princepsfinance.com",
      phone: "+2348188336863",
      status: "Inactive",
      joined: "Aug 29, 2024, 3:52:12 PM GMT",
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Joined At</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
              <Badge
                bg={customer.status === "Active" ? "success" : "secondary"}
              >
                {customer.status}
              </Badge>
            </td>
            <td>{customer.joined}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerTable;
