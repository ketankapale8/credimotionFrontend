import React , {useState } from 'react';
import './otp.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import toast , {Toaster} from 'react-hot-toast'


const Otp = () => {
    const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();
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
            <button className='btn' >Submit</button>
          </form>
        </div>
        <Toaster/>
      </section>
  )
}

export default Otp