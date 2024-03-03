
import React from "react";
import { Box, Typography } from "@mui/material";
import sideimage from '../../utilities/dummy_assets/commonlogin.png'
import { useNavigate } from "react-router-dom";
import googleIcon from '../../utilities/dummy_assets/logos_google-icon.png'
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

const CommonLoginPage = () => {
    const navigate = useNavigate();

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
                
                <Box sx={{
                     display: 'flex',
                     padding: '1.5rem',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: '1.5rem',
                     borderRadius: '1rem',
                     background: '#FFF',
                     height:'auto',
                     width:'25.2rem',
                     margin:'auto', 
                     marginTop:'10rem'
                }}>
                    <Typography sx={{
                        color: 'var(--Primary-Primary01, #212121)',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '1.75rem',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        letterSpacing: ' -0.02475rem',
                    }}>Get Started</Typography>
                    <Box sx={{
                        display: 'flex',
                        height: '2rem',
                        padding: '1rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        alignSelf: 'stretch',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--Primary-Primary01, #212121)',
                        background: 'var(--Primary-white, #FFF)',
                        boxShadow: '4px 4px 16px 0px rgba(0, 0, 0, 0.10)',
                    }}>
                        <img src={googleIcon}/>
                        <Typography sx={
                            {color: 'var(--Primary-Primary01, #212121)',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: 'normal',
                            letterSpacing: '-0.01375rem'
                            }}>Continue with Google</Typography>
                    </Box>
                    <Box sx={boxStyle} onClick={()=>alert('This feature is not availabe right now')}><Typography sx={typographyStyle}>Guest Login</Typography></Box>
                    <Box sx={boxStyle} onClick={()=>alert('This feature is not availabe right now')}><Typography sx={typographyStyle}>Login as student</Typography></Box>
                    <Box sx={boxStyle} onClick={()=>navigate('/adminlogin')}><Typography sx={typographyStyle}>Login as admin</Typography></Box>
                    <Typography sx={{
                        color: 'var(--Primary-Primary01, #212121)',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '1.25rem',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        letterSpacing: '-0.01375rem',
                        margin:'auto',
                        marginTop:'0px'
                    }}>Don’t have an account? <span onClick={()=>navigate('/register')} style={{color: 'var(--Accent-Accent-01, #0062CC)', cursor:'pointer'}}>Register here</span></Typography>
                </Box>
            </Box>
        </Box>

    );
};
export default CommonLoginPage