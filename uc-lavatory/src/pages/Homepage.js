import React from 'react';
import timmy from '../timmy/timmy.jpg';
import sc_student_store from '../ucla_images/sc_student_store.jpg';
import ucla from '../ucla_images/ucla.jpg';
import timmyvoice from '../timmy/timmysound.mp3';
import "./Homepage.css";

let audio = new Audio(timmyvoice)
  
const start = () => {
    audio.play()
}

const HomePage = () => {
    return (
            <div>
                <img className="HeroImages" src = {ucla} />
            </div>
    );
}

export default HomePage;

