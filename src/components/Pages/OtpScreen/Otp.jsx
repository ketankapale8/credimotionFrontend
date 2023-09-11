import React , {useState } from 'react';
import './otp.scss';
import axios from 'axios'

import {sentOtpFunction} from '../../ApiControl/Apis'
import { useLocation, useNavigate } from 'react-router-dom';
import toast , {Toaster} from 'react-hot-toast';
import { useContext } from 'react';
import { Context } from '../../../index.js';
// import { useDispatch } from 'react-redux';
// import { loadUser, verify } from '../../../redux/action';


const Otp = () => {
  
  const url = "https://credimotionrenderbackend.onrender.com"

  const {isAuthenticated, setIsAuthenticated ,loading , setloading ,} = useContext(Context)
    const [otp, setOtp] = useState("");
  // const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();

  const verifyOTP = async (e) => {
    e.preventDefault();
    setloading(true)
    try{
       await axios.post(
        `${url}/api/v1/verify`, 
        {
          otp
        },
        {
          headers : {
            "Content-Type" : "application/json",
          }, 
          withCredentials : true
        }
      )
      toast.success("verified")
      setIsAuthenticated(true)
      setloading(false)
      

    }catch(err){
      toast.error("Verification Error")
      setIsAuthenticated(false)
      setloading(false)

    }

    // dispatch(login(values.email , values.password , values.name))
    // localStorage.setItem("currentUser", JSON.stringify({values}))
    // dispatch(login(values.email , values.password));
  };

  return (
    <section className='otp'>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className='btn' onClick={verifyOTP}>Submit</button>
          </form>
        </div>
        <Toaster/>
      </section>
  )
}

export default Otp