import React, { useState, useRef, useEffect } from 'react'
import { FiDownload } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import File from "./Junior_Web-Developer_Brussels_Anna_Savchenko.pdf"



const Menu = () => {
    const [expanded, setExpanded] = useState(false);
    const clikedToggler = useRef(null)

    useEffect(() => {
        clikedToggler.current.click()

    }, [])



    return (

        < Navbar expanded={expanded} collapseOnSelect expand="sm" id="navigation" >
            <Navbar.Toggle
                ref={clikedToggler}
                onClick={() => setExpanded(expanded ? false : "expanded")}
                onBlur={() => setExpanded(false)}
                aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse>
                <ul>
                    <li><NavLink onClick={() => setExpanded(false)} to="/me">About</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/contact">Contact</NavLink></li>
                    <li><NavLink to={File} download target="_new"><FiDownload /> Resume</NavLink></li>
                </ul>
            </Navbar.Collapse>

        </Navbar >
    )
}
export default Menu;