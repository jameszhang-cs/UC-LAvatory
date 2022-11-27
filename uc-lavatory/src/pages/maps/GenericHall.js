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
  //SortOptions stuff
  const [ sortChoice, chooseSort ] = React.useState("ratinga");
  const handleSort = (event) => {
    chooseSort (event.target.value);
  }
  var listToUse = [];
  switch(sortChoice){
    case "ratinga":
      listToUse = [...reviewList].sort((a, b) => a.revRating - b.revRating);
      break;
    case "ratingd":
      listToUse = [...reviewList].sort((a, b) => b.revRating - a.revRating);
      break;
    case "timea":
      listToUse = [...reviewList].sort((a, b) => new Date(a.revTime).getTime() - new Date(b.revTime).getTime());
      break;
    case "timed":
      listToUse = [...reviewList].sort((a, b) => new Date(b.revTime).getTime() - new Date(a.revTime).getTime());
      break;
  }
  return (
    <div>
      <h1>{props.hall}</h1>
      <h1>{sortChoice}</h1>
      <FloorSelect floors = {props.floors} handleFloor= {handleFloor}></FloorSelect>
      <GenderFilter filteredGender = {filteredGender} handleGender = {handleGender}></GenderFilter>
      <SortOptions sortChoice = {sortChoice} handleSort = {handleSort}></SortOptions>
      <DisplayReviews filteredGender = {filteredGender} floorToDisplay = {floorToDisplay} ratingAvg = {ratingAvg} reviewList = {listToUse} ></DisplayReviews>
    </div>
  );
};
function SortOptions(props){
  return (
    <div>
      <label>Sort By: {" "}</label>
      <select onChange = {props.handleSort}>
        <option value = "ratinga">Rating (ascending)</option>
        <option value = "ratingd">Rating (descending)</option>
        <option value = "timea">Time (ascending)</option>
        <option value = "timed">Time (descending)</option>
      </select>
    </div>
  )
}
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
        {/* eslint-disable-next-line */}
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
  var obj1 = {}
  obj1["value"] = 0;
  obj1["text"] = "Show all floors";
  arr.push(obj1);
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