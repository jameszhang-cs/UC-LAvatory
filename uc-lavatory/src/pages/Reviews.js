import React from 'react';
import Popup from '../components/Popup';
import { useState } from 'react'
import Form from '../components/Form';
import "./Reviews.css"
import flush from '../soundeffects/flushed.mp3';
import boelter from '../ucla_images/boelter.jpg';
import schoenberg from '../ucla_images/schoenberg.jpg';
import matsci from '../ucla_images/mathematicalsciences.jpg';
import pritzker from '../ucla_images/ucla_pritzker.jpg';
import geology from '../ucla_images/geology.jpg';
import younghall from '../ucla_images/younghall.jpg';

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
                    <div className='polaroid'>
                        <img src={matsci} alt="Mathematical Sciences" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/mathematicalsciences">Mathematical Sciences Building</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={pritzker} alt="Pritzker Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/pritzkerhall">Pritzker Hall</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={geology} alt="Geology" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/geology">Geology</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={younghall} alt="Young Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/younghall">Young Hall</a>
                        </div>
                    </div>
                     </ul>  
                </div>
            </div>
        </body>
    );
}

export default HomePage;

