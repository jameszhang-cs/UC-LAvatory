import React from 'react';
import GenericHall from './GenericHall';

const BoelterHall = () => {
    return (
        <div>
            <GenericHall.FloorSelect floors={9}></GenericHall.FloorSelect>
            <GenericHall.DisplayReviews hall = {'Boelter Hall'}></GenericHall.DisplayReviews>
        </div>
    );
}

export default BoelterHall;