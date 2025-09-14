import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function LoginForm() {
  return (
    <Card className="p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%", borderRadius: "20px" }}>
      <h2 className="mb-4 text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  );
}

export default LoginForm;
