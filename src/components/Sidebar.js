import React from 'react'
import { Avatar } from '@nextui-org/react';

const Sidebar = () => {
  return (
    <div className='sidebar-parent-component'>
        <div className='justify-center'>
            <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            style={{height: "100px", width: "100px"}}
            bordered
            zoomed
            />
        </div>
        <div className='justify-center'>
          <h6 className='head-style'>Shahanas Bridal Jwelers</h6>
        </div>
    </div>
  )
}

export default Sidebar