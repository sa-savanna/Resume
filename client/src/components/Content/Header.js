import React from 'react'
import { Link } from 'react-router-dom'
import css from "./topBar.module.css"

const Header = (props) => {

    return (
        <div className={css.header}>
            <h1>{props.header}</h1>
            <p><Link to="/">{props.name}</Link>{props.paragraph}</p>
        </div>
    )
}

export default Header
