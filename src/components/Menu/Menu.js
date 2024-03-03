// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import InventoryIcon from '@mui/icons-material/Inventory2';
// import RecordIcon from '@mui/icons-material/Assessment';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
// import YourLogo from '../../utilities/dummy_assets/MBF_Logo.png'
// import { Typography } from '@mui/material';
// import mapitLogo from '../../utilities/dummy_assets/mapITlogo.png'

// const MenuComponent = () => {
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState();

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//     switch (newValue) {
//       case 0:
//         navigate('/dashboard');
//         break;
//       case 1:
//         navigate('/inventory');
//         break;
//       case 2:
//         navigate('/records');
//         break;
//       case 3:
//         navigate('/settings');
//         break; 
//       case 4:
//         navigate('/logout');
//         break;
//       default:
//         break;
//     }
//   };

//   const CustomTab = ({ label, icon }) => (
//     <Box sx={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       width: '80%',
//       padding: '10px 16px',
//       borderRadius: '10px',
//       backgroundColor: selectedTab === label ? 'white' : 'transparent',
//       color: selectedTab === label ? 'black' : 'white',
//       '&:hover': {
//         backgroundColor: 'white',
//         color: 'black',
//       }
//     }}>
//       <Typography 
//       variant="body1" 
//       style={{
//         fontFamily: 'Roboto, sans-serif',
//         fontSize: '20px',
//         fontWeight: 400,
//         letterSpacing: '0em',
//         textAlign: 'left'
//       }}
//     >
//       {label}
//     </Typography>
//       <Box sx={{ '.MuiSvgIcon-root': { fill: selectedTab === label ? 'black' : 'white' } }}>
//         {icon}
//       </Box>
//     </Box>
//   );

//   return (
//     <Box sx={{
//       width : '100%',
//       height: '100vh',
//       backgroundColor: '#212121',
//     }}>
//       <Box sx={{ padding: '10px' , marginInline:'1rem', marginBottom:'3rem' }}>
//         <img src={YourLogo}></img>
//       </Box>

//       <Tabs
//         orientation="vertical"
//         value={selectedTab}
//         onChange={handleTabChange}
//         sx={{
//           '& .MuiTab-root': {
//             alignItems: 'flex-start',
//             justifyContent: 'flex-start',
//             textTransform: 'none',
//             margin: '6px 6px',
//             padding: '4px', // No padding here, it's set on the custom tab
//           },
//           '& .MuiTabs-flexContainer': {
//             flexDirection: 'column',
//           },
//         }}
//       >
//         <Tab label={<CustomTab label="Dashboard" icon={<DashboardIcon />} />} />
//         <Tab label={<CustomTab label="Inventory" icon={<InventoryIcon />} />} />
//         <Tab label={<CustomTab label="Records" icon={<RecordIcon />} />} />
//         <Tab label={<CustomTab label="Settings" icon={<SettingsIcon />} />} />
//         <Tab label={<CustomTab label="Logout" icon={<LogoutIcon />} />} />
//       </Tabs>
//       <Box sx={{
//           display:'flex',
//           flexDirection:'column',
//           alignItems:'center',
//           gap:'8px',
//           position:'absolute',
//           bottom: '20px',
//           left: '50px',
//         }}>
//         <Typography sx={{
//           color: '#FFF',
//           fontFamily:'Roboto',
//           fontSize: '24px',
//           fontStyle: 'normal',
//           fontWeight: '400',
//           lineHeight: 'normal'
//         }}>Powered By</Typography>
//         <Box sx={{width:'154px', height:'67.242px', display:'flex'}}>
//           <img src={mapitLogo}></img>
//           <Typography sx={{
//             color: 'var(--Primary-white, #FFF)',
//             fontFamily: 'Times New Roman',
//             fontSize: '21.495px',
//             fontStyle: 'normal',
//             fontWeight: 400,
//             lineHeight: 'normal',
//             marginTop:'40px',
//             marginLeft:'1px',
//           }}>mapit.ai</Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
  
//   export default MenuComponent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory2';
import RecordIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import mapitLogo from '../../utilities/dummy_assets/mapITlogo.png'
import YourLogo from '../../utilities/dummy_assets/MBF_Logo.png'
import smallLogo from '../../utilities/dummy_assets/MBF_Logo_2020 1.png'
import expandRight from '../../utilities/dummy_assets/Expand_left_double.png'
import expandLeft from '../../utilities/dummy_assets/Expand_left_double (1).png'

const MenuComponent = ({collapsed, setCollapsed}) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        navigate('/dashboard');
        break;
      case 1:
        navigate('/inventory');
        break;
      case 2:
        navigate('/records');
        break;
      case 3:
        navigate('/settings');
        break;
      case 4:
        navigate('/login');
        break;
      default:
        break;
    }
  };

  const CustomTab = ({ label, icon }) => (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: collapsed ? '38%':'80%',
      padding: '10px 16px',
      borderRadius: '10px',
      backgroundColor: selectedTab === label ? 'white' : 'transparent',
      color: selectedTab === label ? 'black' : 'white',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
      }
    }}>
      {!collapsed && (
        <Typography
          variant="body1"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            letterSpacing: '0em',
            textAlign: 'left'
          }}
        >
          {label}
        </Typography>
      )}
      <Box sx={{ '.MuiSvgIcon-root': { fill: selectedTab === label ? 'black' : 'white' } }}>
        {icon}
      </Box>
    </Box>
  );

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#212121',
      transition: 'width 0.3s',
    }}>
      <Box
        onClick={() => setCollapsed(!collapsed)}
        sx={{
          padding: '5px',
          display: 'flex',
          width: '24px',
          height: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          marginLeft: collapsed ? '38%' : '80%',
        }}
      >
      {collapsed ? <img src={expandRight}/> : <img src={expandLeft} />}
      </Box>
      <Box sx={{ padding: '10px', marginInline: '1rem', marginBottom: '3rem' }}>
        {collapsed ? (<img src={smallLogo} alt="small Logo" />):(<img src={YourLogo} alt="Your Logo"  />)}
      </Box>

      <Tabs
        orientation="vertical"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{
          '& .MuiTab-root': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            textTransform: 'none',
            margin: '6px 6px',
            marginLeft: collapsed?'20%': '0%',
            padding: '4px', // No padding here, it's set on the custom tab
          },
          '& .MuiTabs-flexContainer': {
            flexDirection: 'column',
          },
        }}
      >
        <Tab label={<CustomTab label="Dashboard" icon={<DashboardIcon />} />} />
        <Tab label={<CustomTab label="Inventory" icon={<InventoryIcon />} />} />
        <Tab label={<CustomTab label="Records" icon={<RecordIcon />} />} />
        <Tab label={<CustomTab label="Settings" icon={<SettingsIcon />} />} />
        <Tab label={<CustomTab label="Logout" icon={<LogoutIcon />} />} />
      </Tabs>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop:'80px'
      }}>
        {!collapsed &&(<Typography sx={{
          color: '#FFF',
          fontFamily: 'Roboto',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal'
        }}>Powered By</Typography>)}
        <Box sx={{ width: '154px', height: '67.242px', display: 'flex', marginLeft: collapsed ? '70%': '0%'}}>
          <img src={mapitLogo} alt="MapIT Logo" />
          {!collapsed && (
            <Typography sx={{
              color: 'var(--Primary-white, #FFF)',
              fontFamily: 'Times New Roman',
              fontSize: '21.495px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              marginTop: '40px',
              marginLeft: '1px',
            }}>mapit.ai</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MenuComponent;
