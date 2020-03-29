import React from "react";
import { Link } from "react-router-dom";

import Logo from '../../Assets/Shortly'

function Navigation() {
  return (
    <div>
      <div className='navigation'>
        <nav className='nav-container'>
          <ul>
            <li className="nav-logo">
              <Link to="/"><Logo/></Link>
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
            <div className='login-signup'>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link className='signup' to="/sign-up">
                  <button className="button">Sign Up</button>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
