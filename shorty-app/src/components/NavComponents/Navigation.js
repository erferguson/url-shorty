import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Shortly from "../../Assets/Shortly";
import Home from './Home'
import Features from "./Features";
import Pricing from "./Pricing";
import Resources from "./Resources";
import Login from "./Login";
import SignUp from "./SignUp";
import Logo from '../../Assets/Shortly'

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/"><Logo/></NavLink>
            </li>
            <li>
              <NavLink to="/features">Features</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Navigation;
