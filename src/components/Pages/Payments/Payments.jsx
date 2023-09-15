import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { useContext } from 'react';
import { Context } from '../../../index.js';
import FormInput from '../FormInputs/FormInputs';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link , useLocation } from 'react-router-dom';
import './payments.scss'
import Checkout from '../../checkout/Checkout';
import DatePicker from "react-datepicker";
import toast from 'react-hot-toast';
// import {loadStripe} from '@stripe/stripe-js';

import "react-datepicker/dist/react-datepicker.css";

const Payments = (props) => {
  const {isAuthenticated, setIsAuthenticated , loading , setloading , user , setservicesSelected , servicesSelected} = useContext(Context);
  console.log(user._id)
  // const url = "https://credimotionrenderbackend.onrender.com";
  const url ="https://credimotionbackend.vercel.app"



  const paymentBlock = [
    {
        title : "Fast", 
        price : 0, 
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
        price : 38.99, 
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
        price : 78.99, 
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
        price : 197.99, 
        descArr : [
            {
                one : "User Performance", 
                two : "Active satellite location system ",
                three : ""
            }
        ]
    }
]

const options = [
  { value: 100, label: 'Spare Parts' },
  { value: 300, label: 'Maintainence' },
  { value: 200, label: 'Bodywork & Paintjob' },
  { value: 0, label: 'Nil' },

]

const [values, setValues] = useState({

  // confirmPassword: "",
});

const inputs = [
  {
    id: 1,
    name: "Price",
    type: "Number",
    placeholder: "Price",

    label: "Price",
    // pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "Plan",
    type: "Text",
    placeholder: "Plan",
    label: "Plan",
    required: true,
  },

];

const [serviceVal ,setServiceVal ] = useState("")
const [servicePlan ,setServicePlan ] = useState("")
const [selectedOption, setSelectedOption] = useState("");
const [paymentOption, setPaymentOption] = useState("Card");
const [startDate, setStartDate] = useState(new Date());
const [btn , setBtn] = useState('');
const [showPaymentBtn , setShowPaymentBtn] = useState(false);

const [disableBtn , setdisableBtn] = useState(false)

// const [total , setTotal] = useState(0);

const payOptions = [
  {value : "Cash" , label: "Cash"},
  {value : "Card" , label: "Card"},


]

const total = selectedOption.value + serviceVal;
// console.log(total)


const handlePayBlock = (val) => {
  setServiceVal(val)
}



console.log(servicePlan)

// console.log(serviceVal)

const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

const handlePaymentOptionChange = (e) => {
  setBtn(e.value)
  if(e.value == "Card"){
    setShowPaymentBtn(true)
  }else if(e.value == "Cash"){
    setShowPaymentBtn(false)
  }

}


const handleSubmit = async (e) => {
  e.preventDefault();
  setloading(true)
  try{
    await axios.post(
      `${url}/api/v1/createservice`, 
      {
        email : user.email,
        user_id : user._id,
        servicePlan : servicePlan, 
        serviceVal : serviceVal,
        startDate : startDate.toString(),
        payOptions : btn, 
        total: total,
        selectedOption : selectedOption.label
        // name , 
        // email,
        // password
      },
      {
        headers : {
          "Content-Type" : "application/json",
        }, 
        withCredentials : true
      }
    )
    toast.success("Services Updated Successfully. A Confirmation mail with updated details is being sent on your registered email address")
    setIsAuthenticated(true)
    setloading(false)
    

  }catch(err){
    toast.error("Something went wrong! Logout & try again!")
    setIsAuthenticated(false)
    setloading(false)

  }


};

// const makePayment = async () => {
//   const stripe = await loadStripe("pk_test_51NFFr4SG7ykZH5MH8LdJ6OeTVuvjIKNeubaoaOndPcLsZHh8Y7Pw2I54V1vmA8xOlkf2V6DLXvvbP5ZJMB8IKuk000D6TUPAWf");
//   const body = {
//     total : 1299 , email : user.email, user_id : user._id , servicePlan : "abcd", serviceVal : 211 , startDate ,
    

// }
// const headers = {
//     "Content-Type":"application/json"
// }
// const response = await fetch(`${url}/api/v1/processpayments`,{
//     method:"POST",
//     headers:headers,
//     body:JSON.stringify( body.total , body.email , body.user_id , body.servicePlan , body.serviceVal , body.startDate)
// });

// const session = await response.json();

// const result = stripe.redirectToCheckout({
//     sessionId:session.id
// });

// if(result.error){
//     console.log(result.error);
// }
// }







  return (
    <div className='payments'>
      <div className="pricingMain">
      <div className="pricingContainer">
          {paymentBlock.map((item,idx)=>{
              return (
                  <>
              <div className="pricingBlock1" key={idx}>
                  <h3>{item.title}</h3>
                  <p className='priceItem'>{item.price} $</p>
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

                  <button className='pricingbtn' onClick={()=>{ return setServiceVal(item?.price) , setServicePlan(item?.title)}}>Add</button>
              </div>
                  </>
              )
          })}
      </div>
          <form>
          <h1>Service Selection</h1>
          <div className="formDivider">
          <div className='formContainer'>

            <label>Plan</label>
            <input className='inputs' type='text' disabled value={`${serviceVal}`}/>
            <label>Service Mode</label>
            <input className='inputs' type='text' disabled value={`${servicePlan} `}/>
          </div>

          <div className='formContainer'>

            <label>Services</label>
            <Select
             defaultValue={selectedOption}
             onChange={setSelectedOption}
              options={options}
              className='select'
          />
          <div style={{paddingTop:"28px" , display:'flex', flexDirection:'column'}}>
              <label>Price</label>
              <input className='inputs' type='text' disabled value={`${selectedOption.value} $`}/>

          </div>
          </div>

          </div>
          
          <div className="formDivider">
          <div className='formContainer'>

            <label>Mode Of Payment</label>
            <Select
             defaultValue={paymentOption}
            //  onChange={(e)=>handlePaymentOptionChange(e)}
             onChange={(e)=>handlePaymentOptionChange(e)}
              options={payOptions}
              className='select'
          />
          
          </div>

          <div className='formContainer'>

            <label>Appointment Date</label>
            <DatePicker  showTimeSelect className="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
           
          </div>


          </div>

          <div className='formDivider'>
            <div className="formContainer" style={{paddingTop:'20px'}}>
              <label>Grand Total</label>
              <input type="Number" disabled className='inputs'  value={total}/>
            </div>


          </div>
          <button className='moveScreenBtn'onClick={handleSubmit}>Submit</button>
          <Link to="/paymentPortal" state={{
                    email : user.email,
                    user_id : user._id,
                    servicePlan : servicePlan, 
                    serviceVal : serviceVal,
                    startDate : startDate,
                    payOptions : btn, 
                    total: total,
                    selectedOption : selectedOption.label

           }}>
              <button className='moveScreenBtn' >Checkout</button>
          
          </Link>
            

          </form>

          
      </div>
</div>
  )
}

export default Payments