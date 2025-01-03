import React, { useEffect, useState } from "react";
import MotivationalCarousel from "./Assets/MotivationalCarousel";
import TaskList from "./Assets/TaskList";
import { FcPlus } from "react-icons/fc";
import TaskForm from "./Assets/TaskForm";
import SkeletonLoader from "./SkeletonLoader";
const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [contentLoading ,setContentLoading] = useState(true)
  const [loading, setLoading] = useState(true);
  const [submit,setSubmit] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <>
      {loading ? (
        <div className="w-full h-screen">
          <SkeletonLoader />
        </div>
        
      ) : (
        <div className="w-full h-fit flex flex-col gap-2 relative">
          <div className="w-full h-[200px] ">
            <MotivationalCarousel />
          </div>
          <div>
            <TaskList setContentLoading={setContentLoading} contentLoading={contentLoading} setSubmit={setSubmit} submit={submit}/>
          </div>
          <div className="w-full  text-white flex justify-center">
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-black w-[40%] rounded-[10px] flex justify-start items-center gap-2 cursor-pointer"
            >
              <FcPlus /> Create New Task
            </button>
          </div>
          <TaskForm isActive={isActive} SetisActive={setIsActive} setSubmit={setSubmit}  />
        </div>
      )}
    </>
  );
};

export default Home;
