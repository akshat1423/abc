import { Box } from '@mui/material'
import React from 'react'
import NavigationBar from './UserManagement/NavigationBar'
import Request from './UserManagement/Request';
import { useState } from 'react';
import Permissions from '../Settings/UserManagement/Permissions';
import User from './UserManagement/User';
import Groups from './UserManagement/Groups';

const ManagementContainer = () => {

  const [activeTab, setActiveTab] = useState(0);

  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <Request />;
      case 1:
         return <Permissions />;
      case 2:
         return <User/>
      case 3:
        return <Groups/>
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: 'border-box', // example width
        height: 'auto', // example height
        marginBlock: '1rem',
        borderRadius: 1, // example border radius
        border:'#A6A6A6 solid 1px'
      }}
    >
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab}/>
      {renderPage()}
    </Box>
  )
}

export default ManagementContainer
