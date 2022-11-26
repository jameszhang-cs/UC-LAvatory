import React, {useEffect, useState} from 'react';
import Axios  from 'axios';

function DisplayReviews(props) {
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
        <p>Average: </p>
        {ratingAvg.map((val) =>{
            return <h1>Average Rating: {val['avg(revRating)']}</h1>
        })}
        {reviewList.map((val) =>{
            return <h1>{val.revRating} stars: {val.revBody} time: {val.revTime} gender: {val.revGender} floor: {val.revFloor}</h1>
        })}
    </div>
);
}
function SortReviews(props){
  const [floorToDisplay, changeFloor ] = React.useState(1);
  const handleFloor = (event) => {
    changeFloor(event.target.value);
  }
  
  return (
    <div>
      <h1>{floorToDisplay}</h1>
      <FloorSelect floors = {props.floors} handleFloor= {handleFloor}></FloorSelect>
    </div>
  );
};

/*function FloorSelect(props) {
  const [floorToDisplay, changeFloor ] = React.useState(0);
  const handleFloor = event => {
    changeFloor(event.target.value);
  }
  var arr = Array(1);
  for (var i = 0; i < props.floors; i++){
      var obj = {};
      obj["value"] = (i + 1);
      obj["text"] = "Floor " + (i + 1);
      arr.push(obj);
  }    
  
    return (
      <div>
          <h1 >Floor: {floorToDisplay}</h1>
          <label>Please select floor. {" "}</label>
        <select name = "floorToDisplay" onChange = {handleFloor}>
          {arr.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    );
};*/
function FloorSelect(props) {
  var arr = Array(1);
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