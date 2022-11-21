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
        </div>
    );
}

export default HomePage;

