import React from 'react'
import { Avatar, Button } from '@nextui-org/react';
import { MdDashboard, MdLibraryAdd } from 'react-icons/md';    
import { BsCartFill } from 'react-icons/bs'; 
import { FaEdit } from 'react-icons/fa'; 
import { IoIosNotifications } from 'react-icons/io';  
import { TbDeviceAnalytics } from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div className='sidebar-parent-component'>
        <div className='justify-center'>
          <h2><TbDeviceAnalytics /></h2>
        </div>
        <div className='justify-center'>
          <h2><MdLibraryAdd /></h2>
        </div>
        <div className='justify-center'>
          <h2><BsCartFill /></h2>
        </div>
        <div className='justify-center'>
          <h2><FaEdit /></h2>
        </div>
        <div className='justify-center'>
          <h2><IoIosNotifications /></h2>
        </div>
    </div>
  )
}

export default Sidebar