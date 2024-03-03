import React from "react";
import { Box, Typography } from "@mui/material";
import sideimage from '../../../utilities/dummy_assets/commonlogin.png'
import mapitLoginLogo from '../../../utilities/dummy_assets/mapitLoginLogo.png'
import YourLogo from '../../../utilities/dummy_assets/MBF_Logo.png'
import smallLogo from '../../../utilities/dummy_assets/MBF_Logo_2020 1.png'
import rectanleImg from '../../../utilities/dummy_assets/Rectangle 4165.png'
import { useNavigate } from "react-router-dom";
import {ListItem, ListItemText, List} from "@mui/material";




const SideBarComponent = () => {
 return(
    <Box sx={{
        width:'32.4375rem', 
        height:'64rem', flexShrink:0,
        background: "var(--Primary-Primary01, #212121)", 
        alignItems:'center', 
        justifyContent:'center', 
        margin:'auto'
        }}>
        <Box sx={{width: '10rem', height: '4.3125rem', padding:'15px'}}>
        <img src={YourLogo} alt="MBF Logo" />
        </Box>
        
        <Box sx={{
            display: 'inline-flex',
            height: '44.87094rem',
            // height:'40rem',
            padding: '1.5rem',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2.25rem',
            flexShrink: 0
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.75rem',
                alignSelf: 'stretch'
            }}>
                <Typography sx={{
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '2.25rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    letterSpacing: '-0.02475rem'
                }}>Welcome to MIS</Typography>
                <Typography sx={{
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '1.25rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '-0.01375rem'
                }}>Join the future of Inventory Management</Typography>
            </Box>
            <Box>
                <img src={rectanleImg} alt="rectangle"/>
            </Box>
            <Box sx={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '1rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '-0.01375rem',
                alignSelf: 'stretch'
            }}>
                <Typography>
                    Welcome to MIS, where managing your inventory becomes simpler, faster, and more efficient. <span style={{color:'var(--Accent-Accent-06, #B2D7FF'}}>Sign up now and transform the way you handle your stock.</span>
                </Typography>

                <List sx={{ listStyleType: 'disc', paddingLeft: 1, listStylePosition: 'inside', color:'white' }}>
                <ListItem>
                    <ListItemText primary="Real-Time Tracking: Always stay updated with your inventory levels." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Efficient Organization: Sort and manage your items with ease." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Insightful Analytics: Make data-driven decisions with our comprehensive analytics tools." />
                </ListItem>
                </List>
            </Box>
        </Box>
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'flex-end',
            gap: '0.25rem',
            padding:'20px'
        }}>
            <Typography sx={{
                color: 'var(--Primary-white, #FFF)',
                fontFamily: 'Roboto',
                fontSize: '2rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
            }}>Powered by</Typography>
            <img src={mapitLoginLogo} alt="mapit.aiLogo"/>
        </Box>
    </Box>
 )
};
export default SideBarComponent;