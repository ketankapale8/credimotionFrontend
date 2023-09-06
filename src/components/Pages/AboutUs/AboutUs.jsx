import React from 'react';
import './aboutus.scss';
import aboutLeft from '../../../assets/aboutus/left.jpg'
import aboutRight from '../../../assets/aboutus/right.jpg'
import Satisfaction from '../../common/SatisfactionCommon/Satisfaction';


const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className="aboutusContainer">
        <div className="leftRight">
          <div className="leftContainer">
            <img src={aboutLeft} alt="aboutusBanner" className='aboutusImg' />
          </div>
          <div className="rightContainer">
            <div className="aboutusContainerTitle">

            </div>
            <div className="aboutusContainerDesc">
              <p>
              Welcome to <strong>Credimotion </strong>, your trusted partner for premium car rental and comprehensive automotive services. With a passion for delivering exceptional experiences on the road, we are dedicated to ensuring your journey is smooth, enjoyable, and worry-free.
              </p>
              <p>
              Founded in <strong>2020 , Credimotion </strong> was born from a vision to revolutionize the way people travel by providing top-tier vehicles and unmatched service. What began as a small enterprise in Mexico has since evolved into a prominent player in the car rental and automotive services industry.
              </p>
            </div>
          </div>
        </div>

        <div className="RightLeft">
          <div className="rightContainer">
            <div className="aboutusContainerTitle">

            </div>
            <div className="aboutusContainerDesc">
              <p>
              <strong>Quality Fleet:</strong> Maintaining a diverse fleet of meticulously maintained vehicles, ranging from stylish sedans to spacious SUVs, ensuring you have the perfect ride for any occasion.
              </p>
              <p>
              <strong>Exceptional Service:</strong> Going the extra mile to exceed your expectations with personalized assistance, quick responses, and 24/7 customer support.
              </p>
              <p>
                
              <strong>Affordability:</strong> Offering competitive rates and transparent pricing, so you can enjoy luxury without breaking the bank.
              </p>
              <p>
                
              <strong>Sustainability:</strong> Promoting eco-friendly practices by incorporating fuel-efficient vehicles and striving for a reduced carbon footprint in our operations.
              </p>
            </div>
          </div>
          <div className="leftContainer">
            <img src={aboutRight} alt="aboutusBanner" className='aboutusImg' />
          </div>
        </div>
      </div>
        <Satisfaction/>
    </div>
  )
}

export default AboutUs