import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';
import Groups from '../components/UserGroup/Groups';



const UserGroupsUser = () => {

  return (

   
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <MenuComponent />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', boxShadow: '20px' }}>
        <NavBar />
        <Groups/>
      </Box>
    </Box>
  );
};

export default UserGroupsUser;
