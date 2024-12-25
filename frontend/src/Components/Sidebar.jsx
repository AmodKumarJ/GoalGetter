/* eslint-disable react/jsx-key */
import React, { useCallback, useState } from "react";
import {
  FcHome,
  FcOk,
  FcBusinessman,
  FcBriefcase,
  FcLineChart,
} from "react-icons/fc";
import { CiPower } from "react-icons/ci";
import { logout } from "../Redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router";
import Home from './Home'

const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("home");
  const [heading, setHeading] = useState("Home");

  const menuItems = [
    { id: "home", icon: <FcHome />, label: "Home",path:"/" },
    { id: "completed", icon: <FcOk />, label: "Completed",path:"/completed" },
    { id: "personal", icon: <FcBusinessman />, label: "Personal",path:"/personal" },
    { id: "work", icon: <FcBriefcase />, label: "Work",path:"/work" },
    { id: "analytics", icon: <FcLineChart />, label: "Analytics",path:"/analytics" },
  ];

  const handleLogout = useCallback(async () => {
    try {
      await axios.post("http://localhost:4000/users/logout");
      dispatch(logout());
      localStorage.removeItem("token");
      console.log("logout successful");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const handleMenuItemClick = (itemId, label) => {
    setActiveItem(itemId);
    setHeading(label);
  };

  return (
    <menu className="w-full h-full shadow-xl transform transition-transform duration-300 font-poppin flex flex-col justify-between p-3 z-[999] bg-[#ffff] rounded-[10px]">
      <div className="relative w-full h-fit flex justify-start items-center flex-col gap-5">
        <h1 className="font-bold text-2xl p-2">
          {heading.toLocaleUpperCase()}
        </h1>
        <span className="bg-black w-full h-[1px]"></span>
        <ul className="flex justify-start items-start flex-col gap-5 h-fit w-full">
          {menuItems.map((item) => (
            <Link className="w-full" to={item.path}>
              <li
                key={item.id}
                className={`text-xl text-[#2f2f2f] flex gap-2 p-2 justify-start items-center  w-full rounded-md active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer ${
                  activeItem === item.id
                    ? "bg-[#19181a] text-[#f2f2f2]"
                    : "hover:bg-[#ffff] hover:text-black hover:shadow-md"
                }`}
                onClick={() => handleMenuItemClick(item.id, item.label)}
              >
                
                <span>{item.icon}</span>
                {item.label}
                
               
              </li>
            </Link>
            
          ))}
        </ul>
      </div>

      <div className="text-xl text-[#ffff] flex gap-2 p-2 justify-start items-center w-full hover:text-[#f2f2f2] cursor-pointer flex-col">
        <div
          className="w-full flex p-2 justify-center items-center gap-4 px-4 py-2 bg-[#100f] rounded-[10px]"
          onClick={handleLogout}
        >
          <span>
            <CiPower />
          </span>
          Logout
        </div>
      </div>
    </menu>
  );
};

export default Sidebar;
