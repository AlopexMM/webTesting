import React from 'react';
import "../css/Main.css";
import {travelsData} from "../data/travelsData";
import Card from "./Card"

export default function Main() {
    const travels = travelsData.map( data => {
        return <Card data={data}/>
    })
    return (
        <div className='Main'>
            {travels}
        </div>
    )
}