import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Shortly from "./Shortly";
import Features from "./Features";
import Pricing from "./Pricing";
import Resources from "./Resources";
import Login from "./Login";
import SignUp from "./SignUp";

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Shortly</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Shortly />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Navigation;
