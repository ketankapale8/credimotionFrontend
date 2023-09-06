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
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Profile from './components/Pages/Profile/Profile';

function App() {
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
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/register'/>
          <Route element={<Profile/>} path='/profile'/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
