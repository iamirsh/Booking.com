import React, { useState } from 'react'
import { FlightTicket } from '../../Component/Sections/FlightTicket'

export const Flights = () => {
  const [tripType, setTripType] = useState("Oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returndate, setReturndate] = useState("");

  function print(){
    console.log(tripType);
    console.log(from);
    console.log(to);
    console.log(departure);
    console.log(returndate);
}

  return (
    <div className='container'>
      <div className='header'>
        <div className="type">
          <label>Trip Type:</label>
          <select onChange={(e) => setTripType(e.target.value)}>
            <option>Oneway</option>
            <option>Round</option>
          </select>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <label>FROM</label>
            <input type="text" onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="headerSearchItem">
            <label>TO</label>
            <input type="text" onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className="headerSearchItem">
            <label>DEPARTURE</label>
            <input type="date" name="dateofdeparture" onChange={(e) => setDeparture(e.target.value)} />
          </div>
          <div className="headerSearchItem">
            <label>RETURN</label>
            <input type="date" name="dateofreturn" onChange={(e) => setReturndate(e.target.value)} />
          </div>
          <button className='btn btn-primary'onClick={print} >Search</button>
        </div>
      </div>
      <FlightTicket />
    </div>
  )
}
