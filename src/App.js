// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Services from './components/Pages/Services/Services';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Pricing from './components/Pages/Pricing/Pricing';
import store from './store';
// import {loadUser} from './components/actions/userAction'
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Profile from './components/Pages/Profile/Profile';
import Otp from './components/Pages/OtpScreen/Otp';
import Payments from './components/Pages/Payments/Payments';
import Illustration from './components/Pages/Login/LoginSample';
// import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Context} from './index.js'
import Dashboard from './components/Pages/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import PaymentPortal from './components/Pages/PaymentPortal/PaymentPortal';
import DashboardServices from './components/Pages/DashboardServices/DashboardServices';
import Success from './components/Pages/Success/Success';
import Failure from './components/Failure/Failure';
import { Outlet } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentInfo from './components/Pages/PaymentInfo/PaymentInfo';
import ProtectedRoute from './components/Route/ProtectedRoute';

function App() {
  const {user , setUser , setIsAuthenticated , loading ,setloading , stripeApiKey , setStripeApiKey} = useContext(Context);
  // const url = "https://credimotionrenderbackend.onrender.com";
  const url ="https://credimotionbackend.vercel.app";

  async function getStripeApiKey() {
    const { data } = await axios.get(`${url}/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  }

  

  useEffect(()=>{
    setloading(true)
    axios.get(`${url}/api/v1/me`,{
   
      withCredentials : true
    }).then(resp => {
      setUser(resp.data?.user);
      setIsAuthenticated(true);
      getStripeApiKey()
    setloading(false)
    }).catch(
      setUser({}),
      setIsAuthenticated(false),
    setloading(false)

    )
  },[])

  return (
    <div className="App">
      <Router>
        <Elements stripe={loadStripe("pk_test_51NFFr4SG7ykZH5MH8LdJ6OeTVuvjIKNeubaoaOndPcLsZHh8Y7Pw2I54V1vmA8xOlkf2V6DLXvvbP5ZJMB8IKuk000D6TUPAWf")}>
          <Navbar/>
        

          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<AboutUs/>} path='/aboutus'/>
            <Route element={<Services/>} path='/ourservices'/>
            <Route element={<DashboardServices/>} path='/services'/>

            <Route element={<ContactUs/>} path='/contactus'/>
            <Route element={<Pricing/>} path='/pricing'/>
              <Route element={<Profile/>} path='/profile'/>
              <Route element={<Payments/>} path='/payments'/>


              <Route element={<Login/>} path='/login'/>
              
              <Route  element={<Dashboard/>} path='/dashboard'/>

            <Route element={<Register/>} path='/register'/>
        
            <Route element={<Otp/>} path='/verification'/>
            <Route element={<Success/>} path='/success'/>
            <Route element={<Failure/>} path='/failure'/>
            <Route path="/paymentportal" element={<PaymentPortal />} />
            <Route path="/paymentinfo" element={<PaymentInfo />} />

            {/* {stripeApiKey && (
                <Route
                  element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
                >
                </Route>
              )} */}
        
          
          



          </Routes>
    
          <Toaster/>
          <Footer/>


        </Elements>
      </Router>
    </div>
  );
}

export default App;

// stripeApiKey &&  
// <Elements stripe={loadStripe(stripeApiKey)} >
//   <PaymentPortal/>

// </Elements>

// }
