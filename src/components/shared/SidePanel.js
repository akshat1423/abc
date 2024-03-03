import React from 'react';
import { Box, Typography, Button } from '@mui/material'
import logo from '../../utilities/dummy_assets/login.jpg'

const SidePanel = () => {
  return (
    <Box
      sx={{
        bgcolor: '#142b73', // This is the dark blue background color from the earlier discussion
        color: 'white',
        padding: '2rem', // Adjust padding as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh', // Full height
        boxSizing: 'border-box',
      }}
    >
       {/* <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', marginBottom: '1rem' }} /> */}
      <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        Welcome
      </Typography>
      {/* Repeat the above Typography component for additional text as needed */}
      
      {/* Include any additional components that may appear on the side panel */}
      
      {/* If there are buttons or links, style them accordingly */}
    </Box>
  );
};

export default SidePanel;
