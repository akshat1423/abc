import { Box, Typography } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'
import NotificationContainer from './NotificationsContainer'
import { useState } from 'react'
import PrivacyContainer from './PrivacyContainer'
import ManagementContainer from './ManagementContainer'

const SettingsContainer = () => {

  const [activeTab, setActiveTab] = useState(0);

  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <NotificationContainer />;
      case 1:
        return <PrivacyContainer />;
      case 2:
        return <ManagementContainer/>
      default:
        return null;
    }
  };

  return (
    <>
    <Box sx={{margin:'1rem'}}>
     <Typography
      variant="h2" // You might need to adjust this for the right size
      sx={{
        fontFamily: 'Roboto',
        fontSize: '40px',
        fontWeight: '400',
        lineHeight: '47px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#212121',
      }}
    >
        Settings
    </Typography>
    <Box sx={{marginTop : '1rem'}}>
    <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </Box>
      {renderPage()}
    </Box>
    

      
    </>
  )
}

export default SettingsContainer
