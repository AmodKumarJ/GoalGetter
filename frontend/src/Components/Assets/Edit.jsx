import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SlClose } from "react-icons/sl";
import dayjs from 'dayjs';

const Edit = ({ row, isActive, setActive }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [dueTime, setDueTime] = useState(null);
  const [cat, setCat] = useState("");
  const [prio, setPrio] = useState("");
  const formRef = useRef();

  // Populate the form fields with data from row
  useEffect(() => {
    if (row) {
      setTaskName(row.task_name || "");
      setDescription(row.task_description || "");
      setDueDate(row.due_date ? dayjs(row.due_date) : null);
      setDueTime(row.due_time ? dayjs(row.due_time, 'hh:mmA') : null);
      setCat(row.task_type || "");
      setPrio(row.task_priority || "");
    }
  }, [row]);

  // GSAP animation for form appearance
  useEffect(() => {
    if (isActive) {
      gsap.from(formRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1,0.3)",
      });
    }
  }, [isActive]);

  const handlePrioChange = (event) => {
    setPrio(event.target.value);
  };

  const handleCatChange = (event) => {
    setCat(event.target.value);
  };

  const handleCancel = () => {
    gsap.to(formRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1,0.3)",
      onComplete: () => setActive(false),
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: row.id,
      task_name: taskName,
      task_description: description,
      due_date: dueDate ? dueDate.format('YYYY-MM-DD') : "",
      due_time: dueTime ? dueTime.format('hh:mmA') : "",
      task_priority: prio,
      task_type: cat,
    };
    console.log("Updated Task:", updatedTask);
    // Perform update operation (e.g., API call)
    setActive(false);
  };

  return (
    <div
      ref={formRef}
      className="bg-slate-100 absolute w-[40%] p-3 h-fit z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-[10px] flex justify-center items-center flex-col"
    >
      <h1 className="text-2xl font-bold ">Edit Task</h1>
      <form className="w-[90%] flex flex-col gap-2" onSubmit={handleUpdate}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="taskName" className="font-semibold">
            Task Title
          </label>
          <input
            id="taskName"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px] w-full"
            rows="4"
          ></textarea>
        </div>

        <div className="flex gap-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                value={dueTime}
                onChange={(newValue) => setDueTime(newValue)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={dueDate}
                onChange={(newValue) => setDueDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="flex gap-2">
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={cat} onChange={handleCatChange}>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select value={prio} onChange={handlePrioChange}>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center items-center text-white gap-2">
          <button
            className="px-4 py-2 bg-gray-900 rounded-[10px] w-[40%]"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-gray-900 rounded-[10px] w-[40%]"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
