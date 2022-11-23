import React from 'react'
import { useEffect, useState } from 'react'
import './Form.css'
import Axios from 'axios'

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
    setRevBody(event.target.value)
  }

  const [revLocation, setRevLocation] = useState('')
  const [revRating, setRevRating] = useState('')
  const [revBody, setRevBody] = useState('')

  const submitReview = () =>{
    if (revRating.length === 0){
      alert("Rating has been left blank!")
    }
    else if (revBody.length === 0){
      alert("Review has been left blank!")
    }
    else{
      Axios.post('http://localhost:5000/api/insert', {
        revLocation: revLocation, 
        revRating: revRating, 
        revBody: revBody
      }).then(() => {
        alert("Success!")
      })
    }
  }

  return(
    <form>
        <label>Building:</label>
        <select onChange = {(e)=>{setRevLocation(e.target.value)}}>
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
            onChange = {(e)=>{setRevRating(e.target.value)}}
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
        <button onClick = {submitReview}>Submit</button>
    </form>
  )
}
export default Form