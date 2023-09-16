import React from 'react';
import HomeCarousal from '../../common/Navbar/HomeCarousal/HomeCarousal';
import './home.scss'
import WhyUs from '../WhyUs/WhyUs';
import Satisfaction from '../../common/SatisfactionCommon/Satisfaction';
import HowItWorks from '../../common/HowItWorks/HowItWorks';
import HowCanWeHelpForHome from '../../common/HowCanWeHelpForHome/HowCanWeHelpForHome';

const Home = () => {
  return (
    <div className='home'>
      <HomeCarousal/>
      <WhyUs/>
      <HowItWorks/>
      <HowCanWeHelpForHome/>
      <Satisfaction/>
    </div>
  )
}

export default Home