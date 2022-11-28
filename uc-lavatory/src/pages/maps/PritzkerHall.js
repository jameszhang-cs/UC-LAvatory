import React from 'react';
import GenericHall from './GenericHall';

const PritzkerHall = () => {
    return (
        <div>
            <GenericHall.SortReviews hall="Pritzker Hall" floors={8}></GenericHall.SortReviews>
        </div>
    );
}

export default PritzkerHall;