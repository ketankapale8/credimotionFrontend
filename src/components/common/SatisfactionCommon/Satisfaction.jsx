import React from 'react';
import './satisfaction.scss';
import one from '../../../assets/serviceicons/one.svg';
import two from '../../../assets/serviceicons/two.png';
import three from '../../../assets/serviceicons/three.png';


const Satisfaction = () => {
    const satisfactionArr = [
        {
            title : "Easy Registrations", 
            img: one, 
            desc : "1000+ Verified Users"
        },
        {
            title : "Credit Allotment", 
            img: two, 
            desc : "1000+ Credited Customers"
        }, 
        {
            title : "HassleFree Services", 
            img: three, 
            desc : "1000+ Happy Users"
        }
    ]
  return (
    <div className='satisfaction'>
        <div className="satisfactionContainer">
                {satisfactionArr.map(item=>{
                    return (
                        <>
                    <div className="satisfactionBlock">
                        <div className="leftBlock">
                            <img src={item.img} alt="" className='logoImg' />

                        </div>
                        <div className="rightBlock">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>

                        </div>

                    </div>
                        
                        </>
                    )
                })}
        </div>
    </div>
  )
}

export default Satisfaction