import React from 'react';
import { Box, Container } from '@mui/material';
import { HeaderToggle, LoginForm } from '../../components';
import background from '../../utilities/dummy_assets/background.png';
import loginImage from '../../utilities/dummy_assets/login_img.png'; // Ensure this path is correct

const AdminLogin = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 40,
          zIndex: 1201,
        }}
      >
        <HeaderToggle />
      </Box>

      {/* Main content of the page, laid out with flex */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Ensure the form and image are centered vertically
          justifyContent: 'center', // Ensure the content is centered horizontally
          height: '100%', // Fill the height of the viewport
          gap: 4, // Adds a gap between the form and the image
        }}
      >
        {/* Image container */}
        <Box
          component="img"
          src={loginImage}
          sx={{
            width: 'auto', // Adjust width as necessary
            height: 'auto', // Adjust height as necessary
            maxWidth: '50%', // Ensures the image is not too large
            maxHeight: '100vh', // Ensures the image does not overflow the viewport height
            marginInline:'3rem'
          }}
        />

        {/* Form container */}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 3, 
            maxWidth: 'md', // Adjust size of the form if necessary
          }}
        >
          <LoginForm />
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLogin;
