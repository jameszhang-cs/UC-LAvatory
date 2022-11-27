import React from 'react';
import Popup from '../components/Popup';
import { useState } from 'react'
import Form from '../components/Form';
import "./Reviews.css"
import boelter from '../ucla_images/boelter.jpg';
import schoenberg from '../ucla_images/schoenberg.jpg';
import flush from '../soundeffects/flushed.mp3';

let audio = new Audio(flush);
const HomePage = () => {
    const handleClick = () => {
        audio.play();
        setButtonPopup(true);
    }
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <body>
            <div className="row">
                <div className="column side">
                        <h1>UC-Lavatory</h1>
                        <p>Visit a restroom recently?</p>
                        <p>Feel strongly about your pee and/or poo?</p>
                        <p><b>Click the button below to tell the world how you feel!</b></p>
                        <br></br>
                        <button onClick={handleClick}>Submit a Review!</button>   
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Form></Form>
                </Popup>
                <div className="column middle">
                    <h1>Reviews For Each Hall</h1>
                    <ul id ='nav-list'>
                    <div className='polaroid'>
                        <img src={boelter} alt="Boelter Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/boelterhall">Boelter Hall</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={schoenberg} alt="Schoenberg Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/schoenberghall">Schoenberg Hall</a>
                        </div>
                    </div>
                     </ul>  
                </div>
            </div>
        </body>
    );
}

export default HomePage;

