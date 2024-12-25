import React, { useRef,useEffect, useState } from "react";
import gsap from 'gsap'
import { useForm } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlClose } from "react-icons/sl";
const TaskForm = ({isActive,SetisActive}) => {
  console.log("isActive",isActive)
  const [cat, setCat] = React.useState('');
  const [prio, setPrio] = React.useState('');
  const formRef = useRef(null)
  
  useEffect(() => {
    if (isActive) {
      gsap.from(formRef.current, {
        y: "10vh", 
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    }
  }, [isActive]);

  const handlePrioChange = (event)=>{
    setPrio(event.target.value)
  }
  const handleChange = (event) => {
    setCat(event.target.value);
  };
  const handleClose = () => {
    gsap.to(formRef.current,{
      y:"10vh",
      opacity:0,
      duration:0.8,
      ease: "power4.out",
      onComplete:()=>SetisActive(false)
    })
    
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return isActive && (
    <div ref={formRef} className="bg-slate-100 absolute w-[40%] p-3 h-fit z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-[10px] flex justify-center items-center flex-col ">
      <div className="flex w-full justify-end"><SlClose onClick={handleClose} className="cursor-pointer"/></div>
      <h1 className="text-2xl font-bold ">New Task to do</h1>
      <form className="w-[90%] flex flex-col gap-2">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="taskName" className="font-semibold">
            Task Title
          </label>
          <input
            id="taskName"
            type="text"
            placeholder="enter the tiltle here ..."
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-semibold">
            description
          </label>
          <textarea
            id="description"
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px] w-full"
            rows="4"
            placeholder="Enter your description here..."
          ></textarea>
        </div>
        <div><label htmlFor="">TIme and Date</label></div>
        <div className="flex gap-2">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div><label htmlFor="">Priority and Category</label></div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cat}
                onChange={handleChange}
                label="Category"
              >
                <MenuItem value={10}>Personal</MenuItem>
                <MenuItem value={20}>Work</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-1/2">
            <FormControl fullWidth>
              <InputLabel>priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={prio}
                onChange={handlePrioChange}
                label='priority'
              >
                <MenuItem value={10}>High</MenuItem>
                <MenuItem value={20}>Intermidiate</MenuItem>
                <MenuItem value={30}>Less</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex justify-center items-center text-white">
          <button className="px-4 py-2 bg-gray-900 rounded-[10px] w-[40%]" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
