import React from 'react'; 
import "./pricingcard.css";
import "./responsive.css"
import { RiCheckboxLine, RiCheckboxIndeterminateLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const variant = {
  hidden: {
    y: "10vh",
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

const PricingCards = ({ title, sub, value, benefits, size, status }) => {
  return (
    <motion.div className={`pricing-card flex-center-center ${size ? "large" : "small"}`}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={`${status ? "show" : "disable"} flex-center-center`}><p className='default-text'>Currently Unavailable</p></div>
      <div className='title default-title'>{title}<br /><span>{sub}</span></div>
      <div className='price flex-center-center'>
        <div className='currency default-text'>RM</div>
        <div className='value default-text'>{value}</div>
        <div className='time default-text'>/website</div>
      </div>
      <div className='benefits flex-center-center'>
        {
          benefits.map((benefit, i) => {
            return (
              <div key={i} className={`pricing-benefit ${benefit.status ? "green" : "red"}`}>
                {benefit.status ? < RiCheckboxLine/> : <RiCheckboxIndeterminateLine />}
                <p className='default-text'>{benefit.description}</p>
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default PricingCards