import React from 'react'
import { Outlet, useLocation } from 'react-router'

import Navbar from './Navbar';

const RootLayout = () => {
  const location = useLocation();
  
  const hideNavbarPaths = ['/signin', '/signup', '/auth/signin', '/auth/signup'];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className='w-full h-screen '>
      {showNavbar && <Navbar/>}
      
      <div >
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout