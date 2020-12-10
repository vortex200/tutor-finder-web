import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { dispatchLogin } from "Redux/actions/authAction";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Config from "Utils/Config";
import "./index.scss";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(Config.BACKEND_URL + "/user/login", {
        email,
        password,
      });
      console.log(res);
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    console.log(response);
    try {
      const res = await axios.post(Config.BACKEND_URL + "/user/google_login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseFacebook = async (response) => {
    console.log(response);
    try {
      const { accessToken, userID } = response;
      const res = await axios.post(
        Config.BACKEND_URL + "/user/facebook_login",
        {
          accessToken,
          userID,
        }
      );

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="login_page">
      <h2 id="pageTitle">Login</h2>
      {err && <div>Error: {err}</div>}
      {success && <div>Success: {success}</div>}

      <Container>
        <div className="formBox">
          <Form className="loginForm" onSubmit={handleSubmit}>
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

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                name="password"
                onChange={handleChangeInput}
              />
            </Form.Group>

            <Button id="login-btn" variant="primary" type="submit">
              Login
            </Button>

            <div>
              <Link to="/forgot_password">Forgot your password?</Link>
            </div>
          </Form>

          <div className="divider-text">Or Login With</div>

          <div className="social">
            <GoogleLogin
              clientId={Config.GOOGLE_CLIENT_ID}
              buttonText="Login with google"
              onSuccess={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="google-login-btn"
            />
          </div>
          <div>
            <FacebookLogin
              appId={Config.FACEBOOK_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </div>

          <p>
            New Customer? <Link to="/register">Register</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Login;
