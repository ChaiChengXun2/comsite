import React from 'react';
import "./landingpage.css";
import "./responsive.css";
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page flex-center-center'>
      <img src="Lp.jpg" alt="Landing Page" className='lp'/>
      <div className="header flex-center-center">
        <h1 className="title default-title">ComSite</h1>
        <p className='default-text text'>Communicate Your Brand Through A Website</p>
        <NavLink className="default-button" to='/about'>Learn More</NavLink>
      </div>
    </div>
  )
}

export default LandingPage