import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Avatar } from '@mui/material';
import dummyDataUsers from '../../../utilities/dummy_data/dummy_user_data.json'; // adjust the import path as necessary
import { useEffect } from 'react';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import UserRequestAPIs from '../../../utilities/api/AdminUserRequestList';
const buttonStyle = {
    display: 'flex',
    padding: '0.5rem 0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.5rem',
}
const positionLabels = {
  0: 'TL student management body',
  1: 'Manager (other technical clubs)',
  2: 'TL Manager',
  3: 'TL Technician',
  4: 'Other',
};

//const rows = dummyDataUsers.map((item, index) => ({ ...item, id: index }));

const Request = () => {
  
  const [tableData, setTableData] = useState([]);
  // const [currentRow, setCurrentRow] = useState(null);
  const [acceptedRows, setAcceptedRows] = useState([]);
  const [rejectedRows, setRejectedRows] = useState([]);

  const [accepted, setAccepted] = useState(false);

  useEffect(()=>{
    const response = UserRequestAPIs.UserRequestListGet();
    response.then((result)=>{
      console.log(result);
      setTableData(result);
      //console.log('34', tableData);
    }).catch((error)=>{
        console.log("error", error);
    })
  }, []);
  
  const rows = tableData.map((item, index) => ({ ...item, id: index }));

  const handleAccept = (row) => {
    setAcceptedRows([...acceptedRows, row]);
    console.log('53', acceptedRows);
    //setRejectedRows(rejectedRows.filter((rejectedRow) => rejectedRow !== row));
    console.log('49', row)

    //setAccepted(true);
    const values = {
      accepted: true,
      email: row.email,
    }
    const response = UserRequestAPIs.AdminRequestAcceptDecline(values);  
    response.then((result)=>{
      console.log('result', result);
    }).catch((error)=>{
      console.log('error', error);
    })

  };

  const handleReject = (row) => {
    setRejectedRows([...rejectedRows, row]);
    console.log('73', rejectedRows);
    //setAcceptedRows(acceptedRows.filter((acceptedRow) => acceptedRow !== row));

    //setAccepted(false);
    const values = {
      accepted: false,
      email: row.email,
    }
    const response = UserRequestAPIs.AdminRequestAcceptDecline(values);  
    response.then((result)=>{
      console.log('result', result);
    }).catch((error)=>{
      console.log('error', error);
    })
  };

  const isAccepted = (row) => acceptedRows.includes(row);
  const isRejected = (row) => rejectedRows.includes(row);

  const columns = [
    {
      field: 'userName',
      headerName: 'User Name',
      width: 350,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src={params.row.profilePic} alt={params.row.userName} />
          <div>
            <div>{params.row.name}</div>
            <div style={{ color: 'gray', fontSize: '0.875rem' }}>{params.row.email}</div>
          </div>
        </Box>
      ),
    },
    { field: 'role', headerName: 'Role', width: 200,
      renderCell: (params) => (
          <Box>
            <div>{positionLabels[params.row.position]}</div>
          </Box>
      ),
    },
    // { field: 'category', headerName: 'Category', width: 130 },
    { field: 'groupName', headerName: 'Group Name', width: 200 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => (
        <Box sx={{
          display: 'flex',
          width: '12.6875rem',
          height: '5rem',
          padding: '0.25rem 0.75rem',
          alignItems: 'center',
          gap: '0.25rem',
          borderBottom: '1px solid var(--Light-border, #F2F2F2)',
          background: 'var(--Light-background, #FFF)',
        }}>
          {!isRejected(params.row) && (
        <Button
          size="small"
          style={{
            display: 'flex',
            padding: '0.5rem 0.75rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.5rem',
            color: 'var(--Action-Success, #057D35)' ,
            '&:hover': {
              backgroundColor: 'var(--Action-Success,#90ee90)',
            },
          }}
          onClick={() => handleAccept(params.row)}
          disabled={isAccepted(params.row)}
        >
          {isAccepted(params.row) ? (
            <>
              Accepted <CheckCircleIcon style={{ marginLeft: '4px' }} />
            </>
          ) : (
            'Accept'
          )}
        </Button>
      )}

      {!isAccepted(params.row) && (
        <Button
          size="small"
          style={{
            display: 'flex',
            padding: '0.5rem 0.75rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.5rem',
            color: 'var(--Action-Error, #C90505)',
            '&:hover': {
              backgroundColor: '#FF474C',
            },
          }}
          onClick={() => handleReject(params.row)}
          disabled={isRejected(params.row)}
        >
          {isRejected(params.row) ? (
            <>
              Declined <CancelIcon style={{ marginLeft: '4px' }} />
            </>
          ) : (
            'Decline'
          )}
        </Button>
      )}
        </Box>
      ),
    },
  ];

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );
}

export default Request