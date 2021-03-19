import React from 'react';
import { Link, Router } from 'react-router-dom';
import style from '../Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="">Destination</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="/login">Log In</a>
            </nav>
        </div>
    );
};

export default Header;