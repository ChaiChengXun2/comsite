import React from 'react';
import "./navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from 'react-router-dom';

const modal = {
  hidden: {
    x: "15vh",
    opacity: 0 
  }, 
  visible: {
    x: 0,
    opacity: 1, 
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.2,
    }
  },
  exit: {
    x: "10vh",
    opacity: 0,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.15,
    }
  }
}

const backdrop = { 
  visible: {opacity: 1},
  hidden: {
    opacity: 0,
    transition: {duration: 0}
  }
}

const NavBar = ({ openMenu, setOpenMenu }) => {
  return (
    <AnimatePresence>
      {openMenu &&
        (<motion.div className='nav-bar'
          variants={backdrop}
          initial="hidden"
          animate="visible"
          onClick={() => setOpenMenu(false)}
        >
          <motion.div className="links flex-center-center"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit='exit'
          >
            <NavLink className="default-button" to="/projects">Projects</NavLink>
            <NavLink className="default-button" to='/service'>Services</NavLink>
            <NavLink className="default-button" to='/about'>About</NavLink>
          </motion.div>
        </motion.div>)}
    </AnimatePresence>
  )
}

export default NavBar