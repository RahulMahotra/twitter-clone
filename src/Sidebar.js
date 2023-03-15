import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon'/>
      <SidebarOption text="Home" Icon={<HomeIcon/>} active/> 
      <SidebarOption text="Search" Icon={<PersonSearchIcon/>}/> 
      <SidebarOption text="Notification" Icon={<NotificationsActiveIcon/>}/> 
      <SidebarOption text="MORE" Icon={<MoreHorizIcon/>}/> 

      <Button variant="outlined" className="sidebar__tweet"> TWEET </Button>
    </div>
  )
}
  
export default Sidebar
