import React from 'react';
import Popup from '../components/Popup';
import { useState } from 'react'
import Form from '../components/Form';

const HomePage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
            <div>
            <main>
                <h1>UC-Lavatories</h1>
                <button onClick={() => setButtonPopup(true)}>submit review</button>
            </main>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Form></Form>
            </Popup>
            <h1>See reviews for each hall</h1>
            <ul id ='nav-list'>
                <a href = "http://localhost:3000/boelterhall">Boelter Hall</a>
                <br></br>
                <a href = "http://localhost:3000/schoenberghall">Schoenberg Hall</a>
            </ul>
        </div>
    );
}

export default HomePage;

