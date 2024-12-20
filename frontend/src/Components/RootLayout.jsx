import React from 'react'
import { Outlet, useLocation } from 'react-router'

import Sidebar from './Sidebar';

const RootLayout = () => {
  const location = useLocation();
  
  const hideNavbarPaths = ['/signin', '/signup', '/auth/signin', '/auth/signup'];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className={`w-full h-screen flex bg-[#D9D9D9] ${showNavbar?'p-2':'p-0'} gap-2`}>
      {showNavbar && (
        <div className="w-1/5 h-full">
          <Sidebar />
        </div>
      )}
      
      <div className={`flex-grow ${showNavbar ? 'w-4/5' : 'w-full'}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout