import React from 'react';
import { Link } from 'react-router-dom';
import "./Ticket.css";

export const FlightTicket = (props) => {
  
  return (
    <div className='section'>
        <div className="sectionHeader">
            <h3>Available Flights</h3>
        </div>
        {props.data.map((el) => (
        <div className="sectionItems mt-3">
          <div>
            <p>FROM:</p>
            <p className='bold'>{el.from}</p>
            <p>TO:</p>
            <p className='bold'>{el.to}</p>
            <p>Airline:</p>
            <p className='bold'>{el.airlineName}</p>
          </div>
          <div>
            <p>DEPARTURE</p>
            <p className='bold'>{el.departure.departureTime} | {el.departure.departureDate}</p>
            <p>RETURN</p>
            <p className='bold'>{el.return.returnTime} | {el.return.returnDate} </p>
          </div>
          <div>
            <p>Price:</p>
            <p className='bold'>{el.price}</p>
            <p>Via:</p>
            <p className='bold'>{el.via}</p>
            <p>Duration:</p>
            <p className='bold'>{el.duration}</p>
          </div>
          <div >
           <Link to='/checkout'> <button className='btn btn-primary'>Book</button></Link>
          </div>
          
        </div>
))}
    </div>
  )
}
