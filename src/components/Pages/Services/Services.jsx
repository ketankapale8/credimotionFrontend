import React from 'react';
import './services.scss';
import one from '../../../assets/serviceImages/services_1.jpg';
import two from '../../../assets/serviceImages/services_2.jpg';
import three from '../../../assets/serviceImages/services_3.jpg';
import four from '../../../assets/serviceImages/services_4.jpg';
import five from '../../../assets/serviceImages/services_5.jpg';
import six from '../../../assets/serviceImages/services_6.jpg';



const Services = () => {
  const serviceContainer1 = [
    {
      title : "Spare Parts", 
      desc : "We understand the importance of vehicle reliability and safety. Our commitment to providing top-notch car rental and automotive services extends to the quality of spare parts we use in our maintenance and repair services. We believe in keeping our fleet in impeccable condition, and that's why we only use genuine and high-quality spare parts.", 
      img : one
    }, 
    {
      title : "Maintainance", 
      desc : "We take pride in maintaining a fleet of vehicles that not only look great but also perform flawlessly. Our commitment to top-notch maintenance is at the core of our car rental and automotive services. We believe that a well-maintained vehicle is not just about aesthetics but also about safety, reliability, and the overall customer experience.", 
      img : two
    }, 
    {
      title : "Repairs", 
      desc : "We understand that sometimes unexpected issues can arise with your rental vehicle. That's why we offer a full spectrum of repair services to address any concerns promptly and efficiently. Our dedicated team of experienced technicians is committed to getting you back on the road safely and swiftly.", 
      img : three
    }, 

  ]

  const serviceContainer2 = [
    {
      title : "Insurance", 
      desc : "We prioritize your safety and peace of mind during your journey with us. That's why we offer a comprehensive insurance package to ensure you're covered in any unexpected situation. Our goal is to make your car rental experience worry-free, allowing you to focus on enjoying the ride.", 
      img : four
    }, 
    {
      title : "Buying & Selling", 
      desc : "We don't just offer top-notch car rental services; we also provide a seamless platform for buying and selling vehicles. Whether you're looking to upgrade your ride or find a new owner for your current vehicle, we're here to assist you every step of the way. Our commitment to excellence extends beyond rentals, ensuring you have a trusted partner for all your automotive needs.", 
      img : five
    }, 
    {
      title : "Bodywork", 
      desc : "We understand that the appearance and condition of a vehicle are crucial to its overall appeal and functionality. That's why we provide comprehensive bodywork and paint services to ensure your vehicle looks its best and operates flawlessly. Whether it's a minor touch-up or a major restoration, our skilled technicians are here to transform your vehicle into a masterpiece.", 
      img : six
    }, 

  ]
  return (
    <div className='services'>
      <div className="servicesContainer">
        <div className="servicesBlock">
          {serviceContainer1.map(item=>{
            return (
            <div className="servicesItems">
              <div className="top">
                <img src={item.img} alt="" />
              </div>
              <div className="bottom">
                <div className="servicesBottomContainer">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

            </div>

            )
          })}
        </div>
        <div className="servicesBlock">
          {serviceContainer2.map(item=>{
            return (
            <div className="servicesItems">
              <div className="top">
                <img src={item.img} alt="" />
              </div>
              <div className="bottom">
                <div className="servicesBottomContainer">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

            </div>

            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Services