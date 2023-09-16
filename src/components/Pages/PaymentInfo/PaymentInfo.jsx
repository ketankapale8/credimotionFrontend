import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { Context } from '../../../index.js';
import { useContext } from 'react';

const PaymentInfo = () => {
  const {user , setUser , setIsAuthenticated} = useContext(Context);
  const user_id  = user._id
  const url ="https://credimotionbackend.vercel.app";
  useEffect(()=>{
    const {data} = axios.get(`${url}/api/v1/myorder/${user_id}`)
    console.log(data)
  },[])


  
  return (
    <form>
        <div className="formDivider">
            <div className="formContainer">
            <label>Plan</label>
            <input className='inputs' type='text' disabled />
            <label>Service Mode</label>
            <input className='inputs' type='text' disabled />
            </div>

            <div className="formContainer">
            <label>Plan</label>
            <input className='inputs' type='text' disabled />
            <label>Service Mode</label>
            <input className='inputs' type='text' disabled />
            </div>
        </div>
    </form>
  )
}

export default PaymentInfo