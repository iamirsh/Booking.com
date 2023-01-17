import React, { useState } from 'react';
import './Header.css';


export const Header1 = (props) => {
    const[roomType,setRoomType] = useState("Single");
    const[city,setCity] = useState("");
    const[checkin,setCheckin] = useState("");
    const[checkout,setCheckout] = useState("");
    const[guests,setGuests] = useState("");


    function print(){
        console.log("Room Type",roomType);
        console.log("City name",city);
        console.log("Check-in",checkin);
        console.log("Check-out",checkout);
        console.log("Guests",guests);
    }
    return (
        <div className='header container'>
            <div className="type">
                <label>Room Type:</label>
                <select onChange={(e)=>setRoomType(e.target.value)}>
                    <option>Single</option>
                    <option>Double</option>
                    <option>King</option>
                </select>
            </div>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <label>CITY OR LOCATION</label>
                    <input type="text" id='city' onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <label>CHECK-IN</label>
                    <input type="date" name="dateofcheckin" onChange={(e)=>setCheckin(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <label>CHECK-OUT</label>
                    <input type="date" name="dateofcheckout" onChange={(e)=>setCheckout(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <label>GUESTS</label>
                    <input type="text" onChange={(e)=>setGuests(e.target.value)} />
                </div>
                <button className='btn btn-primary' onClick={print}>Search</button>
            </div>
        </div>
    )
}