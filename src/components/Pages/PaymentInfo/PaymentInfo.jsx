import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { Context } from '../../../index.js';
import { useContext } from 'react';

const PaymentInfo = () => {
  const [data, setData] = useState({})
  const {user , setUser , setIsAuthenticated} = useContext(Context);
  const url ="https://credimotionbackend.vercel.app";
  useEffect(()=>{
    setData(axios.get( `${url}/api/v1/myorder/${user._id}`))
  },[])

  console.log(data)

  
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