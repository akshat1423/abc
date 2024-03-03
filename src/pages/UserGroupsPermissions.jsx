import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';
import Permissions from '../components/UserGroup/Permissions';



const UserGropusPermissions = () => {

  return (

   
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <MenuComponent />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', boxShadow: '20px' }}>
        <NavBar />
        <Permissions/>
      </Box>
    </Box>
  );
};

export default UserGropusPermissions;
