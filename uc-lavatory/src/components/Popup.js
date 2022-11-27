import React from 'react'
import './Popup.css'
import fart from '../soundeffects/fart.mp3'
let audio = new Audio(fart);
function Popup(props) {
  const handleClick = () => {
    audio.play();
    props.setTrigger(false)
  }
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <h1>Submit a Review!</h1>
            <button className="close-button" onClick={handleClick}>
                Return
            </button>
            { props.children }
        </div>
    </div>
  ) : ""
}

export default Popup