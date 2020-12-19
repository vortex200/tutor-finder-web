import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function NavBar() {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <DropdownButton id="dropdown-basic-button" title={user.name}>
        {/* <Dropdown.Item href="/profile">Profile</Dropdown.Item> */}
        <Dropdown.Item href="/" onClick={handleLogout}>
          Logout
        </Dropdown.Item>
      </DropdownButton>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Tutor finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isLogged ? (
              userLink()
            ) : (
              <Nav.Link href="/login">Prisijungti</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
