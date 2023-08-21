import React from 'react';
import logo from '../images/logo.svg'

function Main(){
    return (
    <main>
        <div className='title-container'>
            <h1>Fun facts about React</h1>
        </div>
        <div className='list-container'>
            <ul className='list'>
                <li className='item'>Was first release in 2013</li>
                <li className='item'>Was originally created by Jordan Walke</li>
                <li className='item'>Has well over 100K stars on Github</li>
                <li className='item'>Is maintained by Facebook</li>
                <li className='item'>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </main>
)};

export default Main;