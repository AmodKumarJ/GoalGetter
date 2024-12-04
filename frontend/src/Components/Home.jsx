import React from "react";
import MotivationalCarousel from "./Assets/MotivationalCarousel";
import TaskPieChart from "./Assets/TaskPieChart";
import TaskDetails from "./Assets/TaskDetails";
import TaskBarChart from "./Assets/TaskBarChart";
import BasicCalender from "./Assets/BasicDateCalendar";
import { CiCalendar } from "react-icons/ci";

const Home = () => {
  return (
    <div className="grid h-auto w-full pt-16 p-2 grid-cols-1 gap-4 md:grid-cols-4 font-poppin">
      {/* Each grid item */}
      <div className="flex justify-center items-center h-64 md:h-80 col-span-1 md:col-span-2">
        <MotivationalCarousel />
      </div>
      <div className="flex justify-center items-center h-64 md:h-80 backdrop-blur-md shadow-md rounded-md border-s-teal-400 col-span-1 bg-opacity-75">
        <TaskDetails />
      </div>
      <div className="flex justify-center items-center h-64 md:h-80 backdrop-blur-md shadow-md rounded-md border-s-teal-400">
        <TaskPieChart />
      </div>
      <div className="flex justify-center items-center h-64 md:h-80 col-span-1 backdrop-blur-md shadow-md rounded-md border-s-teal-400 ">
        <TaskBarChart />
      </div>
      <div className="flex justify-center items-center h-fit md:h-80 col-span-1 backdrop-blur-md shadow-md rounded-md border-s-teal-400 ">
        <BasicCalender />
      </div>
      <div className="flex flex-col justify-center items-center h-fit md:h-80 col-span-1 md:col-span-2 backdrop-blur-md shadow-md rounded-md border-s-teal-400 p-4 cursor-pointer">
        <div className="flex justify-between items-center w-full p-4">
          <h1 className="text-2xl font-semibold ">Today's Task</h1>
          <button className="px-4 py-2 bg-blue-500 rounded-full cursor-pointer">+ new Task</button>
        </div>
        <div className="w-full h-fit shadow-xl p-4 flex flex-col gap-2 items-start justify-start">
          <div className=" flex justify-start items-center gap-2">
            <input type="radio" />
            <p className="font-semibold">Learn DSA in Python</p>
          </div>
          <p className="text-gray-500">
            Go through the freecodecamp.org you tube channel
          </p>
          <div className="flex justify-start items-center gap-2 text-sm">
            <div className="flex justify-start items-center gap-1">
              <span>
                <CiCalendar />
              </span>
              <p>1 Jan 2025</p>
            </div>

            <div className="flex justify-start items-center gap-1 text-gray-600">
              <span className="px-1 py-1 rounded-full bg-gray-400"></span>
              <p>priority : High</p>
            </div>
          </div>
        </div>

        <div className="w-full h-fit shadow-xl p-4 flex flex-col gap-2 items-start justify-start">
          <div className=" flex justify-start items-center gap-2">
            <input type="radio" />
            <p className="font-semibold">Learn Java Script</p>
          </div>
          <p className="text-gray-500">
            Go through the Brocode you tube channel
          </p>
          <div className="flex justify-start items-center gap-2 text-sm">
            <div className="flex justify-start items-center gap-1">
              <span>
                <CiCalendar />
              </span>
              <p>1 Jan 2025</p>
            </div>

            <div className="flex justify-start items-center gap-1 text-gray-600">
              <span className="px-1 py-1 rounded-full bg-gray-400"></span>
              <p>priority : High</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
