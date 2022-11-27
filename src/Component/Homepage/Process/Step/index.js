import React from 'react';
import "./step.css";
import "./responsive.css";
import { motion } from "framer-motion";

const numberVariant = {
  hidden: {
    x: "10vw",
    opacity: 0
  },
  visible: {
    x: 0, 
    opacity: 1,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.4,
    }
  }
}

const Step = ({ number, title, description }) => {
  return (
    <motion.div className='step flex-center-start'
      variants={numberVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount:0 }}
    >
      {number}
      <div className="information">
        <div className="title default-text">{title}</div>
        <div className="description default-text">{description}</div>
      </div>
    </motion.div>
  )
}

export default Step