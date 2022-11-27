import React, { useCallback } from 'react';
import "./services.css";
import "./responsive.css";
import { AiOutlineRight } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Title from "../../Title";
import PricingCard from "./PricingCard";
import { NavLink } from "react-router-dom";

const Services = () => {

  const triggerScroll = useCallback(element => {
    element.scrollIntoView();
  }, [])

  return (
    <div className='service content flex-center-center'>
    <Title title='Web Design' sub="My Services"/>
    <div className='pricing-cards flex-center-center'>
      <PricingCard title="Wordpress" sub="Reliable and Powerful" value="700+" size={false} status={false}
        benefits={[
          {description: "CMS Included", status: true},
          {description: "Customisable Design", status: true}
      ]}/> 
      <PricingCard title="Custom" sub="You Design, I Program" value="700+" size={true} status={true}
        benefits={[
          {description: "Customisable Design", status: true}, 
          {description: "Unlimited revisions", status: true}, 
          {description: "Unlimited Animations", status: true},
          {description: "Takes Longer To Complete", status: false},
      ]}/>
      <PricingCard title="Template" sub="Pre-Made Designs" value="400" size={false} status={true}
        benefits={[
          {description: "Customisable Design", status: false},
          {description: "Unlimited Revisions", status: true}
      ]}/>
    </div>
    <div className='buttons flex-center-center'>
      <a className='default-button flex-center-center' href="/" onClick={(e) => {e.preventDefault(); triggerScroll(document.querySelector(".contact"))}}><BsTelephone /><p>Let's Talk</p></a>
      <NavLink className='flex-center-center' to="/service"><p className='default-text'>Compare Plans</p><AiOutlineRight /></NavLink>
    </div>
</div>
  )
}

export default Services