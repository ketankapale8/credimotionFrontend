import React from 'react';
import './howcanwehelpforhome.scss';
import BannerImg from '../../../assets/contactus/contactusform.jpg';
import one from '../../../assets/howCanhome/1.png';
import two from '../../../assets/howCanhome/2.png';
import three from '../../../assets/howCanhome/3.png';
import four from '../../../assets/howCanhome/4.png';


import { Link } from 'react-router-dom';

const HowCanWeHelpForHome = () => {

    const serviceArr1 = [
        {
            title : "Working Area",
            number : "2000 Miles", 
            img : one
        }, {
            title : "Happy Customers",
            number : "1000 +", 
            img : two
        }
    ]

    const serviceArr2 = [
        {
            title : "Work Experience",
            number : "13+ Years", 
            img : two
        }, {
            title : "Customer Satisfaction",
            number : "100%", 
            img : three
        }
    ]
  return (
    <div className='howcanwehelp1'>
        <div className="howcanContainer1">
            <div className="howcanLeft1">
                <div className="howcanbannerImg1">
                    <img src={four} alt="" className='howcanbannerImg1' />
                </div>
            </div>
            <div className="howcanRight1">
                <div className="howcanTitle1">About Us</div>
                <div className="howcanDesc1">
                    <strong>
                    Your Trusted Auto Service & Support Car Care Center

                    </strong>
                </div>

                <div className="howCanformContainer1">
                   <p>
                   Since 2018, Credimotion  has been providing top-of-the-line auto repair.
                   </p>

                   <div className="mainC">
                    {serviceArr1.map(item=>{
                        return(
                            <>
                            <div className="serviceContainer1">
                                <div className="containerData">
                                    <div className="img-num">
                                        <img className='imgIcon' src={item.img}/>
                                        <h4>{item.number}</h4>
                                    </div>
                                    <p>{item.title}</p>

                                </div>

                            </div>
                            
                            </>
                        )
                    })}


                   </div>

                   <div className='mainC'>
                    {serviceArr2.map(item=>{
                        return(
                            <>
                            <div className="serviceContainer1">
                                <div className="containerData">
                                    <div className="img-num">
                                        <img className='imgIcon' src={item.img}/>
                                        <h4>{item.number}</h4>
                                    </div>
                                    <p>{item.title}</p>

                                </div>

                            </div>
                            
                            </>
                        )
                    })}

                   </div>
                   
                    <Link to="/services">
                    <button className='contactusbtn1'>More Details</button>
                    </Link>

                </div>

            </div>
        </div>
    </div>
  )
}

export default HowCanWeHelpForHome