import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () =>{
    return(
        <div className="navbar">
            <h1><Link to="/" style={{ textDecoration: 'none',color:'white' }}>Booking.com</Link></h1>
            <div className="link">
                <p><a><i className="fa-solid fa-bed"></i>Stays</a></p>
                <p><a><i className="fa-solid fa-plane"></i>Flights</a></p>
                <span><Link to="/login" style={{ textDecoration: 'none', color:'white' }}><i className="fa-solid fa-user"></i>Login</Link></span>
            </div>
        </div>
    )
}