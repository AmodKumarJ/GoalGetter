import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import gsap from 'gsap';
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
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from "../../Redux/TaskSlice";

const TaskForm = ({ isActive, SetisActive,setSubmit }) => {
  const [cat, setCat] = useState('');
  const [prio, setPrio] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.tasks.status);

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

  const handlePrioChange = (event) => setPrio(event.target.value);
  const handleChange = (event) => setCat(event.target.value);
  const handleClose = () => {
    gsap.to(formRef.current, {
      y: "10vh",
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      onComplete: () => SetisActive(false)
    });
  };

  const onSubmit = async (data) => {
    const userId = localStorage.getItem("userId");
    const formattedTime = selectedTime ? selectedTime.format('h:mmA') : null;
    const payload = {
      user_id: userId,
      task_name: data.taskName,
      task_description: data.description,
      task_priority: prio,
      task_status: 'pending', // Add default status
      task_type: cat,
      due_date: selectedDate ? selectedDate.format('YYYY-MM-DD') : null,
      due_time: formattedTime
    };

    try {
      await dispatch(addTask(payload)).unwrap();
      // Reset form
      reset();
      setCat('');
      setPrio('');
      setSelectedDate(null);
      setSelectedTime(null);
      // Close form
      handleClose();
      // Update parent component if needed
      if (setSubmit) setSubmit(true);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return isActive && (
    <div ref={formRef} className="bg-slate-100 absolute w-[40%] p-3 h-fit z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-[10px] flex justify-center items-center flex-col">
      <div className="flex w-full justify-end">
        <SlClose onClick={handleClose} className="cursor-pointer" />
      </div>
      <h1 className="text-2xl font-bold">New Task to do</h1>

      <form className="w-[90%] flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskName" className="font-semibold">Task Title</label>
          <input
            id="taskName"
            type="text"
            placeholder="Enter the title here..."
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px]"
            {...register('taskName', { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea
            id="description"
            className="bg-transparent border-[1px] border-black px-4 py-2 rounded-[5px] w-full"
            rows="4"
            placeholder="Enter your description here..."
            {...register('description', { required: true })}
          ></textarea>
        </div>

        <div><label>Time and Date</label></div>
        <div className="flex gap-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                value={selectedTime}
                onChange={setSelectedTime}
                viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock, seconds: renderTimeViewClock }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker value={selectedDate} onChange={setSelectedDate} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div><label>Priority and Category</label></div>
        <div className="flex gap-2">
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={cat} onChange={handleChange} label="Category">
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select value={prio} onChange={handlePrioChange} label="Priority">
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-center items-center text-white">
          <button className="px-4 py-2 bg-gray-900 rounded-[10px] w-[40%]" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
