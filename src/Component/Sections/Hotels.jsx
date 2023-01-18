import React from 'react';
import "./Ticket.css";
import { Link } from 'react-router-dom';


export const Hotels = (props) => {
  
console.log(props.city,props.checkin,props.checkout,props.guests);

  return (
    <div className='section'>
      <div className="sectionHeader">
        <h3>Available Hotel</h3>
      </div>
      {props.data.filter((el) => (

        el.city === 'props.city' ?
        (<div className="sectionItems container mt-3 mb-3 w-50">
        <div>
          <p >Hotel</p>
          <p className='bold'>{el.hotel_name}</p>
          <p>CITY</p>
          <p className='bold'>{el.city}</p>
          <p>RATING</p>
          <p className='bold'>{el.rating}</p>
        </div>
        <div>
          <p>CHECK-IN</p>
          <p className='bold'>{el.check_in}</p>
          <p>CHECK-OUT</p>
          <p className='bold'>{el.check_out}</p>
        </div>
        <div>
          <p>Price:</p>
          <p className='bold'>{el.price_per_night} per night</p>
          <p>Room:</p>
          <p className='bold'>{props.roomType}</p>
          <p>Guests:</p>
          <p className='bold'>{el.guests}</p>
        </div>
        <div className='bookBtn'>
          <Link to='/checkout'> <button className='btn btn-primary '>Book</button></Link>
        </div>
      </div>)
      : <h1>Not found</h1>
      ))}
      
    </div>
  )
}
