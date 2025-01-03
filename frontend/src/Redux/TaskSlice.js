import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token")

// Async action to fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  
  const response = await axios.get(`http://localhost:4000/tasks/user-task/${userId}`,
    {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      }
  ); // Replace with your API
  console.log(response.data.data)
  return response.data.data;
});

// Async action to add a task
export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
  const response = await axios.post('http://localhost:4000/tasks/create-task', taskData,{
        headers:{
          Authorization:`Bearer ${token}`,
        }
      });
  console.log("response of the new Data",response.data.data.data)
  return response.data.data; // Assuming API returns the added task
});

// Task slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.unshift(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
