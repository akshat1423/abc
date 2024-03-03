import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Example icon
import PrivacyIcon from '@mui/icons-material/PrivacyTip'; // Replace with the actual privacy icon you have
import UserManagementIcon from '@mui/icons-material/SupervisorAccount'; // Example icon

const TopBar = ({ activeTab, setActiveTab }) => {

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: 'left', color: 'var(--Primary-Primary02, #3F3F3F)'  }}>
      <Tabs value={activeTab} onChange={handleChange} aria-label="icon label tabs example" indicatorColor='none' textColor='true'
        sx={{
          '.MuiTab-root': {
            padding: '10px 30px',
            minHeight: '39px',
            fontSize:'20px',
            
          },
          '& .Mui-selected':{border:'1px solid black', borderRadius:'10px'}
        }}
        >
        <Tab
          disabled='true'
          icon={<NotificationsIcon />}
          label="Notification"
          wrapped
          iconPosition="start"
          sx={{  textTransform: 'none', justifyContent: 'flex-start', padding:'10px'}}
        />
        {/* <Typography sx={{fontSize:'30px', padding:'0px 25px'}}>|</Typography> */}
        <Tab
          disabled='true'
          icon={<PrivacyIcon />} // Replace with your actual privacy icon
          label="Privacy"
          wrapped
          iconPosition="start"
          sx={{  textTransform: 'none', justifyContent: 'flex-start' }}
        />
        {/* <Typography sx={{fontSize:'30px', padding:'0px 25px'}}>|</Typography> */}
        <Tab
          icon={<UserManagementIcon />}
          label="User Management"
          wrapped
          iconPosition="start"
          sx={{  textTransform: 'none', justifyContent: 'flex-start' ,padding:'10px'}}
        />
      </Tabs>
    </Box>
  );
};

export default TopBar;

