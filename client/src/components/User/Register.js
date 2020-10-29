import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <Container>
      <div className="formBox">
        <Form className="registerForm">
          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formFirstName">
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
