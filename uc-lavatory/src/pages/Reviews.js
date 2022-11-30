import React from 'react';
import Popup from '../components/Popup';
import { useState } from 'react'
import Axios from 'axios'
import Form from '../components/Form';
import "./Reviews.css"
import flush from '../soundeffects/flushed.mp3';
import boelter from '../ucla_images/boelter.jpg';
import schoenberg from '../ucla_images/schoenberg.jpg';
import matsci from '../ucla_images/mathematicalsciences.jpg';
import pritzker from '../ucla_images/ucla_pritzker.jpg';
import geology from '../ucla_images/geology.jpg';
import younghall from '../ucla_images/younghall.jpg';
import eiv from '../ucla_images/engineeringiv.jpg';
import ev from '../ucla_images/engineeringv.jpg';
import evi from '../ucla_images/engineeringvi.jpg';

let audio = new Audio(flush);

const updateHall = (hall) => {
    var hallID=0;
    var pageViews=0;
    var increaseURL="";
    var decreaseURL="";
    var fetchURL = 'http://localhost:3001/api/fetch/pageviews/' + hall.replace(" ", "%20");
    Axios.get(fetchURL).then((response) =>{
        hallID=response.data[0].id;
        increaseURL = 'http://localhost:3001/api/increase/pageviews/' + hallID;
        decreaseURL = 'http://localhost:3001/api/decrease/pageviews/' + hallID;
        Axios.patch(increaseURL);
        pageViews=response.data[0].views;
    });
}

const Reviews = () => {
    const handleClick = () => {
        audio.play();
        setButtonPopup(true);
    }
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <main>
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
                            <a href = "http://localhost:3000/boelterhall">
                            <button onClick={updateHall("Boelter Hall")}>Boelter Hall</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={eiv} alt="Engineering IV" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringiv">Engineering IV</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={ev} alt="Engineering V" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringv">Engineering V</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={eiv} alt="Engineering VI" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringvi">Engineering VI</a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={geology} alt="Geology" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/geology">Geology</a>
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
                        <img src={schoenberg} alt="Schoenberg Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/schoenberghall">Schoenberg Hall</a>
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
        </main>
    );
}

export default Reviews;

