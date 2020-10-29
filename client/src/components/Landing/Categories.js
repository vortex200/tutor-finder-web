import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Categories() {
  return (
    <Jumbotron>
      <h1>Kategorijos:</h1>
      <Row>
        <Col className="choiceOne">Choice 1</Col>
        <Col>Choice 2</Col>
      </Row>
    </Jumbotron>
  );
}

export default Categories;
