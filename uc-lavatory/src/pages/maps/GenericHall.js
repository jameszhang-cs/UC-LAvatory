import React from 'react';

function FloorSelect(props) {
    var arr = Array(1);
    for (var i = 0; i < props.floors; i++){
        var obj = {};
        obj["value"] = "floor" + (i + 1);
        obj["text"] = "Floor " + (i + 1);
        arr.push(obj);
    }
    
    const [value, setValue] = React.useState("floor1")
    const handleChange = event => {
        setValue(event.target.value);
    };
    
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
          <select onChange={handleChange} name="fruits" id="fruit-select">
            {arr.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      );
};

export default FloorSelect