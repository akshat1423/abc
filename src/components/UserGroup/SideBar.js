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

const SideBar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { text: 'Genral', path: '/usergeneral' },
    { text: 'User', path: '/useruser' },
    { text: 'Permissions', path: '/userpermissions' },
    { text: 'Groups', path: '/usergroups' },
  ];

  const handleListItemClick = (path) => {
    // If you're using React Router
    navigate(path);
  };
  return (
    <Box sx={{
      width: '250px',
      height: '73.5vh',
      backgroundColor: '#D3D6DA',
      color: 'black',
      '.MuiListItemIcon-root': { // This targets all ListItemIcon components inside the Box
        color: 'black', // Set the color for icons
      },
      // Add other styles as needed
    }}>
      <Divider />
      <List>
    
      {menuItems.map((item) => (
        <ListItem
        // TODO: Deprecation Warning 
          button 
          key={item.text}
          onClick={() => handleListItemClick(item.path)} // Update this line to handle click
          sx={{ backgroundColor: '#D3D6DA', margin: 'auto', '&:hover': { backgroundColor: 'white', borderRadius : '10px' , color : "black"} }} // Add styling
        >
          <ListItemText primary={item.text} />
          <ListItemIcon>{item.icon}</ListItemIcon>
          
        </ListItem>
      ))}
    </List>
    </Box>
  );
};

export default SideBar;
