import React, { useState, useRef, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { DataContext } from "../context/DataContext"

import Modal from './Modal';

const Menu = () => {

    const { cvFile } = useContext(DataContext);
    const clikedToggler = useRef(null)

    const [expanded, setExpanded] = useState(false);
    const [modal, setModal] = useState(false)

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
                    <li onClick={() => setModal(true)} ><FaEye />View Resume</li>

                    {
                        modal === true && (
                            <Modal setModal={setModal} resume={cvFile && cvFile} />
                        )
                    }
                </ul>
            </Navbar.Collapse>

        </Navbar >
    )
}
export default Menu;