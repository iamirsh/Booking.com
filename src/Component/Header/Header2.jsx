import React from 'react'
import './Header.css';

export const Header2 = () => {
    return (
        <div className='header'>
            <div className="type">
                <label>Trip Type:</label>
                <select >
                    <option>Single</option>
                    <option>Double</option>
                    <option>King</option>
                </select>
            </div>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <label>FROM</label>
                    <input type="text" />
                </div>
                <div className="headerSearchItem">
                    <label>TO</label>
                    <input type="text" />
                </div>
                <div className="headerSearchItem">
                    <label>DEPARTURE</label>
                    <input type="date" name="dateofdeparture" id="dateofdeparture" />
                </div>
                <div className="headerSearchItem">
                    <label>RETURN</label>
                    <input type="date" name="dateofreturn" id="dateofreturn" />
                </div>
                
                <button className='btn btn-primary'>Search</button>


            </div>
        </div>
    )
}