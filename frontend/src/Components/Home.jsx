import React, { useState } from "react";
import MotivationalCarousel from "./Assets/MotivationalCarousel";
import TaskList from "./Assets/TaskList";
import { FcPlus } from "react-icons/fc";
import TaskForm from "./subComponents/TaskForm";
const Home = () => {
  const[isActive,setIsActive] = useState(false)
  const handleClick = () => {
      setIsActive(true)
  }
  return (
    <div className="w-full h-fit flex flex-col gap-2 relative">
      <div className="w-full h-[200px] ">
        <MotivationalCarousel />
        <p>kdfjeojgolejgp</p>
      </div>
      <div>
        <TaskList/>
      </div>
      <div className="w-full  text-white flex justify-center">
          <button onClick={handleClick} className="px-4 py-2 bg-black w-[40%] rounded-[10px] flex justify-start items-center gap-2 cursor-pointer"><FcPlus/> Create New Task</button>
      </div>
      <TaskForm isActive={isActive} SetisActive={setIsActive} />
    </div>
  );
};

export default Home;
