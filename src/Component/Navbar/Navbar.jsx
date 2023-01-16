import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () =>{
    return(
        <div className="navbar">
            <h1><Link to="/" style={{ textDecoration: 'none',color:'white' }}>Booking.com</Link></h1>
            <div className="link">
                <p><Link to="/stays" style={{ textDecoration: 'none', color:'white' }}><i className="fa-solid fa-bed"></i>Stays</Link></p>
                <p><Link to="/flights" style={{ textDecoration: 'none', color:'white' }}><i className="fa-solid fa-plane"></i>Flights</Link></p>
                <span><Link to="/login" style={{ textDecoration: 'none', color:'white' }}><i className="fa-solid fa-user"></i>Login</Link></span>
            </div>
        </div>
    )
}