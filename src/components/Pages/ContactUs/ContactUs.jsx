import React from 'react';
import './contactus.scss';
import { Link } from 'react-router-dom';
import contactusBanner from '../../../assets/contactus/contactusbanner.jpg';
import emailIcon from '../../../assets/contactus/email.png';
import location from '../../../assets/contactus/location.png';
import phoneimg from '../../../assets/contactus/phone.png';
import HowCanWeHelp from '../../common/HowCanWeHelp/HowCanWeHelp';


const ContactUs = () => {
  const contactusDetails = [
     {
      Add : "Calle Arquímedes 130, Polanco, Polanco IV Secc, Miguel Hidalgo,",
      Add1 : "11550 Ciudad de México, CDMX, Mexico", 
      icon : location
    }, 

  ]

  const phone = [
    {
      Phone : " +52 55 8534 2980", 
      icon : phoneimg
    },
  ]

  const email = [
    {
      email : "support@credimotion.com",
      icon : emailIcon
    }
  ]
  return (
    <div className='contactus'>
      <div className="bannerContainer">
        <img src={contactusBanner} alt="contactusbanner"  className='bannerContactus'/>
      <div className="formContainer">
        <h1>The Most Trusted </h1>
        <h1>Vehicle Lifecycle</h1>
        <h1>  Ownership.</h1>
        {/* <Link to="/ourservices">
            <button className="explorebtn">
                            EXPLORE
            </button>
        </Link> */}
      </div>

      <div className="contactusContainer">
        <div className="contactsusTitle">
        CONTACT US
        </div>
        <div className="contactusDesc">
        Find an Credimotion Location Near You
        </div>

        <div className="mapContainer">
          <div className="left">
            {contactusDetails.map(item=>{
              return (
                <>
              <div className="DescContainer">
                  <div className="leftForIcon">
                    <img src={item.icon} alt="" className='iconscontact'/>
                  </div>
                  <div className="rightForContent">
                    <h4>{item.Add}</h4>
                    <h4>{item.Add1}</h4>
                  </div>
              </div>
                
                
                </>
              )
            })}

{phone.map(item=>{
              return (
                <>
              <div className="DescContainer">
                  <div className="leftForIcon">
                    <img src={item.icon} alt="" className='iconscontact'/>
                  </div>
                  <div className="rightForContent">
                    <h4>{item.Phone}</h4>
                  </div>
              </div>
                
                
                </>
              )
            })}

{email.map(item=>{
              return (
                <>
              <div className="DescContainer">
                  <div className="leftForIcon">
                    <img src={item.icon} alt="" className='iconscontact'/>
                  </div>
                  <div className="rightForContent">
                    <h4>{item.email}</h4>
                  </div>
              </div>
                
                
                </>
              )
            })}
          </div>

          
          <div className="right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.50120415958!2d-99.19373332405056!3d19.433945940636345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202008cdcc49f%3A0x6171a4041d2f092a!2sCalle%20Arqu%C3%ADmedes%20130%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011550%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sin!4v1694842900977!5m2!1sen!2sin" 
          width="490" 
          height="360" style={{border:0}} 
          allowfullscreen="" 
          loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">

          </iframe>

          </div>
        </div>
      </div>

      <HowCanWeHelp/>


      </div>
    </div>
  )
}

export default ContactUs