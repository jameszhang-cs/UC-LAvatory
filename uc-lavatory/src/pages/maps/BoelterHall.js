import Axios  from 'axios';
import React, {useEffect, useState} from 'react';
import FloorSelect from './GenericHall';

const BoelterHall = () => {
    const [reviewList, setReviewList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/get/Boelter%20Hall').then((response) =>{
            setReviewList(response.data)
        })
    }, [])

    return (
        <div>
            <FloorSelect floors={9}></FloorSelect>
            <p>Average: To be implemented</p>
            {reviewList.map((val) =>{
                return <h1>{val.revRating} stars: {val.revBody}</h1>
            })}
        </div>
    );
}

export default BoelterHall;