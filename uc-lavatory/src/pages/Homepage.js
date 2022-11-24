import React from 'react';
import timmy from '../timmy/timmy.jpg';
import timmyvoice from '../timmy/timmysound.mp3';
import "./Homepage.css";

let audio = new Audio(timmyvoice)
  
const start = () => {
    audio.play()
}

const HomePage = () => {
    return (
            <div>
                <h1>Top Restrooms</h1>
                <img onClick={start} className = "Timmy" src = {timmy} alt = "Timmy the Toilet Buddy"/>
        </div>
    );
}

export default HomePage;

