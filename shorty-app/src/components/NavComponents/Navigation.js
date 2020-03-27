import React from "react";
import { NavLink } from "react-router-dom";

import Logo from '../../Assets/Shortly'

function Navigation() {
  return (
    <div>
      <div className='navigation'>
        <nav className='nav-container'>
          <ul>
            <li className="nav-logo">
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
            <div className='login-signup'>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink className='signup' to="/sign-up">
                  <button className="button">Sign Up</button>
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
