import React from 'react';
import './profile.scss'
import { useSelector } from 'react-redux';
import Sidebar from '../../common/sidebar/Sidebar';

const Profile = () => {
  const {user} = useSelector(state => state.auth);
  console.log(user?.name)
  return (
    <>
    
        <div className='profile'>{user?.name}</div>
    
    </>
  )
}

export default Profile