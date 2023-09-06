import React from 'react';
import './pricing.scss';

const Pricing = () => {
    const paymentBlock = [
        {
            title : "Fast", 
            price : "Free", 
            descArr : [
                {
                    one : "Funded insurance ", 
                    two : "Provider network ",
                    three : "1 free annual inspection"
                }
            ]
        }, 
        {
            title : "Radial", 
            price : "38.99$", 
            descArr : [
                {
                    one : "Fast user", 
                    two : "Credit line of $5,000 ",
                    three : "Discounts on Product/Services"
                }
            ]
        }, 
        {
            title : "Performance", 
            price : "78.99$", 
            descArr : [
                {
                    one : "Radial User", 
                    two : "Line of credit $20,000 / we will return money for the use of your line (cash back) apply to your next consumption",
                    three : "Preferential interest rate"
                }
            ]
        }, 
        {
            title : "SLS", 
            price : "197.99$", 
            descArr : [
                {
                    one : "User Performance", 
                    two : "Active satellite location system ",
                    three : ""
                }
            ]
        }
    ]
  return (
    <div className='pricing'>
        <div className="pricingContainer">
            {paymentBlock.map(item=>{
                return (
                    <>
                <div className="pricingBlock">
                    <h3>{item.title}</h3>
                    <p className='priceItem'>{item.price}</p>
                    <p className='permonth'>PER MONTH</p>
                    {item.descArr.map(item=>{
                        return (
                        <div className="pricingdesc">
                            <p>{item.one}</p>
                            <p>{item.two}</p>
                            <p>{item.three}</p>

                        </div>

                        )
                    })}
                    <button className='pricingbtn'>
                        GET STARTED
                    </button>




                </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Pricing