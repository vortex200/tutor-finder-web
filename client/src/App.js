import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Landing";
import User from "./components/User";
import Listing from "./components/Listings";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/register">
            <User isLogin={false} />
          </Route>
          <Route path="/login">
            <User isLogin={true} />
          </Route>
          <Route path="/listings">
            <Listing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
