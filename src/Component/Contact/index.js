import React from 'react';
import "./contact.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='contact flex-center-center content'>
      <img src="https://ik.imagekit.io/ccx/Lp-min_N-Cv00SzIa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669555120219" alt="contact" />
      <div className="information flex-center-center">
        <div className="title default-title">Are You Interested? </div>
        <a className="default-button flex-center-center" href='https://wa.me/60126989326' rel="noreferrer" target='_blank'><BsWhatsapp />Contact Me</a>
        <footer className='flex-center-center'>
          <div className='social-media flex-center-center'>
            <a href='https://www.instagram.com/comsitemy/' rel="noreferrer" target="_blank"><BsInstagram /></a>
            <a href='https://wa.me/60126989326' rel="noreferrer" target="_blank"><BsWhatsapp /></a>
            <a href='https://www.facebook.com/profile.php?id=100088453232965' rel="noreferrer" target="_blank"><BsFacebook /></a>
          </div>
          <div className='text flex-center-center'><AiOutlineCopyrightCircle /> Copyright 2022 ComSite. All Rights Reserved</div>
        </footer>
      </div>
    </div>
  )
}

export default Contact