import React from 'react'
import Contact from '../Contact';
import FeaturedProjects from './FeaturedProjects'
import Information from './Information'
import LandingPage from './LandingPage'
import Process from './Process';
import Services from "./Services";
import NavigationBar from "../NavigationBar";

const Homepage = () => {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <Information />
      <FeaturedProjects />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}

export default Homepage