import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/iit-logo.png";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="IIT Bombay"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          FOSSEE Workshops
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
