import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "../../App.css"
import Logo from "../../Assets/footer-logo"
// import { Fbook, Twitter, Instagram, Pinterest } from "../social"

function Footer(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><Logo/></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    )
}
export default Footer;