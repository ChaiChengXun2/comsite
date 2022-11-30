import React, { useState } from 'react';
import "./featuredprojects.css";
import Title from "../../Title";
import Project from '../../Project';
import ProjectModal from "../../ProjectModal";
import { NavLink } from 'react-router-dom';

const FeaturedProjects = ({ ccx }) => {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  return (
    <div className='featured-project content flex-center-start'>
      <Title title='Projects' sub='Featured Works' />
      <ProjectModal showModal={showModal} setShowModal={setShowModal} data={data}/>
      <div className="projects gay-grid">
        {
          ccx && 
          ccx.slice(0, 4).map((project, i) => {
            return (
              <Project imgSrc={project.url} title={project.name} type={project.type} setShowModal={setShowModal} setData={setData} key={i}/>
            )
          })
        }
      </div>
      <NavLink className="default-button" to='/projects'>View More</NavLink>
    </div>
  )
}

export default FeaturedProjects