import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import red_flag from "../../assets/red.png"
import green_flag from "../../assets/yellow.png"
import yellow_flag from "../../assets/green.png"
import Edit from './Edit';

const TaskList = () => {
  const priorityIcons = {
    high: red_flag,     
    medium: yellow_flag,
    low: green_flag,   
  };
  const [rows, setRows] = useState([]); // State to store data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch data from the endpoint
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Get token
      const userId = localStorage.getItem('userId'); // Get userId

      try {
        const response = await axios.get(
          `http://localhost:4000/tasks/user-task/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add JWT token in headers
            },
          }
        );

        // Map data to add 'id' field required by DataGrid
        const mappedRows = response.data.data.map((task) => ({
          id: task.task_id, // Use MongoDB _id as unique id for DataGrid
          task_name: task.task_name,
          task_priority: task.task_priority,
          task_type: task.task_type,
          due_date: task.due_date.split('T')[0], // Format due_date (YYYY-MM-DD)
          due_time: task.due_time,
          task_status: task.task_status,
        }));

        setRows(mappedRows); // n  rows with formatted data
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle edit button click
  const handleEdit = (row) => {
    console.log('Edit clicked for:', row);
  };

  // Define columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task_name', headerName: 'Task Name', width: 250 },
    {
      field: 'task_priority',
      headerName: 'Priority',
      width: 120,
      
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={priorityIcons[params.value]} // Display flag based on priority
            alt={`${params.value}-priority`}
            style={{ width: 20, height: 20 }} // Size of the flag
          />
          {params.value.charAt(0).toUpperCase() + params.value.slice(1)} {/* Capitalize */}
        </div>
      ),
    },
    {
      field: 'task_type',
      headerName: 'Task Type',
      sortable: true,
      width: 160,
    },
    {
      field: 'due_date',
      headerName: 'Due Date',
      sortable: true,
      width: 160,
    },
    {
      field: 'due_time',
      headerName: 'Schedule',
      sortable: true,
      width: 160,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleEdit(params.row)} >Edit</button>
      ),
    }, 
  ];

  const paginationModel = { page: 0, pageSize: 6 };

  return (
    <Paper sx={{ height: 440, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading} // Show loading spinner while fetching data
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[6, 10]}
        sx={{ border: 0 }}
      />
      <Edit />
    </Paper>
  );
};

export default TaskList;
