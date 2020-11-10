import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.scss";

function Login() {
  return (
    <Container>
      <div className="formBox">
        <Form className="loginForm">
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
