import React from 'react';
import Photo from '../images/kaneki-back.png';
import EmailButton from '../images/EmailButton.png';
import LinkedInButton from '../images/LinkedInButton.png';

export default function Info() {
    return (
        <div className='Info'>
            <img src={Photo} alt="" width="317px" />
            <div className='info-text'>
                <h2 className='title'>Mario Mori</h2>
                <h3 className='second-title'>Frontend Developer</h3>
                <p className='paragraph'>alopexmm.ar</p>
            </div>
            <div className='buttons'>
                <div>
                    <img src={EmailButton} alt="email" />
                </div>
                <div>
                    <img src={LinkedInButton} alt="linkedin"/>
                </div>
            </div>
        </div>
    )
    
}