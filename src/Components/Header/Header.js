import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className="nav">
                <ul>
                    {/* <li>
                        <img className="bg" src={bg} alt="" />
                    </li> */}
                        <Link to="/home">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/blog">Blog</Link>
                        <Link className="btn-login" to="/login">login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;