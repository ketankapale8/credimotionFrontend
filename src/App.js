// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
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
import { useEffect } from 'react';
import { useContext } from 'react';
import {Context} from './index.js'
import Dashboard from './components/Pages/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import DashboardServices from './components/Pages/DashboardServices/DashboardServices';

function App() {
  const {user , setUser , setIsAuthenticated , loading ,setloading} = useContext(Context)
  // const url = "https://credimotionrenderbackend.onrender.com";
  const url ="https://credimotionbackend.vercel.app"

  

  // const {user} = useSelector(state => state.user);

  // const { isAuthenticated, loading } = useSelector((state) => state.user);
  // store.dispatch(loadUser());

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   store.dispatch(loadUser())
  // }, [])

  useEffect(()=>{
    setloading(true)
    axios.get(`${url}/api/v1/me`,{
      withCredentials : true
    }).then(resp => {
      setUser(resp.data.user);
      setIsAuthenticated(true)
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

        </Routes>
        <Toaster/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
