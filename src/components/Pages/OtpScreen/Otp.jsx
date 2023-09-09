import React , {useState } from 'react';
import './otp.scss';
import {sentOtpFunction} from '../../ApiControl/Apis'
import { useLocation, useNavigate } from 'react-router-dom';
import toast , {Toaster} from 'react-hot-toast'
// import { useDispatch } from 'react-redux';
// import { loadUser, verify } from '../../../redux/action';


const Otp = () => {
    const [otp, setOtp] = useState("");
  // const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();

  const verifyOTP = async (e) => {
    e.preventDefault();
  //   await dispatch(verify(otp));
  //  await dispatch(loadUser())
    
    // const response = await sentOtpFunction(otp);
    // if(response.status === 201){
    //   navigate("/login")
    //   toast.success('User Verified')
    // }else {
    //   toast.error('Invalid OTP or OTP Expired')
    // }
  }
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