import React, { useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";
import axios from "axios";
import Config from "Utils/Config";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Listing from "./components/Listings";

import Landing from "./pages";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Activate from "./pages/Activate";
import Profile from "./pages/Profile";
// import BecomeTutor from "./pages/BecomeTutor";
import Forgot_Password from "./pages/Forgot_Password";
import Reset_Password from "./pages/Reset_Password";
import New_Listing from "./pages/New_Listing";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post(
          Config.BACKEND_URL + "/api/user/refresh_token",
          null
        );
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/activate" component={Activate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/listings/:id" component={Listing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/forgot_password" component={Forgot_Password} />
          <Route exact path="/reset_password" component={Reset_Password} />
          <Route exact path="/new_listing" component={New_Listing} />
          {/* <Route exact path="/becometutor" component={BecomeTutor} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
