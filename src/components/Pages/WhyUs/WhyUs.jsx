import React from 'react';
import './why.scss';
import one from '../../../assets/servicesIcons/1.png';
import two from '../../../assets/servicesIcons/2.png';
import three from '../../../assets/servicesIcons/3.png';
import four from '../../../assets/servicesIcons/4.png';
import five from '../../../assets/servicesIcons/rightBanner.png'


const WhyUs = () => {
    const servicesArr = [
        {
            title : "Expert",
            boldTitle : "Mechanics", 
            image : one,
            desc: "Most of the vehicles get damaged just because of maintenance neglect you take"
        }, 
        {
            title : "Reasonable ",
            boldTitle : "Price", 
            image : two,
            desc: "Most of the vehicles get damaged just because of maintenance neglect you take"
        }
    ]
    const servicesArr1 = [
        {
            title : "Trusted by ",
            boldTitle : "5000 Clients", 
            image : three,
            desc: "Most of the vehicles get damaged just because of maintenance neglect you take"
        }, 
        {
            title : "Fast feature ",
            boldTitle : "Delivery", 
            image : four,
            desc: "Most of the vehicles get damaged just because of maintenance neglect you take"
        }
    ]
  return (
    <div className='why'>
        <div className="whyContainer">
            <div className="whyleft">
                <div className="titleContainer">
                <div className="title">
                    Why
                </div>
                <div className="title" >
                    <strong>

                    Choose
                    </strong>
                </div>
                <div className="title">
                    <strong>

                    Us
                    </strong>
                </div>
          
                <strong>

                </strong>

                </div>

                <div className="whyContainers">

                    <div className="servicesContainer">
                {servicesArr.map(item=>{
                    return (
                        <>
                        <img className="left" src={item.image}/>

                        <div className="right">
                            <div className="titleContainers">

                            <div className="title">{item.title}</div>
                            <div className="boldTitle">{item.boldTitle}</div>
                            </div>

                            <div className="desc">
                                <p>{item.desc}</p>
                            </div>

                        </div>
                        
                        </>
                    )
                })}
                   </div>

                {/* <div className="servicesContainer">
                {servicesArr1.map(item=>{
                    return (
                        <>
                        <img className="left" src={item.image}/>

                        <div className="right">
                            <div className="titleContainers">

                            <div className="title">{item.title}</div>
                            <div className="boldTitle">{item.boldTitle}</div>
                            </div>

                            <div className="desc">
                                <p>{item.desc}</p>
                            </div>

                        </div>
                        
                        </>
                    )
                })}
                </div> */}

                </div>
                <div className="whyContainers">

<div className="servicesContainer">
{servicesArr1.map(item=>{
return (
    <>
    <img className="left" src={item.image}/>

    <div className="right">
        <div className="titleContainers">

        <div className="title">{item.title}</div>
        <div className="boldTitle">{item.boldTitle}</div>
        </div>

        <div className="desc">
            <p>{item.desc}</p>
        </div>

    </div>
    
    </>
)
})}
</div>



</div>
            </div>
            <div className="whyright">
                <img className='bannerImg' src={five}/>
            </div>

        </div>
    </div>
  )
}

export default WhyUs