import React, { useCallback, useState } from 'react';
import "./largebuttons.css";
import "./responsive.css";
import { motion } from "framer-motion";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const variant = { 
  hidden: {
    y: "5vh",
  },
  visible: {
    y: 0, 
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.6
    }
  }
}

const LargeButtons = ({ header, description, price }) => {
  const [active, setActive] = useState(false);

  const toggleClass = useCallback(e => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) { 
      setActive(true);
    } else {
      setActive(false);
    }
  }, [])
  
  return (
    <motion.div className='large-button flex-center-center' onClick={toggleClass}
      variants={variant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once:true }}
    >
      <div className='head flex-center-between'>
        <p className='default-title header'>{header}</p>
        <div className="container flex-center-center">
          <p className='default-text'>{price}</p>
          {active ? <HiMinusSm /> : <HiPlusSm />}
        </div>
      </div>
      <div className='answer default-text'>{description}</div>
    </motion.div>
  )
}

export default LargeButtons