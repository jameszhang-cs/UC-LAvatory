import React, {useEffect, useState} from 'react';
import Axios  from 'axios';

function SortReviews(props){
  //GenderFilter stuff
  const [ filteredGender, genderToFilter ] = React.useState("All genders");
  const handleGender = (event) => {
    genderToFilter(event.target.value);
  }
  //FloorSelect stuff
  const [floorToDisplay, changeFloor ] = React.useState(0);
  const handleFloor = (event) => {
    changeFloor(event.target.value);
  }
  //DisplayReviews stuff 
  const [reviewList, setReviewList] = useState([])
  const [ratingAvg, setRatingAvg] = useState([])
  var hallName = 'http://localhost:3001/api/get/' + props.hall.replace(" ", "%20");
  var averages = 'http://localhost:3001/api/average/' + props.hall.replace(" ", "%20");
  useEffect(()=>{
    Axios.get(hallName).then((response) =>{
        setReviewList(response.data)
    })
    Axios.get(averages).then((response)=>{
      setRatingAvg(response.data)
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div>
      <h1>{props.hall}</h1>
      <FloorSelect floors = {props.floors} handleFloor= {handleFloor}></FloorSelect>
      <GenderFilter filteredGender = {filteredGender} handleGender = {handleGender}></GenderFilter>
      <DisplayReviews filteredGender = {filteredGender} floorToDisplay = {floorToDisplay} ratingAvg = {ratingAvg} reviewList = {reviewList} ></DisplayReviews>
    </div>
  );
};

function GenderFilter(props){
  return (
    <div>
      <label>Select a gender.{" "}</label>
      <select onChange = {props.handleGender}>
        <option value = "All genders">Show all genders</option>
        <option value = "Male">Male</option>
        <option value = "Female">Female</option>
        <option value = "Unisex">Unisex</option>
      </select>
    </div>
  )
}
function DisplayReviews(props){
  return (
    <div>
      {props.ratingAvg.map((val) =>{
            return <h1>Average Rating: {val['avg(revRating)']}</h1>
        })}
        {props.reviewList.map((val) => {
          if (props.floorToDisplay === '0'){
            if (props.filteredGender === "All genders")
              return <h1>{val.revRating} stars: {val.revBody} time: {val.revTime} gender: {val.revGender} floor: {val.revFloor}</h1>
            else if (val.revGender === props.filteredGender){
              return <h1>{val.revRating} stars: {val.revBody} time: {val.revTime} gender: {val.revGender} floor: {val.revFloor}</h1>
            }
          }
          else if ((val.revFloor === props.floorToDisplay)){ 
            if (val.revGender === props.filteredGender){
              return <h1>{val.revRating} stars: {val.revBody} time: {val.revTime} gender: {val.revGender} floor: {val.revFloor}</h1>
            }
            else if (props.filteredGender === "All genders"){
              return <h1>{val.revRating} stars: {val.revBody} time: {val.revTime} gender: {val.revGender} floor: {val.revFloor}</h1>
            }
          }
        })}
    </div>
  )
}
function FloorSelect(props) {
  var arr = Array(1);
  var obj = {}
  obj["value"] = 0;
  obj["text"] = "Show all floors";
  arr.push(obj);
  for (var i = 0; i < props.floors; i++){
      var obj = {};
      obj["value"] = (i + 1);
      obj["text"] = "Floor " + (i + 1);
      arr.push(obj);
  }
  return (
    <div>
      <label>Please select floor. {" "}</label>
      <select onChange = {props.handleFloor}>
        {arr.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
  </div>
  )
};
const GenericHall = {
  DisplayReviews,
  SortReviews,
}
export default GenericHall