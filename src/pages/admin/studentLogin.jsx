
import React from "react";
import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import sideimage from '../../utilities/dummy_assets/commonlogin.png'
import mapitLoginLogo from '../../utilities/dummy_assets/mapitLoginLogo.png'
import YourLogo from '../../utilities/dummy_assets/MBF_Logo.png'
import smallLogo from '../../utilities/dummy_assets/MBF_Logo_2020 1.png'
import rectanleImg from '../../utilities/dummy_assets/Rectangle 4165.png'
import { useNavigate } from "react-router-dom";
import {ListItem, ListItemText, List} from "@mui/material";
import expandleft from '../../utilities/dummy_assets/Expand_left.png'
import googleIcon from '../../utilities/dummy_assets/logos_google-icon.png'
import SideBarComponent from "../../components/admin/login/SideBar";

const typographyStyle = {
    color: 'var(--Primary-Primary03, #5C5C5C)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.0165rem'
};
const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '.6rem',
    alignSelf: 'stretch',
    
};
const styledTextfield = {
    display: 'flex',
    //height: '2rem',
    //padding: '1rem',
    //alignItems: 'center',
    gap: '0.2rem',
    alignSelf: 'stretch',
    borderRadius: '0.75rem',
    //border: '1px solid var(--Primary-Primary08, #B5B5B5)'
};

const StudentLoginPage = () => {
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
                     padding: '1rem',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: '0.75rem',
                     borderRadius: '2rem',
                     background: '#FFF',
                     boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.10)', 
                     margin: 'auto',
                     height:'auto',
                     width:'26rem',
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
                        padding: '1.5rem',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem',
                        borderRadius: '1rem',
                        background: '#FFF'
                    }}>
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
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '1.2rem',
                            alignSelf: 'stretch'
                        }}>
                            <Box sx={boxStyle}>
                                <Typography sx={typographyStyle}>Email Address</Typography>
                                <TextField sx={styledTextfield}  placeholder="enter email address"/>

                            </Box>
                            <Box sx={boxStyle}>
                                <Typography sx={typographyStyle}>Password</Typography>
                                <TextField sx={styledTextfield} placeholder="enter password"/>
                            </Box>
                            <Button sx={{
                                display: 'flex',
                                padding: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                alignSelf: 'stretch',
                                borderRadius: '0.75rem',
                                border: '1px solid var(--Primary-Primary01, #212121)',
                                background: 'var(--Accent-Accent-00, #007BFF)'
                            }}>
                                <Typography sx={{
                                color: 'var(--Primary-white, #FFF)',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '1.25rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: 'normal',
                                letterSpacing: '-0.01375rem'
                            }}>Login as Student</Typography>
                            
                            </Button>
                        </Box>
                        
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            alignSelf: 'stretch'
                        }}> 
                            <img src={expandleft} onClick={()=>navigate('/login')} 
                            style={{
                                cursor:'pointer'
                            }}/>
                            <Typography onClick={()=>navigate('/login')} sx={typographyStyle && {fontSize:'1rem', letterSpacing: '-0.01375rem', color:'var(--Accent-Accent-00, #007BFF)', marginRight:'50px', cursor:'pointer'}}>
                                Back
                            </Typography>
                            <Typography sx={typographyStyle && {fontSize:'1rem', letterSpacing: '-0.01375rem'}}>
                                Don’t have an account? <span onClick={()=>navigate('/register')} style={{color: 'var(--Accent-Accent-01, #0062CC)', cursor:'pointer'}}>Register here</span>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};
export default StudentLoginPage