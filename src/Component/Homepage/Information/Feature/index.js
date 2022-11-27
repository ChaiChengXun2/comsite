import React from 'react';
import "./feature.css";
import { motion } from 'framer-motion';

const featureVariant = {
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

const Feature = ({ icon, text, title }) => {
  return (
    <motion.div className='feature flex-center-center'
      variants={featureVariant}
      initial='hidden'
      whileInView="visible"
      viewport={{ once: true, amount:0.5 }}
    >
      {icon}
      <p className="default-text title">{title}</p>
      <p className="default-text">{text}</p>
    </motion.div>
  )
}

export default Feature