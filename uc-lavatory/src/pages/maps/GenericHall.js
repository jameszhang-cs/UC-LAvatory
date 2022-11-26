import React, {useEffect, useState} from 'react';
import Axios  from 'axios';
function DisplayReviews(props) {
  const [reviewList, setReviewList] = useState([])
  var hallName = 'http://localhost:3001/api/get/' + props.hall.replace(" ", "%20");
  useEffect(()=>{
      Axios.get(hallName).then((response) =>{
          setReviewList(response.data)
      })
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
        <p>Average: To be implemented</p>
        {reviewList.map((val) =>{
            return <h1>{val.revRating} stars: {val.revBody} gender: {val.revGender} floor: {val.revFloor}</h1>
        })}
    </div>
);
}
function FloorSelect(props) {
    const [setValue] = React.useState("floor1")
    const handleChange = event => {
        setValue(event.target.value);
    };

    var arr = Array(1);
    for (var i = 0; i < props.floors; i++){
        var obj = {};
        obj["value"] = "floor" + (i + 1);
        obj["text"] = "Floor " + (i + 1);
        arr.push(obj);
    }    
    
      return (
        <div>
            <h1>Top Restrooms in this Hall</h1>
                <label>Sort reviews for this restroom by: {" "}</label>
                <select>
                    <option value = "">Please select an option.</option>
                    <option value = "time">time</option>
                    <option value = "helpfulness">helpfulness</option>
                </select>
                <br></br>
            <label>Please select floor. {" "}</label>
          <select onChange={handleChange}>
            {arr.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      );
};

const GenericHall = {
  FloorSelect,
  DisplayReviews,
}
export default GenericHall