import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import { Navbar } from 'react-bootstrap';
import File from "../Content/Anna Savchenko_React Developer.pdf"


const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded}  collapseOnSelect expand="sm" id="navigation" >
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <ul className="box-primary-nav">
                    <li><NavLink onClick={() => setExpanded(false)} to="/me">About</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/contact">Contact</NavLink></li>
                    <li><NavLink to={File} download target="_new"><FiDownload /> Resume</NavLink></li>
                </ul>
            </Navbar.Collapse>

        </Navbar>
    )
}
export default Menu;