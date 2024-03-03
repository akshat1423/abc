import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Switch, Typography, Box } from '@mui/material';

const NotificationContainer = () => {
  const [state, setState] = React.useState({
    desktopPushNotification: true,
    mobilePushNotification: false,
    emailNotification: false,
    SoundNotification: true,
    request1: true,
    request2: false,
    // Add more request states as needed
  });

  const handleToggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const notificationSettings = [
    { name: 'desktopPushNotification', label: 'Desktop push notification', secondaryText: 'Receive push notification on requests and mentions on your desktop' },
    { name: 'mobilePushNotification', label: 'Mobile push notification', secondaryText: 'Receive push notification on requests and mentions on your mobile device' },
    { name: 'emailNotification', label: 'Email notification', secondaryText: 'Receive email notifications for new messages and events' },
    { name: 'soundNotification', label: 'Sound', secondaryText: 'Play a sound for new notifications' },
    // Add more settings as needed
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3 , border:'1px #B5B5B5 solid ', borderRadius : '12px' , marginTop: '1rem', gap : "3rem"}}>
      <List>
        {/*TODO: Decouple label logic from state variable names. */}
        {notificationSettings.map((setting) => (
          <ListItem key={setting.name}>
          <ListItemText 
          sx={{color:'##3F3F3F'}}
            primary={setting.label}
            secondary={setting.secondaryText}
            primaryTypographyProps={{
                sx: {
                  fontFamily: 'Roboto',
                  fontSize: '1.5rem', // 24px in rem
                  fontWeight: '400',
                  lineHeight: '1.75rem', // 28px in rem
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color:'##3F3F3F'
                }
              }}
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={handleToggle}
              checked={state[setting.name]}
              name={setting.name}
            />
          </ListItemSecondaryAction>
        </ListItem>
        
        ))}
      </List>
    </Box>
  );
};

export default NotificationContainer;
