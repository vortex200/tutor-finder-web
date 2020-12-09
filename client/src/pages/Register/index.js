import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "./index.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(email, password, fistName, lastName);
    axios
      .post(process.env.BACKEND_URL + "/api/user/register", {
        email,
        password,
        name: fistName + " " + lastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container>
      <div className="formBox">
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            value={fistName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => submit(e)}>
          Submit
        </Button>
      </div>
    </Container>
  );
}