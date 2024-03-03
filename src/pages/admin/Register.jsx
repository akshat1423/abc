// import React from 'react';
// import { Box, Container } from '@mui/material';
// import background from '../../utilities/dummy_assets/background.png'
// import logo from '../../utilities/dummy_assets/logo.png'

// //TODO: Sizing Issue
// const RegisterPage = () => {
//   return (
//     <>
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         backgroundImage: `url(${background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Position the HeaderToggle at the top right, overlaying other content */}
//       <Box sx={{
//         position: 'fixed',
//         top: 0, // Align to the top
//         right: 40, // Align to the right
//         zIndex: 1201, // Make sure it's above other content
//       }}>
//         <HeaderToggle />
//       </Box>

//       <Box sx={{
//           position: 'fixed',
//           top: 16, // Adjust the value to match the image's position
//           left: 16, // Adjust the value to match the image's position
//           zIndex: 1201, // Ensures the logo is above other content
//         }}>
//           <img src={logo} alt="Logo" />
//         </Box>

//       {/* Main content of the page, laid out with flex */}
//       <Box sx={{ display: 'flex', height: '100vh' }}>
//         <Container sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//           <RegistrationForm />
//         </Container>
//       </Box>
//       </Box>
//     </>
//   );
// };

// export default RegisterPage;



import React, { useState } from "react";
import { Box, Typography, Container, useMediaQuery, useTheme } from "@mui/material";
import sideimage from '../../utilities/dummy_assets/commonlogin.png'
import mapitLoginLogo from '../../utilities/dummy_assets/mapitLoginLogo.png'
import YourLogo from '../../utilities/dummy_assets/MBF_Logo.png'
import smallLogo from '../../utilities/dummy_assets/MBF_Logo_2020 1.png'
import rectanleImg from '../../utilities/dummy_assets/Rectangle 4165.png'
import { useNavigate } from "react-router-dom";
import {ListItem, ListItemText, List} from "@mui/material";
import googleIcon from '../../utilities/dummy_assets/logos_google-icon.png'
import AdminRegistrationForm from '../../components/admin/register/AdminRegistrationForm';
import {Tabs, Tab} from '@mui/material';
import StudentRegistrationForm from "../../components/admin/register/StudentRegistrationForm";
import SideBarComponent from "../../components/admin/login/SideBar";
const typographyStyle = {
    color: 'var(--Primary-Primary01, #212121)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.01375rem',
};
const boxStyle = {
    display: 'flex',  
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    alignSelf: 'stretch',
    borderRadius: '0.75rem',
    border: '1px solid var(--Accent-Accent-00, #007BFF)',
    cursor: 'pointer'
};

const RegisterPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeTab, setActiveTab] = useState(0);
    const handleChange = (event, newValue) => {
      setActiveTab(newValue);
    };
    const renderRegisterForm = () => {
      switch (activeTab) {
        case 0:
          return <AdminRegistrationForm/>;
        case 1:
          return <StudentRegistrationForm/>
        default:
          return null;
      }
    }

    return(
        <Box sx={{display:'flex'}}>
            <SideBarComponent/>
            <Box  sx={{
                width:'100%', 
                backgroundImage: `url(${sideimage})`, 
                backgroundSize: 'cover',     // Set background size to cover
                backgroundRepeat: 'no-repeat',
                flexDirection: 'column',
                justifyContent:'center',
                alignItems: 'center',
                }}>
                
                <Box sx={{ display: 'flex', height: '100vh' }}>
                  <Container sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Tabs value={activeTab} onChange={handleChange} indicatorColor="none" textColor='true' sx={{ width: '27%', marginInline:'6%', marginBottom: isMobile ? 1 : 0 , height: 'auto', border: '1px solid black', borderRadius: '8px', '& .Mui-selected': {background: 'black', color: '#ffffff' } }}>
                        <Tab label="Admin" sx={{color:'black',  padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'bold'}} />
                        <Tab disabled='true' label="Student"  sx={{color: 'black', padding: '8px 32px', width: 'auto', height: '44px', typography: 'body1', fontWeight:'bold' }} />
                    </Tabs>
                    {renderRegisterForm()}
                  </Container>
                </Box>
            </Box>
        </Box>

    );
};
export default RegisterPage