import React from 'react';
import Popup from '../components/Popup';
import { useState } from 'react'
import Axios from 'axios'
import Form from '../components/Form';
import "./Reviews.css"
import boelter from '../ucla_images/boelter.jpg';
import schoenberg from '../ucla_images/schoenberg.jpg';
import matsci from '../ucla_images/mathematicalsciences.jpg';
import pritzker from '../ucla_images/ucla_pritzker.jpg';
import geology from '../ucla_images/geology.jpg';
import younghall from '../ucla_images/younghall.jpg';
import eiv from '../ucla_images/engineeringiv.jpg';
import ev from '../ucla_images/engineeringv.jpg';
import evi from '../ucla_images/engineeringvi.jpg';


const updateHall = (hall) => {
    var hallID=0;
    var pageViews=0;
    var increaseURL="";
    var fetchURL = 'http://localhost:3001/api/fetch/pageviews/' + hall.replace(" ", "%20");
    console.log(fetchURL);
    Axios.get(fetchURL).then((response) =>{
        console.log("yo");
        hallID=response.data[0].id;
        increaseURL = 'http://localhost:3001/api/increase/pageviews/' + hallID;
        Axios.patch(increaseURL);
        pageViews=response.data[0].views;
    })
    .catch((error)=> {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    });
    console.log("update finished");
}

const Reviews = () => {
    const handleClick = () => {
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
                            <button onClick={()=>{
                                updateHall("Boelter Hall");
                                console.log("boelter clicked");
                            }}>Boelter Hall</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={eiv} alt="Engineering IV" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringiv">
                            <button onClick={()=>{updateHall("Engineering IV")}}>Engineering IV</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={ev} alt="Engineering V" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringv">
                            <button onClick={()=>{updateHall("Engineering V")}}>Engineering V</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={evi} alt="Engineering VI" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/engineeringvi">
                            <button onClick={()=>{updateHall("Engineering VI")}}>Engineering VI</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={geology} alt="Geology" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/geology">
                            <button onClick={()=>{updateHall("Geology")}}>Geology</button>
                            </a>
                        </div>
                    </div>                    
                    <div className='polaroid'>
                        <img src={matsci} alt="Mathematical Sciences" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/mathematicalsciences">
                            <button onClick={()=>{updateHall("Mathematical Sciences")}}>Mathematical Sciences</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={pritzker} alt="Pritzker Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/pritzkerhall">
                            <button onClick={()=>{updateHall("Pritzker Hall")}}>Pritzker Hall</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={schoenberg} alt="Schoenberg Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/schoenberghall">
                            <button onClick={()=>{updateHall("Schoenberg Hall")}}>Schoenberg Hall</button>
                            </a>
                        </div>
                    </div>
                    <div className='polaroid'>
                        <img src={younghall} alt="Young Hall" />
                        <div className='caption'>
                            <a href = "http://localhost:3000/younghall">
                            <button onClick={()=>{updateHall("Young Hall")}}>Young Hall</button>
                            </a>
                        </div>
                    </div>
                     </ul>  
                </div>
            </div>
        </main>
    );
}

export default Reviews;

