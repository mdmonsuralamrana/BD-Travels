import React from 'react';
import './TravelViaDetails.css';
import PeopleIcon from '@material-ui/icons/People';

const TravelViaDetails = (props) => {

    const { travel_via, sit, price, image } = props.travelBy;
    return (
        <div className="details-box" >
            <div className="">
                <h6>{travel_via}</h6>
                <img src={image} alt="" />
                <h6>{sit}</h6>
                <h6>{price}</h6>
            </div>

        </div>
    );
};

export default TravelViaDetails;