import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

// Replace with your user's avatar image URL
const userAvatarUrl = 'path_to_user_avatar_image';

const NavBar = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/calender'); // Replace '/calendar' with your desired path
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tinkerer's Lab IIT Bombay
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary" sx={{ marginRight: '27px' }}>
            <NotificationAddIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit" sx={{ marginRight: '27px' }} onClick={handleNavigation}>
          <CalendarTodayIcon />
        </IconButton>

        <Avatar alt="User Avatar" src={userAvatarUrl} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
