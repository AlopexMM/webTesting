import React from 'react';
import MainImage from '../img/frontImage.png';

export default function Presentation(){
    return(
        <section className='presentation'>
            <img src={MainImage} alt='mainimage' className='presentation--image' />
            <h1 className='presentation--title'>Online Experiences</h1>
            <p className='presentation--paragraph'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}