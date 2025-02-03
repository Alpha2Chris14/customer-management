// src/components/DashboardCards.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const DashboardCards = () => {
  const cardData = [
    { title: "All Customers", count: 1300 },
    { title: "Active Customers", count: 1300 },
    { title: "Overdue Customers", count: 1300 },
    { title: "Inactive & Dormant", count: 1300 },
  ];

  return (
    <Row className="my-4">
      {cardData.map((card, index) => (
        <Col md={3} key={index}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <h3>{card.count}</h3>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
