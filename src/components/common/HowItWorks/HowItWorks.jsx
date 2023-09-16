import React from 'react'
import './howitworks.scss';
import one from '../../../assets/howitworks/one.png';
import two from '../../../assets/howitworks/two.png';
import three from '../../../assets/howitworks/three.png';
import four from '../../../assets/howitworks/four.png';
import { Link } from 'react-router-dom';


const HowItWorks = () => {

    const howArray = [
        {
            img: three,
            title : "Select Car Services",
            desc : "Select from the list of our car maintainance services and choose the appropriate plans as per your requirements"
        },
        {
            img: two,
            title : "Pick-Up from the Location",
            desc : "We can pick your vehicle from your current drop location or anywhere your like"
        },
        {
            img: four,
            title : "Service Updates",
            desc : "We will cater to all your service requirements with 100% workmanship"
        },
        {
            img: one,
            title : "Pay as you go!",
            desc : "You can select your monthly rental and leave the rest to us!"
        }
    ]
  return (
    <div className='howitworks'>
        <div className="howitworksContainer">
            <div className="howTitle">
            How it works
            </div>
            <div className="howDesc">
            Easy, Convenient and <strong>Peaceful </strong>
            </div>
            <div className="howitworksService">
                {howArray.map((item,idx)=>{
                    return(
                        <>
                    <div className="howitworksBlock" key={idx}>
                        <img src={item.img} className="howLogo"/>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                        
                        </>
                    )
                })}

                
            </div>
            <Link to="/pricing">
                <button className='contactusbtn1'>Explore</button>
            
            </Link>

        </div>
    </div>
  )
}

export default HowItWorks