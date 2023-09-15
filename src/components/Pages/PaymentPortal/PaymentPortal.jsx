import React from 'react';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import './paymentportal.scss';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useContext } from 'react';
import {Context} from '../../../index.js'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../../Route/ProtectedRoute';
import toast from 'react-hot-toast';

const PaymentPortal = () => {
  const {user , setUser , setIsAuthenticated , loading ,setloading , stripeApiKey , setStripeApiKey} = useContext(Context);
  const payBtn = useRef(null);
  const location = useLocation();

  const stripe = useStripe();
  const elements = useElements();
  let {total ,email ,user_id,
    servicePlan, 
    serviceVal ,
    startDate,
    payOptions, 
    selectedOption } = location.state;
  const order = {
    total,
    email,
    user_id,
    servicePlan, 
    serviceVal ,
    startDate,
    payOptions, 
    selectedOption
  };



    const paymentData = {
      amount: total,
    };

    const submitHandler = async (e) => {
      e.preventDefault();
  
      payBtn.current.disabled = true;
  
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/v1/processpayments",
          paymentData,
          config
        );
  
        const client_secret = data.client_secret;
  
        if (!stripe || !elements) return;
  
        const result = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: user.name,
              email: user.email,
              servicePlan, 
              serviceVal,
              selectedOption
             
            },
          },
        });
  
        if (result.error) {
          payBtn.current.disabled = false;
  
          toast.error(result.error.message);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            order.paymentInfo = {
              id: result.paymentIntent.id,
              status: result.paymentIntent.status,
            };
            <Navigate to="/success"/>
          } else {
            toast.error("There's some issue while processing payment ");
          }
        }
      } catch (error) {
        payBtn.current.disabled = false;
        toast.error(error.response.data.message);
      }
    };


    // const PaymentContainer = () => {
    //   return (
    //     <>
        
        
    //     </>
    //   )
    // }
  return (
    <div className="paymentContainer">
    <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
      <Typography>Payment Portal For Credimotion</Typography>
      <div>
        <CreditCardIcon />
        <CardNumberElement className="paymentInput" />
      </div>
      <div>
        <EventIcon />
        <CardExpiryElement className="paymentInput" />
      </div>
      <div>
        <VpnKeyIcon />
        <CardCvcElement className="paymentInput" />
      </div>

      <input
        type="submit"
        value={`Pay - $ ${total}`}
        ref={payBtn}
        className="paymentFormBtn"
      />
    </form>
  </div>


  )
}

export default PaymentPortal