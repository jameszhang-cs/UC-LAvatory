import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData]=useState({
    building: "",
    rating: 0,
    review: "",
  });

  function handleChange(event) {
    const {name, value}=event.target;
    setFormData(prevData => ({
        ...prevData, [name]:value
    }));
  }

  return(
    <form>
        <label>Building:</label>
        <select>
            <option value="Boelter Hall">Boelter Hall</option>
            <option value="Schoenberg Hall">Schoenberg Hall</option>
        </select>
        <br></br>
        <br></br>
        <label>Rating:</label>
        <input
            required
            name="rating"
            placeholder="Rating"
        />
        <br></br>
        <br></br>
        <label>Review:</label>
        <input
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
        />
        <br></br>
        <br></br>
        <p>review: </p>
        <p>{formData.review}</p>
        <button>Submit</button>
    </form>
  )
}
export default Form