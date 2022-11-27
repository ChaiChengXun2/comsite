import React from 'react';
import "./projectmodal.css";
import "./responsive.css";
import Modal from "../Modal";
import { NavLink } from 'react-router-dom';

const ProjectModal = ({ showModal, setShowModal, data }) => {
  return (
    <Modal setShowModal={setShowModal} showModal={showModal} type='project'>
      <div className="container flex-center-center">
        <nav className='modal-nav' onClick={() => setShowModal(false)}><p className='default-text'>Done</p></nav>
        <div className="information flex-center-center">
          <img src={data.imgSrc} alt={data.imgSrc} className="banner" />
          {
            data.type === "Template"
            ? <div className="type flex-center-center">
              <div className="description default-text">{data.title} is a template created by ComSite. This is part of the Template Web Design plan. For more information about Pricing and Our Services, please visit <NavLink to='/service' className='default-text'>Services</NavLink> section.</div>
              <a className="default-button" href='https://wa.me/60126989326' rel="noreferrer" target='_blank'>Request A Demo</a>
            </div>
            : ""
          }
        </div>
      </div>
    </Modal>
  )
}

export default ProjectModal