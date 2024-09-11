import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import File from "./Junior React-Developer.pdf"
import { FaEye } from 'react-icons/fa';



const Menu = () => {
    const [expanded, setExpanded] = useState(false);
    const clikedToggler = useRef(null)

    useEffect(() => {
        clikedToggler.current.click()
        
    }, [])

    return (

        <Navbar expanded={expanded} collapseOnSelect expand="sm" id="navigation" >
            <Navbar.Toggle
                ref={clikedToggler}
                onClick={() => setExpanded(expanded ? false : true)}
                onBlur={() => setExpanded(false)}
                aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse>
                <ul>
                    <li><NavLink onClick={() => setExpanded(false)} to="/">Home</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/me">About Me</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink onClick={() => setExpanded(false)} to="/contact">Contact</NavLink></li>
                    <li><a className="btn" target="_blank" rel="noopener noreferrer" href={File}><FaEye />View Resume</a></li>
                </ul>
            </Navbar.Collapse>

        </Navbar >
    )
}
export default Menu;