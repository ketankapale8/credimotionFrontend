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

import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaymentPortal = () => {
  const location = useLocation();
  let {total} = location.state;
  console.log(total)
  return (
    <div className="paymentContainer">
        {/* <form className="paymentForm" >
        <Typography>Card Info</Typography>
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
            // value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            // ref={payBtn}
            className="paymentFormBtn"
          />
        </form> */}
      </div>
  )
}

export default PaymentPortal