import React, { useState } from 'react';
import timmy from '../timmy/timmy.jpg';
import "./Premium.css";

const Premium = () => {
    const [ clickCount, setCount ] = useState(0);
    const increment = () => {
        setCount (prevCount => prevCount + 1);
    }

    return (
        <div className = "Premium">
            <h1>Want to upgrade your expeerience?</h1>
            <h1>{clickCount}</h1>
            <img onClick = {increment} className = "timmy" src = {timmy} alt = "timmy"></img>
            <div> awe</div>
        </div>
    )
}

export default Premium;