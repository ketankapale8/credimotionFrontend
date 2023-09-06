import React from 'react';
import './footer.scss'
import one from '../../../assets/footerassets/1.jpg';
import two from '../../../assets/footerassets/2.jpg';
import three from '../../../assets/footerassets/3.jpg';
import four from '../../../assets/footerassets/4.jpg';
import five from '../../../assets/footerassets/facebook.png';
import six from '../../../assets/footerassets/instagram.png';
import seven from '../../../assets/footerassets/linkedin.png';
import eight from '../../../assets/footerassets/youtube.png';
import ten from '../../../assets/footerassets/email.png';



import nine from '../../../assets/footerassets/twitter.png';



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="footerItems">
                <div className="top">
                    <div className="footerHeading">
                        Credimotion.
                    </div>
                    <div className="footerDesc">
                    At Credimotion we sell domestic and foreign auto spare parts and accessories.
                    </div>
                </div>
                
            </div>
            <div className="footerItems">
                <div className="top">
                    <div className="footerHeading">
                       Payment Methods
                    </div>
                    <div className="footerDesc">
                        <img className='icons' src={one}/>
                        <img className='icons' src={two}/>
                        <img className='icons' src={three}/>
                        <img className='icons' src={four}/>

                    </div>
                </div>
                
            </div>

            <div className="footerItems">
                <div className="top">
                    <div className="footerHeading">
                       Social Network
                    </div>
                    <div className="footerDesc">
                        <img className='icons' src={five}/>
                        <img className='icons' src={six}/>
                        <img className='icons' src={seven}/>
                        <img className='icons' src={eight}/>
                        <img className='icons' src={nine}/>


                    </div>
                </div>
                
            </div>

            <div className="footerItems">
                <div className="top">
                    <div className="footerHeading">
                       Subscribe
                    </div>

                    <div className="footerDesc1">
                        <input className='inputfield' placeholder='Your email address '/>
                        <button className="submitBtn">
                            <img src={ten} />
                        </button>
                    </div>
                   
                </div>
                
            </div>
            
        </div>

        <div className="bottomFooter">
            <hr />
            <div className="footerList">
            Copyright © 2023 Credimotion. | All Rights Reserved.
            </div>
        </div>

    </div>
  )
}

export default Footer