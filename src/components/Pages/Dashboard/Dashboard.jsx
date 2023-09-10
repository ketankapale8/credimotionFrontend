import React from 'react';
// import { useSelector } from 'react-redux';
import Sidebar from '../../common/sidebar/Sidebar';
import { useContext } from 'react';
import { Context } from '../../../index.js';
import './dashboard.scss'

const Dashboard = () => {
    // const {user} = useSelector(state => state.user);
  return (
    <div className='dashboard'>
        <p>"Discover Seamless Travel Experiences: Rent, Drive, and Thrive with Credimotion. "</p>
        <p>Your Journey, Our Commitment. Book Your Adventure Today!</p>
        {/* {user && 
        <h1 >Hello {user?.user?.name} !</h1> 
        } */}
        <Sidebar/>
    </div>
  )
}

export default Dashboard