import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Switch, Box } from '@mui/material';

const PrivacyContainer = () => {
  const [state, setState] = React.useState({
    location: true,
    discoverability: false,
    profileAvatarVisibility: false,
    sound: true,
    // Add more request states as needed
  });

  const handleToggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Configuration for privacy settings and their respective secondary text
  const privacySettings = [
    { name: 'location', label: 'Location', secondaryText: 'Allow your location to be used for additional features' },
    { name: 'discoverability', label: 'Discoverability', secondaryText: 'Let others find your profile based on your email' },
    { name: 'profileAvatarVisibility', label: 'Profile Avatar visibility', secondaryText: 'Control who can see your profile avatar' },
    { name: 'sound', label: 'Sound', secondaryText: 'Enable or disable sounds for app notifications' },
    // Add more settings as needed
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 3, border: '1px #B5B5B5 solid', borderRadius: '12px', mt: '1rem', gap: '3rem' }}>
      <List>
        {privacySettings.map((setting) => (
          <ListItem key={setting.name}>
            <ListItemText
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
                  color: '#3F3F3F' // Corrected the color code
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

export default PrivacyContainer;
