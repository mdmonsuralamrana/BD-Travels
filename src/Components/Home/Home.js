import React from 'react';
import style from './Home.css';
import bike from '../Photos/Frame.png';
import car from '../Photos/Frame-2.png';
import bus from '../Photos/Frame-1.png';
import train from '../Photos/Group.png';
import bg from '../Photos/traffic1.jpg';
import { Link } from 'react-router-dom';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';


const loginPage = () => {
    return (
        <Destination></Destination>
    )
}

const Home = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="home-page" >
            <Header></Header>
            <div className='travel-system'>
                <Link onClick={loginPage} to='/destination' className="travel-via">
                    <img src={bike} alt="" />
                    <p>Bike</p>
                </Link>
                <Link onClick={loginPage} to='/destination' className="travel-via">
                    <img src={car} alt="" />
                    <p>Car</p>
                </Link>
                <Link onClick={loginPage} to='/destination' className="travel-via">
                    <img src={bus} alt="" />
                    <p>Bus</p>
                </Link>
                <Link onClick={loginPage} to='/destination' className="travel-via">
                    <img src={train} alt="" />
                    <p>Train</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;