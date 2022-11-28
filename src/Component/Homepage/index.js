import React from 'react'
import Contact from '../Contact';
import FeaturedProjects from './FeaturedProjects'
import Information from './Information'
import LandingPage from './LandingPage'
import Process from './Process';
import Services from "./Services";
import NavigationBar from "../NavigationBar";

const Homepage = ({ ccx }) => {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <Information />
      <FeaturedProjects ccx={ccx}/>
      <Services />
      <Process />
      <Contact />
    </div>
  )
}

export default Homepage