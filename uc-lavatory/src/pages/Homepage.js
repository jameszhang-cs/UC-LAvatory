import React from 'react';
import timmy from '../timmy/timmy.jpg';
import timmyvoice from '../timmy/timmysound.mp3';
import ucla_pritzker from '../ucla_images/ucla_pritzker.jpg';
import ucla_royce from '../ucla_images/ucla_royce.jpg';
import ucla_birdseye from '../ucla_images/ucla_birdseye.jpg';
import ucla_cos from '../ucla_images/ucla_cos.jpg';
import "./Homepage.css";

let audio = new Audio(timmyvoice)
  
const start = () => {
    audio.play()
}

const Homepage = () => {
    return (
        <div className="Container">
            <img className="HeroImage1" src={ucla_royce} />
            <img className="HeroImage2" src={ucla_pritzker} />
            <img className="HeroImage3" src={ucla_birdseye} />
            <img className="HeroImage4" src={ucla_cos} />
        </div>
    );
}

export default Homepage;

