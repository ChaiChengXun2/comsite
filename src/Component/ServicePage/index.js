import React from 'react';
import "./servicepage.css";
import NavigationBar from "../NavigationBar";
import Contact from '../Contact';
import Title from "../Title";
import LargeButtons from "./LargeButtons";

const ServicePage = () => {
  return (
    <div className='service-page flex-center-center content'>
      <NavigationBar />
      <Title title='Services' sub='Professional Offerings' />
      <div className="container flex-center-center">
        <div className="service-title default-title">Web Design</div>
        <div className="information default-text">In a saturated market, everybody is trying to stand out. To set you apart from competition, my job is to conceptualise and create websites that reflect the values of your brand. Each website will be equipped to be fast loading, mobile responsive and search friendly. These websites. I proudly present you with two plans, Template and Custom. </div>
        <div className="note default-text">* Please take note that web design plans are only for web design, it does not include web hosting, domain hosting and database. But fear not, I will give recommendations on suitable host for you. If you wish to integrate APIs into your website, it will cost an additional RM65/API.</div>
        <div className="note default-text">* Another note. Web hosting, domain hosting and database hosting is a monthly subscription, this is not decided by me but the market. Domain hosting would cost around RM60-RM80 (billed yearly), web and database hosting depends on your usage every month. </div>
        <LargeButtons header='Template' price='RM400/Website' description='Template Plan uses pre-designed websites by ComSite. Although it is labelled as a template, it will be customisable to a certain extent. For example, color scheme, text, description, pictures, etc.'/>
        <LargeButtons header='Custom' price='RM700+/Website' description='You design, I program. Websites will be programmed from scratch, making sure it will be optimised to reflect the values of your brand. If you are unsure about which designs you are looking for specifically, I will provide you with suitable suggestions. And of course, the end decision is yours.'/>
      </div>
      <div className="container flex-center-center">
        <div className="service-title default-title">Web Maintenance</div>
        <div className="information default-text">Although I did not include web hosting, domain hosting and database as part of our Web Design plan, I do provide it as an additional service. Web Maintenance not only include services such as hosting and database, but also updating and maintaining your website. There are three of such services provided, Pay As You Go, Web Subscription, and Basic CMS.</div>
        <div className="note default-text">* Please take note that we only provide Web Maintenance services for websites created by ComSite.</div>
        <LargeButtons header='Pay As You Go' price='RM50/Request' description='These request can be services such as adding a new element onto your website, setting up hosting for the first time (if you wish to use your own hosting), updating existing images, etc. '/>
        <LargeButtons header='Web Subscription' price='RM45+/Month' description='For a fixed fee every month (subject to change, depending on your usage), I will take care of web hosting, domain hosting and database hosting for you. If you wish to add a new page, section or element into your website, it will be completely free during the subscription. 1 month of not paying subscription fee will result in the removal of domain hosting. 6 months of not paying subscription will result removal of certain parts of the page. 12 months of not paying will result in the addition of ComSite advertisement into your website. '/>
        <LargeButtons header='Basic CMS' price='RM100' description='Basic CMS that allows you to add basic items into your website. For example, you are selling shoes online, and you wish to add a new shoe into your products page, you can do it directly via the Basic CMS rather than going through us. Please take note that the CMS provided is very basic, and can only add, remove or edit "shoes". It cannot add a new page or section to the website. Please also take note that Basic CMS does not come with web hosting, domain hosting, and database. However, you would get a discount of RM10 every month if you wish to purchase Web Subscription and Basic CMS. '/>
      </div>
      <Contact />
    </div>
  )
}

export default ServicePage