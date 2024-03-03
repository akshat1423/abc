import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserCard = ({name ,role , memberOf}) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      borderRadius: '16px', 
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
      textAlign: 'center',
      padding: '1rem'
    }}>
      <Avatar sx={{
        width: 56, 
        height: 56, 
        bgcolor: 'black', 
        margin: 'auto'
      }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Member of:{memberOf}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
