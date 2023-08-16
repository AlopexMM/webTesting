import React from 'react';
import logo from '../images/logo.svg';

function Nav() {
    return (
    <nav className='nav'>
        <img className="nav-logo" src={logo} alt="react logo"/>
        <h3 className='nav-logo-title'>ReactFacts</h3>
        <h4 className='nav-text-course'>React course - Project 1</h4>
    </nav>
)};

export default Nav;