import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; 
import CreateGroupPopup from './Popup/CreateGroup';

const NavigationBar = ({ activeTab, setActiveTab }) => {
 
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);


  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px',
      gap: '48px',
      height: '64px',
      background: '#FFFFFF'
    }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="Navigation tabs"
        indicatorColor='none'
        textColor='true'
        sx={{
          '.MuiTabs-flexContainer': {
            gap: '12px',
          },
          '.MuiTab-root': {
            padding: '4px 12px',
            minHeight: '39px',
            flexDirection: 'row',
            alignItems: 'center',
            background: 'transparent',
            borderRadius: '12px',
            '&.Mui-selected': {
              background: '#212121',
              color: '#FFFFFF',
            },
          },
        }}
      >
        <Tab label="Request" sx={{typography:'body1'}}/>
        <Tab disabled='true' label="Permissions" sx={{typography:'body1'}}/>
        <Tab disabled='true' label="User" sx={{typography:'body1'}}/>
        <Tab disabled='true' label="Groups" sx={{typography:'body1'}}/>
      </Tabs>
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search...."
          InputProps={{
            startAdornment: <SearchIcon />,
            sx: {
              background: '#F4F4F4',
              border: '1px solid #B5B5B5',
              borderRadius: '12px',
              padding: '4px 16px',
            },
          }}
          sx={{
            width: '264px',
            height: '50px',
            '.MuiOutlinedInput-root': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleOpenPopup}
          sx={{
            background: '#007BFF',
            borderRadius: '12px',
            padding: '12px 12px',
            color: '#FFFFFF',
            textTransform: 'none',
            width: '150px',
            height: '47px',
            fontSize:'1.1rem',
            fontWeight:'bold',
            '&:hover': {
              background: '#0056b3',
            },
          }}
        >
          Create Group
        </Button>
      </Box>
      <CreateGroupPopup open={isPopupOpen} onClose={handleClosePopup} />
    </Box>
  );
};

export default NavigationBar;
