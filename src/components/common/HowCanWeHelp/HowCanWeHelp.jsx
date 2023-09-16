import React from 'react';
import './howcanwehelp.scss';
import BannerImg from '../../../assets/contactus/contactusform.jpg'

const HowCanWeHelp = () => {
  return (
    <div className='howcanwehelp'>
        <div className="howcanContainer">
            <div className="howcanLeft">
                <div className="howcanbannerImg">
                    <img src={BannerImg} alt="" className='howcanbannerImg' />
                </div>
            </div>
            <div className="howcanRight">
                <div className="howcanTitle">HOW CAN WE HELP?</div>
                <div className="howcanDesc">
                    <strong>
                            We’re Always Ready to Serve you

                    </strong>
                </div>

                <div className="howCanformContainer">
                    <div className="inputContainer">
                        <input type="text"  placeholder='Enter your name'/>
                        <input type="text"  placeholder='Enter your email'/>

                    </div>

                    <textarea name="" id="" cols="30" rows="10" className='textarea'>

                    </textarea>

                    <button className="contactusbtn1">Send Message</button>

                </div>

            </div>
        </div>
    </div>
  )
}

export default HowCanWeHelp