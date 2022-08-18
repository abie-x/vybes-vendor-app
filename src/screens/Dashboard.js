import React from 'react'
import Sidebar from '../components/Sidebar'
import Infobar from '../components/Infobar'

const Dashboard = () => {
  return (
    <div className='parent-container'>
        <Sidebar />
        <div className='split-container2'>
            <Infobar />
        </div>
    </div>
  )
}

export default Dashboard