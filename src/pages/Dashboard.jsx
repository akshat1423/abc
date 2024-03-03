import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuComponent } from '../components/Menu';
import NavBar from '../components/Navbar/Navbar';

import nodatafound from '../utilities/dummy_assets/nodatafound.jpg'
import { Typography } from '@mui/material';
const Dashboard = ({collapsed, setCollapsed}) => {

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: collapsed? '7%': '17.5%' }}>
        <MenuComponent collapsed={collapsed} setCollapsed={setCollapsed}/>
      </Box>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <Box sx={{display: 'flex', marginTop:'100px', padding: '32px 24px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '21px'}}>
            <Box
            component="img"
            src={nodatafound}
            sx={{
                width: '211.889px', // Adjust width as necessary
                height: '196.824px', // Adjust height as necessary
                flexShrink: '0',
            }}
            />
            
            <Typography 
            sx={{
                color: 'var(--s-primary-source, #273F77)',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '150% ',/* 48px */
                letterSpacing: '-0.352px',
                }}>
                No data Found!
            </Typography>
            <Typography sx={{
              color: 'var(--s-primary-source, #273F77)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '30% ',/* 48px */
              letterSpacing: '-0.352px',
            }}>As we add more data, dashboard shall appear soon!</Typography>
            
        </Box>
       </Box>
    </Box>
  );
};

export default Dashboard;
