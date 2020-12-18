import React, { useState } from "react";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "Components/Notification";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./index.scss";

const initialState = {
  email: "",
  err: "",
  success: "",
};

function Forgot_Password() {
  const [data, setData] = useState(initialState);

  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/forgot", { email });

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <Container>
      <h2 className="formTitle">Forgot Your Password?</h2>

      <div className="formBox">
        <Form>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}

          <Form.Group controlId="formEmail">
            <Form.Label>Enter your email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeInput}
              placeholder="Enter email"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={forgotPassword}>
            Verify your email
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Forgot_Password;
