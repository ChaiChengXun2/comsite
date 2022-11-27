import React from 'react';
import "./project.css";
import { motion } from "framer-motion";

const projectVariant = {
  hidden: {
    y: "15vh",
    opacity: 0
  },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.4,
    }
  }
}

const Project = ({ imgSrc, title, type, setShowModal, setData }) => {
  return (
    <motion.div className='project flex-center-start'
      variants={projectVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={() => {setShowModal(true); setData({imgSrc: imgSrc, title: title, type: type})}}
    >
      <img src={imgSrc} alt={imgSrc} />
      <div className="information">
        <div className="title default-text">{title}</div>
        <div className="type default-text">{type}</div>
      </div>
    </motion.div>
  )
}

export default Project