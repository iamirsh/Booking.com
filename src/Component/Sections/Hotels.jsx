import React, { useEffect, useState } from 'react';
import "./Ticket.css";
import { Link } from 'react-router-dom';


export const Hotels = () => {
  const [hotel, setHotel] = useState();
  
    useEffect(() => {
        const hotelApiData = async () => {
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels');
            const data = await response.json();
            setHotel(data);
            console.log(data);
        };
        hotelApiData();
    },[]);

  return (
    <div className='section'>
        <div className="sectionHeader">
            <h3>Available Hotel</h3>
        </div>
        <div className="sectionItems">
          <div>
            <p>Goa</p>
            <p>Ginger</p>
            <p>CITY</p>
            <p>Mumbai</p>
            <p>RATING</p>
            <p>7.5/10</p>
          </div>
          <div>
            <p>CHECK-IN</p>
            <p>02-01-2023</p>
            <p>CHECK-OUT</p>
            <p>06-01-2023</p>
          </div>
          <div>
            <p>Price:</p>
            <p>8000 per night</p>
            <p>Room:</p>
            <p>King</p>
            <p>Guests:</p>
            <p>5-6</p>
          </div>
          <div>
          <Link to='/checkout'> <button className='btn btn-primary '>Book</button></Link>
          </div>
          
        </div>
    </div>
  )
}
