import React, {useEffect, useState} from 'react';
import Axios  from 'axios';
import './GenericHall.css'

function SortReviews(props){
  //GenderFilter stuff
  const [ filteredGender, genderToFilter ] = React.useState("All genders");
  const handleGender = (event) => {
    genderToFilter(event.target.value);
  }
  //FloorSelect stuff
  const [floorToDisplay, changeFloor ] = React.useState('0');
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
    default:
      listToUse = reviewList;
      break;
  }
  return (
    <div>
      <h1>{props.hall}</h1>
      <FloorSelect floors = {props.floors} handleFloor= {handleFloor}></FloorSelect>
      <GenderFilter filteredGender = {filteredGender} handleGender = {handleGender}></GenderFilter>
      <SortOptions sortChoice = {sortChoice} handleSort = {handleSort}></SortOptions>
      <DisplayAverage ratingAvg = {ratingAvg}></DisplayAverage>
      <DisplayReviews filteredGender = {filteredGender} floorToDisplay = {floorToDisplay} reviewList = {listToUse}></DisplayReviews>
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

function DisplayAverage(props) {
  return (
    <h3>
        {props.ratingAvg.map((val) =>{
            return <h1>Average Rating of All Reviews: {val['avg(revRating)']}</h1>
        })}
    </h3>
  )
}

function DisplayReviews(props){
  const [selected, setSelected]=useState()
  const toggle = (val) => {
    if (selected===val) {
      return setSelected(null)
    }
    setSelected(val)
  }
  var displayList=[];
  if (props.floorToDisplay === '0') {
    if (props.filteredGender === "All genders") {
      displayList=[...props.reviewList];
    } else {
      props.reviewList.forEach((val) => {
        if (val.revGender === props.filteredGender){
          displayList.push(val);
        }
      })
    }
  } else if (props.filteredGender === "All genders") {
    props.reviewList.forEach((val) => {
      if (val.revFloor === props.floorToDisplay){
        displayList.push(val);
      }
    })
  } else {
    props.reviewList.forEach((val) => {
      if (val.revFloor === props.floorToDisplay){
        if (val.revGender === props.filteredGender) {
          displayList.push(val);
        }
      }
    })
  }
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {displayList.map((val) => (
              <div className='review'>
              <div className='banner' onClick={ ()=> toggle(val)}>
                <h1>{val.revRating} stars: {val.revGender} washroom on floor {val.revFloor}</h1>
                <span>
                  {selected === val ? '-' : '+'}
                </span>
              </div>
              <div className={selected === val ? 'body show' : 'body'}>
                {val.revBody}
                <br></br>
                reviewed on {val.revTime}
              </div>
            </div>
        ))}
      </div>
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