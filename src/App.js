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
import {loadUser} from './components/actions/userAction'
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Profile from './components/Pages/Profile/Profile';
import Otp from './components/Pages/OtpScreen/Otp';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  // store.dispatch(loadUser());

  // const dispatch = useDispatch();

  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<AboutUs/>} path='/aboutus'/>
          <Route element={<Services/>} path='/ourservices'/>
          <Route element={<ContactUs/>} path='/contactus'/>
          <Route element={<Pricing/>} path='/pricing'/>
            <Route element={<Profile/>} path='/profile'/>

            <Route element={<Login/>} path='/login'/>
            <Route  element={<Dashboard/>} path='/dashboard'/>

          <Route element={<Register/>} path='/register'/>
      
          <Route element={<Otp/>} path='/verification'/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
