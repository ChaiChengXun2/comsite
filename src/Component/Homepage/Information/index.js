import React from 'react';
import "./information.css";
import "./responsive.css";
import Title from "../../Title";
import Feature from './Feature';
import { MdWebAsset, MdAnimation } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Information = () => {
  return (
    <div className='information content flex-center-start'>
      <Title title='About Me' sub='Who Am I' />
      <div className="description default-text">
      In a saturated market, everybody is striving to be different. To set your brand apart from competition, my job is to conceptualise and create websites that reflect the values of your business. Each website will be optimised to be fast loading, mobile responsive and search friendly. 
      </div>
      <div className="features">
        <Feature icon={<MdWebAsset />} title='Web Design' text='I specialise in developing websites that reflect the values of your brand' />
        <Feature icon={<BiMobileVibration />} title='Mobile Responsive' text='Achieve greater brand recognition and engagement with intuitive web design that is mobile responsive' />
        <Feature icon={<MdAnimation />} title='Animation' text='Make your website come to life with subtle and pleasant animations' />
      </div>
      <NavLink className="default-button" to='/about'>Learn More</NavLink>
    </div>
  )
}

export default Information