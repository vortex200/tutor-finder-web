import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Menu.scss";

function Menu() {
  return (
    <Jumbotron>
      <Row>
        <Col className="choiceOne">Ieškau korepetitoriaus</Col>
        <Col>Esu korepetitorius</Col>
      </Row>
    </Jumbotron>
  );
}

export default Menu;
