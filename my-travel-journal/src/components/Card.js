import React from "react";
import "../css/Card.css";
import locationImg from "../img/location.png";

export default function Card(props) {
    const cardImg = require(`../img/${props.data.imgName}`)
    return (
        <div className="Card">
            <img src={cardImg} alt="card" className="card-img"/>
            <div className="card-content">
                <div className="location-info">
                    <img src={locationImg} alt="location"/>
                    <h2>{props.data.location.toUpperCase()}</h2>
                    <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.data.title}</h1>
                <h3 className="date">{props.data.startDate} - {props.data.endDate}</h3>
                <p className="description">{props.data.description}</p>
            </div>
            <br></br>
        </div>
    )
}
