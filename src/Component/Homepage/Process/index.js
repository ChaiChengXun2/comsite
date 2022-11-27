import React from 'react';
import "./process.css";
import "./responsive.css";
import Title from "../../Title";
import Step from './Step';
import { RiNumber0, RiNumber1, RiNumber2 } from "react-icons/ri";

const Process = () => {
  return (
    <div className='process content flex-center-center'>
      <Title title='Design Process' sub='Understand My Procedure' />
      <div className="steps flex-center-center">
        <Step number={<RiNumber0 />} title='Planning and Discussion' description='The first stages of developing a website includes submitting pictures and information regarding your brand. We will work on the design draft as well as selecting colour schemes that represent your brand well. ' />
        <Step number={<RiNumber1 />} title='Designing and Draft' description='Once the design and colour scheme has been decided, a draft of your website will be made within two weeks of time. If there are any dissatisfaction, changes will be made until you are pleased. ' />
        <Step number={<RiNumber2 />} title='Developing and Coding' description='After you are satisfied, we will move on to the final stages. This involves the addition of animations, if you wish and selecting suitable host(s) for your website. ' />
      </div>
    </div>
  )
}

export default Process