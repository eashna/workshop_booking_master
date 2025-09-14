import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Home() {
  const workshops = [
    { title: "Python for Data Science", date: "12 Sep 2025" },
    { title: "Machine Learning Basics", date: "20 Sep 2025" },
    { title: "Web Development with Django", date: "28 Sep 2025" },
  ];

  return (
    <>
      {/* Main Sections */}
      <Container className="my-5">
        <Row className="g-4">
          {/* Browse Workshops */}
          <Col xs={12} md={4}>
            <Card
              className="text-center p-4 h-100 shadow-lg"
              style={{ borderRadius: "25px", minHeight: "400px" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-3 fw-bold">
                    Browse Workshops
                  </Card.Title>
                  <Card.Text className="mt-3">
                    Discover upcoming workshops and register in a few taps.
                  </Card.Text>
                  {workshops.map((ws, idx) => (
                    <p key={idx} className="mb-1">
                      <strong>{ws.title}</strong> <br />
                      <small>Date: {ws.date}</small>
                    </p>
                  ))}
                </div>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "http://127.0.0.1:8000/workshop/")}
                  variant="primary"
                  className="mt-3 px-4"
                >
                  View Workshops
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Statistics */}
          <Col xs={12} md={4}>
            <Card
              className="text-center p-4 h-100 shadow-lg"
              style={{ borderRadius: "25px", minHeight: "400px" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-3 fw-bold">
                    Workshop Statistics
                  </Card.Title>
                  <Card.Text className="mt-3">
                    Track participation trends, workshop growth, and more in a
                    detailed report.
                  </Card.Text>
                </div>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "http://127.0.0.1:8000/statistics/public/")}
                  variant="success"
                  className="mt-3 px-4"
                >
                  View Statistics
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Login */}
          <Col xs={12} md={4}>
            <Card
              className="text-center p-4 h-100 shadow-lg"
              style={{ borderRadius: "25px", minHeight: "400px" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-3 fw-bold">Sign In</Card.Title>
                  <Card.Text className="mt-3">
                    Access your dashboard to manage bookings and registrations.
                  </Card.Text>
                </div>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "http://127.0.0.1:8000/workshop/login/")}
                  variant="warning"
                  className="mt-3 px-4"
                >
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Us Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">About FOSSEE Workshops</h2>
          <p
            className="lead text-center"
            style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}
          >
            A FOSSEE (Free and Open Source Software in Education) workshop under
            <strong> IIT Bombay </strong> is a training program designed to
            promote the use of free and open-source software in academic and
            professional settings. These workshops, often conducted in a
            live-assisted, remote format, offer participants hands-on experience
            with specific software. Topics include Python, OpenFOAM, DWSIM, and
            Osdag. The goal is to equip attendees with practical skills in
            open-source tools for research, projects, and career development.
            Successful participants receive e-certificates.
          </p>
        </Container>
      </section>
    </>
  );
}

export default Home;
