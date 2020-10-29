import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";
import Register from "./Register";

import "./index.scss";

function User(props) {
  const [isLogin, setIsLogin] = useState(props.isLogin);

  function setLogin() {
    setIsLogin(true);
  }

  function setRegister() {
    return setIsLogin(false);
  }

  return (
    <Container>
      <div className="formLabel">
        <Row>
          <Col>
            <h2
              className={"clickableLabel " + (isLogin ? " selectedLabel" : "")}
              onClick={setLogin}
            >
              Prisijungimas
            </h2>
          </Col>
          <Col>
            <h2
              className={"clickableLabel " + (isLogin ? "" : " selectedLabel")}
              onClick={setRegister}
            >
              Registracija
            </h2>
          </Col>
        </Row>
      </div>
      {isLogin ? <Login /> : <Register />}
    </Container>
  );
}

export default User;
