import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({header, name, paragraph}) => {

    return (
        <div className="header">
            <h1>{header}</h1>
            <p><Link to="/">{name}</Link>{paragraph}</p>
        </div>
    )
}

export default Header
