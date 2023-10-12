import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About WCL</Link></li>
            <li><Link to ="services">Services</Link></li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    )
}

export default Menu