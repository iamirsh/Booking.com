import React from 'react';
import "./Ticket.css";
import { Link } from 'react-router-dom';


export const Hotels = (props) => {

  return (
    <div className='section'>
      <div className="sectionHeader">
        <h3>Available Hotel</h3>
      </div>
      {props.data.map((el) => (
        <div className="sectionItems container mt-3 mb-3 w-50">
        <div>
          <p>Hotel</p>
          <p>{el.hotel_name}</p>
          <p>CITY</p>
          <p>{el.city}</p>
          <p>RATING</p>
          <p>{el.rating}</p>
        </div>
        <div>
          <p>CHECK-IN</p>
          <p>{el.check_in}</p>
          <p>CHECK-OUT</p>
          <p>{el.check_out}</p>
        </div>
        <div>
          <p>Price:</p>
          <p>{el.price_per_night} per night</p>
          <p>Room:</p>
          <p>King</p>
          <p>Guests:</p>
          <p>{el.guests}</p>
        </div>
        <div className='bookBtn'>
          <Link to='/checkout'> <button className='btn btn-primary '>Book</button></Link>
        </div>
      </div>
      ))}
      
    </div>
  )
}
