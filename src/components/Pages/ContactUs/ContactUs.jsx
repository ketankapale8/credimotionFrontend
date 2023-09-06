import React from 'react';
import './contactus.scss';
import { Link } from 'react-router-dom';
import contactusBanner from '../../../assets/contactus/contactusbanner.jpg'

const ContactUs = () => {
  return (
    <div className='contactus'>
      <div className="bannerContainer">
        <img src={contactusBanner} alt="contactusbanner"  className='bannerContactus'/>
      <div className="formContainer">
        <h1>The Most Trusted </h1>
        <h1>Vehicle Lifecycle</h1>
        <h1>  Ownership.</h1>
        <Link to="/ourservices">
            <button className="explorebtn">
                            EXPLORE
            </button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default ContactUs