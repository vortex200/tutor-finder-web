import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import CategoriesArray from "Utils/CategoriesArray.example.js";

function Category(props) {
  return (
    <ListGroup.Item>
      <a href="/listings">{props.name}</a>
    </ListGroup.Item>
  );
}

function CategoryList(names) {
  return names.map((name, index) => {
    return <Category name={name} key={index} />;
  });
}

function Categories() {
  const names = CategoriesArray;

  return (
    <Container>
      <h1>Kategorijos:</h1>
      <Row>
        <Col className="choiceOne">
          <ListGroup>{CategoryList(names)}</ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
