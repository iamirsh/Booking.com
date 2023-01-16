import React from 'react';
import { Link } from 'react-router-dom';
import "./Ticket.css";

export const FlightTicket = () => {
  return (
    <div className='section'>
        <div className="sectionHeader">
            <h3>Available Movie</h3>
        </div>
        <div className="sectionItems">
          <div>
            <p>FROM:</p>
            <p>Delhi</p>
            <p>TO:</p>
            <p>Goa</p>
            <p>Airline:</p>
            <p>Indigo</p>
          </div>
          <div>
            <p>DEPARTURE</p>
            <p>02:00PM | 12-02-2023</p>
            <p>RETURN</p>
            <p>10:00PM | 12-02-2023</p>
          </div>
          <div>
            <p>Price:</p>
            <p>7500</p>
            <p>Via:</p>
            <p>Mumbai</p>
            <p>Duration:</p>
            <p>2hr 45min</p>
          </div>
          <div>
           <Link to='/checkout'> <button className='btn btn-primary '>Book</button></Link>
          </div>
          
        </div>
    </div>
  )
}
