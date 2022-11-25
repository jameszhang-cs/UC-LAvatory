import Axios  from 'axios';
import React, {useEffect, useState} from 'react';

const BoelterHall = () => {
    const [value, setValue] = React.useState("floor1")
    const handleChange = (event) => (
        setValue(event.target.value)
    );

    const [reviewList, setReviewList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/get/Boelter%20Hall').then((response) =>{
            setReviewList(response.data)
        })
    }, [])



    return (
        <div>
            <h1>Boelter Hall Data</h1>
            <label>
                Please select floor.
                <select value={value} onChange={handleChange}>
                    <option value = "floor1">Floor 1</option>
                    <option value = "floor2">Floor 2</option>
                    <option value = "floor3">Floor 3</option>
                    <option value = "floor4">Floor 4</option>
                    <option value = "floor5">Floor 5</option>
                    <option value = "floor6">Floor 6</option>
                    <option value = "floor7">Floor 7</option>
                    <option value = "floor8">Floor 8</option>
                    <option value = "floor9">Floor 9</option>
                </select>
            </label>
            <p>Average: To be implemented</p>
            {reviewList.map((val) =>{
                return <h1>{val.revRating} stars: {val.revBody}</h1>
            })}
        </div>
    );
}

export default BoelterHall;