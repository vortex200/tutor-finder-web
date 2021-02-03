import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

function Landing() {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

  return (
    <Container>
      {isLogged ? <h1>Logged in</h1> : <h1>Not logged in</h1>}
    </Container>
  );
}

export default Landing;
