import React from 'react';
import '../css/Header.css';
import world from "../img/world.png";

export default function Header() {
    return (
        <div className="Header">
            <img src={world} alt='world'/>
            <h3>my travel journal.</h3>
        </div>
    )
}