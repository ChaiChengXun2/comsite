import React from 'react';
import "./landingpage.css";
import "./responsive.css";
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page flex-center-center'>
      <img src="https://ik.imagekit.io/ccx/Lp-min_N-Cv00SzIa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669555120219" alt="Landing Page" className='lp'/>
      <div className="header flex-center-center">
        <h1 className="title default-title">ComSite</h1>
        <p className='default-text text'>Communicate Your Brand Through A Website</p>
        <NavLink className="default-button" to='/about'>Learn More</NavLink>
      </div>
    </div>
  )
}

export default LandingPage