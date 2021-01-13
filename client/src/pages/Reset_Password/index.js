import React, { useState } from "react";
import { useLocation } from "react-router-dom"; /* eslint-disable-line */
import http from "Utils/http-common";
import { showErrMsg, showSuccessMsg } from "Components/Notification";
import { isLength, isMatch } from "Utils/Validation";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = {
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

function ResetPassword() {
  const [data, setData] = useState(initialState);
  const token = new URLSearchParams(location.search).get("token");

  const { password, cf_password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async (e) => {
    e.preventDefault();
    if (isLength(password))
      return setData({
        ...data,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({ ...data, err: "Password did not match.", success: "" });

    try {
      const res = await http.post(
        "/user/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <Container>
      <h2 className="formTitle">Reset Your Password</h2>

      <div className="formBox">
        <Form>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="cf_password"
              id="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleResetPass}>
            Reset Password
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ResetPassword;
