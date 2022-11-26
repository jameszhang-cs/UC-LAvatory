import React from 'react';
import GenericHall from './GenericHall';

const SchoenbergHall = () => {
    return (
        <div>
            <GenericHall.SortReviews hall = "Schoenberg Hall" floors = {2}></GenericHall.SortReviews>
        </div>
    );
}

export default SchoenbergHall;