import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeaderToggle = () => {
  const [alignment, setAlignment] = useState('register');
  const navigate = useNavigate();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      // Navigate based on the value of the new alignment
      if (newAlignment === 'register') {
        navigate('/register'); // Go to the root path for register
      } else if (newAlignment === 'login') {
        navigate('/login'); // Go to the login path
      }
    }
  };

  // Define styles for active and inactive states
  const activeStyle = {
    '&&': {
      bgcolor: '#212121',
      color: 'white',
      fontFamily: 'Inter',
      '&:hover': {
        bgcolor: '#0056b3',
      },
    },
  };
  
  const inactiveStyle = {
    '&&': {
      bgcolor: 'transparent',
      color: '#142b73',
      fontFamily: 'Inter',
      '&:hover': {
        bgcolor: '#e0e0e0',
      },
    },
  };
  

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      sx={{
        borderRadius: '5px',
        border: 'none',
        '& .MuiToggleButtonGroup-grouped': {
          border: 'none',
          borderRadius: '5px',
          '&:not(:first-of-type)': {
            borderRadius: '0px',
          },
          '&:first-of-type': {
            borderRadius: '5px',
          },
        },
      }}
    >
      <ToggleButton
        value="register"
        sx={alignment === 'register' ? activeStyle : inactiveStyle}
      >
        Register
      </ToggleButton>
      <ToggleButton
        value="login"
        sx={alignment === 'login' ? activeStyle : inactiveStyle}
      >
        Log In
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default HeaderToggle;
