import React from 'react'
import Navbar from './Navbar/Navbar';
import Topbar from './Topbar/Topbar';

const Header = () => {
  return (
    <div className='sticky top-0 z-50 w-full'>
        <Topbar />
        <Navbar />
    </div>
  )
}

export default Header;