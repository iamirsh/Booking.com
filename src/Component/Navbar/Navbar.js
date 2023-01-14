import React from 'react';
import './Navbar.css';

export const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Booking.com</h1>
            <div className="link">
                <p><a><i className="fa-solid fa-bed"></i>Stays</a></p>
                <p><a><i className="fa-solid fa-plane"></i>Flights</a></p>
                <span><a><i className="fa-solid fa-user"></i>Login</a></span>
            </div>
        </div>
    )
}