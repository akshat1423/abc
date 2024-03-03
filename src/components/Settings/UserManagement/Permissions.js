import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Checkbox, Avatar } from '@mui/material';
import dummyDataGroups from '../../../utilities/dummy_data/dummy_data_groups.json'; 
import { useEffect } from 'react';
import { useState } from 'react';
// import { AdminPermissionsGet } from '../../../utilities/api/AdminPermissions';

const columns = [
  {
    field: 'name',
    headerName: 'User groups',
    width: 180,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src={params.row.avatar} alt={params.row.name} />
        <div>{params.row.name}</div>
      </Box>
    ),
  },
  {
    field: 'viewer',
    headerName: 'Viewer',
    width: 130,
    renderCell: (params) => (
      <Checkbox checked={params.value} />
    ),
  },
  {
    field: 'editor',
    headerName: 'Editor',
    width: 130,
    renderCell: (params) => (
      <Checkbox checked={params.value} />
    ),
  },
  {
    field: 'administer',
    headerName: 'Administer',
    width: 130,
    renderCell: (params) => (
      <Checkbox checked={params.value} />
    ),
  },
  {
    field: 'custom',
    headerName: 'Custom',
    width: 130,
    renderCell: (params) => (
      <Checkbox checked={params.value} />
    ),
  },
];

 const rows = dummyDataGroups.map((item, index) => ({ ...item, id: index }));


const Permissions = () => {
  // const [rows, setRows] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await AdminPermissionsGet();
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
          />
        </Box>
      );
}

export default Permissions

