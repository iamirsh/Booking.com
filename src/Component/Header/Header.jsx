import React from 'react';
import './Header.css';
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <h1 className='headerTitle'>Ski the Swiss Alps this winter</h1>
        <p className="headerDesc">
          Discover Switzerland's best ski resorts and plan the perfect holiday
          Explore the slopes
        </p>
        <button className="headerBtn">Explore the slopes</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder="Where are you going?" className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className='headerSearchText'>Date to Date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className='headerSearchText'>2 Adults 2 Children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className='headerBtn'>Srearch</button>
           </div>
        </div>
      </div>
    </div>
  )
}

