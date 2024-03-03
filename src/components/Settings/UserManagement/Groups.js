import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, AvatarGroup, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dummyDataGroups from '../../../utilities/dummy_data/dummy_data_groups.json'; // Adjust the import path as necessary
import { useState } from 'react';
import Delete from './Popup/Delete';
import { useEffect } from 'react';
import { AdminUserGroupListGet } from '../../../utilities/api/AdminUserGroupList';



// const rows = dummyDataGroups.map((item, index) => ({ ...item, id: index }));

const Groups = () => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [rows, setRows] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AdminUserGroupListGet();
        console.log(data);
        setRows(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  
  const handleOpenDeletePopup = (row) => {
    setCurrentRow(row);
    setOpenDeletePopup(true);
  };


  const handleCloseDeletePopup = () => {
    setOpenDeletePopup(false);
  };


  const handleDelete = () => {
    console.log('Delete row:', currentRow);
    // Add your delete logic here
    handleCloseDeletePopup();
  };


  const columns = [
    {
      field: 'name',
      headerName: 'Group Name',
      width: 275,
      renderCell: (params) => <div>{params.value}</div>,
    },
    {
      field: 'members',
      headerName: 'Members',
      width: 275,
      renderCell: (params) => (
        <AvatarGroup max={4}>
          {params.value.map((src, index) => (
            <Avatar key={index} src={src} alt={`Avatar ${index + 1}`} />
          ))}
        </AvatarGroup>
      ),
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      renderCell: (params) => <div>{params.value}</div>,
    },
    {
      field: 'actions',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => handleOpenDeletePopup(params.row)}>
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton onClick={() => console.log('Edit', params.id)}>
            <EditIcon color="primary" />
          </IconButton>
        </Box>
      ),
    },
  ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
           <Delete open={openDeletePopup} onClose={handleCloseDeletePopup} onConfirm={handleDelete} />
        </Box>
      );
}

export default Groups
