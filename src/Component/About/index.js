import React from 'react';
import "./about.css";
import NavigationBar from "../NavigationBar";
import Title from "../Title";
import Contact from "../Contact";
import Step from '../Homepage/Process/Step';
import { RiNumber0, RiNumber1, RiNumber2 } from "react-icons/ri";

const About = () => {
  return (
    <div className='about content flex-center-center'>
      <NavigationBar />
      <Title title='About Me' sub='Who Am I' />
      <div className='text-description default-text'>
        Hello, I am Chai Cheng Xun. 
        Currently studying in Asia Pacific University, majoring in BSC (Hons) in Computer Science (Cyber Security). 
        I am seeking to assist brands to market themselves on the web. 
        The world of business is getting more and more saturated whilst everyone is striving to stand out.
        To set you apart from competition, we will work together to conceptualise and create a website that reflect the value of your brand efficiently.
      </div>
      <div className="steps flex-center-center">
        <Step number={<RiNumber0 />} title='Planning and Discussion' description='The first stages of developing a website includes submitting pictures and information regarding your brand. We will work on the design draft as well as selecting colour schemes that represent your brand well. ' />
        <Step number={<RiNumber1 />} title='Designing and Draft' description='Once the design and colour scheme has been decided, a draft of your website will be made within two weeks of time. If there are any dissatisfaction, changes will be made until you are pleased. ' />
        <Step number={<RiNumber2 />} title='Developing and Coding' description='After you are satisfied, we will move on to the final stages. This involves the addition of animations, if you wish and selecting suitable host(s) for your website. ' />
      </div>
      <Contact />
    </div>
  )
}

export default About