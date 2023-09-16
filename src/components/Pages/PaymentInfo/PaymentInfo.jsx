import axios from 'axios';
import './paymentinfo.scss'
import React, { useEffect , useState} from 'react'
import { Context } from '../../../index.js';
import { useContext } from 'react';

const PaymentInfo = () => {
  const {user , setUser , setIsAuthenticated} = useContext(Context);
  const [orderData , setOrderData] = useState([])
  const [userData , setUserData] = useState([])

  console.log(user._id)
  const user_id  = user._id
  const url ="https://credimotionbackend.vercel.app";

  useEffect(()=>{
    axios.get(`${url}/api/v1/allorders`)
      .then(resp=> setOrderData(resp.data))

    axios.get(`${url}/api/v1/allusers`)
    .then(resp=> setUserData(resp.data))


      
  },[])

 const userValues = userData?.users?.filter(item=> item._id == user._id)

  const dataValues = orderData?.orders?.filter(item=> item.user_id == user._id);
  console.log(userValues )





  
  return (
    <form>
              <h1>My Payment Information Card</h1>
        <div className="formDivider">
          {orderData !== null ? (
              <div className="formContainer">
             {dataValues?.map(item=>{
                return (
                  <>
                    <div className="staticInputs">
                        <div className="fieldName">Payment Mode : -</div>
                        <div className="items">{item.payOptions}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Service Mode : -</div>
                        <div className="items">{item.selectedOption}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Start Date : -</div>
                        <div className="items">{item.startDate}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Total Amount: -</div>
                        <div className="items">{item.total}</div>
                    </div>
                  </>
                )
             })}

              </div>)
            : (
              <h2>Information is not updated yet. Please fill in all the Information first. </h2>
            )  
            }

            {userData !== null ? (
              <>
              <div className="formContainer">
             {userValues?.map(item=>{
                return (
                  <>
                    <div className="staticInputs">
                        <div className="fieldName">Car Make : -</div>
                        <div className="items">{item.carModelNo}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Car Model Number : -</div>
                        <div className="items">{item.carType}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">No of Miles Ran : -</div>
                        <div className="items">{item.noOfMilesRan}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Insured-</div>
                        <div className="items">{item.insured == true ? 'yes': 'no'}</div>
                    </div>
                  </>
                )
             })}

              </div>

              <div className="formContainer">
             {userValues?.map(item=>{
                return (
                  <>
                    <div className="staticInputs">
                        <div className="fieldName">Mobile Number: -</div>
                        <div className="items">{item.mob}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Alternate Mobile Number : -</div>
                        <div className="items">{item.alt_mob}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Registered Email Address : -</div>
                        <div className="items">{item.email}</div>
                    </div>
                    <div className="staticInputs">
                        <div className="fieldName">Country Of Origin-</div>
                        <div className="items">{item.country}</div>
                    </div>
                  </>
                )
             })}

              </div>
              
              </>
            ) : (
              <h2>Information is not updated yet. Please fill in all the Information first. </h2>

            )

}

              
        </div>
    
    </form>
  )
}

export default PaymentInfo