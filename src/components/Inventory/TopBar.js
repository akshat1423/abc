import React, { useState } from 'react';
import { Box, Button, IconButton, Tabs, Tab, Typography, useMediaQuery, useTheme } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import  AddInventoryDialog  from "./Popups/AddInventory";
import { useRef } from 'react';

const TopBarComponent = ({ activeTab, setActiveTab }) => {
  const [isAddInventoryOpen, setAddInventoryOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleClick = () =>{
    alert('This feature is not available at the moment');
  }

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
      boxSizing: 'border-box', // Ensure padding does not cause overflow
    }}>
      <Tabs value={activeTab} onChange={handleChange} indicatorColor="none"  textColor='true' sx={{padding:'5px', width: 'auto', marginBottom: isMobile ? 1 : 0 , marginRight:'17.5%' , height: 'auto', background: '#F4F4F4', borderRadius: '12px', '& .Mui-selected': { background: '#E9E9E9', border: '1px solid #B5B5B5', borderRadius: '8px' } }}>
          <Tab label="Machines" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'600' }} />
          <Tab label="Equipment" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'600'  }} />
          <Tab label="Inventory" sx={{marginInline: '1rem' , padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'600'  }} />
      </Tabs>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: 2 }}>
      <IconButton sx={{ padding: '8px 16px', width: '136px', height: '44px', border: '1px solid #D3D3D3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}  onClick={handleClick} >
         <DownloadIcon />
          <Typography variant="subtitle1" sx={{fontWeight:400, fontSize: '24px', color: '#5C5C5C' }}>Import</Typography>
          {/* <input
            type="file"
            hidden
            ref={fileInputRef} // Reference for triggering click
          /> */}
         </IconButton>
         <Button variant="contained" onClick={() => setAddInventoryOpen(true) } sx={{display:'flex', flexDirection:'row', padding: '12px 16px', width: '250px', height: '48px', background: '#3F3F3F', borderRadius: '12px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', '&:hover': { backgroundColor: '#333' } }}>
          <AddCircleOutlineIcon />
           <Typography variant="subtitle1">Add Inventory</Typography>
         </Button>
      </Box>
      <AddInventoryDialog
        open={isAddInventoryOpen}
        onClose={() => setAddInventoryOpen(false)}
      />
    </Box>
  );
};

export default TopBarComponent;

