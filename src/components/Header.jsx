import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className=' pink'>
            <div className="nav-wrapper">
                <Link to="" className="brand-logo">Home</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contacts">Contacts</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header