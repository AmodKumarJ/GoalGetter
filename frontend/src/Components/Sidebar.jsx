import React from "react";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
const Sidebar = ({ Sidebar }) => {
  return (
    <menu
      className={`md:w-[15%] w-full h-full bg-white shadow-xl fixed transform ${
        Sidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 font-poppin`}
    >
      <div className="relative w-full h-full flex justify-start items-center flex-col gap-5 p-4">
        <ul className="flex justify-start items-start flex-col gap-5 p-4 h-fit w-full">
          <li className="text-xl font-bold text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <GrProjects />
            </span>
            Overview
          </li>
          <li className="text-xl font-bold text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <FaTasks />
            </span>
            Task List
          </li>
          <li className="text-xl font-bold text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <BsCalendar3 />
            </span>
            Calender
          </li>
          <li className="text-xl font-bold text-[#2f2f2f] flex gap-2 p-2 justify-start items-center hover:bg-[#19181a] w-full rounded-md hover:text-[#f2f2f2] active:bg-[#19181a] active:text-[#f2f2f2] cursor-pointer">
            <span>
              <BsGraphUpArrow />
            </span>
            Activity
          </li>
        </ul>
      </div>
    </menu>
  );
};

export default Sidebar;
