import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/workshops/") // backend ka endpoint
      .then((res) => setWorkshops(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Upcoming Workshops</h2>
      <Row className="g-4">
        {workshops.slice(0, 3).map((workshop, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{workshop.title}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {workshop.date}
                </Card.Text>
                <Card.Text>{workshop.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Workshops;
