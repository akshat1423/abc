import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dummyDataUsers from '../../../utilities/dummy_data/dummy_data_users_actions.json'; // Adjust the import path as necessary
import { useState } from 'react';
import { useEffect } from 'react';
// import { AdminUserRequestGet, fetchAllUserRequestsWithNames } from '../../../utilities/api/AdminUserRequest';

const columns = [
  {
    field: 'name',
    headerName: 'User Name',
    width: 200,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src={`https://i.pravatar.cc/150?u=${params.id}`} alt={params.value} />
        <div>
          <div>{params.value}</div>
          <div style={{ color: 'gray', fontSize: '0.875rem' }}>{params.row.email}</div>
        </div>
      </Box>
    ),
  },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'group', headerName: 'Group Name', width: 130 },
  {
    field: 'actions',
    headerName: 'Action',
    width: 130,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={() => console.log('Delete', params.id)}>
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton onClick={() => console.log('Edit', params.id)}>
          <EditIcon color="primary" />
        </IconButton>
      </Box>
    ),
  },
];

 const rows = dummyDataUsers.map((item, index) => ({ ...item, id: index }));

const User = () => {
  // const [rows, setRows] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchAllUserRequestsWithNames();
  //       console.log(data);
  //       setRows(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      );
}

export default User
