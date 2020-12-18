import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// Edit profile

function Profile() {
  return (
    <div className="profile_page">
      <Container>
        <h1>Your profile</h1>
        <Button variant="outline-primary" href="/becometutor">
          Become tutor
        </Button>
      </Container>
    </div>
  );
}

export default Profile;
