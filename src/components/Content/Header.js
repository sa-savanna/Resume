import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {

    return (
        <div className="header">
            <h1>{props.header}</h1>
            <p><Link to="/">{props.name}</Link>{props.paragraph}</p>
        </div>
    )
}

export default Header
