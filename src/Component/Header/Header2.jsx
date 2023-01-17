import React, { useState } from 'react'
import './Header.css';

export const Header2 = () => {
    const[tripType,setTripType] = useState("Oneway");
    const[from,setFrom] = useState("");
    const[to,setTo] = useState("");
    const[departure,setDeparture] = useState("");
    const[returndate,setReturndate] = useState("");

    function print(){
        console.log("Trip Type -",tripType);
        console.log("From -",from);
        console.log("To -",to);
        console.log("Departure -",departure);
        console.log("Return -",returndate);
    }

    return (
        <div className='header'>
            <div className="type">
                <label>Trip Type:</label>
                <select onChange={(e)=>setTripType(e.target.value)}>
                    <option>Oneway</option>
                    <option>Round</option>
                </select>
            </div>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <label>FROM</label>
                    <input type="text" onChange={(e)=>setFrom(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <label>TO</label>
                    <input type="text" onChange={(e)=>setTo(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <label>DEPARTURE</label>
                    <input type="date" name="dateofdeparture" onChange={(e)=>setDeparture(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <label>RETURN</label>
                    <input type="date" name="dateofreturn" onChange={(e)=>setReturndate(e.target.value)} />
                </div>
                
                <button className='btn btn-primary' onClick={print}>Search</button>


            </div>
        </div>
    )
}