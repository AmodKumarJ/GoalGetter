import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Task Name', headerName: 'Task name', width: 400 },
  {
    field: 'priority',
    headerName: 'Priority',
    type: 'number',
    width: 90,
  },
  {
    field: 'taskType',
    headerName: 'Task Type',
    sortable: true,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'dueDate',
    headerName: 'due date',
    sortable: true,
    width: 160,
  },
  {
    field:'schedule',
    headerName:'Schedule',
    sortable:true,
    width:160,
  },
  {
    field:'Edit',
    headerName:'Edit',
    width:100,
  }
];

const rows = [
  { id: 1, taskName: 'Task 1', priority: 1, dueDate: '2024-12-20', schedule: '10:00 AM' },
  { id: 2, taskName: 'Task 2', priority: 2, dueDate: '2024-12-21', schedule: '11:00 AM' },
  { id: 3, taskName: 'Task 3', priority: 3, dueDate: '2024-12-22', schedule: '12:00 PM' },
  { id: 4, taskName: 'Task 4', priority: 1, dueDate: '2024-12-23', schedule: '1:00 PM' },
  { id: 5, taskName: 'Task 5', priority: 2, dueDate: '2024-12-24', schedule: '2:00 PM' },
  { id: 6, taskName: 'Task 6', priority: 3, dueDate: '2024-12-25', schedule: '3:00 PM' },
  { id: 7, taskName: 'Task 7', priority: 1, dueDate: '2024-12-26', schedule: '4:00 PM' },
  { id: 8, taskName: 'Task 8', priority: 2, dueDate: '2024-12-27', schedule: '5:00 PM' },
  { id: 9, taskName: 'Task 9', priority: 3, dueDate: '2024-12-28', schedule: '6:00 PM' },
  { id: 10, taskName: 'Task 10', priority: 1, dueDate: '2024-12-29', schedule: '7:00 PM' },
];

const paginationModel = { page: 0, pageSize: 6 };

export default function TaskList() {
  return (
    <Paper sx={{ height: 440, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[6, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        
      />
    </Paper>
  );
}5