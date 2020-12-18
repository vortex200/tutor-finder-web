import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = {
  email: "",
  phone: "",
  description: "",
  err: "",
  success: "",
};

function BecomeTutor() {
  const [data, setData] = useState(initialState);

  const { email, phone, description, err, success } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, phone, description);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  return (
    <div className="becomeTutor_page">
      <h2 id="pageTitle">Become Tutor</h2>
      {err && <div>Error: {err}</div>}
      {success && <div>Success: {success}</div>}

      <Container>
        <div className="formBox">
          <Form className="tutorFOrm" onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                name="email"
                onChange={handleChangeInput}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control
                type="text"
                placeholder="Phone"
                id="phone"
                value={phone}
                name="phone"
                onChange={handleChangeInput}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Control
                type="text"
                placeholder="Description"
                id="description"
                value={description}
                name="description"
                onChange={handleChangeInput}
              />
            </Form.Group>

            <Button id="becomeTutor-btn" variant="primary" type="submit">
              Become Tutor
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default BecomeTutor;
