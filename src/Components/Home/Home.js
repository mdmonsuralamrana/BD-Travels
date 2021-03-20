import React from 'react';
import style from './Home.css';
import bike from '../Photos/Frame.png';
import car from '../Photos/Frame-1.png';
import bus from '../Photos/Frame-2.png';
import train from '../Photos/Group.png';

const Home = () => {
    return (
        <div className='travel-system'>
            <div className="travel-via">
                <img src={bike} alt=""/>
                <p>Bike</p>
            </div>
            <div className="travel-via">
                <img src={car} alt=""/>
                <p>Car</p>
            </div>
            <div className="travel-via">
                <img src={bus} alt=""/>
                <p>Bus</p>
            </div>
            <div className="travel-via">
                <img src={train} alt=""/>
                <p>Train</p>
            </div>
        </div>
    );
};

export default Home;