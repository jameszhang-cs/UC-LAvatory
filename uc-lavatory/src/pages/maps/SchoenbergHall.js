import React from 'react';
import GenericHall from './GenericHall';

const SchoenbergHall = () => {
    return (
        <div>
            <GenericHall.FloorSelect floors={2}></GenericHall.FloorSelect>
            <GenericHall.DisplayReviews hall = {'Schoenberg Hall'}></GenericHall.DisplayReviews>
        </div>
    );
}

export default SchoenbergHall;