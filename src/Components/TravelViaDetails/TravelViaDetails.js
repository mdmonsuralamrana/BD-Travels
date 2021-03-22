import React from 'react';
import './TravelViaDetails.css';

const TravelViaDetails = (props) => {

    const { travel_via, sit, price, image } = props.travelBy;
    return (
        <div className="details-box" >
            <div className="details">
                <img src={image} alt="" />
                <h6>{travel_via}</h6>
                <h6>sit:{sit}</h6>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default TravelViaDetails;