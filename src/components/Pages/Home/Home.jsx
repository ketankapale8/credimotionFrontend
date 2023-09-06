import React from 'react';
import HomeCarousal from '../../common/Navbar/HomeCarousal/HomeCarousal';
import './home.scss'
import WhyUs from '../WhyUs/WhyUs';
import Satisfaction from '../../common/SatisfactionCommon/Satisfaction';

const Home = () => {
  return (
    <div className='home'>
      <HomeCarousal/>
      <WhyUs/>
      <Satisfaction/>
    </div>
  )
}

export default Home