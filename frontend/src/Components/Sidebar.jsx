import React, { useCallback } from "react";
import { FcHome } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { CiPower } from "react-icons/ci";
import { logout } from "../Redux/authSlice";
import { useDispatch } from "react-redux";
import axios from 'axios'
const Sidebar = () => {
  const dispatch = useDispatch()
 const handelLogout = useCallback(async () => {
  try {
    await axios.post("http://localhost:4000/users/logout")
    dispatch(logout())
    localStorage.removeItem("token")

    console.log('logout successful')
    
  } catch (error) {
    console.log(error)
  }
 },[])

  return (
    <menu
      className={`w-full h-full  shadow-xl transform transition-transform duration-300 font-poppin flex flex-col justify-between p-3 z-[999] bg-[#ffff] rounded-[10px]`}>
      <div className="relative w-full h-fit flex justify-start items-center flex-col gap-5 ">
        <ul className="flex justify-start items-start flex-col gap-5 h-fit w-full">
          <li className="text-xl text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FcHome />
            </span>
            Home
          </li>
          <li className="text-xl text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FcOk />
            </span>
            completed
          </li>
          <li className="text-xl text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FcBusinessman />
            </span>
            personal
          </li>
          <li className="text-xl text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FcBriefcase />
            </span>
            Work
          </li>
          <li className="text-xl  text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FcLineChart />
            </span>
            Analytics
          </li>

        </ul>

      </div>
      
      <div className="text-xl text-[#ffff] flex gap-2 p-2 justify-start items-center  w-full hover:text-[#f2f2f2] cursor-pointer flex-col  ">
        <div className="w-full flex p-2 justify-center items-center gap-4 px-4 py-2 bg-[#100f] rounded-[10px]" onClick={handelLogout}><span><CiPower/></span>Logout</div>
      </div>
    </menu>
  );
};

export default Sidebar;
