import React from "react";
import Container from "react-bootstrap/Container";

import Menu from "./Menu";
import Categories from "./Categories";

function Landing() {
  return (
    <Container>
      <Menu />
      <Categories />
    </Container>
  );
}

export default Landing;
