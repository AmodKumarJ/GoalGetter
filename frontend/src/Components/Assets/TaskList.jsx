import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { fetchTasks } from "../../Redux/TaskSlice";
import Edit from './Edit';
import Success from '../Animations/success';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, status } = useSelector((state) => state.tasks);
  const [editRows, setEditRows] = React.useState(null);
  const [edit, setEdit] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const priorityIcons = {
    high: "/red.png",
    intermediate: "/yellow.png",
    low: "/green.png",
  };

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEdit = (row) => {
    setEditRows(row);
    setEdit(true);
  };

  const handleDone = (row) => {
    setDone(true);
    setTimeout(() => {
      setDone(false);
    }, 2500);
  };
 console.log('inside Task list',tasks)
 const rows = tasks?.map((task) => ({
  id: task.task_id,
  task_name: task.task_name,
  task_priority: task.task_priority,
  task_type: task.task_type,
  // Add null check for due_date
  due_date: task.due_date ? task.due_date.split('T')[0] : '',
  due_time: task.due_time,
  task_status: task.task_status,
})) || [];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task_name', headerName: 'Task Name', width: 250 },
    {
      field: 'task_priority',
      headerName: 'Priority',
      width: 120,
      renderCell: (params) => (
        <div className="flex items-center gap-2">
          <img
            src={priorityIcons[params.value.toLowerCase()]}
            alt={`${params.value}-priority`}
            className="w-5 h-5"
          />
          {params.value.charAt(0).toUpperCase() + params.value.slice(1)}
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
        <button onClick={() => handleEdit(params.row)}>Edit</button>
      ),
    },
    {
      field: 'Completed',
      headerName: 'Completed',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDone(params.row)}>Done</button>
      ),
    },
  ];

  return (
    <Paper className="h-[440px] w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        loading={status === 'loading'}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6, 10]}
        className="border-0"
      />
      {edit && <Edit isActive={edit} setActive={setEdit} row={editRows} />}
      {done && <Success />}
    </Paper>
  );
};

export default TaskList;