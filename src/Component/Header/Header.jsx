import React from 'react'
import './Header.css';

export const Header1 = () => {
    return (
        <div className='header'>
            <div className="type">
                <label>Room Type:</label>
                <select >
                    <option>Single</option>
                    <option>Double</option>
                    <option>King</option>
                </select>
            </div>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <label>CITY OR LOCATION</label>
                    <input type="text" />
                </div>
                <div className="headerSearchItem">
                    <label>CHECK-IN</label>
                    <input type="date" name="dateofcheckin" id="dateofcheckin" />
                </div>
                <div className="headerSearchItem">
                    <label>CHECK-OUT</label>
                    <input type="date" name="dateofcheckout" id="dateofcheckout" />
                </div>
                <div className="headerSearchItem">
                    <label>GUESTS</label>
                    <input type="text" />
                </div>
                <button className='btn btn-primary'>Search</button>
            </div>
        </div>
    )
}