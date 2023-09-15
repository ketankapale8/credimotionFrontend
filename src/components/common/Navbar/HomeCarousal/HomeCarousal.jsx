// import React from 'react';
import React, { useRef, useState } from 'react';
import one from '../../../../assets/carousal/1.jpeg';
import two from '../../../../assets/carousal/2.png';
import three from '../../../../assets/carousal/3.jpeg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { CCarousel , CCarouselItem , CImage} from '@coreui/react'

const HomeCarousal = () => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    // autoplay={{
    //   delay: 4500,
    //   disableOnInteraction: false,
    // }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    // modules={[Autoplay, Pagination, Navigation]}
    modules={[ Pagination, Navigation]}

    // onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="mySwiper"
  >
    <SwiperSlide className='swiper-slide'>
        <img className='img' src={one}/>
    </SwiperSlide>
    <SwiperSlide  className='swiper-slide'>
    <img className='img' src={two}/>


    </SwiperSlide>
    <SwiperSlide className='swiper-slide' >
    <img className='img' src={three}>

</img>
    </SwiperSlide>
  
    {/* <div className="autoplay-progress" slot="container-end">
      <svg viewBox="0 0 48 48" ref={progressCircle}>
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span ref={progressContent}></span>
    </div> */}
  </Swiper>
  )
}

export default HomeCarousal