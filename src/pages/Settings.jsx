import React from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';
import SettingsContainer from '../components/Settings/SettingsContainer'
import { useState } from 'react';

const Settings = ({collapsed, setCollapsed}) => {

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: collapsed? '7%': '17.5%' }}>
        <MenuComponent collapsed={collapsed} setCollapsed={setCollapsed}/>
      </Box>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <SettingsContainer/>
      </Box>
    </Box>
  );
};

export default Settings;