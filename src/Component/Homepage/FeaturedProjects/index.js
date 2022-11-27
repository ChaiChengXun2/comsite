import React, { useState, useEffect } from 'react';
import "./featuredprojects.css";
import Title from "../../Title";
import Project from '../../Project';
import ProjectModal from "../../ProjectModal";
import { NavLink } from 'react-router-dom';

const FeaturedProjects = () => {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  return (
    <div className='featured-project content flex-center-start'>
      <Title title='Projects' sub='Featured Works' />
      <ProjectModal showModal={showModal} setShowModal={setShowModal} data={data}/>
      <div className="projects gay-grid">
        <Project imgSrc="cafe 1 marketing.png" title="Classy Cafe" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="cafe 2 marketing.png" title="Modern Cafe" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="skin care marketing.png" title="Beauty Products" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="portfolio 1 marketing.png" title="Personal Portfolio" type="Template" setShowModal={setShowModal} setData={setData}/>
      </div>
      <NavLink className="default-button" to='/projects'>View More</NavLink>
    </div>
  )
}

export default FeaturedProjects