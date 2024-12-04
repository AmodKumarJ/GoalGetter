import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebar,setSidebar] = useState(false)
  const handelCLick = ()=>{
    setSidebar(pre=>!pre)
  }
  return (
    <header className='h-[50px] bg-transparent fixed w-full bg-white shadow-xl border-[1px] border-white/60 z-[999]'>
      <nav className='h-full w-full flex justify-between p-4 items-center'>
        <div className='text-3xl cursor-pointer' onClick={handelCLick}>
          {sidebar?<IoClose/>:<CgMenuRightAlt/>}
        </div>
          <div className='text-4xl cursor-pointer font-satisfy'>
            GOAL GETTER
          </div>
        <div className='text-3xl cursor-pointer'>
          <FaUserCircle/>
        </div>
      </nav>
      <Sidebar Sidebar={sidebar}/>
    </header>
  )
}

export default Navbar
