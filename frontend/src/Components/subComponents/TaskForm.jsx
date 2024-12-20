import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg-slate-300 absolute w-[40%] h-[550px] z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-[10px] flex justify-center items-center">
      <form>
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="taskName" className="text-xl font-semibold">Task</label>
          <input id="taskName" type="text" className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[10px]" />
        </div>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default TaskForm;
