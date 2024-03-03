import React from 'react';
import { Grid, Box } from '@mui/material';
import SideBar from './SideBar';
import Top from './Top';
import GroupsCardContainer from './GroupsCardContainer';

const Groups = () => {
  return (
    <Box sx={{ flexGrow: 1 , height: 'auto' }}>
      {/* TopBar spans the full width */}
      <Top />

      {/* Main content grid starts here 
      TODO: No need to use Grid. Use Box. */}
      <Grid container spacing={2}>
        
        {/* Sidebar occupying 2 columns in a 12-column grid system */}
        <Grid item xs={2} sx={{ maxHeight: '100vh' }}> {/* 100vh is 100% of the viewport height */}
          <SideBar />
        </Grid>
        
        {/* CardContainer occupying the remaining 10 columns */}
        <Grid item xs={10}>
          <GroupsCardContainer />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Groups;
