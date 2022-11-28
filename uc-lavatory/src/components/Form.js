import React from 'react'
import { useEffect, useState } from 'react'
import './Form.css'
import Axios from 'axios'

const current = new Date();
const date = `${current.getMonth()}.${current.getDate()}.${current.getFullYear()}`;

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
  const [revGender, setRevGender] = useState('')
  const [revFloor, setRevFloor] = useState('')
  const [revRating, setRevRating] = useState('3')
  const [revBody, setRevBody] = useState('')

  const submitReview = () =>{
    /*
    if (revRating.value === 0){
      alert("Rating has been left blank!")
    }
    */
    if (revBody.length === 0){
      alert("Review has been left blank!")
    }
    else if (revLocation.length === 0){
      alert("Please select a building.")
    }
    else if (revGender.length === 0){
      alert("Please select a building.")
    }
    else{
      Axios.post('http://localhost:3001/api/insert', {
        revLocation: revLocation, 
        revGender: revGender,
        revFloor: revFloor,
        revRating: revRating, 
        revBody: revBody,
        revYear: current.getFullYear(),
        revMonth: current.getMonth(),
        revDay: current.getDate()

      }).then(() => {
        alert("Success!")
      })
    }
  }

  return(
    <form>
        <label>Building: </label>
        <select onChange = {(e)=>{setRevLocation(e.target.value)}}>
            <option value = "">Select Building:</option>
            <option value="Boelter Hall">Boelter Hall</option>
            <option value="Schoenberg Hall">Schoenberg Hall</option>
            <option value="Mathematical Sciences">Mathematical Sciences</option>
            <option value="Pritzker Hall">Pritzker Hall</option>
            <option value="Geology">Geology</option>
            <option value="Young Hall">Young Hall</option>
            <option value="Engineering IV">Engineering IV</option>
            <option value="Engineering V">Engineering V</option>
            <option value="Engineering VI">Engineering VI</option>
        </select>
        <label>Gender: </label>
        <select onChange = {(e)=>{setRevGender(e.target.value)}}>
            <option value = "">Select Gender:</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
        </select>
        <label>Floor: </label>
        <input
            required
            name="floor"
            placeholder="Floor"
            onChange = {(e)=>{setRevFloor(e.target.value)}}
        />
        <label>Rating: </label>
        <input
            required
            min={1}
            max={5}
            type="range"
            name="rating"
            placeholder="Rating"
            onChange = {(e)=>{setRevRating(e.target.value)}}
        />
        <label>Review: </label>
        <textarea
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
        />
        <p><u>Confirm Review: </u></p>
        <p>{formData.review}</p>
        <button onClick = {submitReview}>Submit</button>
    </form>
  )
}
export default Form