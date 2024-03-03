import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory2';
import ReportIcon from '@mui/icons-material/Assessment';
import { Group } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// No need to import @mui/styles

// Replace this with the logo from your assets
import YourLogo from '../../utilities/dummy_assets/MBF_Logo.png';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Top = () => {

  return (
    <Box
    sx={{
      display: 'flex', // Set display to flex to use flexbox properties
      alignItems: 'center', // Vertically center the items in the box
      justifyContent: 'space-between', // Space between the items to push the button to the right
      width: '100%', // Box will take the full width of its container
      height: '20%', // Set the height of the box
      backgroundColor: '#D9D9D9', // Background color of the box
      color: 'black', // Text color inside the box
      '.MuiListItemIcon-root': { // This targets all ListItemIcon components inside the Box
        color: 'black', // Set the color for icons
      },
      // Add other styles as needed
    }}
  >
    <Button variant="contained" sx={{background:'#979797' , width:'20%' , height: '50px', font : 'Roboto', fontWeight: '400', color:'#3F3F3F', borderRadius:'0px', marginLeft: 'auto', mr:10}}>Create Group</Button> {/* The button */}
  </Box>
  
  );
};

export default Top;
