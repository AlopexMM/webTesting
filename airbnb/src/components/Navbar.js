import React from 'react';
import Logo from '../img/logo.png';

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={Logo} alt='logo' className='logo'/>
        </div>
    )
}