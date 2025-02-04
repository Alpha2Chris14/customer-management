import React from "react";
import { Card, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InfoCircleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/DashboardCards.css"; // Import for additional styles

const DashboardCard = ({ title, count }) => (
  <Card className="custom-card shadow-sm p-3 border-0 rounded">
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center">
        <Card.Title className="text-muted mb-2">{title}</Card.Title>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Additional Info</Tooltip>}
        >
          <InfoCircleFill className="text-muted" />
        </OverlayTrigger>
      </div>
      <h3 className="fw-bold">{count}</h3>
    </Card.Body>
  </Card>
);

const DashboardCards = () => {
  const cardData = [
    { title: "All customers", count: 1300 },
    { title: "Active customers", count: 1300 },
    { title: "Overdue customers", count: 1300 },
    { title: "Inactive & Dormant", count: 1300 },
  ];

  return (
    <Row xs={1} md={4} className="g-4">
      {cardData.map((card, index) => (
        <Col key={index}>
          <DashboardCard title={card.title} count={card.count} />
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
