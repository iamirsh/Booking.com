import React, { useEffect, useState } from "react";
import { Hotels } from "../../Component/Sections/Hotels";
import './Home.css';

export const Home = () => {
    const [roomType, setRoomType] = useState("Single");
    const [city, setCity] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");
   

    

    //Api call
    const [data, setData] = useState([]);
    
    const hotelApiData = async () => {
        const response = await fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels');
        const res = await response.json();
        setData(res);
    };

    useEffect(() => {
        hotelApiData();
    }, []);

    return (
        <div className="container">
            <div className='header'>
                <div className="type">
                    <label>Room Type:</label>
                    <select onChange={(e) => setRoomType(e.target.value)}>
                        <option>Single</option>
                        <option>Double</option>
                        <option>King</option>
                    </select>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <label>CITY OR LOCATION</label>
                        <input type="text" id='city' onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        <label>CHECK-IN</label>
                        <input type="date" name="dateofcheckin" onChange={(e) => setCheckin(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        <label>CHECK-OUT</label>
                        <input type="date" name="dateofcheckout" onChange={(e) => setCheckout(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        <label>GUESTS</label>
                        <input type="text" onChange={(e) => setGuests(e.target.value)} />
                    </div>
                    <button className='btn btn-primary' >Search</button>
                </div>
            </div>
            <Hotels data={data} roomType={roomType} city={city} checkin={checkin} checkout={checkout} guests={guests} />
        </div>
    )
    
}