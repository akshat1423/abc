import React from 'react';
import { Grid, Box } from '@mui/material';
import UserCard from './UserCard'; 

const CardContainer = () => {
  // Dummy data for the example
  //TODO: Put all users dummy data in the dummy data folder
  const users = [
    { id: 1, name: 'User 1', role: 'Role 1', memberOf: 'Group 1' },
    { id: 2, name: 'User 2', role: 'Role 2', memberOf: 'Group 2' },
    { id: 3, name: 'User 3', role: 'Role 3', memberOf: 'Group 3' },
    { id: 1, name: 'User 1', role: 'Role 1', memberOf: 'Group 1' },
    { id: 2, name: 'User 2', role: 'Role 2', memberOf: 'Group 2' },
    { id: 3, name: 'User 3', role: 'Role 3', memberOf: 'Group 3' },
    
    
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Grid container spacing={4}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={4} >
            <UserCard
              name={user.name}
              role={user.role}
              memberOf={user.memberOf}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
