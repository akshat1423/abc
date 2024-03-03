import React, { useState } from 'react';
import { Box, Button, IconButton, Tabs, Tab, Typography, useMediaQuery, useTheme } from '@mui/material';


const TopBarComponent = ({ activeTab, setActiveTab }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
    // Reference to the hidden file input element
    // const fileInputRef = useRef(null);

    // // Function to trigger the file input click
    // const handleFileButtonClick = () => {
    //   fileInputRef.current.click();
    // };


  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      gap: isMobile ? 1 : 0, 
      width: '100%', 
      padding: theme.spacing(1),
      margin: 'none',
      marginBlock:'1rem',
      boxSizing: 'border-box' // Ensure padding does not cause overflow
    }}>
      <Tabs value={activeTab} onChange={handleChange} indicatorColor="none"  textColor='true' sx={{  padding:'5px',marginBottom: isMobile ? 1 : 0 , marginRight:'17.5%' , height: 'auto', background: '#F4F4F4', borderRadius: '12px', '& .Mui-selected': { background: '#E9E9E9', border: '1px solid #B5B5B5', borderRadius: '8px' } }}>
          <Tab label="Reservations" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1',  fontWeight:'600' }} />
          <Tab label="Issuable" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1',fontWeight:'600' }} />
          <Tab label="Purchases" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'600' }} />
      </Tabs>
      
    </Box>
  );
};

export default TopBarComponent;

