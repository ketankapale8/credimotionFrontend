import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const navmenu = [
    {
        title : "Home",
        navlink : "/"
    }, 
    {
        title : "About",
        navlink : "/aboutus"

    }, 
    {
        title : "Services",
        navlink : "/ourservices"

    }, 
    {
        title : "Contact",
        navlink : "/contactus"

    },
    {
        title : "Pricing", 
        navlink : "/Pricing"
    }
]

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
         <div className="strip">
            <p>
We'are Open: Mon - Sat 8:00 am- 8:00 pm</p>
         </div>

         <div className="contactnLogo">
            <div className="logoContainer">
                <p>
                    Credimotion.

                </p>
            </div>
            <div className="contactInfo">
                <div className="contactInfoContainer">
                    <h4>Call Us</h4>
                    <p> +52 55 8534 2980</p>
                </div>
                <div className="contactInfoContainer">
                    <h4>Send us mail</h4>
                    <p>query@credimotion.com</p>
                </div>
                <Link to="/contactus">
                <button className="contactusbtn">
                        CONTACT US
                </button>
                </Link>
                <Link to="/login">
                    <button className="contactusbtn">
                            LOGIN
                    </button>
                </Link>
            </div>
         </div>
         <div className="navOptions">
            {navmenu.map((item,idx)=>{
                return (
                    <div className='navmenu'>
                        <Link to={item.navlink} style={{ color:'inherit', textDecoration:'none'}}>
                        <p>{item.title}</p>
                        </Link>
                    </div>
                )
            })}
         </div>


        </div>
    </div>
  )
}

export default Navbar