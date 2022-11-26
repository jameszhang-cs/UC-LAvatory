import React from 'react';
import GenericHall from './GenericHall';

const BoelterHall = () => {
    return (
        <div>
            <GenericHall.SortReviews floors={9}></GenericHall.SortReviews>
            <GenericHall.DisplayReviews hall = {'Boelter Hall'}></GenericHall.DisplayReviews>
        </div>
    );
}

export default BoelterHall;