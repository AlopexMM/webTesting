import React from 'react';
import {cardsData} from '../data/cardsData';

export default function Carrousel() {
    const cards = cardsData.map( data => {
        return (
            <Card 
                image={data.image} 
                stars={data.stars}
                reviews={data.reviews}
                country={data.country}
                description={data.description}
                price={data.price}
                status={data.status} 
            />)
    })
    console.log(cards);
    return(
        <section className="cards">
            {cards}
        </section>
    )
}

function Card({image, stars, reviews, country, description, price, status}){
    const activityImg = require(`../img/${image}`);
    const starImg = require(`../img/star.png`);
    return (
        <div className='card'>
            <div>
            {status.show && <div className='status-box'>
                <span className='card-text status-text'>{status.text.toUpperCase()}</span>
                </div>}
            <img src={activityImg} alt="activity" className="img-card"/>
            </div>
                <div className='card-text'>
                    <img src={starImg} alt="star" className='starimg'/>
                    <span>{stars}</span>
                    <span className='card-text-color'> ({reviews})</span>
                    <span className='card-text-color'> . </span>
                    <span className='card-text-color'>{country}</span>
                </div>
            <p className='card-text'>{description}</p>
            <p className='card-text'><span className='bold'>From ${price}</span> / person</p>
        </div>
    );
}