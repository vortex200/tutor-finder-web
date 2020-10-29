import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Landing";
import About from "./components/about";
import User from "./components/User";

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
