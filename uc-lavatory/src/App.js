import './App.css';
import Popup from './components/Popup';
import { useState } from 'react'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <main>
        <h1>UC-Lavatories</h1>
        <button onClick={() => setButtonPopup(true)}>submit review</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My popup</h3>
          <p>placeholder, will be a form here soon</p>
      </Popup>
    </div>
  );
}

export default App;
