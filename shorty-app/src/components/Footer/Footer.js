import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "../../App.css"
import Logo from "../../Assets/footer-logo"
import { Fbook, Twit, Pin, Insta } from '../../Assets/social'

function Footer(){
    return (
        <Router>
            <div className="footer">
                <div className="footer-content">
                    <ul className='footerLogo'>
                        <li>
                            <Link to="/"><Logo/></Link>
                        </li>
                    </ul>
                    <ul className="features">
                        <li>
                            Features
                        </li>
                        <li>
                            <Link to="/short">Link Shortening</Link>
                        </li>
                        <li>
                            <Link to="/branding">Branding</Link>
                        </li>
                        <li>
                            <Link to="/analytics">Analytics</Link>
                        </li>
                    </ul>
                    <ul className='resources'>
                        <li>
                            Resources
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/developers">Developers</Link>
                        </li>
                        <li>
                            <Link to="/support">Support</Link>
                        </li>
                    </ul>
                    <ul className='company'>
                        <li>
                            Company
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className='social'>
                        <li>
                            <a href to="www.facebook.com"><Fbook/></a>
                        </li>
                        <li>
                            <a href to="www.twitter.com"><Twit/></a>
                        </li>
                        <li>
                            <a href to="www.pinterest.com"><Pin/></a>
                        </li>
                        <li>
                            <a href to="www.instagram"><Insta/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </Router>
    )
}
export default Footer;