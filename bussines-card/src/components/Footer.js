import React from 'react';
import TwitterIcon from '../images/TwitterIcon.png';
import FacebookIcon from '../images/FacebookIcon.png';
import InstagramIcon from '../images/InstagramIcon.png';
import GitHubIcon from '../images/GitHubIcon.png';

export default function Footer() {
    return (
        <div className='footer'>
            <img src={TwitterIcon} alt="twitter" className='social-items'/>
            <img src={FacebookIcon} alt="facebook" className='social-items'/>
            <img src={InstagramIcon} alt="instagram" className='social-items'/>
            <img src={GitHubIcon} alt="github" className='social-items'/>

        </div>
    );
}