import React from 'react';
import ucla_pritzker from '../ucla_images/ucla_pritzker.jpg';
import ucla_royce from '../ucla_images/ucla_royce.jpg';
import ucla_birdseye from '../ucla_images/ucla_birdseye.jpg';
import ucla_cos from '../ucla_images/ucla_cos.jpg';
import "./Homepage.css";
import GenericHall from './maps/GenericHall';

const current = new Date();
const date = `${current.getMonth()}.${current.getDate()}.${current.getFullYear()}`;

const Homepage = () => {
    return (
        <div className = "Homepage">
            <div className="Banner">
                <span className="BannerText">
                    <h1>UC-LAvatory</h1>
                    <h2>{date}</h2>
                    <h3>The #1 site for your #1 and #2 needs.</h3>
                </span>
                <img className="HeroImage" src={ucla_royce} alt="Royce Hall" />
                <img className="HeroImage" src={ucla_pritzker} alt="Pritzker Hall" />
                <img className="HeroImage" src={ucla_birdseye} alt="UCLA Birdseye View"/>
                <img className="HeroImage" src={ucla_cos} alt="UCLA Court of Sciences" />
            </div>
                <br></br> <h1>Buildings with Top-Rated Restrooms</h1>
                <p>Display clickable squares of reviews here</p>             
        </div>
    ); 
 
}

export default Homepage;

